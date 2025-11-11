import { Monitor, FileText, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Monitor,
    title: "Websites",
    description:
      "Sites institucionais modernos em WordPress/Elementor, com performance, segurança e escalabilidade desde o dia 1.",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description:
      "Páginas focadas em conversão para lançamentos, captação de leads e campanhas rápidas, responsivas e mensuráveis.",
  },
  {
    icon: Search,
    title: "SEO Técnico & Conteúdo",
    description:
      "Estrutura limpa, schema, velocidade e copy alinhada à busca para ranquear, gerar tráfego qualificado e reduzir CAC.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative scroll-fade-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-primary text-sm mb-6 tracking-[0.3em] uppercase font-medium">O que eu faço?</h2>
            <p className="text-4xl md:text-6xl font-light text-foreground max-w-4xl mx-auto leading-tight">
              O mais importante não é o que eu faço, mas o que eu posso{" "}
              <span className="text-primary">entregar pra você</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group relative overflow-hidden border-border/30 bg-card/30 backdrop-blur-xl hover:border-primary/30 hover-lift transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent" />
                </div>
                
                <CardContent className="p-10 space-y-6 relative">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
                      <service.icon className="w-7 h-7 text-primary/80 group-hover:text-primary transition-colors duration-500" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-medium text-foreground group-hover:text-primary transition-colors duration-500">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
