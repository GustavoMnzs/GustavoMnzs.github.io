import SpotlightCard from "./SpotlightCard";

const experiences = [
  {
    company: "Olym",
    role: "Fundador e CTO",
    period: "Atual",
    current: true,
    description: [
      "Criação do produto do zero, da ideia à produção",
      "Arquitetura full-stack com React, Node.js e IA",
      "Definição de roadmap e estratégia de produto",
    ],
  },
  {
    company: "Social IA, Sabido, AtlasBase, TicHub, VestGo",
    role: "CTO",
    period: "Atual",
    current: true,
    description: [
      "Liderança técnica de múltiplos produtos simultaneamente",
      "Definição de stack, arquitetura e padrões de desenvolvimento",
      "Gestão de times e entrega contínua de features",
    ],
  },
  {
    company: "Gálata Tecnologia",
    role: "Suporte Técnico e Desenvolvedor Web",
    period: "Atual",
    current: true,
    description: [
      "Suporte ao cliente e resolução de problemas via tickets",
      "Desenvolvimento e migração de sites",
      "Trabalho em equipe junto ao time de desenvolvimento",
    ],
  },
  {
    company: "Wolfex",
    role: "Tech Lead e Desenvolvedor",
    period: "2025/2026",
    current: false,
    description: [
      "Liderança técnica da refatoração completa do sistema de logística",
      "Nova arquitetura, nova interface, melhor performance",
    ],
  },
  {
    company: "Condor",
    role: "Desenvolvedor Full-Stack",
    period: "2025/2026",
    current: false,
    description: [
      "Construção completa do sistema de facilities para gestão de operações",
      "Construção completa do sistema de contratos que reduziu o processo de 10 dias para 1 dia",
      "Automação de fluxos e assinaturas digitais",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative scroll-fade-section">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mono">Experiência</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
              Trajetória <span className="text-primary">Profissional</span>
            </h2>
          </div>
          <div className="space-y-3">
            {experiences.map((exp, i) => (
              <SpotlightCard
                key={exp.company}
                className="group rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{exp.role}</h3>
                          {exp.current && (
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground font-medium mt-1">{exp.company}</p>
                      </div>
                      <ul className="space-y-1">
                        {exp.description.map((item, j) => (
                          <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-primary/60 mt-1.5 text-[6px]">●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium mono shrink-0 ${
                      exp.current ? "bg-primary/10 text-primary border border-primary/20" : "bg-white/[0.04] text-muted-foreground border border-white/[0.06]"
                    }`}>{exp.period}</span>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
