import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'lg' | 'al';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  languages: { code: Language; name: string; nativeName: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Common
    'welcome': 'Welcome to Kwetu Hub',
    'language': 'Language',
    'online': 'Online',
    'offline': 'Offline',
    'loading': 'Loading...',
    'error': 'Error',
    'success': 'Success',
    'cancel': 'Cancel',
    'save': 'Save',
    'edit': 'Edit',
    'delete': 'Delete',
    'search': 'Search',
    'filter': 'Filter',
    'apply': 'Apply',
    'close': 'Close',
    
    // Navigation
    'home': 'Home',
    'jobs': 'Jobs',
    'skills': 'Skills',
    'learning': 'Learning',
    'mentorship': 'Mentorship',
    'profile': 'Profile',
    'activities': 'Activities',
    
    // Auth
    'signIn': 'Sign In',
    'signUp': 'Sign Up',
    'signOut': 'Sign Out',
    'email': 'Email',
    'password': 'Password',
    'confirmPassword': 'Confirm Password',
    'fullName': 'Full Name',
    'phoneNumber': 'Phone Number',
    'dateOfBirth': 'Date of Birth',
    'preferredLanguage': 'Preferred Language',
    'userType': 'User Type',
    'youth': 'Youth',
    'mentor': 'Mentor',
    'organization': 'Organization',
    
    // Jobs
    'jobOpportunities': 'Job Opportunities',
    'searchJobs': 'Search jobs...',
    'allCategories': 'All Categories',
    'allLocations': 'All Locations',
    'jobTitle': 'Job Title',
    'company': 'Company',
    'location': 'Location',
    'salary': 'Salary',
    'deadline': 'Deadline',
    'applyNow': 'Apply Now',
    'viewDetails': 'View Details',
    'ongoing': 'Ongoing',
    
    // Skills
    'skillsMarketplace': 'Skills Marketplace',
    'searchSkills': 'Search skills...',
    'digitalSkills': 'Digital Skills',
    'entrepreneurship': 'Entrepreneurship',
    'agriculture': 'Agriculture',
    'technicalSkills': 'Technical Skills',
    'hourlyRate': 'Hourly Rate',
    'rating': 'Rating',
    'reviews': 'Reviews',
    
    // Learning
    'learningHub': 'Learning Hub',
    'learningLanguage': 'Learning Language',
    'allSubjects': 'All Subjects',
    'beginner': 'Beginner',
    'intermediate': 'Intermediate',
    'advanced': 'Advanced',
    'minutes': 'minutes',
    'hours': 'hours',
    'enrollNow': 'Enroll Now',
    
    // ChatBot
    'chatbot.greeting': 'Hi! I\'m here to help you learn about Kwetu Hub\'s services. You can ask me about job opportunities, skills development, mentorship programs, or any other services we offer.',
    'chatbot.title': 'Kwetu Assistant',
    'chatbot.placeholder': 'Ask about our services...',
    'chatbot.error': 'Failed to get response. Please try again.',
    'chatbot.offline': 'I\'m sorry, I\'m having trouble right now. Please try asking again or explore our services using the navigation menu.',
  },
  
  lg: {
    // Common - Lugbara
    'welcome': 'Onyojo ku Kwetu Hub',
    'language': 'Arute',
    'online': 'Online',
    'offline': 'Offline',
    'loading': 'Ejikua...',
    'error': 'Opi',
    'success': 'Osikua',
    'cancel': 'Leku',
    'save': 'Oketa',
    'edit': 'Onyojo',
    'delete': 'Ofua',
    'search': 'Oriku',
    'filter': 'Otii',
    'apply': 'Ocuku',
    'close': 'Oluku',
    
    // Navigation
    'home': 'Oru',
    'jobs': 'Ti',
    'skills': 'Ma nga',
    'learning': 'Oyu',
    'mentorship': 'Onzi ka',
    'profile': 'Ama oyu',
    'activities': 'Ti alu',
    
    // Auth
    'signIn': 'Oyi ku',
    'signUp': 'Ocao ku',
    'signOut': 'Oya ku',
    'email': 'Email',
    'password': 'Liwo',
    'confirmPassword': 'Liwo vua',
    'fullName': 'Liyo ofe',
    'phoneNumber': 'Simu liyo',
    'dateOfBirth': 'Alu leoyo',
    'preferredLanguage': 'Arute ma andru',
    'userType': 'Onzi ma',
    'youth': 'Dria',
    'mentor': 'Onzi itu',
    'organization': 'Kumpuni',
    
    // Jobs
    'jobOpportunities': 'Ti andru',
    'searchJobs': 'Ti oriku...',
    'allCategories': 'Omi ofe',
    'allLocations': 'Oria ofe',
    'jobTitle': 'Ti liyo',
    'company': 'Kumpuni',
    'location': 'Oria',
    'salary': 'Ijo',
    'deadline': 'Alu ma',
    'applyNow': 'Ocuku nile',
    'viewDetails': 'Loa ma',
    'ongoing': 'Eti',
    
    // Skills
    'skillsMarketplace': 'Ma nga soko',
    'searchSkills': 'Ma nga oriku...',
    'digitalSkills': 'Ma nga digital',
    'entrepreneurship': 'Business',
    'agriculture': 'Liru',
    'technicalSkills': 'Ma nga technical',
    'hourlyRate': 'Saa kala ijo',
    'rating': 'Liru',
    'reviews': 'Andru ale',
    
    // Learning
    'learningHub': 'Oyu ki',
    'learningLanguage': 'Arute oyu',
    'allSubjects': 'Oyu ofe',
    'beginner': 'Oyua',
    'intermediate': 'Kati',
    'advanced': 'Alea',
    'minutes': 'dakika',
    'hours': 'saa',
    'enrollNow': 'Oyi nile',
    
    // ChatBot
    'chatbot.greeting': 'Oi! Ma ni ku onzi alea Kwetu Hub service ale. Ife eju onzi ti andru, ma nga loa, mentorship program, alu service andru ale ni toa.',
    'chatbot.title': 'Kwetu Onzi',
    'chatbot.placeholder': 'Service iru eju...',
    'chatbot.error': 'Response loa osua. Fa oyua alia.',
    'chatbot.offline': 'Ma sori, ma problems ni nile. Fa oyua alia alu service iru loa navigation menu nga.',
  },
  
  al: {
    // Common - Alur
    'welcome': 'Kop i Kwetu Hub',
    'language': 'Leb',
    'online': 'Online',
    'offline': 'Offline',
    'loading': 'Tye ka keto...',
    'error': 'Bal',
    'success': 'Olare',
    'cancel': 'Juki',
    'save': 'Gwoki',
    'edit': 'Loki',
    'delete': 'Kwanyi',
    'search': 'Manyi',
    'filter': 'Yeri',
    'apply': 'Caki',
    'close': 'Lori',
    
    // Navigation
    'home': 'Gang',
    'jobs': 'Tic',
    'skills': 'Ngec',
    'learning': 'Puonjo',
    'mentorship': 'Miyo ngec',
    'profile': 'Kit ma i woto',
    'activities': 'Tic ma kimito',
    
    // Auth
    'signIn': 'Donyo iye',
    'signUp': 'Coo nying',
    'signOut': 'Kat woko',
    'email': 'Email',
    'password': 'Mung',
    'confirmPassword': 'Meko mung',
    'fullName': 'Nying duto',
    'phoneNumber': 'Namba cimo',
    'dateOfBirth': 'Nino ma ki nywolo iye',
    'preferredLanguage': 'Leb ma imaro',
    'userType': 'Kit dano',
    'youth': 'Latyen',
    'mentor': 'Lapuonyo',
    'organization': 'Kumpuni',
    
    // Jobs
    'jobOpportunities': 'Yoo tic',
    'searchJobs': 'Manyi tic...',
    'allCategories': 'Kit duto',
    'allLocations': 'Kabedo duto',
    'jobTitle': 'Nying tic',
    'company': 'Kumpuni',
    'location': 'Kabedo',
    'salary': 'Cul',
    'deadline': 'Kare ma ogik',
    'applyNow': 'Cak kombedi',
    'viewDetails': 'Nen ma iye',
    'ongoing': 'Tye ka mede',
    
    // Skills
    'skillsMarketplace': 'Cuk ngec',
    'searchSkills': 'Manyi ngec...',
    'digitalSkills': 'Ngec me kompyuta',
    'entrepreneurship': 'Ocuny',
    'agriculture': 'Pur',
    'technicalSkills': 'Ngec me teknik',
    'hourlyRate': 'Cul me cawa',
    'rating': 'Kwan',
    'reviews': 'Tam',
    
    // Learning
    'learningHub': 'Kabedo me puonjo',
    'learningLanguage': 'Leb me puonjo',
    'allSubjects': 'Jami me puonjo duto',
    'beginner': 'Ma cako',
    'intermediate': 'Ma dye i kingi',
    'advanced': 'Ma tye malo',
    'minutes': 'dakika',
    'hours': 'cawa',
    'enrollNow': 'Donyo kombedi',
    
    // ChatBot
    'chatbot.greeting': 'Ber! An tye ka konyi me nongo ngec i kom jami ma Kwetu Hub timo. I rwom penjo ikom yoo tic, donyo ngec, purogram me miyo ngec, onyo jami mukene ma wa timo.',
    'chatbot.title': 'Lakony Kwetu',
    'chatbot.placeholder': 'Penj ikom jami matimo...',
    'chatbot.error': 'Pe onongo dwoko. Tem odoco.',
    'chatbot.offline': 'Kica, an tye ki peko kombedi. Tem penjo odoco onyo nen jami matimo ki menyu.',
  },
};

const languages = [
  { code: 'en' as Language, name: 'English', nativeName: 'English' },
  { code: 'lg' as Language, name: 'Lugbara', nativeName: 'Lugbara' },
  { code: 'al' as Language, name: 'Alur', nativeName: 'Alur' },
];

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('preferredLanguage');
    return (stored as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('preferredLanguage', currentLanguage);
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = 'ltr';
  }, [currentLanguage]);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key] || translations.en[key] || key;
  };

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
    languages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};