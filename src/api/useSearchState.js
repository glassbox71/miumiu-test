// import { create } from 'zustand';

// //TODO 검색 정보
// export const useSearchState = create((set, get) => ({
//   searchWord: '',
//   lastSearch: [],
//   currentSearchQuery: '',

//   setSearchWord: (word) => set({ searchWord: word }),

//   executeSearch: (word) => {
//     if (!word || word.trim() === '') return;
//     const trimmedWord = word.trim();
//     const { lastSearch } = get();

//     if (!lastSearch.some((item) => item.word === trimmedWord)) {
//       const newSearch = {
//         id: Date.now(),
//         word: trimmedWord,
//       };

//       set({
//         lastSearch: [...lastSearch, newSearch],
//         currentSearchQuery: trimmedWord,
//       });
//     } else {
//       set({ currentSearchQuery: trimmedWord });
//     }
//   },

//   addLastSearch: (word) => {
//     if (!word || word.trim() === '') return;
//     const { lastSearch } = get();
//     if (lastSearch.some((item) => item.word === word)) return;

//     const newSearch = {
//       id: Date.now(),
//       word: word,
//     };

//     set({ lastSearch: [...lastSearch, newSearch] });
//   },
//   clearSearchWord: () => set({ searchWord: '' }),
//   onSearchDelete: (id) => {
//     const { lastSearch } = get();
//     const updated = lastSearch.filter((word) => word.id !== id);
//     set({ lastSearch: updated });
//   },
//   setCurrentSearchQuery: (query) => set({ currentSearchQuery: query }),
// }));
