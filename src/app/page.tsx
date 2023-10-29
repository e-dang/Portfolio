import Link from 'next/link';
import {AiOutlineArrowRight} from 'react-icons/ai';

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center text-center">
      <div className="blur-mask relative before:absolute before:-inset-x-0 before:-inset-y-48 before:-z-10 before:rounded-full before:backdrop-blur-xl before:content-[''] lg:before:-inset-x-60 lg:before:-inset-y-60">
        <div className="flex animate-fade-in flex-col">
          <h1 className="text-4xl tracking-tighter lg:text-7xl">Hello, I&apos;m Eric Dang</h1>
          <h3 className="pt-6 text-base lg:pt-12 lg:text-2xl">Senior Software Engineer and Full-Stack Developer</h3>

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
