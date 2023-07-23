import {ExperienceCard} from '@/components/ExperienceCard';
import './Experience.css';

export default function Experience() {
  return (
    <>
      <div className="mask fixed top-0 z-10 h-[26rem] w-full"></div>
      <div className="fixed top-14 z-20 h-20 w-full bg-white"></div>

      <main className="mx-auto mt-32 max-w-screen-xl">
        <div className="relative before:absolute before:bottom-0 before:left-1/4 before:top-1 before:z-10 before:w-2 before:bg-black before:content-['']">
          <div className="sticky left-1/4 top-32 z-20 w-1/2">
            <div className="relative -left-8 flex flex-shrink">
              <h1 className="border-b-8 border-black bg-white p-6 text-6xl">Work Experience</h1>
            </div>
          </div>

          <div className="relative left-1/4 my-40 w-1/2">
            <div className="sticky top-[26rem]">
              <div className="absolute -left-4 h-0 w-0 border-x-[20px] border-y-4 border-solid border-black"></div>
            </div>

            <div className="relative left-1/4">
              <ExperienceCard />
            </div>
          </div>

          <div className="relative left-1/4 my-40 w-1/2">
            <div className="sticky top-[26rem]">
              <div className="absolute -left-4 h-0 w-0 border-x-[20px] border-y-4 border-solid border-black"></div>
            </div>

            <div className="relative left-1/4">
              <ExperienceCard />
            </div>
          </div>

          <div className="relative left-1/4 mt-40 w-1/2">
            <div className="sticky top-[26rem]">
              <div className="absolute -left-4 h-0 w-0 border-x-[20px] border-y-4 border-solid border-black"></div>
            </div>

            <div className="relative left-1/4">
              <ExperienceCard />
            </div>
          </div>

          <div className="relative left-1/4 w-1/2">
            <div className="sticky top-[26rem]">
              <div className="absolute -left-4 h-0 w-0 border-x-[20px] border-y-4 border-solid border-black"></div>
            </div>
          </div>
        </div>

        <div className="h-[992px]" />
      </main>
    </>
  );
}
