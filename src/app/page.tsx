import Link from 'next/link';
import {AiOutlineArrowRight} from 'react-icons/ai';

export default function Home() {
  return (
    <main>
      <div className="flex h-screen w-full flex-col items-center justify-center text-center">
        <div className="relative">
          <div
            className="absolute -left-[15rem] -top-[15rem] -z-10 h-[calc(100%+30rem)] w-[calc(100%+30rem)] rounded-full backdrop-blur-xl"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)',
              maskImage: 'radial-gradient(ellipse, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)',
            }}
          />
          <div className="flex flex-col">
            <h1 className="text-8xl tracking-tighter">Hello, I&apos;m Eric Dang</h1>
            <h3 className="pt-12 text-3xl">Software Engineer</h3>
            <div className="flex flex-row justify-center gap-4 pt-16">
              <Link
                className="group rounded-lg border-4 border-violet-500 p-4 text-xl hover:bg-violet-500"
                href="/projects"
              >
                Projects
                <AiOutlineArrowRight className="invisible inline w-0 overflow-clip transition-all ease-in-out group-hover:!visible group-hover:static group-hover:ml-5 group-hover:w-fit" />
              </Link>

              <Link
                className="group rounded-lg border-4 border-violet-500 p-4 text-xl hover:bg-violet-500"
                href="/experience"
              >
                Experience
                <AiOutlineArrowRight className="invisible inline w-0 overflow-clip transition-all ease-in-out group-hover:!visible group-hover:static group-hover:ml-5 group-hover:w-fit" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
