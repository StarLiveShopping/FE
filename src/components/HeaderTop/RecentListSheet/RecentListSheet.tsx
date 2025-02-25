import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetBody,
} from '@/components/ui/sheet';
import React from 'react';
import { ItemCard } from '../ItemCard';
import { EditButton } from './EditButton';

interface RecentListSheetProps {
  isSheetOpened: boolean;
  setIsSheetOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RecentListSheet({
  isSheetOpened,
  setIsSheetOpened,
}: RecentListSheetProps) {
  return (
    <Sheet open={isSheetOpened} onOpenChange={setIsSheetOpened}>
      <SheetContent className="p-0 w-[460px] min-w-[460px]">
        <SheetHeader className="w-full justify-between pr-3">
          <SheetTitle className="text-base">최근본쇼핑</SheetTitle>
          <EditButton name="편집" className="text-sm"></EditButton>
        </SheetHeader>
        <SheetBody>
          <ul className="flex flex-col gap-5">
            <li>
              <ItemCard
                img={'asd'}
                price={'665,000'}
                title={
                  'LG 퓨리케어 오브제 에어로퍼니처 공기청정기 클레이브라운 [AS064PCBAR] LG 퓨리케어 오브제 에어로퍼니처 공기청정기 클레이브라운 [AS064PCBAR]'
                }
              />
            </li>
            <li>
              <ItemCard
                img={'asd'}
                price={'665,000'}
                title={
                  'LG 퓨리케어 오브제 에어로퍼니처 공기청정기 클레이브라운 [AS064PCBAR] LG 퓨리케어 오브제 에어로퍼니처 공기청정기 클레이브라운 [AS064PCBAR]'
                }
              />
            </li>
          </ul>
        </SheetBody>
      </SheetContent>
    </Sheet>
  );
}
