import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface SearchbarDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  suggestions: string[];
  searchQuery: string;
  onSuggestionSelect: (selectedSuggestion: string) => void;
}

function SuggestionDelBtn(props: React.HtmlHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="relative w-5 h-5 bg-transparent border-none cursor-pointer "
    >
      <span className="absolute top-1/2 left-1/2 w-4 h-[1px] bg-gray-300 rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
      <span className="absolute top-1/2 left-1/2 w-4 h-[1px] bg-gray-300 -rotate-45 -translate-x-1/2 -translate-y-1/2"></span>
    </button>
  );
}

export default function SearchbarDropdown({
  suggestions,
  searchQuery,
  onSuggestionSelect,
  className,
}: SearchbarDropdownProps) {
  return (
    <div className={clsx(className)}>
      <span className="font-bold text-[17px]">최근 검색어</span>
      <ul className="mt-5 flex flex-col h-[80%]">
        {suggestions.slice(0, 10).map((suggestion, idx) => {
          return (
            <li
              className="flex w-full  justify-between p-1 hover:bg-slate-100 hover:rounded-md "
              key={idx}
              onClick={() => {
                onSuggestionSelect(suggestion);
              }}
            >
              <span className="">{suggestion}</span>
              <SuggestionDelBtn />
            </li>
          );
        })}
      </ul>
      {/* # TODO 삭제 시 최근 검색어 로컬스토리지 or db 삭제 */}
      <button className="mt-5 block font-semibold text-gray-400">
        전체 삭제
      </button>
    </div>
  );
}
