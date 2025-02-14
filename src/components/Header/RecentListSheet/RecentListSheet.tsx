import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import React from 'react';

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
      <SheetContent>
        <SheetHeader>
          <SheetTitle>제목</SheetTitle>
          <SheetDescription>내용</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
