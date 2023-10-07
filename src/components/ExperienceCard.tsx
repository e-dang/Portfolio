import {FiExternalLink} from 'react-icons/fi';
import {Badge} from './Badge';

interface ExperienceCardProps extends React.ComponentProps<'div'> {
  header: React.ReactNode;
  summary: React.ReactNode;
  achievements: string[];
  technologies: string[];
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({header, summary, achievements, technologies}) => {
  return (
    <div className="group/experience flex flex-col gap-8 rounded bg-neutral-700/30 p-10 backdrop-blur-lg hover:bg-neutral-700/60">
      {header}

      <div className="text-md text-slate-100">{summary}</div>

      <div>
        <ul className="flex flex-col gap-4 pl-4">
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="relative pl-5 text-slate-100 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded before:border-2 before:border-solid before:border-purple-500 before:content-['']"
            >
              {achievement}
            </li>
          ))}
        </ul>
      </div>

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
      <div className="flex flex-row justify-between group-hover/experience:text-purple-400">
        <h3 className="text-3xl font-bold tracking-tight">{currentTitle}</h3>
        <a
          className="self-end text-lg font-bold before:absolute before:inset-0 before:z-10 before:content-['']"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {company}{' '}
          <FiExternalLink className="mb-1 inline transition-transform group-hover/experience:-translate-y-1 group-hover/experience:translate-x-1 group-hover/experience:text-purple-400" />
        </a>
      </div>

      {previousTitles?.map((prevTitle) => (
        <span className="text-lg font-bold text-slate-400" key={prevTitle}>
          {prevTitle}
        </span>
      ))}
    </div>
  );
}
