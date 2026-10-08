import React, { createContext, useContext, useState } from 'react';

interface LogoContextType {
  logoUrl: string;
  updateLogo: (file: File) => Promise<void>;
  resetLogo: () => void;
}

const LogoContext = createContext<LogoContextType>({
  logoUrl: '/logo.png',
  updateLogo: async () => {},
  resetLogo: () => {},
});

export const LogoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logoUrl, setLogoUrl] = useState<string>(() => {
    try {
      return localStorage.getItem('salon_custom_logo') || '/logo.png';
    } catch {
      return '/logo.png';
    }
  });

  const updateLogo = async (file: File) => {
    // 1. Read as Data URL for instant rendering of the exact PNG file
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        const dataUrl = e.target.result as string;
        setLogoUrl(dataUrl);
        try {
          localStorage.setItem('salon_custom_logo', dataUrl);
        } catch {
          // ignore storage quota error
        }
      }
    };
    reader.readAsDataURL(file);

    // 2. Persist to server /api/upload-logo so it persists on disk
    try {
      await fetch('/api/upload-logo', {
        method: 'POST',
        body: file,
      });
    } catch (err) {
      console.error('Failed to upload logo to server', err);
    }
  };

  const resetLogo = () => {
    try {
      localStorage.removeItem('salon_custom_logo');
    } catch {
      // ignore
    }
    setLogoUrl('/logo.png');
  };

  return (
    <LogoContext.Provider value={{ logoUrl, updateLogo, resetLogo }}>
      {children}
    </LogoContext.Provider>
  );
};

export const useLogo = () => useContext(LogoContext);
