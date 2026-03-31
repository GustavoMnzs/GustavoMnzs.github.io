import { Button } from "@/components/ui/button";
import { ExternalLink, Crown, Code2, Truck, Building2, GraduationCap, Globe, BarChart3, FileSignature, ArrowUpRight, BrainCircuit, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SpotlightCard from "./SpotlightCard";

const featuredProject = {
  slug: "olym",
  name: "Olym",
  role: "Fundador e CTO",
  description: "Meu produto principal. Plataforma criada do zero, da concepção à produção. Arquitetura full-stack com React, Node.js e inteligência artificial integrada.",
  stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "IA", "Vercel"],
};

const projects = [
  { name: "Social IA", slug: "social-ia", role: "CTO", icon: BrainCircuit, description: "Plataforma de IA para redes sociais. Automação e geração de conteúdo.", tags: ["IA", "SaaS", "CTO"] },
  { name: "Sabido", slug: "sabido", role: "CTO", icon: GraduationCap, description: "Plataforma educacional inteligente. Liderança técnica completa.", tags: ["EdTech", "CTO", "IA"] },
  { name: "AtlasBase", slug: "atlasbase", role: "CTO", icon: BarChart3, description: "Infraestrutura de dados. Arquitetura e liderança técnica.", tags: ["Data", "CTO", "Arquitetura"] },
  { name: "TicHub", slug: "tichub", role: "CTO", icon: Code2, description: "Hub de tecnologia. Estratégia técnica e desenvolvimento.", tags: ["Tech", "CTO", "Plataforma"] },
  { name: "VestGo", slug: "vestgo", role: "CTO", icon: Globe, description: "Plataforma de vestibular. Liderança técnica e arquitetura.", tags: ["EdTech", "CTO", "Full-Stack"] },
  { name: "Wolfex", slug: "wolfex", role: "Tech Lead", icon: Truck, description: "Redesign e refatoração total do sistema de logística.", tags: ["Logística", "Tech Lead", "Redesign"] },
  { name: "Condor | Contratos", slug: "condor-contratos", role: "Dev Full-Stack", icon: FileSignature, description: "Sistema que reduziu contratos de 10 dias para 1 dia.", tags: ["Automação", "Contratos", "10→1 dia"] },
  { name: "Condor | Facilities", slug: "condor-facilities", role: "Dev Full-Stack", icon: Building2, description: "Sistema completo de facilities e gestão de operações.", tags: ["Facilities", "Sistemas", "Full-Stack"] },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 relative scroll-fade-section">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mono">Projetos</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
              Produtos que <span className="text-primary">construí</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">De startups a sistemas enterprise, cada projeto com impacto real.</p>
          </div>

          {/* Featured */}
          <SpotlightCard
            className="rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] mb-4 animate-fade-in-up cursor-pointer"
          >
            <div className="p-8 md:p-10 relative" onClick={() => navigate("/projeto/olym")}>
              <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mono">Destaque</div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{featuredProject.name}</h3>
                  <span className="text-sm text-primary font-medium mono">{featuredProject.role}</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mb-6">{featuredProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.stack.map((t) => (
                  <span key={t} className="px-3 py-1.5 text-xs bg-white/[0.04] text-muted-foreground rounded-lg border border-white/[0.06] mono">{t}</span>
                ))}
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold shadow-[0_0_20px_hsl(180,100%,50%,0.15)] hover:shadow-[0_0_30px_hsl(180,100%,50%,0.3)] transition-all duration-300">
                Ver Case Study <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </SpotlightCard>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((p, i) => (
              <SpotlightCard
                key={p.slug}
                className="group rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="p-6 space-y-4" onClick={() => navigate(`/projeto/${p.slug}`)}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                        <p.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{p.name}</h3>
                        <span className="text-xs text-primary/80 font-medium mono">{p.role}</span>
                      </div>
                    </div>
                    <div className="text-muted-foreground group-hover:text-primary transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-xs bg-white/[0.04] text-muted-foreground rounded-lg border border-white/[0.06] group-hover:border-white/[0.1] group-hover:text-foreground/80 transition-all duration-300 mono">{tag}</span>
                    ))}
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

export default Projects;
