import {Badge} from './Badge';
import {FiExternalLink} from 'react-icons/fi';
import {ReactNode} from 'react';
import Image from 'next/image';
import {Card} from './Card';

export interface ProjectCardProps extends React.ComponentProps<'div'> {
  header: ReactNode;
  images: ReactNode;
  summary: ReactNode;
  links: ReactNode;
  technologies: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({header, images, summary, links, technologies}) => {
  return (
    <Card>
      <div className="relative grid gap-8 text-sm lg:grid-cols-8">
        <div className="flex flex-col gap-8 lg:order-2 lg:col-span-6">
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

        <div className="hide-scroll-bar flex gap-8 overflow-x-auto lg:order-1 lg:col-span-2 lg:flex-col">{images}</div>
      </div>
    </Card>
  );
};

export const ProjectCardHeader: React.FC<React.ComponentProps<'a'>> = ({href, children}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link before:absolute before:inset-0 before:z-0 before:hidden before:content-[''] before:sm:block"
    >
      <h3 className="text-lg leading-tight group-hover/link:text-violet-500">
        {children}
        <FiExternalLink className="ml-3 inline-block h-4 w-4 translate-y-[-1px] transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
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
    <div className="relative flex-shrink-0 after:absolute after:inset-0 after:bg-violet-300/40 after:content-['']">
      <Image src={src} alt={alt} width={100} height={24} />
    </div>
  );
}
