import Link from 'next/link';
import './Navbar.css';

export const Navbar = () => {
  return (
    <header>
      <nav className="fade-in-from-top fixed top-0 z-20 w-full bg-slate-400 p-4">
        <div className="flex items-center justify-between">
          <Link href="/">Eric Dang</Link>

          <ul className="flex space-x-4">
            <li>
              <Link href="/projects">Projects</Link>
            </li>

            <li>
              <Link href="/experience">Experience</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
