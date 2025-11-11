import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Zap, Search, Smartphone, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "WordPress", "Elementor"],
  },
  {
    icon: Palette,
    title: "Design & UX",
    skills: ["Figma", "UX/UI", "Responsive Design", "Prototipagem"],
  },
  {
    icon: Zap,
    title: "Performance",
    skills: ["Otimização", "Core Web Vitals", "Testes Automatizados", "Mobile First"],
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    skills: ["SEO Técnico", "Schema Markup", "Analytics", "Conversão"],
  },
  {
    icon: Smartphone,
    title: "Tecnologias",
    skills: ["CMS", "Git", "APIs", "Integrações"],
  },
  {
    icon: Users,
    title: "Metodologias",
    skills: ["Scrum", "Kanban", "Agile", "Trabalho em Equipe"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative scroll-fade-section bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="text-primary text-sm mb-8 tracking-[0.3em] uppercase font-semibold">
              Competências
            </h2>
            <p className="text-5xl md:text-7xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
              Tecnologias e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Habilidades
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="group relative overflow-hidden border-2 border-border/40 bg-card/40 backdrop-blur-xl hover:border-primary/50 hover-lift transition-all duration-500 animate-fade-in-up shadow-xl hover:shadow-2xl hover:shadow-primary/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent" />
                </div>

                <CardContent className="p-8 space-y-6 relative">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-primary/20">
                      <category.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-primary/5 text-foreground/80 rounded-lg border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;
