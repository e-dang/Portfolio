'use client';
import {ProjectCard, ProjectCardHeader, ProjectCardLink, ProjectCardImage} from '@/components/ProjectCard';
import {AiFillGithub} from 'react-icons/ai';
import {useEffect, useRef, useState} from 'react';
import {SectionLink} from '@/components/SectionLink';
import {Navbar} from '@/components/Navbar';

enum SectionIds {
  Autogarden = 'Autogarden',
  PathAlg = 'Path-Finding-Algorithm-Visualizer',
  WebGames = 'Web-Games',
}

export default function Projects() {
  const [activeSection, setActiveSection] = useState<SectionIds | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;

        if (visibleSection) {
          setActiveSection(visibleSection.id as SectionIds);
        }
      },
      {threshold: 0.9},
    );

    const sections = document.querySelectorAll('[data-section]');

    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-xl px-6 pt-48 md:px-12 lg:px-24">
        <div className="flex justify-between gap-4">
          <aside className="w-1/3">
            <ul className="blur-mask sticky top-48 before:absolute before:-bottom-10 before:-left-20 before:-top-10 before:right-0 before:-z-10 before:rounded-full before:backdrop-blur-xl before:content-['']">
              <li className="py-2">
                <SectionLink href="#Autogarden" isActive={activeSection === SectionIds.Autogarden}>
                  Autogarden
                </SectionLink>
              </li>
              <li className="py-2">
                <SectionLink href="#Path-Finding-Algorithm-Visualizer" isActive={activeSection === SectionIds.PathAlg}>
                  Path-Finding Algorithm Visualizer
                </SectionLink>
              </li>
              <li className="py-2">
                <SectionLink href="#Web-Games" isActive={activeSection === SectionIds.WebGames}>
                  Web Games
                </SectionLink>
              </li>
            </ul>
          </aside>

          <main className="group flex w-2/3 flex-col gap-24 pb-80">
            <section
              className="scroll-mt-48 hover:!opacity-100 group-hover:opacity-80"
              id={SectionIds.Autogarden}
              data-section
            >
              <ProjectCard
                header={<ProjectCardHeader href="https://github.com/e-dang/Autogarden">Autogarden</ProjectCardHeader>}
                images={<ProjectCardImage src="/pathfinding.png" alt="Picture of the Path Finding Algorithm Website" />}
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

            <section
              className="scroll-mt-48 hover:!opacity-100 group-hover:opacity-80"
              id={SectionIds.PathAlg}
              data-section
            >
              <ProjectCard
                header={
                  <ProjectCardHeader href="https://e-dang.github.io/Path-Finding-Algorithm-Visualizer/">
                    Path-Finding Algorithm Visualizer
                  </ProjectCardHeader>
                }
                images={
                  <>
                    <ProjectCardImage
                      src="/dijkstra_random_dfs.gif"
                      alt="Dijkstra's Algorithm search and Randomized DFS maze generation"
                    />
                    <ProjectCardImage
                      src="/a_star_prims.gif"
                      alt="A* Search and Randomized Prim's Algorithm maze generation"
                    />
                    <ProjectCardImage
                      src="/bidirectional_recursive_division.gif"
                      alt="Bidirectional Search and Recursive Division maze generation"
                    />
                    <ProjectCardImage
                      src="/a_star_random_weights.gif"
                      alt="A* Search and Random Weight maze generation"
                    />
                    <ProjectCardImage
                      src="/greedy_best_first_prims.gif"
                      alt="Greedy Best-First Search and Randomized Prim's Algorithm maze generation"
                    />
                    <ProjectCardImage
                      src="/a_star_recursive_div_weights.gif"
                      alt="A* Search and Recursive Division weight maze generation"
                    />
                  </>
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

            <section
              className="scroll-mt-48 hover:!opacity-100 group-hover:opacity-80"
              id={SectionIds.WebGames}
              data-section
            >
              <ProjectCard
                header={<ProjectCardHeader href="https://github.com/e-dang/Web-Games">Web Games</ProjectCardHeader>}
                images={<ProjectCardImage src="/pathfinding.png" alt="Picture of the Path Finding Algorithm Website" />}
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
          </main>
        </div>
      </div>
    </>
  );
}
