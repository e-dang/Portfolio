'use client';
import {useCallback, useEffect, useRef} from 'react';

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!cursorRef || !cursorRef.current) {
      return;
    }

    cursorRef.current.style.left = `${event.clientX}px`;
    cursorRef.current.style.top = `${event.clientY}px`;
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none hidden sm:fixed sm:z-50 sm:block sm:h-6 sm:w-6 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-full sm:border-4 sm:border-solid sm:border-violet-500/70 sm:duration-100 sm:ease-out sm:after:pointer-events-none sm:after:absolute sm:after:-inset-1 sm:after:animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite] sm:after:rounded-full sm:after:border-4 sm:after:border-violet-500/50 sm:after:content-['']"
    />
  );
}
