import Link from 'next/link';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="fixed top-0  bg-slate-400 w-full p-4 fade-in-from-top">
      <div className="container mx-auto">
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
      </div>
    </nav>
  );
};
