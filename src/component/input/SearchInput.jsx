import React from 'react';
import './scss/Input.scss';

//TODO 검색 input
const SearchInput = () => {
  return (
    <div className="search-input ">
      <input type="text" placeholder="검색어를 입력해주세요" />
      <button className="icon"></button>
    </div>
  );
};

export default SearchInput;
