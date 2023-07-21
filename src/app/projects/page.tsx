import {ProjectCard} from '@/components/ProjectCard';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="mt-24 mx-auto max-w-screen-xl">
      <div className="flex justify-between">
        <aside className="w-1/2 sticky top-24 h-max">
          <div className="flex flex-row justify-center">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="#project-1">Project 1</Link>
              </li>
              <li>
                <Link href="#project-2">Project 2</Link>
              </li>
              <li>
                <Link href="#project-3">Project 3</Link>
              </li>
              <li>
                <Link href="#project-4">Project 4</Link>
              </li>
              <li>
                <Link href="#project-5">Project 5</Link>
              </li>
            </ul>
          </div>
        </aside>

        <main className="w-1/2 ml-auto">
          <div className="flex flex-col space-y-4">
            <ProjectCard id="project-1" />
            <ProjectCard id="project-2" />
            <ProjectCard id="project-3" />
            <ProjectCard id="project-4" />
            <ProjectCard id="project-5" />
          </div>
        </main>
      </div>
    </div>
  );
}
