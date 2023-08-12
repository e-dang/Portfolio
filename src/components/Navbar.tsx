import Link from 'next/link';
import './Navbar.css';
import {NavLink} from './NavLink';

export const Navbar = () => {
  return (
    <header>
      <nav className="fade-in-from-top fixed top-0 z-20 w-full p-4">
        <div className="flex items-center justify-between">
          <Link href="/">Eric Dang</Link>

          <ul className="flex space-x-4">
            <li>
              <NavLink href="/projects">Projects</NavLink>
            </li>

            <li>
              <NavLink href="/experience">Experience</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
