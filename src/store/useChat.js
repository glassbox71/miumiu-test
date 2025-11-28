import { create } from 'zustand';
import { getInitialMessages } from './data';

export const useChatStore = create((set) => ({
  // 상태
  isOpen: false,
  messages: [],
  inputValue: '',

  // 액션
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  closeChat: () => set({ isOpen: false }),

  addMessages: (newMessages) =>
    set((state) => ({
      messages: [...state.messages, ...newMessages],
    })),

  resetMessages: () => set({ messages: getInitialMessages() }),

  initializeMessages: () =>
    set((state) => {
      if (state.messages.length === 0) {
        return { messages: getInitialMessages() };
      }
      return state;
    }),

  setInputValue: (value) => set({ inputValue: value }),
  clearInput: () => set({ inputValue: '' }),
}));
