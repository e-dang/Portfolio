import Link from 'next/link';
import {InternalNavLink} from './InternalNavLink';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

export const Navbar = () => {
  return (
    <header>
      <nav className="fixed top-0 z-10 w-full bg-neutral-900 p-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-12">
            <Link href="/" className="hover:text-violet-500">
              Eric Dang
            </Link>

            <div className="group flex flex-row gap-4">
              <a
                href="https://github.com/e-dang"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:-translate-y-1 hover:!text-violet-500 group-hover:text-gray-500/50"
              >
                <AiFillGithub size="1.75rem" className="inline-block" />
              </a>

              <a
                href="https://www.linkedin.com/in/eric-dang-1157501b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:-translate-y-1 hover:!text-violet-500 group-hover:text-gray-500/50"
              >
                <AiFillLinkedin size="1.75rem" className="inline-block" />
              </a>
            </div>
          </div>

          <ul className="flex gap-4">
            <li>
              <InternalNavLink href="/projects">Projects</InternalNavLink>
            </li>

            <li>
              <InternalNavLink href="/experience">Experience</InternalNavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
