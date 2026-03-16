/**
 * SahajPath Date Helpers
 *
 * Manages the daily teaching cycle.
 * Day 1 starts when the user first opens the app.
 * After day 365, it wraps back to day 1.
 */

/**
 * Calculate the current teaching day based on install date.
 * Returns a number 1-365 (wraps after 365).
 */
export const getCurrentDay = (installDate: string): number => {
  const install = new Date(installDate);
  const now = new Date();

  // Reset both to midnight to count whole days
  install.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);

  const diffMs = now.getTime() - install.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  // Day 1 on install date, wraps after 365
  return (diffDays % 365) + 1;
};

/**
 * Get today's date formatted nicely for the header.
 * Returns "Monday, March 16"
 */
export const getFormattedDate = (locale: 'en' | 'hi' = 'en'): string => {
  const now = new Date();

  if (locale === 'hi') {
    const days = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'];
    const months = [
      'जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून',
      'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर',
    ];
    return `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]}`;
  }

  return now.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Get today's date as an ISO string (for install date storage).
 */
export const getTodayISO = (): string => {
  return new Date().toISOString().split('T')[0];
};
