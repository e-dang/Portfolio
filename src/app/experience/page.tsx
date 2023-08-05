import {ExperienceCard} from '@/components/ExperienceCard';
import './Experience.css';

export default function Experience() {
  return (
    <>
      <div className="mask fixed top-0 z-10 h-[26rem] w-full"></div>
      <div className="fixed top-14 z-20 h-20 w-full bg-neutral-800"></div>

      <main className="mx-auto mt-32 max-w-screen-xl">
        <div className="relative before:absolute before:bottom-0 before:left-1/4 before:top-1 before:z-10 before:w-2 before:bg-black before:content-['']">
          <div className="sticky left-1/4 top-32 z-20 w-1/2">
            <div className="relative -left-8 flex flex-shrink">
              <h1 className="border-b-8 border-black bg-neutral-800 p-6 text-6xl">Work Experience</h1>
            </div>
          </div>

          <div className="relative left-1/4 my-40 w-1/2">
            <div className="sticky top-[26rem]">
              <div className="absolute -left-4 h-0 w-0 border-x-[20px] border-y-4 border-solid border-black"></div>
            </div>

            <div className="relative left-1/4">
              <ExperienceCard
                title="Software Engineer"
                company="Fulgent Genetics"
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
          </div>

          <div className="relative left-1/4 my-40 w-1/2">
            <div className="sticky top-[26rem]">
              <div className="absolute -left-4 h-0 w-0 border-x-[20px] border-y-4 border-solid border-black"></div>
            </div>

            <div className="relative left-1/4">
              <ExperienceCard
                title="Software Engineer"
                company="University of California, Los Angeles"
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

          <div className="relative left-1/4 w-1/2">
            <div className="sticky top-[26rem]">
              <div className="absolute -left-4 h-0 w-0 border-x-[20px] border-y-4 border-solid border-black"></div>
            </div>
          </div>
        </div>

        <div className="h-[992px]" />
      </main>
    </>
  );
}
