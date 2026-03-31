import { Cpu, Layers, Rocket, Bot, GitBranch, BarChart3 } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const services = [
  { icon: Rocket, title: "Criação de Produtos", description: "Do conceito ao MVP. Arquiteto e construo produtos digitais completos, validados e prontos para escalar." },
  { icon: Bot, title: "Soluções com IA", description: "Integro inteligência artificial para automatizar processos, resolver problemas complexos e gerar vantagem competitiva." },
  { icon: Layers, title: "Arquitetura de Sistemas", description: "Design de sistemas robustos, escaláveis e bem estruturados. Do banco de dados à interface do usuário." },
  { icon: GitBranch, title: "Liderança Técnica", description: "Atuo como CTO, liderando times de desenvolvimento, definindo stack e garantindo qualidade de entrega." },
  { icon: Cpu, title: "Automação de Processos", description: "Transformo processos manuais em fluxos automatizados. Reduzi assinatura de contratos de 10 dias para 1." },
  { icon: BarChart3, title: "Refatoração e Redesign", description: "Modernizo sistemas legados com arquitetura limpa, melhor UX e performance otimizada." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative scroll-fade-section">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mono">Serviços</span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
              O que eu <span className="text-primary">construo</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Não faço só código. Crio soluções que transformam negócios.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <SpotlightCard
                key={s.title}
                className="group rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="p-6 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
