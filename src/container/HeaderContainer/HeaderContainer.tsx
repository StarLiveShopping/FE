import { HeaderMenu } from '@/components/HeaderMenu';
import { HeaderTop } from '@/components/HeaderTop';

export default function HeaderContainer() {
  return (
    <header className="relative">
      <HeaderTop />
      <HeaderMenu />
    </header>
  );
}
