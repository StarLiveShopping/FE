'use client';
import { useState } from 'react';
import { RecentListSheet } from './RecentListSheet';
import { IconBox } from './IconBox';
import { Dropdown } from './Dropdown';
import { Searchbar } from './Searchbar';

export default function HeaderTop() {
  const [isSheetOpened, setIsSheetOpened] = useState<boolean>(false);
  const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false);

  const handleRecentList = (open: boolean) => {
    setIsSheetOpened(open);
  };

  const handleDropdown = (open: boolean) => {
    setIsDropdownOpened(open);
  };

  return (
    <div className="fixed top-0 left-0 flex w-screen justify-center border-b-2 z-10">
      {isSheetOpened && (
        <RecentListSheet
          isSheetOpened={isSheetOpened}
          setIsSheetOpened={setIsSheetOpened}
        />
      )}

      {/* 세로 */}
      <div
        className={`w-full flex-col items-center lg:w-[1080px] h-[144px] md:h-[96px]`}
      >
        {/* 480px 이하, 로고 */}
        <div className="flex w-full h-1/3 justify-center bg-red-100 md:hidden">
          <img src="/images/Logo.png" alt="Logo" />
        </div>
        {/* 헤더 */}
        <div className="flex w-full justify-between items-center px-0 header__wrapper h-2/3 md:h-full md:px-8">
          <div className="hidden w-24 h-auto md:block">
            <img src="/images/Logo.png" alt="Logo" />
          </div>

          <form
            className="flex justify-center items-center h-12 
        w-[calc(100%-100px)]
        md:w-[calc(100%-6rem-300px)]
        ml-4"
          >
            <Searchbar />
          </form>

          <div className="hidden md:block ">
            <ul className="list-none flex text-[0.7rem] ">
              <li>
                <IconBox imgSrc="/icons/cart.svg" name="장바구니" alt="cart" />
              </li>
              <li>
                <IconBox
                  imgSrc="/icons/avatar.svg"
                  name="마이페이지"
                  alt="my_page"
                />
              </li>
              <li>
                <IconBox
                  imgSrc="/icons/recentList.svg"
                  name="최근본쇼핑"
                  alt="recent_shopping"
                  onClick={() => {
                    handleRecentList(true);
                  }}
                />
              </li>
            </ul>
          </div>

          <div
            className="md:hidden"
            onClick={() => {
              handleDropdown(!isDropdownOpened);
            }}
          >
            <div className="relative">
              <IconBox imgSrc="/icons/menu.svg" alt="hamburger_menu" />
              {isDropdownOpened && (
                <Dropdown
                  isDropdownOpened={isDropdownOpened}
                  setIsDropdownOpened={setIsDropdownOpened}
                  setIsSheetOpened={setIsSheetOpened}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
