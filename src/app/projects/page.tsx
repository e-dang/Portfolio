import {ProjectCard, ProjectCardHeader, ProjectCardLink} from '@/components/ProjectCard';
import Image from 'next/image';
import Link from 'next/link';
import {AiFillGithub} from 'react-icons/ai';

export default function Projects() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 pt-24 md:px-12 lg:px-24">
      <div className="flex justify-between gap-4">
        <aside className="sticky top-24 w-1/3">
          <ul className="flex flex-col gap-4">
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
            <li>
              <Link className="flex flex-row items-center" href="#Web-Games">
                <div className="relative mr-6 h-0.5 w-8 bg-purple-500 before:absolute before:-left-2 before:bottom-0 before:top-0 before:my-auto before:h-2 before:w-2 before:rounded-full before:border-2 before:border-solid before:border-purple-500  before:content-[''] after:absolute after:-right-2 after:bottom-0 after:top-0 after:my-auto after:h-2 after:w-2 after:rounded-full after:border-2 after:border-solid after:border-purple-500  after:content-['']" />
                <span>Web Games</span>
              </Link>
            </li>
          </ul>
        </aside>

        <main className="w-2/3">
          <div className="flex flex-col gap-24">
            <section id="Autogarden">
              <ProjectCard
                header={<ProjectCardHeader href="https://github.com/e-dang/Autogarden">Autogarden</ProjectCardHeader>}
                images={
                  <Image
                    src="/pathfinding.png"
                    alt="Picture of the Path Finding Algorithm Website"
                    width={100}
                    height={100}
                  />
                }
                summary={
                  <>
                    <p>
                      Created a web interface and RESTful API for configuring an automatic watering system that is
                      controlled by an Arduino. Through automation, this project saves the daily time and effort of
                      maintaining a garden.
                    </p>
                    <p>
                      Implemented a C++ library to easily activate sensors and actuators connected to an Arduino through
                      multiple layers of logic components, such as shift registers and multiplexers.
                    </p>
                    <p>Wrote unit, integration, and functional tests for a CI/CD pipeline that deploys to Heroku.</p>
                  </>
                }
                links={
                  <ProjectCardLink href="https://github.com/e-dang/Autogarden">
                    <AiFillGithub size="2rem" className="inline-block" />
                  </ProjectCardLink>
                }
                technologies={['C++', 'Python', 'JavaScript', 'Arduino']}
              />
            </section>

            <section id="Path-Finding-Algorithm-Visualizer">
              <ProjectCard
                header={
                  <ProjectCardHeader href="https://e-dang.github.io/Path-Finding-Algorithm-Visualizer/">
                    Path-Finding Algorithm Visualizer
                  </ProjectCardHeader>
                }
                images={
                  <Image
                    src="/pathfinding.png"
                    alt="Picture of the Path Finding Algorithm Website"
                    width={100}
                    height={100}
                  />
                }
                summary={
                  <>
                    <p>
                      Created a web page for visualizing DFS, BFS, Dijkstra&apos;s Algorithm, Greedy Best-First Search,
                      A* Search, and Bidirectional Search on a 2D grid that is customizable with wall and weight nodes.
                    </p>
                    <p>
                      Implemented maze generation algorithms Randomized DFS, Randomized Prim&apos;s Algorithm, and
                      Recursive Division.
                    </p>
                    <p>
                      Created a CI/CD pipeline to automate provisioning and deployment to production and staging
                      servers.
                    </p>
                  </>
                }
                links={
                  <ProjectCardLink href="https://github.com/e-dang/Path-Finding-Algorithm-Visualizer">
                    <AiFillGithub size="2rem" className="inline-block" />
                  </ProjectCardLink>
                }
                technologies={[
                  'JavaScript',
                  'HTML5',
                  'CSS',
                  'Python',
                  'Bootstrap',
                  'Jest',
                  'Django',
                  'GitHub Actions',
                  'Terraform',
                  'Ansible',
                  'DigitalOcean',
                ]}
              />
            </section>

            <section id="Web-Games">
              <ProjectCard
                header={<ProjectCardHeader href="https://github.com/e-dang/Web-Games">Web Games</ProjectCardHeader>}
                images={
                  <Image
                    src="/pathfinding.png"
                    alt="Picture of the Path Finding Algorithm Website"
                    width={100}
                    height={100}
                  />
                }
                summary={
                  <>
                    <p>
                      Implemented Sudoku, Tic Tac Toe, and Snake using Sudoku Solver and Generator Algorithm, as well as
                      Minimax, and Minimax with αβ Pruning as the opponent player in Tic Tac Toe.
                    </p>
                    <p>
                      Wrote unit, integration, and functional tests with Jest, and Selenium for a CI/CD pipeline
                      deploying to Heroku.
                    </p>
                  </>
                }
                links={
                  <ProjectCardLink href="https://github.com/e-dang/Web-Games">
                    <AiFillGithub size="2rem" className="inline-block" />
                  </ProjectCardLink>
                }
                technologies={['JavaScript', 'Python', 'Node.js', 'Express.js', 'Jest', 'Selenium', 'CSS', 'Bootstrap']}
              />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
