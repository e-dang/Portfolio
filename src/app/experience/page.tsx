import {ExperienceCard} from '@/components/ExperienceCard';

export default function Experience() {
  return (
    <div className="h-screen w-screen overflow-y-auto">
      <div className="fixed top-0 -z-10 h-56 w-full bg-gradient-to-b from-white via-95% to-transparent" />

      <div className="sticky top-32 flex justify-center">
        <h1 className="text-center text-6xl">Work Experience</h1>
      </div>

      <main className="mx-auto mt-40 max-w-screen-xl">
        <div className="relative -z-20 before:absolute before:bottom-0 before:left-1/4 before:top-0 before:w-2 before:bg-black before:content-['']">
          <div className="relative left-1/4 my-10 w-1/2">
            <div className="sticky top-40">
              <div className="absolute -left-4 h-0 w-0 border-x-[20px] border-y-4 border-solid border-black"></div>
            </div>

            <div className="relative left-1/4">
              <ExperienceCard />
            </div>
          </div>

          <div className="relative left-1/4 my-10 w-1/2">
            <div className="sticky top-40">
              <div className="absolute -left-4 h-0 w-0 border-x-[20px] border-y-4 border-solid border-black"></div>
            </div>

            <div className="relative left-1/4">
              <ExperienceCard />
            </div>
          </div>

          <div className="relative left-1/4 my-10 w-1/2">
            <div className="sticky top-40">
              <div className="absolute -left-4 h-0 w-0 border-x-[20px] border-y-4 border-solid border-black"></div>
            </div>

            <div className="relative left-1/4">
              <ExperienceCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
