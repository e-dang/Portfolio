import {FiExternalLink} from 'react-icons/fi';
import {Badge} from './Badge';

interface ExperienceCardProps extends React.ComponentProps<'div'> {
  header: React.ReactNode;
  summary: React.ReactNode;
  links?: React.ReactNode;
  achievements: string[];
  technologies: string[];
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({header, summary, achievements, links, technologies}) => {
  return (
    <div className="relative flex flex-col gap-8 rounded bg-neutral-800/20 p-10 shadow-[inset_1px_1px_0_0_rgba(148,163,184,0.1)] backdrop-blur-lg hover:bg-neutral-800/80">
      {header}

      <div className="text-slate-400">{summary}</div>

      <ul className="flex flex-col gap-4 pl-4">
        {achievements.map((achievement, index) => (
          <li
            key={index}
            className="relative pl-5 text-slate-400 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded before:border-2 before:border-solid before:border-violet-500 before:content-['']"
          >
            {achievement}
          </li>
        ))}
      </ul>

      {links}

      <ul className="flex flex-row flex-wrap gap-4">
        {technologies.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};

export interface ExperienceCardHeaderProps {
  currentTitle: string;
  previousTitles?: string[];
  company: string;
  href: string;
}

export function ExperienceCardHeader({currentTitle, previousTitles, company, href}: ExperienceCardHeaderProps) {
  return (
    <div className="flex flex-col">
      <div className="group/experience flex flex-row justify-between">
        <h3 className="text-3xl font-bold tracking-tight group-hover/experience:text-violet-500">{currentTitle}</h3>
        <a
          className="self-end text-lg font-bold before:absolute before:inset-0 before:z-10 before:hidden before:content-[''] group-hover/experience:text-violet-500 before:sm:block"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {company}{' '}
          <FiExternalLink className="mb-1 inline transition-transform group-hover/experience:-translate-y-1 group-hover/experience:translate-x-1 group-hover/experience:text-violet-500" />
        </a>
      </div>

      {previousTitles?.map((prevTitle) => (
        <span className="text-lg font-bold text-slate-500" key={prevTitle}>
          {prevTitle}
        </span>
      ))}
    </div>
  );
}
