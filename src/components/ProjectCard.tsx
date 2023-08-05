import {Badge} from './Badge';

export interface ProjectCardProps extends React.ComponentProps<'div'> {
  title: string;
  summary: string;
  technologies: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({title, summary, technologies, ...props}) => {
  return (
    <div className="container bg-blue-300  p-5" {...props}>
      <h1 className="text-4xl">{title}</h1>

      <div className="mt-4 w-full">
        <p>{summary}</p>
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
