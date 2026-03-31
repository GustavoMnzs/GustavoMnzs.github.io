import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 9, suffix: "", label: "Produtos entregues" },
  { value: 5, suffix: "", label: "Empresas como CTO" },
  { value: 10, suffix: "x", label: "Mais rápido em contratos" },
  { value: 5, suffix: "+", label: "Times liderados" },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = duration / value;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-primary mono tabular-nums">
      {count}{suffix}
    </span>
  );
}

const Impact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative scroll-fade-section" ref={ref}>
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] p-8 md:p-12 overflow-hidden relative">
            {/* Glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-primary/8 rounded-full blur-[100px]" />

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
