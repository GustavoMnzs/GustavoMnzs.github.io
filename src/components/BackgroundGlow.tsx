import { useEffect, useState } from 'react';

const BackgroundGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main glow that follows cursor */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl transition-all duration-700 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, hsl(180, 80%, 50%) 0%, transparent 70%)',
        }}
      />
      
      {/* Secondary smaller glow */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-2xl transition-all duration-1000 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, hsl(200, 70%, 60%) 0%, transparent 60%)',
        }}
      />

      {/* Ambient geometric shapes */}
      <div
        className="absolute w-2 h-2 rounded-full bg-primary/30 transition-all duration-[1500ms] ease-out"
        style={{
          left: `${position.x + 100}px`,
          top: `${position.y - 50}px`,
        }}
      />
      <div
        className="absolute w-1.5 h-1.5 rounded-full bg-primary/20 transition-all duration-[2000ms] ease-out"
        style={{
          left: `${position.x - 80}px`,
          top: `${position.y + 60}px`,
        }}
      />
      <div
        className="absolute w-1 h-1 rounded-full bg-primary/15 transition-all duration-[2500ms] ease-out"
        style={{
          left: `${position.x + 60}px`,
          top: `${position.y + 80}px`,
        }}
      />
    </div>
  );
};

export default BackgroundGlow;
