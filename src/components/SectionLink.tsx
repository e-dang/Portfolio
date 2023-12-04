import Link from 'next/link';
import './SectionLink.css';

interface SectionLinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

export const SectionLink: React.FunctionComponent<SectionLinkProps> = ({href, isActive, children}) => {
  return (
    <Link className={`${isActive ? 'active' : ''} group flex flex-row items-center gap-6`} href={href}>
      <div className="side-nav-bar relative h-0.5 min-w-[2rem] bg-violet-500 transition-all before:absolute before:-left-2 before:bottom-0 before:top-0 before:my-auto before:h-2 before:w-2 before:rounded-full before:border-2  before:border-solid before:border-violet-500 before:content-[''] after:absolute after:-right-2 after:bottom-0 after:top-0 after:my-auto after:h-2 after:w-2 after:rounded-full after:border-2 after:border-solid after:border-violet-500 after:content-[''] group-hover:min-w-[3rem]" />
      <span className="side-nav-text text-base text-gray-500 group-hover:text-white">{children}</span>
    </Link>
  );
};
