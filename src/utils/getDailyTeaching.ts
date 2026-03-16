/**
 * SahajPath Teaching Lookup
 *
 * Retrieves teachings by day number or ID.
 * All data comes from the local JSON — no network calls.
 */

import teachingsData from '../content/teachings.json';

export interface TeachingSource {
  book: string;
  chapter?: string;
  page?: string;
}

export interface Teaching {
  id: string;
  day: number;
  text_en: string;
  text_hi: string;
  source: TeachingSource;
  simple_explanation_en: string;
  simple_explanation_hi: string;
  reflection_prompt_en: string;
  reflection_prompt_hi: string;
  related_maxim: number | null;
  related_concepts: string[];
  related_teachings: string[];
  theme: string;
  difficulty: 'newcomer' | 'practitioner' | 'deep';
  week_number: number;
  content_block: string;
}

const teachings: Teaching[] = teachingsData.teachings as Teaching[];

/**
 * Get teaching for a specific day number (1-365).
 * Returns null if day is out of range of available teachings.
 */
export const getTeachingByDay = (day: number): Teaching | null => {
  return teachings.find((t) => t.day === day) ?? null;
};

/**
 * Get teaching by its ID (e.g., "day-001").
 */
export const getTeachingById = (id: string): Teaching | null => {
  return teachings.find((t) => t.id === id) ?? null;
};

/**
 * Get all teachings (for search, filtering).
 */
export const getAllTeachings = (): Teaching[] => {
  return teachings;
};

/**
 * Get the total number of available teachings.
 */
export const getTotalTeachings = (): number => {
  return teachings.length;
};

/**
 * Get teachings related to a specific maxim number.
 */
export const getTeachingsByMaxim = (maximNumber: number): Teaching[] => {
  return teachings.filter((t) => t.related_maxim === maximNumber);
};

/**
 * Get teachings by theme.
 */
export const getTeachingsByTheme = (theme: string): Teaching[] => {
  return teachings.filter((t) => t.theme === theme);
};
