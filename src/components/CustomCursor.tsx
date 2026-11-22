import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, input, textarea, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-red-600 rounded-full pointer-events-none z-[9999] hidden lg:block transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(${pos.x - 16}px, ${pos.y - 16}px, 0) scale(${isHovering ? 1.5 : 1})`,
          backgroundColor: isHovering ? 'rgba(255, 13, 0, 0.12)' : 'rgba(255, 13, 0, 0)',
        }}
        aria-hidden="true"
      />
      <div
        className="fixed top-0 left-0 w-1 h-1 bg-red-600 rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{
          transform: `translate3d(${pos.x - 2}px, ${pos.y - 2}px, 0)`,
        }}
        aria-hidden="true"
      />
    </>
  );
}
