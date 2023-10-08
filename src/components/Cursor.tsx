'use client';
import {useCallback, useEffect, useRef} from 'react';

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!cursorRef || !cursorRef.current) {
      return;
    }

    cursorRef.current.style.display = 'block';
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
      className="pointer-events-none fixed z-50 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-solid border-violet-500/70 duration-100 ease-out after:pointer-events-none after:absolute after:-inset-1   after:animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite] after:rounded-full after:border-4 after:border-violet-500/50 after:content-['']"
    />
  );
}
