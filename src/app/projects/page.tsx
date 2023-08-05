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
                <Link href="#Autogarden">Autogarden</Link>
              </li>
              <li>
                <Link href="#Path-Finding-Algorithm-Visualizer">Path-Finding Algorithm Visualizer</Link>
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
