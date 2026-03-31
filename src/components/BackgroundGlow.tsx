const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ clipPath: 'inset(0)' }}>
      <div className="absolute -top-40 -left-20 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute -bottom-20 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
    </div>
  );
};

export default BackgroundGlow;
