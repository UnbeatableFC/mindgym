import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type ContentCategory = 'Tech' | 'Business' | 'Art' | 'General';

interface PreferencesState {
  categories: ContentCategory[];
  setCategories: (cats: ContentCategory[]) => void;
  reset: () => void;
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      categories: [],
      setCategories: (cats) => set({ categories: cats }),
      reset: () => set({ categories: [] }),
    }),
    {
      name: 'user-preferences',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);