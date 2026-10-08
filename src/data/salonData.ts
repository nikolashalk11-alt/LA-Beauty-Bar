export interface ServiceItem {
  id: string;
  name: string;
  category: 'manicure' | 'pedicure' | 'extensions' | 'nailart' | 'lashes_brows' | 'waxing';
  price: number;
  durationMinutes: number;
  description: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'clean' | 'french' | 'nailart' | 'pedicure' | 'bridal';
  imageUrl: string;
  description: string;
  duration: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
}

export const SALON_INFO = {
  name: 'L.A. Beauty Bar',
  city: 'Ιωάννινα (Ανατολή)',
  tagline: 'Premium Nail Care & Beauty Studio',
  address: 'Οδός Ιωαννίνων 16',
  postalCode: '452 22',
  area: 'Ανατολή, Ιωάννινα',
  phone: '+30 2651 067786',
  phoneLocal: '2651 067786',
  phoneClean: '+302651067786',
  instagram: 'l.a_beautybar_ioannina',
  instagramUrl: 'https://www.instagram.com',
  mapsQuery: 'L.A.+Beauty+Bar+Ioanninon+16+Anatoli+Ioannina',
  hours: [
    { day: 'Δευτέρα', hours: '09:00 - 17:00', open: 9, close: 17 },
    { day: 'Τρίτη', hours: '09:00 - 21:00', open: 9, close: 21 },
    { day: 'Τετάρτη', hours: '09:00 - 17:00', open: 9, close: 17 },
    { day: 'Πέμπτη', hours: '09:00 - 21:00', open: 9, close: 21 },
    { day: 'Παρασκευή', hours: '09:00 - 21:00', open: 9, close: 21 },
    { day: 'Σάββατο', hours: '09:00 - 17:00', open: 9, close: 17 },
    { day: 'Κυριακή', hours: 'Κλειστά', open: 0, close: 0 },
  ],
};

