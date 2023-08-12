'use client';
import Link from 'next/link';
import './NavLink.css';
import {usePathname} from 'next/navigation';
import {useMemo} from 'react';

export const NavLink: React.FC<React.ComponentProps<typeof Link>> = ({children, ...props}) => {
  const pathname = usePathname();
  const isActive = useMemo(() => pathname === props.href, [pathname, props.href]);

  return (
    <div
      className={`relative rounded-md bg-neutral-900 p-3 before:absolute before:-left-[.31rem] before:bottom-0 before:top-0 before:z-[1] before:my-auto before:box-border before:h-2 before:w-2 before:rounded-full before:border-2 before:border-solid before:border-purple-500 before:bg-inherit before:content-[''] after:absolute after:-inset-0.5 after:z-[-2] after:rounded-[inherit] after:content-[''] ${
        isActive ? 'active after:bg-purple-500' : 'animate-border after:hover:bg-purple-500'
      }`}
    >
      <Link {...props}>{children}</Link>
    </div>
  );
};
