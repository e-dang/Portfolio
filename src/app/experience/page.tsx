import {ExperienceCard} from '@/components/ExperienceCard';
import {TimelineSection} from '@/components/TimelineSection';

export default function Experience() {
  return (
    <main className="mx-auto max-w-screen-xl px-12 pt-32">
      <div className="grid grid-cols-[10rem_5rem_5rem_1fr] grid-rows-[auto_auto] gap-x-2 pb-24">
        <div className="relative col-start-3 row-span-full before:absolute before:bottom-0 before:top-[3.75rem] before:w-[0.2rem] before:bg-purple-500 before:content-[''] after:absolute after:-bottom-4 after:-left-[0.41rem] after:h-4 after:w-4 after:rounded-full after:border-[0.2rem] after:border-purple-500 after:content-['']" />

        <TimelineSection idx={1} dateRange="May 2021 - Current">
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
        </TimelineSection>

        <TimelineSection idx={2} dateRange="February 2019 - June 2020">
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
        </TimelineSection>
      </div>
    </main>
  );
}