export const SERVICES: ServiceItem[] = [
  // Manicure
  {
    id: 'mani-express',
    name: 'Απλό Μανικιούρ & Θεραπεία',
    category: 'manicure',
    price: 15,
    durationMinutes: 35,
    description: 'Καθαρισμός επωνυχίων, σχηματισμός φυσικού νυχιού, ενυδατική μάσκα και εφαρμογή θεραπευτικού βερνικιού ενδυνάμωσης.',
  },
  {
    id: 'mani-semi',
    name: 'Ημιμόνιμο Μανικιούρ (Combi)',
    category: 'manicure',
    price: 20,
    durationMinutes: 50,
    description: 'Combi μανικιούρ με ρώσικη τεχνική για άψογο καθαρισμό, βάση ενίσχυσης rubber base και ημιμόνιμο χρώμα μακράς διάρκειας (3+ εβδομάδες).',
    popular: true,
  },
  {
    id: 'mani-strengthen',
    name: 'Ενίσχυση Φυσικού Νυχιού με Rubber / Acrylgel',
    category: 'manicure',
    price: 26,
    durationMinutes: 65,
    description: 'Ιδανικό για αδύναμα ή εύθραυστα νύχια. Δημιουργία φυσικής αρχιτεκτονικής καμπύλης (apex) για απόλυτη αντοχή χωρίς σπασίματα.',
    popular: true,
  },
  {
    id: 'mani-removal',
    name: 'Αφαίρεση Υλικού & Περιποίηση',
    category: 'manicure',
    price: 8,
    durationMinutes: 20,
    description: 'Απαλή και ασφαλής αφαίρεση ημιμόνιμου, τζελ ή ακρυλικού με τροχό χωρίς να τραυματιστεί η φυσική πλάκα του νυχιού.',
  },

  // Pedicure
  {
    id: 'pedi-express',
    name: 'Express Πεντικιούρ',
    category: 'pedicure',
    price: 20,
    durationMinutes: 40,
    description: 'Περιποίηση φτερνών, κόψιμο και σχηματισμός νυχιών, καθαρισμός επωνυχίων και απλό βερνίκι.',
  },
  {
    id: 'pedi-spa-semi',
    name: 'Spa Πεντικιούρ με Ημιμόνιμο',
    category: 'pedicure',
    price: 32,
    durationMinutes: 65,
    description: 'Πλήρες ποδόλουτρο με άλατα και αιθέρια έλαια, peeling, αφαίρεση σκληρύνσεων, combi πεντικιούρ, ημιμόνιμο χρώμα και χαλαρωτικό μασάζ.',
    popular: true,
  },
  {
    id: 'pedi-medical',
    name: 'Θεραπευτικό Πεντικιούρ (Σκληρύνσεις / Κάλοι)',
    category: 'pedicure',
    price: 38,
    durationMinutes: 70,
    description: 'Εξειδικευμένη αντιμετώπιση έντονων υπερκερατώσεων, ραγάδων στις πτέρνες, κάλων και είσφρυσης νυχιών με αποστειρωμένα ιατρικά εργαλεία.',
  },

  // Extensions / Artificial
  {
    id: 'ext-gel-new',
    name: 'Επιμήκυνση Νυχιών (Gel / Acrylgel)',
    category: 'extensions',
    price: 45,
    durationMinutes: 100,
    description: 'Επιμήκυνση με φόρμα για φυσικό ή extreme μήκος, τέλεια γεωμετρία (C-curve), ανθεκτικότητα και επιλογή μονοχρωμίας.',
    popular: true,
  },
  {
    id: 'ext-refill',
    name: 'Συντήρηση Τεχνητών (Refill)',
    category: 'extensions',
    price: 32,
    durationMinutes: 75,
    description: 'Αφαίρεση παλιού υλικού, επανατοποθέτηση gel/acrylgel, εξισορρόπηση apex, σχηματισμός και νέο χρώμα.',
    popular: true,
  },
  {
    id: 'ext-repair-single',
    name: 'Επιδιόρθωση 1 Νυχιού',
    category: 'extensions',
    price: 5,
    durationMinutes: 15,
    description: 'Επισκευή ή ανακατασκευή μεμονωμένου σπασμένου νυχιού.',
  },

  // Nail Art
  {
    id: 'art-french',
    name: 'French / Babyboomer / Ombré',
    category: 'nailart',
    price: 6,
    durationMinutes: 15,
    description: 'Κλασικό γαλλικό, micro french, gradient ombré ή soft babyboomer με σφουγγαράκι/αερογράφο.',
  },
  {
    id: 'art-chrome',
    name: 'Glazed Donut & Chrome Powder Effect',
    category: 'nailart',
    price: 5,
    durationMinutes: 10,
    description: 'Η διάσημη mirror λάμψη (Hailey Bieber glazed, pearl, holographic, rose gold).',
    popular: true,
  },
  {
    id: 'art-custom',
    name: 'Hand-Painted Custom Nail Art (ανά νύχι)',
    category: 'nailart',
    price: 4,
    durationMinutes: 15,
    description: 'Ζωγραφική στο χέρι, γραμμικά σχέδια, floral, abstract art, foil, strass Swarovski.',
  },

  // Lashes & Brows
  {
    id: 'lash-lift',
    name: 'Lash Lift & Βαφή Βλεφαρίδων',
    category: 'lashes_brows',
    price: 35,
    durationMinutes: 60,
    description: 'Φυσική ανόρθωση και καμπύλη στις δικές σας βλεφαρίδες με βαθιά κερατίνη και μαύρη βαφή για εφέ μάσκαρας που διαρκεί 6-8 εβδομάδες.',
    popular: true,
  },
  {
    id: 'brow-lift',
    name: 'Brow Lamination & Σχηματισμός / Βαφή',
    category: 'lashes_brows',
    price: 30,
    durationMinutes: 50,
    description: 'Τιθάσευση και ανόρθωση φρυδιών για γεμάτο, fluffy και καλοσχηματισμένο αποτέλεσμα με ημιμόνιμη βαφή.',
  },
  {
    id: 'lash-extensions-one-by-one',
    name: 'Lash Extensions One by One (Φυσικό)',
    category: 'lashes_brows',
    price: 50,
    durationMinutes: 90,
    description: 'Τοποθέτηση τρίχα-τρίχα με υποαλλεργική κόλλα για φυσικό βλέμμα και κομψό μήκος.',
  },

  // Waxing
  {
    id: 'wax-face',
    name: 'Αποτρίχωση Προσώπου (Μουστάκι / Φρύδια)',
    category: 'waxing',
    price: 10,
    durationMinutes: 20,
    description: 'Απαλή αποτρίχωση με ειδικό κερί ευαίσθητης επιδερμίδας και καθαρισμός με τσιμπιδάκι.',
  },
  {
    id: 'wax-legs',
    name: 'Αποτρίχωση Πόδια (Ολόκληρα)',
    category: 'waxing',
    price: 22,
    durationMinutes: 40,
    description: 'Αποτρίχωση με ζεστό κερί μίας χρήσης και καταπραϋντικό λάδι αλόης.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Glazed Donut Pearlescent Finish',
    category: 'clean',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=900&auto=format&fit=crop',
    description: 'Κομψή πέρλα σε γαλακτερή βάση με chrome powder υψηλής καθαρότητας.',
    duration: 'Διάρκεια 3+ εβδομάδες',
  },
  {
    id: 'gal-2',
    title: 'Classic Deep Bordeaux & Russian Manicure',
    category: 'clean',
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=900&auto=format&fit=crop',
    description: 'Βαθύ βουργουνδί με άψογη τεχνική combi και μηδενική απόσταση από το επωνύχιο.',
    duration: 'Διάρκεια 4 εβδομάδες',
  },
  {
    id: 'gal-3',
    title: 'Minimal Micro French & Rose Gold Detail',
    category: 'french',
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=900&auto=format&fit=crop',
    description: 'Εξαιρετικά λεπτή γραμμή γαλλικού σε nude rose βάση για διακριτική πολυτέλεια.',
    duration: 'Διάρκεια 3-4 εβδομάδες',
  },
  {
    id: 'gal-4',
    title: 'Soft Babyboomer with Shimmer Veil',
    category: 'french',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop',
    description: 'Απαλή ντεγκραντέ μετάβαση από το ροζ στο λευκό με ανεπαίσθητο ιριδισμό.',
    duration: 'Διάρκεια 4 εβδομάδες',
  },
  {
    id: 'gal-5',
    title: 'Abstract Hand-Painted Botanical Art',
    category: 'nailart',
    imageUrl: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=900&auto=format&fit=crop',
    description: 'Λεπτεπίλεπτα φύλλα και χρυσές λεπτομέρειες ζωγραφισμένα με λεπτό πινελάκι.',
    duration: 'Custom Design',
  },
  {
    id: 'gal-6',
    title: 'Luxury Gel Extensions Almond Shape',
    category: 'bridal',
    imageUrl: 'https://images.unsplash.com/photo-1583001809873-a128495da465?q=80&w=900&auto=format&fit=crop',
    description: 'Αμυγδαλωτή αρχιτεκτονική με gel, σχεδιασμένη ειδικά για νυφική εμφάνιση.',
    duration: 'Νυφικό Πακέτο',
  },
  {
    id: 'gal-7',
    title: 'Hydrating Luxury Spa Pedicure',
    category: 'pedicure',
    imageUrl: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=900&auto=format&fit=crop',
    description: 'Βαθιά ενυδάτωση, απομάκρυνση σκληρύνσεων και flawless ημιμόνιμο.',
    duration: 'Spa Relax',
  },
  {
    id: 'gal-8',
    title: 'Fluffy Brow Lamination & Lash Lift',
    category: 'clean',
    imageUrl: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=900&auto=format&fit=crop',
    description: 'Ανόρθωση βλεφαρίδων και φρυδιών για ξεκούραστο και εκφραστικό βλέμμα.',
    duration: '6-8 εβδομάδες',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Μαρίνα Κωνσταντίνου',
    rating: 5,
    date: 'Πριν 2 ημέρες',
    comment: 'Το καλύτερο studio νυχιών στα Ιωάννινα! Τα κορίτσια είναι απίστευτες επαγγελματίες, τα εργαλεία ανοίγονται πάντα μπροστά σου από αποστειρωμένα σακουλάκια και το ημιμόνιμο κρατάει πάνω από μήνα χωρίς ίχνος ξεφλουδίσματος!',
    service: 'Ημιμόνιμο Μανικιούρ Combi',
  },
  {
    id: 'rev-2',
    author: 'Έλενα Βασιλείου',
    rating: 5,
    date: 'Πριν 1 εβδομάδα',
    comment: 'Καταπληκτικός, καθαρός και μοντέρνος χώρος στην Ανατολή. Το πεντικιούρ είναι πραγματική εμπειρία χαλάρωσης, και βρίσκεις πάντα εύκολα πάρκινγκ ακριβώς έξω. Το συστήνω ανεπιφύλακτα!',
    service: 'Spa Πεντικιούρ με Ημιμόνιμο',
  },
  {
    id: 'rev-3',
    author: 'Χριστίνα Παπαδοπούλου',
    rating: 5,
    date: 'Πριν 2 εβδομάδες',
    comment: 'Έκανα επιμήκυνση με gel για τον γάμο μου. Ήταν ό,τι πιο φυσικό, λεπτό και ανθεκτικό έχω φορέσει ποτέ. Συγχαρητήρια στην ομάδα του L.A. Beauty Bar για τη λεπτομέρεια και τη διάθεση!',
    service: 'Επιμήκυνση με Gel & Nail Art',
  },
  {
    id: 'rev-4',
    author: 'Σοφία Μάνθου',
    rating: 5,
    date: 'Πριν 3 εβδομάδες',
    comment: 'Φοβερή δουλειά και στο lash lift! Δεν χρειάζομαι πια μάσκαρα το πρωί. Ευγενέστατο προσωπικό και απόλυτη συνέπεια στην ώρα του ραντεβού.',
    service: 'Lash Lift & Brow Lamination',
  },
];

