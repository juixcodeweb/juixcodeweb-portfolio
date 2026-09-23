import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const outerRingRef = useRef<HTMLDivElement | null>(null);
  const innerDotRef = useRef<HTMLDivElement | null>(null);
  const ringInnerRef = useRef<HTMLDivElement | null>(null);
  const dotInnerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only run on clients that support pointer (disable on pure touch devices)
    if (typeof window === 'undefined') return;

    const isTouchOnly =
      window.matchMedia('(pointer: coarse)').matches &&
      !window.matchMedia('(pointer: fine)').matches;

    if (isTouchOnly) return;

    let animationFrameId: number;
    let isVisible = false;
    let isHoveringInteractive = false;
    let isClicking = false;
    let isOverTextInput = false;

    // Position coordinates
    let targetX = -100;
    let targetY = -100;
    let ringX = -100;
    let ringY = -100;

    const updateVisibility = (visible: boolean) => {
      isVisible = visible;
      if (visible && !isOverTextInput) {
        document.body.classList.add('custom-cursor-active');
        if (outerRingRef.current) outerRingRef.current.style.opacity = '1';
        if (innerDotRef.current) innerDotRef.current.style.opacity = '1';
      } else {
        document.body.classList.remove('custom-cursor-active');
        if (outerRingRef.current) outerRingRef.current.style.opacity = '0';
        if (innerDotRef.current) innerDotRef.current.style.opacity = '0';
      }
    };

    const updateInteractiveStyles = () => {
      if (!ringInnerRef.current || !dotInnerRef.current) return;

      if (isOverTextInput) {
        outerRingRef.current!.style.opacity = '0';
        innerDotRef.current!.style.opacity = '0';
        document.body.classList.remove('custom-cursor-active');
        return;
      }

      if (isVisible) {
        outerRingRef.current!.style.opacity = '1';
        innerDotRef.current!.style.opacity = '1';
        document.body.classList.add('custom-cursor-active');
      }

      if (isClicking) {
        ringInnerRef.current.style.transform = 'translate(-50%, -50%) scale(0.85)';
        dotInnerRef.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
      } else if (isHoveringInteractive) {
        ringInnerRef.current.style.transform = 'translate(-50%, -50%) scale(1.35)';
        ringInnerRef.current.style.borderColor = 'rgba(217, 119, 6, 0.7)';
        dotInnerRef.current.style.transform = 'translate(-50%, -50%) scale(1.1)';
      } else {
        ringInnerRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        ringInnerRef.current.style.borderColor = '';
        dotInnerRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      // Update inner dot immediately to eliminate any perceptible lag
      if (innerDotRef.current) {
        innerDotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }

      // First time moving: initialize ring position right at mouse to avoid fly-in artifact
      if (!isVisible) {
        ringX = targetX;
        ringY = targetY;
        if (outerRingRef.current) {
          outerRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        }
        updateVisibility(true);
      }

      // Check element under cursor
      const target = e.target as HTMLElement | null;
      if (target) {
        const isTextInput = Boolean(
          target.closest('input, textarea, select, [contenteditable="true"]')
        );
        const isInteractive = Boolean(
          target.closest('button, a, [role="button"], [tabindex], .cursor-pointer')
        );

        if (isTextInput !== isOverTextInput || isInteractive !== isHoveringInteractive) {
          isOverTextInput = isTextInput;
          isHoveringInteractive = isInteractive;
          updateInteractiveStyles();
        }
      }
    };

    const handleMouseDown = () => {
      isClicking = true;
      updateInteractiveStyles();
    };

    const handleMouseUp = () => {
      isClicking = false;
      updateInteractiveStyles();
    };

    const handleMouseLeave = () => {
      updateVisibility(false);
    };

    const handleMouseEnter = () => {
      updateVisibility(true);
    };

    const handleTouchStart = () => {
      // User tapped the screen - hide custom cursor on touch gestures
      updateVisibility(false);
    };

    // Smooth animation loop for the outer ring using lerp
    const animate = () => {
      if (isVisible) {
        // Fluid follow speed factor (0.28 provides smooth tracking without sluggish drag)
        ringX += (targetX - ringX) * 0.28;
        ringY += (targetY - ringY) * 0.28;

        if (outerRingRef.current) {
          outerRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('blur', handleMouseLeave);

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('blur', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
      {/* Outer Smooth Following Ring */}
      <div
        ref={outerRingRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform opacity-0"
        style={{
          transition: 'opacity 0.15s ease-out'
        }}
      >
        <div
          ref={ringInnerRef}
          className="w-8 h-8 rounded-full border border-slate-400/80 dark:border-slate-400/60 transition-transform duration-150 ease-out flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Inner Immediate Precision Dot (Gold / Amber) */}
      <div
        ref={innerDotRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform opacity-0"
        style={{
          transition: 'opacity 0.15s ease-out'
        }}
      >
        <div
          ref={dotInnerRef}
          className="w-2.5 h-2.5 rounded-full bg-[#d97706] dark:bg-amber-400 shadow-xs transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};
