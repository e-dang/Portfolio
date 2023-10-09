import {Badge} from './Badge';
import {FiExternalLink} from 'react-icons/fi';
import {ReactNode} from 'react';
import Image from 'next/image';

export interface ProjectCardProps extends React.ComponentProps<'div'> {
  header: ReactNode;
  images: ReactNode;
  summary: ReactNode;
  links: ReactNode;
  technologies: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({header, images, summary, links, technologies}) => {
  return (
    <div className="relative grid grid-cols-8 gap-8 rounded bg-neutral-800/20 p-10 shadow-[inset_1px_1px_0_0_rgba(148,163,184,0.1)] backdrop-blur-lg hover:bg-neutral-800/80">
      <div className="col-span-2 flex flex-col gap-8">{images}</div>

      <div className="col-span-6 flex flex-col gap-8">
        {header}

        <div className="flex flex-col gap-4 text-slate-400">{summary}</div>

        <div className="flex flex-row gap-4">{links}</div>

        <ul className="flex flex-row flex-wrap gap-4">
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
      className="group/link before:absolute before:inset-0 before:z-0 before:content-['']"
    >
      <h3 className="text-4xl leading-tight group-hover/link:text-violet-500">
        {children}{' '}
        <FiExternalLink
          size="1.5rem"
          className="inline align-middle transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 "
        />
      </h3>
    </a>
  );
};

export const ProjectCardLink: React.FC<React.ComponentProps<'a'>> = ({href, children}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="relative z-50 hover:text-violet-500">
      {children}
    </a>
  );
};

export interface ProjectCardImageProps {
  src: string;
  alt: string;
}

export function ProjectCardImage({src, alt}: ProjectCardImageProps) {
  return (
    <div
      className="relative after:absolute after:inset-0 after:bg-violet-300/40
after:content-['']"
    >
      <Image src={src} alt={alt} width={200} height={48} />
    </div>
  );
}
