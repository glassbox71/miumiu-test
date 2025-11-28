import { create } from 'zustand';

// TODO 검색어 저장 관련
const LAST_SEARCH_KEY = 'lastSearchSessionState';

// TODO 세션 스토리지에서 데이터를 불러오기
const loadLastSearch = () => {
  try {
    const serializedState = sessionStorage.getItem(LAST_SEARCH_KEY);
    // 데이터가 없거나 유효하지 않으면 빈 배열 반환
    if (!serializedState) return [];

    // JSON.parse를 시도하고 실패하면 빈 배열 반환
    const storedData = JSON.parse(serializedState);
    return storedData || [];
  } catch (e) {
    console.error('Could not load state from sessionStorage', e);
    return [];
  }
};

// TODO 데이터를 세션 스토리지에 저장하기
const saveLastSearch = (lastSearchData) => {
  try {
    const serializedState = JSON.stringify(lastSearchData);
    sessionStorage.setItem(LAST_SEARCH_KEY, serializedState);
  } catch (e) {
    console.error('Could not save state to sessionStorage', e);
  }
};

//TODO 통합검색
export const useSearchState = create((set, get) => ({
  searchWord: '',
  lastSearch: loadLastSearch(),
  currentSearchQuery: '',
  setSearchWord: (word) => set({ searchWord: word }),

  executeSearch: (word) => {
    if (!word || word.trim() === '') return;
    const trimmedWord = word.trim();

    //TODO 중복 제거, 최신 우선, 9개 제한
    get().addLastSearch(trimmedWord);

    // TODO currentSearchQuery => 핵심 검색어
    set({ currentSearchQuery: trimmedWord });
  },

  // TODO 최신 항목 맨 앞으로, 9개 제한
  addLastSearch: (word) => {
    if (!word || word.trim() === '') return;
    const trimmedWord = word.trim();
    let { lastSearch } = get();

    // TODO 새 검색어
    lastSearch = lastSearch.filter((item) => item.word !== trimmedWord);

    const newSearch = {
      id: Date.now(),
      word: trimmedWord,
    };

    const newList = [newSearch, ...lastSearch];
    const limitedList = newList.slice(0, 9);

    //TODO 업데이트와 동시에 Session Storage에 저장
    set(() => {
      saveLastSearch(limitedList);
      return { lastSearch: limitedList };
    });
  },

  clearSearchWord: () => set({ searchWord: '' }),
  onSearchDelete: (id) => {
    const { lastSearch } = get();
    const updated = lastSearch.filter((word) => word.id !== id);
    set(() => {
      saveLastSearch(updated);
      return { lastSearch: updated };
    });
  },

  //TODO Zustand 업데이트 => 페이지 이동시 필요
  setCurrentSearchQuery: (query) => set({ currentSearchQuery: query }),

  //TODO 렌더링 위치 상태 설정
}));
