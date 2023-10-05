import {Badge} from './Badge';

interface ExperienceCardProps extends React.ComponentProps<'div'> {
  header: React.ReactNode;
  summary: React.ReactNode;
  achievements: string[];
  technologies: string[];
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({header, summary, achievements, technologies}) => {
  return (
    <div className="flex flex-col gap-4 rounded bg-neutral-700/40 p-20 backdrop-blur-md hover:bg-neutral-700/60">
      <h1 className="text-4xl">{header}</h1>

      <div>{summary}</div>

      <div>
        <ul className="flex flex-col gap-2">
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded before:border-2 before:border-solid before:border-purple-500 before:content-['']"
            >
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex flex-row flex-wrap gap-2">
        {technologies.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};
