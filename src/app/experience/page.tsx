import {ExperienceCard} from '@/components/ExperienceCard';
import './Experience.css';

export default function Experience() {
  return (
    <main className="mx-auto max-w-screen-xl px-12 pt-32">
      <div className="grid grid-cols-[10rem_5rem_5rem_1fr] grid-rows-[auto_auto] gap-x-2 pb-24">
        <div className="relative col-start-3 row-span-full before:absolute before:bottom-10 before:top-[3.75rem] before:w-[0.2rem] before:bg-purple-700 before:content-['']"></div>

        <div className="col-start-1 row-start-1 flex justify-end">
          <div className="date-range-background relative h-min w-full before:absolute before:-bottom-10 before:-left-10 before:-right-10 before:-top-10 before:-z-10 before:rounded-full before:backdrop-blur-xl before:content-['']">
            May 2021 - Current
          </div>
        </div>

        <div className="relative col-start-2 row-start-1 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:border-4 before:border-purple-700 before:content-['']">
          <div className="absolute left-1 top-[2.3rem] h-[0.2rem] w-[calc(100%+0.8rem)] rotate-[30deg] bg-purple-700 " />
        </div>

        <div className="col-start-4 row-start-1 pb-10 pt-[3.75rem]">
          <ExperienceCard
            header="Software Engineer @ Fulgent Genetics"
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim provident ullam veniam consequatur praesentium earum qui eius assumenda, ducimus aliquam distinctio aperiam aliquid vel molestiae, magnam nemo voluptatem labore neque."
            achievements={[
              'Developed and deployed the user interface of the Fulgent Oncology Provider Portal, facilitating healthcare providers in managing patient information, orders, and accessing test results and requisition forms.',

              'Developed and deployed the Fulgent Oncology Admin Portal user interface, empowering internal Fulgent employees to enroll healthcare providers in Fulgent Oncology services, and efficiently access customer data required to carry out various customer support tasks.',

              'Developed and deployed a backend service that enables Fulgent Genetics&apos; frontend services to efficiently search for valid ICD-10 codes. Additionally, the service allows for Fulgent admins to upload new ICD-10 codes as they are released.',

              'Deployed and actively managed CI pipelines, compute infrastructure (EKS), and IAM policies and roles on AWS using Terraform, enabling tracking of architectural changes in code for better code reuse and easily reproducible deployments.',

              'Automated the formerly manual process of deployment using FluxCD, a GitOps style of Continuous Deployment, on staging and production EKS clusters.',

              'Decoupled the Fulgent Pharma site from a monolithic app previously deployed on bare EC2 instances into Dockerized microservices deployed on Kubernetes (EKS), improving scalability, availability, resource utilization, and automation.',
            ]}
            technologies={['Typescript', 'Kubernetes', 'Docker', 'Node.JS', 'Vue.JS']}
          />
        </div>

        <div className="col-start-1 row-start-2 flex justify-end">
          <div className="date-range-background relative h-min w-full before:absolute before:-bottom-10 before:-left-10 before:-right-10 before:-top-10 before:-z-10 before:rounded-full before:backdrop-blur-xl before:content-['']">
            February 2019 - June 2020
          </div>
        </div>

        <div className="relative col-start-2 row-start-2 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:border-4 before:border-purple-700 before:content-['']">
          <div className="absolute left-1 top-[2.3rem] h-[0.2rem] w-[calc(100%+0.8rem)] rotate-[30deg] bg-purple-700 " />
        </div>

        <div className="col-start-4 row-start-2 pb-10 pt-[3.75rem]">
          <ExperienceCard
            header="Software Engineer @ University of California, Los Angeles"
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim provident ullam veniam consequatur praesentium earum qui eius assumenda, ducimus aliquam distinctio aperiam aliquid vel molestiae, magnam nemo voluptatem labore neque."
            achievements={[
              'Created novel software (CPMG) for generating a giga-scale virtual library consisting of 2D structure macrocycle drug candidates for high throughput screening.',

              'Improved software for generating 3D conformers for macrocyclic compounds by decreasing runtimes by 98% using the framework RDKit to perform operations on the molecular graphs (ConfBuster++).',

              'Together, CPMG and ConfBuster++ resulted in an academic publication as well as a Python package available on Anaconda cloud (https://anaconda.org/e-dang/confbusterplusplus).',
            ]}
            technologies={['Python', 'RDKit']}
          />
        </div>
      </div>
    </main>
  );
}
