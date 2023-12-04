'use client';
import Link from 'next/link';
import {InternalNavLink} from './InternalNavLink';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai';
import {useState} from 'react';
import {usePathname} from 'next/navigation';
import {AiOutlineClose} from 'react-icons/ai';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header>
      <nav className="fixed top-0 z-10 w-full bg-neutral-900 p-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-12">
            <Link href="/" className="whitespace-nowrap text-lg font-medium hover:text-violet-500">
              Eric Dang
            </Link>

            <div className="group hidden flex-row gap-4 sm:flex">
              <a
                href="https://github.com/e-dang"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:-translate-y-1 hover:!text-violet-500 group-hover:text-gray-500/50"
              >
                <AiFillGithub className="inline-block translate-y-px text-2xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/eric-dang-1157501b2/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:-translate-y-1 hover:!text-violet-500 group-hover:text-gray-500/50"
              >
                <AiFillLinkedin className="inline-block translate-y-px text-2xl" />
              </a>
            </div>
          </div>

          <div className="block pl-2 sm:hidden">
            {isOpen ? (
              <AiOutlineClose className="text-2xl hover:text-violet-500" onClick={() => setIsOpen(!isOpen)} />
            ) : (
              <AiOutlineMenu className="text-2xl hover:text-violet-500" onClick={() => setIsOpen(!isOpen)} />
            )}
          </div>
          {isOpen ? (
            <div className="absolute left-0 right-0 top-[56px] block border-t-[1px] border-gray-600 bg-neutral-900 p-5 shadow-2xl transition-all duration-1000 sm:hidden">
              <ul className="flex flex-col items-center justify-center gap-4">
                <li>
                  <Link
                    href="/experience"
                    className={`text-xl hover:text-violet-500 ${
                      pathname === '/experience' ? 'text-violet-500' : 'text-white'
                    }`}
                  >
                    Experience
                  </Link>
                </li>

                <li>
                  <Link
                    href="/projects"
                    className={`text-xl hover:text-violet-500 ${
                      pathname === '/projects' ? 'text-violet-500' : 'text-white'
                    }`}
                  >
                    Projects
                  </Link>
                </li>

                <div className="flex flex-row gap-4">
                  <li>
                    <a
                      href="https://github.com/e-dang"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all hover:-translate-y-1 hover:!text-violet-500 group-hover:text-gray-500/50"
                    >
                      <AiFillGithub className="inline-block text-3xl" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/eric-dang-1157501b2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-all hover:-translate-y-1 hover:!text-violet-500 group-hover:text-gray-500/50"
                    >
                      <AiFillLinkedin className="inline-block text-3xl" />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          ) : null}

          <ul className="hidden gap-4 sm:flex">
            <li>
              <InternalNavLink href="/experience">
                <span className="text-sm">Experience</span>
              </InternalNavLink>
            </li>

            <li>
              <InternalNavLink href="/projects">
                <span className="text-sm">Projects</span>
              </InternalNavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