export const FAQS = [
  {
    q: 'Πόσο καιρό διαρκεί το ημιμόνιμο μανικιούρ στο L.A. Beauty Bar;',
    a: 'Με την εξειδικευμένη τεχνική combi/russian manicure και τις premium βάσεις rubber που χρησιμοποιούμε, το αποτέλεσμα διατηρείται άψογο για 3 έως και 4 εβδομάδες, χωρίς να ξεφλουδίζει ή να θαμπώνει.',
  },
  {
    q: 'Πώς διασφαλίζεται η υγιεινή και η αποστείρωση;',
    a: 'Η υγεία σας είναι η απόλυτη προτεραιότητά μας. Όλα τα μεταλλικά εργαλεία καθαρίζονται με υπερήχους, απολυμαίνονται σε ειδικά διαλύματα και αποστειρώνονται σε ιατρικό κλίβανο ξηρής/υγρής θερμότητας. Σφραγίζονται σε ατομικά φακελάκια μιας χρήσης που ανοίγονται μπροστά σας. Λίμες και buffer είναι πάντα ατομικά.',
  },
  {
    q: 'Χρειάζεται να κλείσω ραντεβού εκ των προτέρων;',
    a: 'Ναι, συνιστούμε να προγραμματίζετε το ραντεβού σας 2-4 ημέρες νωρίτερα, ιδιαίτερα για απογευματινές ώρες και Σάββατα. Μπορείτε να κάνετε άμεση κράτηση online μέσω της ιστοσελίδας μας ή τηλεφωνικά στο 2651 067786.',
  },
  {
    q: 'Υπάρχει χώρος στάθμευσης (parking) κοντά στο κατάστημα;',
    a: 'Ναι! Το στούντιο βρίσκεται στην οδό Ιωαννίνων 16 στην Ανατολή Ιωαννίνων, μια περιοχή με εύκολη και άνετη πρόσβαση και δωρεάν διαθέσιμες θέσεις στάθμευσης ακριβώς μπροστά και στους γύρω δρόμους, χωρίς το άγχος του κέντρου.',
  },
  {
    q: 'Τι γίνεται αν έχω ήδη υλικό (gel ή ημιμόνιμο) από άλλο στούντιο;',
    a: 'Κανένα πρόβλημα! Επιλέξτε κατά το ραντεβού σας και την αφαίρεση υλικού ώστε να αφιερώσουμε τον απαραίτητο χρόνο για ασφαλή αφαίρεση με επαγγελματικό τροχό χωρίς να τραυματιστεί το φυσικό σας νύχι.',
  },
];
