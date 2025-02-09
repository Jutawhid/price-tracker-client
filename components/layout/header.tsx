import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle';
import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';
import Image from 'next/image';
// import Logo from '@/public/assets/icons/logo.png';

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 w-full border-b border-solid border-b-[#f0f2f5] py-3">
      <nav className="flex items-center justify-between px-4 py-2">
        <div className="hidden lg:block">
          {/* <Image src={Logo} alt="logo" width={145} height={45} /> */}
        </div>
        <div className="flex items-center gap-2">
          <div className={cn('block lg:!hidden')}>
            <MobileSidebar />
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <UserNav />
          </div>
          
        </div>
      </nav>
    </header>
  );
}
