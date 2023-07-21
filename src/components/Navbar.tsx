import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="flex justify-end bg-slate-400 p-4">
      <Link className="mx-2" href="/projects">
        Projects
      </Link>

      <Link className="mx-2" href="/experience">
        Experience
      </Link>
    </nav>
  );
};
