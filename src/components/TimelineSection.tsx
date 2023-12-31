export interface TimelineSectionProps {
  idx: number;
  dateRange: string;
  children: React.ReactNode;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({idx, dateRange, children}) => {
  return (
    <>
      <div className={`col-start-1 hidden lg:block row-start-${idx} flex`}>
        <div className="blur-mask relative h-min w-full pr-2 text-right before:absolute before:-bottom-20 before:-left-10 before:-right-10 before:-top-20 before:-z-10 before:rounded-full before:backdrop-blur-xl before:content-['']">
          {dateRange}
        </div>
      </div>

      <div
        className={`relative col-start-2 hidden lg:block row-start-${idx} before:absolute before:-left-1 before:top-[0.3rem] before:h-4 before:w-4 before:rounded-full before:border-[0.2rem] before:border-violet-500 before:content-['']`}
      >
        <div className="absolute left-1 top-[2.3rem] hidden h-[0.2rem] w-[calc(100%+0.8rem)] rotate-[30deg] bg-violet-500 lg:block" />
      </div>

      <div className={`col-start-4 row-start-${idx} pb-10 lg:pt-[3.75rem]`}>{children}</div>
    </>
  );
};
