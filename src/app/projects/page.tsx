import {ProjectCard} from '@/components/ProjectCard';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="mx-auto mt-24 max-w-screen-xl">
      <div className="flex justify-between">
        <aside className="sticky top-24 h-max w-1/2">
          <div className="flex flex-row justify-center">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link className="flex flex-row items-center" href="#Autogarden">
                  <div className="relative mr-6 h-0.5 w-8 bg-purple-500 before:absolute before:-left-2 before:bottom-0 before:top-0 before:my-auto before:h-2 before:w-2 before:rounded-full before:border-2 before:border-solid before:border-purple-500  before:content-[''] after:absolute after:-right-2 after:bottom-0 after:top-0 after:my-auto after:h-2 after:w-2 after:rounded-full after:border-2 after:border-solid after:border-purple-500  after:content-['']" />
                  <span>Autogarden</span>
                </Link>
              </li>
              <li>
                <Link className="flex flex-row items-center" href="#Path-Finding-Algorithm-Visualizer">
                  <div className="relative mr-6 h-0.5 w-8 bg-purple-500 before:absolute before:-left-2 before:bottom-0 before:top-0 before:my-auto before:h-2 before:w-2 before:rounded-full before:border-2 before:border-solid before:border-purple-500  before:content-[''] after:absolute after:-right-2 after:bottom-0 after:top-0 after:my-auto after:h-2 after:w-2 after:rounded-full after:border-2 after:border-solid after:border-purple-500  after:content-['']" />
                  <span>Path-Finding Algorithm Visualizer</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <main className="ml-auto w-1/2">
          <div className="flex flex-col space-y-4">
            <ProjectCard
              id="Autogarden"
              title="Autogarden"
              summary="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dolore minus numquam aliquid eius, nostrum cum expedita repudiandae, nam aperiam delectus distinctio pariatur quas? Maxime eius iste numquam ratione rem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dolore minus numquam aliquid eius, nostrum cum expedita repudiandae, nam aperiam delectus distinctio pariatur quas? Maxime eius iste numquam ratione rem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dolore minus numquam aliquid eius, nostrum cum expedita repudiandae, nam aperiam delectus distinctio pariatur quas? Maxime eius iste numquam ratione rem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dolore minus numquam aliquid eius, nostrum cum expedita repudiandae, nam aperiam delectus distinctio pariatur quas? Maxime eius iste numquam ratione rem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dolore minus numquam aliquid eius, nostrum cum expedita repudiandae, nam aperiam delectus distinctio pariatur quas? Maxime eius iste numquam ratione rem?"
              technologies={['Python', 'Javascript', 'C/C++']}
            />
            <ProjectCard
              id="Path-Finding Algorithm Visualizer"
              title="Path-Finding Algorithm Visualizer"
              summary="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dolore minus numquam aliquid eius, nostrum cum expedita repudiandae, nam aperiam delectus distinctio pariatur quas? Maxime eius iste numquam ratione rem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dolore minus numquam aliquid eius, nostrum cum expedita repudiandae, nam aperiam delectus distinctio pariatur quas? Maxime eius iste numquam ratione rem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dolore minus numquam aliquid eius, nostrum cum expedita repudiandae, nam aperiam delectus distinctio pariatur quas? Maxime eius iste numquam ratione rem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dolore minus numquam aliquid eius, nostrum cum expedita repudiandae, nam aperiam delectus distinctio pariatur quas? Maxime eius iste numquam ratione rem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident dolore minus numquam aliquid eius, nostrum cum expedita repudiandae, nam aperiam delectus distinctio pariatur quas? Maxime eius iste numquam ratione rem?"
              technologies={['JavaScript']}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
