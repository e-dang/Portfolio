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
          ></div>
          <h1 className="text-8xl">Hello, I&apos;m Eric Dang</h1>
          <h3 className="text-3xl">Software Engineer</h3>
        </div>
      </div>
    </main>
  );
}
