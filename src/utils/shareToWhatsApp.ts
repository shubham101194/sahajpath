/**
 * WhatsApp Share for Web
 * Opens wa.me with pre-formatted text.
 * Falls back to Web Share API if available, otherwise copies to clipboard.
 */

import type { Teaching } from './getDailyTeaching';

const bookNames: Record<string, { en: string; hi: string }> = {
  reality_at_dawn: { en: 'Reality at Dawn', hi: 'उषा काल का यथार्थ' },
  ten_maxims_commentary: { en: 'Commentary on Ten Maxims', hi: 'दस सिद्धांतों पर टीका' },
  efficacy_of_raja_yoga: { en: 'Efficacy of Raja Yoga', hi: 'राज योग की प्रभावकारिता' },
  towards_infinity: { en: 'Towards Infinity', hi: 'अनंत की ओर' },
  sahaj_marg_philosophy: { en: 'Sahaj Marg Philosophy', hi: 'सहज मार्ग दर्शन' },
  complete_works: { en: 'Complete Works', hi: 'संपूर्ण रचनाएँ' },
};

const formatTeaching = (teaching: Teaching, language: 'en' | 'hi'): string => {
  const text = language === 'hi' ? teaching.text_hi : teaching.text_en;
  const bookName = bookNames[teaching.source.book]?.[language] ?? teaching.source.book;
  const chapter = teaching.source.chapter ? ` — ${teaching.source.chapter}` : '';
  const reflection = language === 'hi' ? teaching.reflection_prompt_hi : teaching.reflection_prompt_en;

  return [
    `✦ ${text}`,
    '',
    `— Babuji Maharaj`,
    `   ${bookName}${chapter}`,
    '',
    `💭 ${reflection}`,
    '',
    `~ SahajPath (Day ${teaching.day})`,
  ].join('\n');
};

export const shareTeaching = async (teaching: Teaching, language: 'en' | 'hi'): Promise<void> => {
  const message = formatTeaching(teaching, language);

  // Try Web Share API first (works on mobile browsers)
  if (navigator.share) {
    try {
      await navigator.share({
        title: `SahajPath — Day ${teaching.day}`,
        text: message,
      });
      return;
    } catch {
      // User cancelled or API failed — fall through to WhatsApp link
    }
  }

  // Fall back to WhatsApp deep link
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/?text=${encoded}`, '_blank');
};
