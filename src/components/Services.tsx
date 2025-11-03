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
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-primary text-lg mb-4 tracking-wider uppercase">O que eu faço?</h2>
            <p className="text-4xl md:text-5xl font-light text-muted-foreground max-w-4xl mx-auto">
              O mais importante não é o que eu faço, mas o que eu posso entregar pra você.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
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

export default Services;
