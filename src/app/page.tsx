import Link from 'next/link';
import {AiOutlineArrowRight} from 'react-icons/ai';

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center text-center">
      <div className="blur-mask relative before:absolute before:-inset-x-10 before:-inset-y-32 before:-z-10 before:rounded-full before:backdrop-blur-xl before:content-[''] sm:before:-inset-32 md:before:-inset-40 lg:before:-inset-60">
        <div className="flex animate-fade-in flex-col">
          <h1 className="text-5xl tracking-tighter lg:text-7xl">
            <span className="hidden sm:inline-block">Hello, I&apos;m</span> Eric Dang
          </h1>
          <h2 className="pt-5 text-base lg:pt-8 lg:text-2xl">Senior Software Engineer and Full-Stack Developer</h2>

          <div className="flex flex-row justify-center gap-4 pt-10 lg:pt-16">
            <Link
              className="group rounded-md border-2 border-violet-500 p-4 text-sm hover:bg-violet-500 lg:text-xl"
              href="/experience"
            >
              Experience
              <AiOutlineArrowRight className="invisible inline w-0 overflow-clip transition-all ease-in-out group-hover:!visible group-hover:static group-hover:ml-3 group-hover:w-auto group-hover:min-w-min lg:group-hover:ml-5" />
            </Link>

            <Link
              className="group rounded-md border-2 border-violet-500 p-4 text-sm hover:bg-violet-500 lg:text-xl"
              href="/projects"
            >
              Projects
              <AiOutlineArrowRight className="invisible inline w-0 overflow-clip transition-all ease-in-out group-hover:!visible group-hover:static group-hover:ml-3 group-hover:w-auto lg:group-hover:ml-5" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
