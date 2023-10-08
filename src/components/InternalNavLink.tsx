'use client';
import Link from 'next/link';
import './InternalNavLink.css';
import {usePathname} from 'next/navigation';
import {useMemo} from 'react';

export interface InternalNavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function InternalNavLink({href, children}: InternalNavLinkProps) {
  const pathname = usePathname();
  const isActive = useMemo(() => pathname === href, [pathname, href]);

  return (
    <Link
      href={href}
      className={`relative block rounded-md bg-neutral-900 p-3 before:absolute before:inset-y-0 before:-left-[.31rem] before:my-auto before:h-2 before:w-2 before:rounded-full before:border-2 before:border-solid before:border-violet-500 before:bg-inherit before:content-[''] after:absolute after:-inset-0.5 after:-z-10 after:rounded-[inherit] after:content-[''] ${
        isActive ? 'navlink-active' : 'navlink-inactive'
      }`}
    >
      <div className="absolute -left-[.31rem] top-3 h-2 w-2 bg-neutral-900" />
      {children}
    </Link>
  );
}
