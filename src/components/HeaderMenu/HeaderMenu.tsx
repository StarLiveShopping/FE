'use client';

import { useState } from 'react';
import { MegaMenu } from './MegaMenu';

export default function HeaderMenu() {
  const [isMegaMenuOpened, setIsMegaMenuOpened] = useState(false);

  return (
    <div className="fixed flex w-screen mt-36 md:mt-24 border-solid border-b-2 border-gray-200 justify-center z-0">
      <div className="w-full md:px-8 lg:w-[1080px] h-16">
        {/* 카테고리 */}
        <div className="relative flex h-full">
          {isMegaMenuOpened && <MegaMenu />}
          <button
            className="flex h-full gap-2 border-solid border-r-2 md:border-x-2 px-4 border-gray-300 items-center"
            onClick={() => {
              setIsMegaMenuOpened(true);
            }}
          >
            <img className="w-7" src="/icons/categoryMenu.svg" />
            <span className="text-xl font-bold">카테고리</span>
          </button>
        </div>
      </div>
    </div>
  );
}
