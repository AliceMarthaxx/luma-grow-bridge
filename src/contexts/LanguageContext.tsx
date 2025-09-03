import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'sw' | 'fr' | 'ar';

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
  
  sw: {
    // Common - Swahili
    'welcome': 'Karibu Kwetu Hub',
    'language': 'Lugha',
    'online': 'Mtandaoni',
    'offline': 'Nje ya mtandao',
    'loading': 'Inapakia...',
    'error': 'Hitilafu',
    'success': 'Imefanikiwa',
    'cancel': 'Ghairi',
    'save': 'Hifadhi',
    'edit': 'Hariri',
    'delete': 'Futa',
    'search': 'Tafuta',
    'filter': 'Chuja',
    'apply': 'Omba',
    'close': 'Funga',
    
    // Navigation
    'home': 'Nyumbani',
    'jobs': 'Kazi',
    'skills': 'Ujuzi',
    'learning': 'Kujifunza',
    'mentorship': 'Ushauri',
    'profile': 'Wasifu',
    'activities': 'Shughuli',
    
    // Auth
    'signIn': 'Ingia',
    'signUp': 'Jisajili',
    'signOut': 'Toka',
    'email': 'Barua pepe',
    'password': 'Nenosiri',
    'confirmPassword': 'Thibitisha Nenosiri',
    'fullName': 'Jina Kamili',
    'phoneNumber': 'Nambari ya Simu',
    'dateOfBirth': 'Tarehe ya Kuzaliwa',
    'preferredLanguage': 'Lugha Unayopendelea',
    'userType': 'Aina ya Mtumiaji',
    'youth': 'Kijana',
    'mentor': 'Mshauri',
    'organization': 'Shirika',
    
    // Jobs
    'jobOpportunities': 'Fursa za Kazi',
    'searchJobs': 'Tafuta kazi...',
    'allCategories': 'Makundi Yote',
    'allLocations': 'Maeneo Yote',
    'jobTitle': 'Kichwa cha Kazi',
    'company': 'Kampuni',
    'location': 'Mahali',
    'salary': 'Mshahara',
    'deadline': 'Muda wa Mwisho',
    'applyNow': 'Omba Sasa',
    'viewDetails': 'Ona Maelezo',
    'ongoing': 'Inaendelea',
    
    // Skills
    'skillsMarketplace': 'Soko la Ujuzi',
    'searchSkills': 'Tafuta ujuzi...',
    'digitalSkills': 'Ujuzi wa Kidijitali',
    'entrepreneurship': 'Ujasiriamali',
    'agriculture': 'Kilimo',
    'technicalSkills': 'Ujuzi wa Kiufundi',
    'hourlyRate': 'Kiwango cha Saa',
    'rating': 'Ukadiriaji',
    'reviews': 'Maoni',
    
    // Learning
    'learningHub': 'Kituo cha Kujifunza',
    'learningLanguage': 'Lugha ya Kujifunza',
    'allSubjects': 'Masomo Yote',
    'beginner': 'Mwanzo',
    'intermediate': 'Kati',
    'advanced': 'Juu',
    'minutes': 'dakika',
    'hours': 'masaa',
    'enrollNow': 'Jiandikishe Sasa',
    
    // ChatBot
    'chatbot.greeting': 'Hujambo! Niko hapa kukusaidia kujifunza kuhusu huduma za Kwetu Hub. Unaweza kuniuliza kuhusu fursa za kazi, maendeleo ya ujuzi, mipango ya ushauri, au huduma zingine zozote tunazotoa.',
    'chatbot.title': 'Msaidizi wa Kwetu',
    'chatbot.placeholder': 'Uliza kuhusu huduma zetu...',
    'chatbot.error': 'Imeshindwa kupata jibu. Tafadhali jaribu tena.',
    'chatbot.offline': 'Samahani, nina matatizo sasa hivi. Tafadhali jaribu kuuliza tena au chunguza huduma zetu kwa kutumia menyu ya urambazaji.',
  },
  
  fr: {
    // Common - French
    'welcome': 'Bienvenue à Kwetu Hub',
    'language': 'Langue',
    'online': 'En ligne',
    'offline': 'Hors ligne',
    'loading': 'Chargement...',
    'error': 'Erreur',
    'success': 'Succès',
    'cancel': 'Annuler',
    'save': 'Enregistrer',
    'edit': 'Modifier',
    'delete': 'Supprimer',
    'search': 'Rechercher',
    'filter': 'Filtrer',
    'apply': 'Postuler',
    'close': 'Fermer',
    
    // Navigation
    'home': 'Accueil',
    'jobs': 'Emplois',
    'skills': 'Compétences',
    'learning': 'Apprentissage',
    'mentorship': 'Mentorat',
    'profile': 'Profil',
    'activities': 'Activités',
    
    // Auth
    'signIn': 'Se connecter',
    'signUp': 'S\'inscrire',
    'signOut': 'Se déconnecter',
    'email': 'Email',
    'password': 'Mot de passe',
    'confirmPassword': 'Confirmer le mot de passe',
    'fullName': 'Nom complet',
    'phoneNumber': 'Numéro de téléphone',
    'dateOfBirth': 'Date de naissance',
    'preferredLanguage': 'Langue préférée',
    'userType': 'Type d\'utilisateur',
    'youth': 'Jeune',
    'mentor': 'Mentor',
    'organization': 'Organisation',
    
    // Jobs
    'jobOpportunities': 'Opportunités d\'emploi',
    'searchJobs': 'Rechercher des emplois...',
    'allCategories': 'Toutes les catégories',
    'allLocations': 'Tous les emplacements',
    'jobTitle': 'Titre du poste',
    'company': 'Entreprise',
    'location': 'Emplacement',
    'salary': 'Salaire',
    'deadline': 'Date limite',
    'applyNow': 'Postuler maintenant',
    'viewDetails': 'Voir les détails',
    'ongoing': 'En cours',
    
    // Skills
    'skillsMarketplace': 'Marché des compétences',
    'searchSkills': 'Rechercher des compétences...',
    'digitalSkills': 'Compétences numériques',
    'entrepreneurship': 'Entrepreneuriat',
    'agriculture': 'Agriculture',
    'technicalSkills': 'Compétences techniques',
    'hourlyRate': 'Tarif horaire',
    'rating': 'Évaluation',
    'reviews': 'Avis',
    
    // Learning
    'learningHub': 'Hub d\'apprentissage',
    'learningLanguage': 'Langue d\'apprentissage',
    'allSubjects': 'Tous les sujets',
    'beginner': 'Débutant',
    'intermediate': 'Intermédiaire',
    'advanced': 'Avancé',
    'minutes': 'minutes',
    'hours': 'heures',
    'enrollNow': 'S\'inscrire maintenant',
    
    // ChatBot
    'chatbot.greeting': 'Salut ! Je suis là pour vous aider à découvrir les services de Kwetu Hub. Vous pouvez me poser des questions sur les opportunités d\'emploi, le développement des compétences, les programmes de mentorat ou tout autre service que nous offrons.',
    'chatbot.title': 'Assistant Kwetu',
    'chatbot.placeholder': 'Posez des questions sur nos services...',
    'chatbot.error': 'Impossible d\'obtenir une réponse. Veuillez réessayer.',
    'chatbot.offline': 'Je suis désolé, j\'ai des difficultés en ce moment. Veuillez réessayer ou explorer nos services en utilisant le menu de navigation.',
  },
  
  ar: {
    // Common - Arabic
    'welcome': 'مرحباً بك في مركز كويتو',
    'language': 'اللغة',
    'online': 'متصل',
    'offline': 'غير متصل',
    'loading': 'جاري التحميل...',
    'error': 'خطأ',
    'success': 'نجح',
    'cancel': 'إلغاء',
    'save': 'حفظ',
    'edit': 'تعديل',
    'delete': 'حذف',
    'search': 'بحث',
    'filter': 'تصفية',
    'apply': 'تقديم',
    'close': 'إغلاق',
    
    // Navigation
    'home': 'الرئيسية',
    'jobs': 'الوظائف',
    'skills': 'المهارات',
    'learning': 'التعلم',
    'mentorship': 'الإرشاد',
    'profile': 'الملف الشخصي',
    'activities': 'الأنشطة',
    
    // Auth
    'signIn': 'تسجيل الدخول',
    'signUp': 'إنشاء حساب',
    'signOut': 'تسجيل الخروج',
    'email': 'البريد الإلكتروني',
    'password': 'كلمة المرور',
    'confirmPassword': 'تأكيد كلمة المرور',
    'fullName': 'الاسم الكامل',
    'phoneNumber': 'رقم الهاتف',
    'dateOfBirth': 'تاريخ الميلاد',
    'preferredLanguage': 'اللغة المفضلة',
    'userType': 'نوع المستخدم',
    'youth': 'شاب',
    'mentor': 'مرشد',
    'organization': 'منظمة',
    
    // Jobs
    'jobOpportunities': 'فرص العمل',
    'searchJobs': 'البحث عن وظائف...',
    'allCategories': 'جميع الفئات',
    'allLocations': 'جميع المواقع',
    'jobTitle': 'المسمى الوظيفي',
    'company': 'الشركة',
    'location': 'الموقع',
    'salary': 'الراتب',
    'deadline': 'الموعد النهائي',
    'applyNow': 'قدم الآن',
    'viewDetails': 'عرض التفاصيل',
    'ongoing': 'مستمر',
    
    // Skills
    'skillsMarketplace': 'سوق المهارات',
    'searchSkills': 'البحث عن مهارات...',
    'digitalSkills': 'المهارات الرقمية',
    'entrepreneurship': 'ريادة الأعمال',
    'agriculture': 'الزراعة',
    'technicalSkills': 'المهارات التقنية',
    'hourlyRate': 'الأجر بالساعة',
    'rating': 'التقييم',
    'reviews': 'المراجعات',
    
    // Learning
    'learningHub': 'مركز التعلم',
    'learningLanguage': 'لغة التعلم',
    'allSubjects': 'جميع المواد',
    'beginner': 'مبتدئ',
    'intermediate': 'متوسط',
    'advanced': 'متقدم',
    'minutes': 'دقائق',
    'hours': 'ساعات',
    'enrollNow': 'سجل الآن',
    
    // ChatBot
    'chatbot.greeting': 'مرحباً! أنا هنا لمساعدتك في التعرف على خدمات مركز كويتو. يمكنك أن تسألني عن فرص العمل، وتطوير المهارات، وبرامج الإرشاد، أو أي خدمات أخرى نقدمها.',
    'chatbot.title': 'مساعد كويتو',
    'chatbot.placeholder': 'اسأل عن خدماتنا...',
    'chatbot.error': 'فشل في الحصول على رد. يرجى المحاولة مرة أخرى.',
    'chatbot.offline': 'عذراً، أواجه مشاكل الآن. يرجى المحاولة مرة أخرى أو استكشاف خدماتنا باستخدام قائمة التنقل.',
  },
};

const languages = [
  { code: 'en' as Language, name: 'English', nativeName: 'English' },
  { code: 'sw' as Language, name: 'Swahili', nativeName: 'Kiswahili' },
  { code: 'fr' as Language, name: 'French', nativeName: 'Français' },
  { code: 'ar' as Language, name: 'Arabic', nativeName: 'العربية' },
];

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('preferredLanguage');
    return (stored as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('preferredLanguage', currentLanguage);
    document.documentElement.lang = currentLanguage;
    
    // Set RTL for Arabic
    if (currentLanguage === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
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