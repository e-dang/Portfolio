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
    <div className="rounded-lg border-2 border-black p-4" {...props}>
      <h1 className="text-4xl">
        {title} - {company}
      </h1>

      <div className="mt-4">
        <p>{summary}</p>
      </div>

      <div className="mt-4">
        <ul>
          {achievements.map((achievement, index) => (
            <li key={index}>
              <p>{achievement}</p>
            </li>
          ))}
        </ul>
      </div>

      <ul className="mt-3 flex flex-row flex-wrap space-x-3">
        {technologies.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};
