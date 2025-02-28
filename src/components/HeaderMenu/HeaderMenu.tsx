'use client';

import { MegaMenu } from './MegaMenu';
import { isMegaMenuOpenedAtom } from '@/stores/HeaderStore';
import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';

export default function HeaderMenu() {
  const [isMegaMenuOpened, setIsMegaMenuOpened] = useAtom(isMegaMenuOpenedAtom);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      setTimeout(() => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
          setIsMegaMenuOpened(false);
        }
      }, 0);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setIsMegaMenuOpened]);

  return (
    <div className="fixed flex w-screen mt-36 md:mt-24 border-solid border-b-2 border-gray-200 justify-center z-0">
      <div className="w-full md:px-8 lg:w-[1080px] h-16">
        {/* 카테고리 */}
        <div ref={menuRef} className="relative flex h-full">
          {isMegaMenuOpened && <MegaMenu />}
          <button
            className="flex h-full gap-2 border-solid border-r-2 md:border-x-2 px-4 border-gray-300 items-center w-40"
            onClick={() => {
              setIsMegaMenuOpened((prev) => !prev);
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
