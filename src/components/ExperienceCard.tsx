import {FiExternalLink} from 'react-icons/fi';
import {Badge} from './Badge';
import {Card} from './Card';
import {spawn} from 'child_process';

interface ExperienceCardProps extends React.ComponentProps<'div'> {
  header: React.ReactNode;
  summary: React.ReactNode;
  links?: React.ReactNode;
  achievements: string[];
  technologies: string[];
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({header, summary, achievements, links, technologies}) => {
  return (
    <Card>
      <div className="relative flex flex-col gap-8 text-sm">
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
    </Card>
  );
};

export interface ExperienceCardHeaderProps {
  currentTitle: string;
  previousTitles?: string[];
  company: string;
  href: string;
}

export function ExperienceCardHeader({currentTitle, previousTitles, company, href}: ExperienceCardHeaderProps) {
  const words = company.split(' ');
  return (
    <div className="flex flex-col text-lg">
      <div className="group/experience flex flex-col justify-between gap-4 sm:flex-row">
        <h3 className="order-2 font-bold tracking-tight sm:order-1 group-hover/experience:sm:text-violet-500">
          {currentTitle}
        </h3>
        <a
          className="order-1 font-bold before:absolute before:inset-0 before:z-10 before:hidden before:content-[''] group-hover/experience:text-violet-500 sm:order-2 before:sm:block"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {words.slice(0, words.length - 1).join(' ')}{' '}
          <span className="inline-flex items-baseline">
            {words[words.length - 1]}
            <FiExternalLink className="ml-3 h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/experience:-translate-y-1 group-hover/experience:translate-x-1 group-hover/experience:text-violet-500" />
          </span>
        </a>
      </div>

      {previousTitles?.map((prevTitle) => (
        <span className="text-base font-bold text-slate-500" key={prevTitle}>
          {prevTitle}
        </span>
      ))}
    </div>
  );
}
