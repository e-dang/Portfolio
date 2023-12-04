import {ExperienceCard, ExperienceCardHeader} from '@/components/ExperienceCard';
import {Navbar} from '@/components/Navbar';
import {TimelineSection} from '@/components/TimelineSection';
import {AiFillGithub, AiOutlineFileText} from 'react-icons/ai';
import {SiAnaconda} from 'react-icons/si';

export default function Experience() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-screen-xl px-4 pt-16 sm:px-12 sm:pt-24 lg:pt-48">
        <div className="lg:grid lg:grid-cols-[10rem_5rem_5rem_1fr] lg:grid-rows-[auto_auto] lg:gap-x-2 lg:pb-48">
          <div className="hidden before:absolute before:-bottom-20 before:top-[3.75rem] before:w-[0.2rem] before:bg-violet-500 before:content-[''] after:absolute after:-bottom-24 after:-left-[0.41rem] after:h-4 after:w-4 after:rounded-full after:border-[0.2rem] after:border-violet-500 after:content-[''] lg:relative lg:col-start-3 lg:row-span-full lg:block" />

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
              summary={
                <p>
                  At Fulgent Genetics, I began my employment by integrating DevOps practices into our team&apos;s
                  development cycle. In my second year, while continuing to manage the DevOps infrastructure I setup, I
                  began working on the frontend and backend for our new service,{' '}
                  <a
                    href="https://fulgentoncology.com/"
                    className="relative z-20 text-white hover:text-violet-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fulgent Oncology
                  </a>
                  . Now as a Senior Software Engineer, I am continuing to focus on building out features for Fulgent
                  Oncology and optimizing our internal tooling.
                </p>
              }
              achievements={[
                'Developed and deployed the user interface and significantly contributed to the backend development of the Fulgent Oncology Provider Portal, facilitating healthcare providers in managing patient information, orders, and accessing test results and requisition forms.',

                'Created and launched the user interface for the Fulgent Oncology Admin Portal and significantly contributed to its backend development, empowering Fulgent employees to enroll healthcare providers in Fulgent Oncology services, and efficiently access customer data required to carry out various customer support tasks.',

                'Developed and deployed a Node.js service to efficiently search, filter, and upload ICD-10 codes.',

                'Deployed and actively managed CI pipelines, compute infrastructure (EKS), and IAM policies and roles on AWS using Terraform, enabling tracking of architectural changes in code for better code reuse and easily reproducible deployments.',

                "Automated the deployment of Fulgent's services using FluxCD on staging and production clusters, decreasing deployment times by 92%.",
              ]}
              technologies={['TypeScript', 'Node.js', 'Vue.js', 'Express.js', 'Docker', 'Kubernetes']}
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
                    className="relative z-20 text-white hover:text-violet-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dr. Harran
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://www.chem.ucla.edu/houk/"
                    className="relative z-20 text-white hover:text-violet-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dr. Houk&apos;s
                  </a>{' '}
                  chemistry labs at UCLA, I created two Python programs, CPMG and ConfBuster++, for generating and
                  screening large virtual libraries of macrocyclic drug candidates based on the chemistry developed in
                  their labs. Using{' '}
                  <a
                    href="https://oarc.ucla.edu/advanced-computing-resources"
                    className="relative z-20 text-white hover:text-violet-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UCLA&apos;s Hoffman2 cluster
                  </a>
                  , I was able to demonstrate these programs could scale to billions of compounds.{' '}
                  <a
                    href="https://www.pnas.org/doi/abs/10.1073/pnas.2007304117?doi=10.1073/pnas.2007304117"
                    className="relative z-20 text-white hover:text-violet-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Our findings
                  </a>{' '}
                  were published in the{' '}
                  <a
                    href="https://www.pnas.org/"
                    className="relative z-20 text-white hover:text-violet-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Proceedings of the National Academy of Sciences
                  </a>
                  .
                </p>
              }
              links={
                <ul className="group/experience_links z-20 flex flex-row flex-wrap gap-6">
                  <a
                    href="https://github.com/e-dang/Composite-Peptide-Macrocycle-Generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-slate-400 transition-all hover:-translate-y-1 hover:!text-violet-500 group-hover/experience_links:text-gray-500/50"
                  >
                    <AiFillGithub size="2rem" />
                  </a>
                  <a
                    href="https://github.com/e-dang/ConfBusterPlusPlus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-slate-400 transition-all hover:-translate-y-1 hover:!text-violet-500 group-hover/experience_links:text-gray-500/50"
                  >
                    <AiFillGithub size="2rem" />
                  </a>
                  <a
                    href="https://anaconda.org/e-dang/confbusterplusplus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-slate-400 transition-all hover:-translate-y-1 hover:!text-violet-500 group-hover/experience_links:text-gray-500/50"
                  >
                    <SiAnaconda size="1.75rem" />
                  </a>
                  <a
                    href="https://www.pnas.org/doi/abs/10.1073/pnas.2007304117?doi=10.1073/pnas.2007304117"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-slate-400 transition-all hover:-translate-y-1 hover:!text-violet-500 group-hover/experience_links:text-gray-500/50"
                  >
                    <AiOutlineFileText size="1.75rem" />
                  </a>
                </ul>
              }
              achievements={[
                'Created novel software (CPMG) for generating a giga-scale virtual library consisting of 2D structure macrocycle drug candidates for high throughput screening.',

                'Improved software for generating 3D conformers for macrocyclic compounds by decreasing runtimes by 98% using the framework RDKit to perform operations on the molecular graphs (ConfBuster++).',

                'Together, CPMG and ConfBuster++ resulted in an academic publication as well as a Python package available on Anaconda cloud.',
              ]}
              technologies={['Python', 'RDKit']}
            />
          </TimelineSection>
        </div>
      </main>
    </>
  );
}
