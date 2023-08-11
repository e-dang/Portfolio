import Link from 'next/link';
import './Navbar.css';

export const Navbar = () => {
  return (
    <header>
      <nav className="fade-in-from-top fixed top-0 z-20 w-full p-4">
        <div className="flex items-center justify-between">
          <Link href="/">Eric Dang</Link>

          <ul className="flex space-x-4">
            <li>
              <div className="animate-border relative rounded-md bg-neutral-900 p-3 before:absolute before:-left-[.31rem] before:bottom-0 before:top-0 before:z-[1] before:my-auto before:box-border before:h-2 before:w-2 before:rounded-full before:border-2 before:border-solid before:border-purple-500 before:bg-inherit before:content-[''] after:absolute after:-inset-0.5 after:z-[-2] after:rounded-[inherit] after:content-[''] after:hover:bg-purple-500">
                <Link href="/projects">Projects</Link>
              </div>
            </li>

            <li>
              <div className="animate-border relative rounded-md bg-neutral-900 p-3 before:absolute before:-left-[.31rem] before:bottom-0 before:top-0 before:z-[1] before:my-auto before:box-border before:h-2 before:w-2 before:rounded-full before:border-2 before:border-solid before:border-purple-500 before:bg-inherit before:content-[''] after:absolute after:-inset-0.5 after:z-[-2] after:rounded-[inherit] after:content-[''] after:hover:bg-purple-500">
                <Link href="/experience">Experience</Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
