import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const updateIsMobile = () => {
      setIsMobile(!mediaQuery.matches || 'ontouchstart' in window);
    };
    updateIsMobile();

    if (!mediaQuery.matches) return;

    let animationFrameId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('button, a, input, select, textarea, [role="button"], .cursor-pointer')
        );
        setIsPointer(isInteractive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const animate = () => {
      // Smooth interpolation for fluid follower effect
      currentX += (targetX - currentX) * 0.35;
      currentY += (targetY - currentY) * 0.35;
      setPosition({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Thin Circular Outline */}
      <div
        className={`fixed -top-4 -left-4 w-8 h-8 rounded-full border border-slate-400/80 dark:border-slate-400/60 transition-transform duration-150 ease-out flex items-center justify-center`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) ${
            isPointer ? 'scale(1.3)' : 'scale(1)'
          }`,
          willChange: 'transform'
        }}
      >
        {/* Inner Solid Gold/Amber Dot (Matching Reference Image) */}
        <div className="w-2.5 h-2.5 rounded-full bg-[#d97706] dark:bg-amber-400 shadow-xs" />
      </div>
    </div>
  );
};
