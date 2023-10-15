import {ExperienceCard, ExperienceCardHeader} from '@/components/ExperienceCard';
import {Navbar} from '@/components/Navbar';
import {TimelineSection} from '@/components/TimelineSection';
import {FiExternalLink} from 'react-icons/fi';

export default function Experience() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-screen-xl px-12 pt-48">
        <div className="grid grid-cols-[10rem_5rem_5rem_1fr] grid-rows-[auto_auto] gap-x-2 pb-48">
          <div className="relative col-start-3 row-span-full before:absolute before:-bottom-20 before:top-[3.75rem] before:w-[0.2rem] before:bg-violet-500 before:content-[''] after:absolute after:-bottom-24 after:-left-[0.41rem] after:h-4 after:w-4 after:rounded-full after:border-[0.2rem] after:border-violet-500 after:content-['']" />

          <TimelineSection idx={1} dateRange="May 2021 - Current">
            <ExperienceCard
              header={
                <ExperienceCardHeader
                  currentTitle="Senior Software Engineer"
                  previousTitles={['Software Engineer']}
                  company="Fulgent Genetics"
                  href="https://www.fulgentgenetics.com/"
                />
              }
              summary="At Fulgent Genetics, I began my employment by integrating DevOps practices into our team's development cycle. In my second year, while continuing to manage the DevOps infrastructure I setup, I began working on the frontend and backend for our new service, Fulgent Oncology. Now as a Senior Software Engineer, I am continuing to focus on building out features for Fulgent Oncology and optimizing our internal tooling."
              achievements={[
                'Developed and deployed the user interface and significantly contributed to the backend development of the Fulgent Oncology Provider Portal, facilitating healthcare providers in managing patient information, orders, and accessing test results and requisition forms.',

                'Created and launched the user interface for the Fulgent Oncology Admin Portal and significantly contributed to its backend development, empowering Fulgent employees to enroll healthcare providers in Fulgent Oncology services, and efficiently access customer data required to carry out various customer support tasks.',

                'Developed and deployed a Node.js service to efficiently search, filter, and upload ICD-10 codes.',

                'Deployed and actively managed CI pipelines, compute infrastructure (EKS), and IAM policies and roles on AWS using Terraform, enabling tracking of architectural changes in code for better code reuse and easily reproducible deployments.',

                "Automated the deployment of Fulgent's services using FluxCD on staging and production clusters, decreasing deployment times by 92%.",
              ]}
              technologies={['Typescript', 'Node.JS', 'Vue.JS', 'Docker', 'Kubernetes']}
            />
          </TimelineSection>

          <TimelineSection idx={2} dateRange="February 2019 - June 2020">
            <ExperienceCard
              header={
                <ExperienceCardHeader currentTitle="Software Engineer" company="UCLA" href="https://www.ucla.edu/" />
              }
              summary={
                <p>
                  As a software engineer working for{' '}
                  <a
                    href="http://www.chem.ucla.edu/harran/"
                    className="relative text-white hover:text-violet-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dr. Harran
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.chem.ucla.edu/houk/"
                    className="relative text-white hover:text-violet-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dr. Houk&apos;s
                  </a>{' '}
                  chemistry labs at UCLA, I created two Python programs, CPMG and ConfBuster++, for generating and
                  screening large virtual libraries of macrocyclic drug candidates based on the chemistry developed in
                  their labs. Using UCLA&apos;s Hoffman2 cluster, I was able to demonstrate these programs could scale
                  to billions of compounds. Our findings were published in the Proceedings of the National Academy of
                  Sciences.
                </p>
              }
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
    </>
  );
}
