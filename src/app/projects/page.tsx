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
      <div className="mx-auto max-w-screen-xl px-4 pt-16 sm:px-12 sm:pt-24 lg:px-24 lg:pt-48">
        <div className="flex justify-between gap-4">
          <aside className="hidden lg:block lg:w-1/3">
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

          <main className="flex flex-col gap-12 pb-24 lg:w-2/3 lg:gap-24 lg:pb-80">
            <section className="scroll-mt-48" id={SectionIds.Autogarden} data-section>
              <ProjectCard
                header={<ProjectCardHeader href="https://github.com/e-dang/Autogarden">Autogarden</ProjectCardHeader>}
                images={
                  <>
                    <ProjectCardImage src="/autogarden_login.gif" alt="Gif of AutoGarden login action" />
                    <ProjectCardImage src="/garden_create.gif" alt="Gif of creating a Garden" />
                    <ProjectCardImage src="/watering_station.gif" alt="Gif of Watering Station detail page" />
                  </>
                }
                summary={
                  <>
                    <p>
                      A website and RESTful API I created for configuring and monitoring an automatic watering system
                      for my herb garden that is controlled by an Arduino because I don&apos;t want to have to water it
                      myself.
                    </p>
                    <p>
                      As a part of this project, I created a C++ library to easily activate sensors and actuators
                      connected to an Arduino through multiple layers of hardware logic components, such as shift
                      registers and multiplexers.
                    </p>
                    <p>
                      This project is fully tested with unit, integration, and functional tests and deploys to Heroku
                      via a CI/CD pipeline.
                    </p>
                  </>
                }
                links={
                  <ProjectCardLink href="https://github.com/e-dang/Autogarden">
                    <AiFillGithub size="2rem" className="inline-block" />
                  </ProjectCardLink>
                }
                technologies={['JavaScript', 'Python', 'C++', 'Arduino']}
              />
            </section>

            <section className="scroll-mt-48" id={SectionIds.PathAlg} data-section>
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
                      A website I created for visualizing the search algorithms DFS, BFS, Dijkstra&apos;s Algorithm,
                      Greedy Best-First Search, A* Search, and Bidirectional Search on a 2D grid.
                    </p>
                    <p>
                      The grid can be modified with mazes of walls and weights which are generated using the algorithms
                      Randomized DFS, Randomized Prim&apos;s Algorithm, or Recursive Division. You can also manually add
                      walls and weights to the grid with the click of your mouse!
                    </p>
                    <p>
                      Although this project is permanently hosted on GitHub Pages, I had used this project to gain
                      experience with creating a CI/CD pipeline to automate provisioning and deployment to staging and
                      production servers on Digital Ocean.
                    </p>
                  </>
                }
                links={
                  <ProjectCardLink href="https://github.com/e-dang/Path-Finding-Algorithm-Visualizer">
                    <AiFillGithub size="2rem" className="inline-block" />
                  </ProjectCardLink>
                }
                technologies={['JavaScript', 'HTML/CSS', 'Python', 'Jest', 'GitHub Actions', 'Terraform']}
              />
            </section>

            <section className="scroll-mt-48" id={SectionIds.WebGames} data-section>
              <ProjectCard
                header={<ProjectCardHeader href="https://e-dang.github.io/Web-Games/">Web Games</ProjectCardHeader>}
                images={
                  <>
                    <ProjectCardImage src="/snake.gif" alt="A game of Snake" />
                    <ProjectCardImage src="/sudoku.gif" alt="A game of Sudoku" />
                    <ProjectCardImage src="/tic-tac-toe.gif" alt="A game of Tic Tac Toe" />
                    <ProjectCardImage src="/webgames.gif" alt="The Web Games site" />
                  </>
                }
                summary={
                  <>
                    <p>
                      A website I created for playing Sudoku, Tic Tac Toe, and Snake. Sudoku was implemented using the
                      Sudoku Solver and Generator Algorithm capable of generating puzzles of 4 different difficulties.
                      The opponent player in Tic Tac Toe makes its moves based on 3 different algorithms - completely
                      random moves (Easy), Minimax (Medium), and Minimax with αβ Pruning (Hard).
                    </p>
                    <p>
                      This project is fully tested with unit, integration, and functional tests written in Jest and
                      Selenium, and deploys to Heroku using a CI/CD pipeline.
                    </p>
                  </>
                }
                links={
                  <ProjectCardLink href="https://github.com/e-dang/Web-Games">
                    <AiFillGithub size="2rem" className="inline-block" />
                  </ProjectCardLink>
                }
                technologies={['JavaScript', 'Python', 'Node.js', 'Jest', 'Selenium']}
              />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
