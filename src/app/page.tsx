import Link from 'next/link';

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
          <div className="flex flex-col gap-4">
            <h1 className="text-8xl">Hello, I&apos;m Eric Dang</h1>
            <h3 className="text-3xl">Software Engineer</h3>
            <div className="flex flex-row justify-center gap-4 pt-4">
              <Link className="rounded-lg border-4 border-purple-500 p-4 text-xl hover:bg-purple-500" href="/projects">
                Projects
              </Link>
              <Link
                className="rounded-lg border-4 border-purple-500 p-4 text-xl hover:bg-purple-500"
                href="/experience"
              >
                Experience
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
