import { useState } from 'react';
import { SearchbarDropDown } from './SearchbarDropDown';

export default function Searchbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // # Todo - 로컬 스토리지 사용
  const suggestions = [
    '검색어1',
    '검색어2',
    '검색어3',
    '검색어4',
    '검색어1',
    '검색어2',
    '검색어3',
    '검색어4',
    '검색어1',
    '검색어2',
    '검색어3',
    '검색어4',
  ];

  return (
    <div
      className={` relative px-1 box-border flex h-full w-full text-xs xs:text-sm border-solid border-gray-300 border-2 rounded-md ${isDropdownOpen ? 'rounded-b-none ' : ''}`}
    >
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        className={`w-full h-full px-5 box-border border-solid border-transparent border-0 focus:outline-none  `}
        onBlur={() => {
          setTimeout(() => {
            setIsDropdownOpen(false);
          }, 100);
        }}
        onFocus={() => setIsDropdownOpen(true)}
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      {/* <button type="reset">X</button> */}
      <button
        type="submit"
        className={`h-full flex items-center justify-center w-1/12 `}
      >
        <img src="/icons/glass.svg" alt="glass" className="w-6" />
      </button>

      {isDropdownOpen && (
        <SearchbarDropDown
          searchQuery={searchQuery}
          suggestions={suggestions}
          onSuggestionSelect={(selectedSuggestion) => {
            setSearchQuery(selectedSuggestion);
          }}
          className="absolute box-border w-[calc(100%+4px)] px-5 py-5 top-full left-[-2px]  h-96  border-solid border-gray-300 border-x-2 border-b-2 rounded-b-md bg-white "
        />
      )}
    </div>
  );
}
