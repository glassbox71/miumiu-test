import { create } from 'zustand';

export const useInputStory = create((set, get) => ({
  value: '',
  setValue: (val) => set({ value: val }),
}));
