import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor-hover]')) {
        setIsHovering(true);
        setShowText(true);
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor-hover]')) {
        setIsHovering(false);
        setShowText(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Custom cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            isHovering
              ? 'w-28 h-28 bg-primary/20 backdrop-blur-md border border-primary/40'
              : 'w-3 h-3 bg-primary'
          }`}
        >
          {showText && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] font-inter font-medium tracking-wide text-primary whitespace-nowrap">
                Ver Projeto
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
