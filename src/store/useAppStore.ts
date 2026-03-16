/**
 * SahajPath App Store — Web version
 * Uses localStorage instead of AsyncStorage.
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getTodayISO } from '../utils/dateHelpers';

interface AppState {
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;

  installDate: string;
  manualDayOverride: number | null;
  setDay: (day: number) => void;
  resetToNaturalDay: () => void;

  favoriteIds: string[];
  toggleFavorite: (teachingId: string) => void;

  viewedIds: string[];
  markViewed: (teachingId: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),

      installDate: getTodayISO(),
      manualDayOverride: null,
      setDay: (day) => set({ manualDayOverride: day }),
      resetToNaturalDay: () => set({ manualDayOverride: null }),

      favoriteIds: [],
      toggleFavorite: (teachingId) =>
        set((state) => ({
          favoriteIds: state.favoriteIds.includes(teachingId)
            ? state.favoriteIds.filter((id) => id !== teachingId)
            : [...state.favoriteIds, teachingId],
        })),

      viewedIds: [],
      markViewed: (teachingId) =>
        set((state) => ({
          viewedIds: state.viewedIds.includes(teachingId)
            ? state.viewedIds
            : [...state.viewedIds, teachingId],
        })),
    }),
    {
      name: 'sahajpath-store',
      partialize: (state) => ({
        language: state.language,
        installDate: state.installDate,
        manualDayOverride: state.manualDayOverride,
        favoriteIds: state.favoriteIds,
        viewedIds: state.viewedIds,
      }),
    }
  )
);
