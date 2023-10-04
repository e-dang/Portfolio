import {Badge} from './Badge';
import {FiExternalLink} from 'react-icons/fi';
import {ReactNode} from 'react';

export interface ProjectCardProps extends React.ComponentProps<'div'> {
  header: ReactNode;
  images: ReactNode;
  summary: ReactNode;
  links: ReactNode;
  technologies: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({header, images, summary, links, technologies}) => {
  return (
    <div className="grid grid-cols-8 gap-4 rounded bg-neutral-700/40 p-10 backdrop-blur-md hover:bg-neutral-700/60 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]">
      <div className="col-span-2 flex flex-col gap-4">{images}</div>

      <div className="col-span-6 flex flex-col gap-4">
        {header}

        <div className="flex flex-col gap-2">{summary}</div>

        <div className="flex flex-row gap-2">{links}</div>

        <ul className="flex flex-row flex-wrap gap-2">
          {technologies.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const ProjectCardHeader: React.FC<React.ComponentProps<'a'>> = ({href, children}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-0 before:content-['']"
    >
      <h1 className="text-4xl group-hover/link:text-purple-400">
        {children}{' '}
        <FiExternalLink
          size="1.5rem"
          className="ml-1 inline text-center align-middle transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-purple-400"
        />
      </h1>
    </a>
  );
};

export const ProjectCardLink: React.FC<React.ComponentProps<'a'>> = ({href, children}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="relative z-50 hover:text-purple-400">
      {children}
    </a>
  );
};
