import {Badge} from './Badge';

interface ExperienceCardProps extends React.ComponentProps<'div'> {
  title: string;
  company: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  summary,
  achievements,
  technologies,
  ...props
}) => {
  return (
    <div className="rounded-lg border-2 border-purple-500 p-10" {...props}>
      <h1 className="text-4xl">
        {title} @ {company}
      </h1>

      <div className="mt-8">
        <p>{summary}</p>
      </div>

      <div className="mt-8">
        <ul>
          {achievements.map((achievement, index) => (
            <li
              key={index}
              className="relative mb-4 pl-5 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded before:border-2 before:border-solid before:border-purple-500 before:content-['']"
            >
              {achievement}
            </li>
          ))}
        </ul>
      </div>

      <ul className="mt-8 flex flex-row flex-wrap gap-4">
        {technologies.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};
