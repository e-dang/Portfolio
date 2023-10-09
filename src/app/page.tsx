import Link from 'next/link';
import {AiOutlineArrowRight} from 'react-icons/ai';

export default function Home() {
  return (
    <main>
      <div className="flex h-screen w-full flex-col items-center justify-center text-center">
        <div className="blur-mask relative before:absolute before:-inset-x-60 before:-inset-y-60 before:-z-10 before:rounded-full before:backdrop-blur-xl before:content-['']">
          <div className="flex animate-fade-in flex-col">
            <h1 className="text-8xl tracking-tighter">Hello, I&apos;m Eric Dang</h1>
            <h3 className="pt-12 text-3xl">Software Engineer</h3>

            <div className="flex flex-row justify-center gap-4 pt-16">
              <Link
                className="group rounded-lg border-4 border-violet-500 p-4 text-xl hover:bg-violet-500"
                href="/projects"
              >
                Projects
                <AiOutlineArrowRight className="invisible inline w-0 overflow-clip transition-all ease-in-out group-hover:!visible group-hover:static group-hover:ml-5 group-hover:w-auto" />
              </Link>

              <Link
                className="group rounded-lg border-4 border-violet-500 p-4 text-xl hover:bg-violet-500"
                href="/experience"
              >
                Experience
                <AiOutlineArrowRight className="invisible inline w-0 overflow-clip transition-all ease-in-out group-hover:!visible group-hover:static group-hover:ml-5 group-hover:w-auto group-hover:min-w-min" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
