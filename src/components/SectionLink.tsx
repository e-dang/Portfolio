import Link from 'next/link';
import './SectionLink.css';

interface SectionLinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

export const SectionLink: React.FunctionComponent<SectionLinkProps> = ({href, isActive, children}) => {
  return (
    <Link className={`${isActive ? 'active' : ''} group flex flex-row items-center`} href={href}>
      <div className="side-nav-bar relative mr-6 h-0.5 w-8 bg-purple-500 transition-all before:absolute before:-left-2 before:bottom-0 before:top-0 before:my-auto before:h-2 before:w-2 before:rounded-full before:border-2 before:border-solid before:border-purple-500  before:content-[''] after:absolute after:-right-2 after:bottom-0 after:top-0 after:my-auto after:h-2 after:w-2 after:rounded-full after:border-2 after:border-solid after:border-purple-500 after:content-[''] group-hover:w-12" />
      <span className="side-nav-text text-gray-500 group-hover:text-white">{children}</span>
    </Link>
  );
};
