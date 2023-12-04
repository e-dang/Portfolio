import {ReactNode} from 'react';

export interface CardProps {
  children: ReactNode;
}

export function Card({children}: CardProps) {
  return (
    <div className="rounded bg-neutral-800/20 p-6 shadow-[inset_1px_1px_0_0_rgba(148,163,184,0.1)] backdrop-blur-lg hover:bg-neutral-800/80 sm:p-10">
      {children}
    </div>
  );
}
