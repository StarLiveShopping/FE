import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { ComponentProps, SetStateAction } from 'react';

interface DropdownProps extends ComponentProps<'div'> {
  isDropdownOpened: boolean;
  setIsDropdownOpened: React.Dispatch<SetStateAction<boolean>>;
  setIsSheetOpened: React.Dispatch<SetStateAction<boolean>>;
}

export default function Dropdown({
  isDropdownOpened,
  setIsDropdownOpened,
  setIsSheetOpened,
  ...props
}: DropdownProps) {
  return (
    <div className="absolute top-[52px] right-10">
      <DropdownMenu open={isDropdownOpened} onOpenChange={setIsDropdownOpened}>
        <DropdownMenuTrigger></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>###아이디###</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>장바구니</DropdownMenuItem>
          <DropdownMenuItem>마이페이지</DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setIsSheetOpened((prev) => !prev);
              setIsDropdownOpened(false);
            }}
          >
            최근본쇼핑
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
