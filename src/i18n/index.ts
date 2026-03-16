/**
 * SahajPath i18n
 *
 * Simple key-value translations for UI strings.
 * Teaching content is bilingual in the JSON itself.
 * This file handles only navigation and interface labels.
 */

const strings = {
  en: {
    // App
    appName: 'SahajPath',
    appNameHi: 'सहज पथ',
    tagline: 'The Natural Path',

    // Home
    dayOf: 'of',
    inSimpleWords: 'In simple words',
    forReflection: 'For reflection',
    shareOnWhatsApp: 'Share on WhatsApp',
    todaysTeaching: "Today's teaching",

    // Tabs
    tabToday: 'Today',
    tabMaxims: 'Maxims',
    tabPaths: 'Paths',
    tabExplore: 'Explore',

    // Maxims
    tenMaxims: 'Ten Maxims',
    maxim: 'Maxim',
    commentary: 'Commentary',
    dailyPractice: 'Daily practice',
    relatedTeachings: 'Related teachings',

    // Explore
    explore: 'Explore',
    favorites: 'Favorites',
    settings: 'Settings',
    concepts: 'Key concepts',
    search: 'Search teachings...',
    noFavorites: 'No favorites yet. Tap the star on any teaching to save it here.',

    // Day Picker
    chooseDayTitle: 'Jump to a day',
    chooseDayDescription: 'Reinstalled the app? Pick up where you left off.',
    goToDay: 'Go to Day',
    currentDay: 'Current day',
    resetToNatural: 'Reset to natural progression',

    // Settings
    language: 'Language',
    morningReminder: 'Morning reminder',
    reminderTime: 'Reminder time',
    about: 'About SahajPath',
    aboutDescription:
      'A family companion for the teachings of Babuji Maharaj (Shri Ram Chandra of Shahjahanpur). Built with love for our extended family.',

    // Sources
    source: 'Source',
  },
  hi: {
    appName: 'सहजपथ',
    appNameHi: 'सहज पथ',
    tagline: 'प्राकृतिक मार्ग',

    dayOf: 'में से',
    inSimpleWords: 'सरल शब्दों में',
    forReflection: 'चिंतन के लिए',
    shareOnWhatsApp: 'WhatsApp पर भेजें',
    todaysTeaching: 'आज की शिक्षा',

    tabToday: 'आज',
    tabMaxims: 'सिद्धांत',
    tabPaths: 'मार्ग',
    tabExplore: 'खोजें',

    tenMaxims: 'दस सिद्धांत',
    maxim: 'सिद्धांत',
    commentary: 'टीका',
    dailyPractice: 'दैनिक अभ्यास',
    relatedTeachings: 'संबंधित शिक्षाएँ',

    explore: 'खोजें',
    favorites: 'पसंदीदा',
    settings: 'सेटिंग्स',
    concepts: 'प्रमुख अवधारणाएँ',
    search: 'शिक्षाएँ खोजें...',
    noFavorites: 'अभी कोई पसंदीदा नहीं। किसी भी शिक्षा पर तारे को टैप करें।',

    chooseDayTitle: 'दिन चुनें',
    chooseDayDescription: 'ऐप पुनः इंस्टॉल किया? जहाँ छोड़ा था वहाँ से शुरू करें।',
    goToDay: 'दिन पर जाएँ',
    currentDay: 'वर्तमान दिन',
    resetToNatural: 'स्वाभाविक क्रम पर लौटें',

    language: 'भाषा',
    morningReminder: 'सुबह का अनुस्मारक',
    reminderTime: 'अनुस्मारक समय',
    about: 'सहजपथ के बारे में',
    aboutDescription:
      'बाबूजी महाराज (शहजहाँपुर के श्री राम चंद्र) की शिक्षाओं के लिए एक पारिवारिक साथी। हमारे विस्तारित परिवार के लिए प्रेम से बनाया गया।',

    source: 'स्रोत',
  },
} as const;

export type Language = 'en' | 'hi';
export type StringKey = keyof typeof strings.en;

/**
 * Get a translated string by key.
 */
export const t = (key: StringKey, lang: Language = 'en'): string => {
  return strings[lang][key] ?? strings.en[key] ?? key;
};

/**
 * Get a bilingual field from a content object.
 * Usage: localized(teaching, 'text', language) → teaching.text_en or teaching.text_hi
 */
export const localized = <T extends Record<string, any>>(
  obj: T,
  field: string,
  lang: Language
): string => {
  const key = `${field}_${lang}`;
  return (obj[key] as string) ?? (obj[`${field}_en`] as string) ?? '';
};
