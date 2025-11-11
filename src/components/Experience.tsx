import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
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
    company: "UpSites",
    role: "Desenvolvedor Web Low Code",
    period: "1 ano e 11 meses",
    current: false,
    description: [
      "Desenvolvimento de sites e landing pages WordPress",
      "Implementação de boas práticas de desenvolvimento web",
      "Aplicação de conceitos de SEO e otimização",
    ],
  },
  {
    company: "Volpe Marketing Digital",
    role: "Sócio Proprietário",
    period: "1 ano",
    current: false,
    description: [
      "Especialista em marketing digital",
      "Gestão de vendas e tráfego",
      "Análise de marketing digital",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative scroll-fade-section">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="text-primary text-sm mb-8 tracking-[0.3em] uppercase font-semibold">
              Experiência
            </h2>
            <p className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Trajetória{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Profissional
              </span>
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={exp.company}
                className="group relative overflow-hidden border-2 border-border/40 bg-card/40 backdrop-blur-xl hover:border-primary/50 hover-lift transition-all duration-500 animate-fade-in-up shadow-xl hover:shadow-2xl hover:shadow-primary/10"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent" />
                </div>

                <CardContent className="p-8 md:p-10 relative">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-primary/20">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-muted-foreground font-medium mt-1">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2 ml-16">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground md:flex-col md:items-end md:text-right">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-medium">{exp.period}</span>
                      {exp.current && (
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                          Atual
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
