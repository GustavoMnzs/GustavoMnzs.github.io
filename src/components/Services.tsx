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
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="text-primary text-sm mb-8 tracking-[0.3em] uppercase font-semibold">O que eu faço?</h2>
            <p className="text-5xl md:text-7xl font-bold text-foreground max-w-5xl mx-auto leading-tight">
              O mais importante não é o que eu faço, mas o que eu posso{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">entregar pra você</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group relative overflow-hidden border-2 border-border/40 bg-card/40 backdrop-blur-xl hover:border-primary/50 hover-lift transition-all duration-500 animate-fade-in-up shadow-xl hover:shadow-2xl hover:shadow-primary/10"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent" />
                </div>
                
                <CardContent className="p-10 space-y-6 relative">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-primary/20">
                      <service.icon className="w-8 h-8 text-primary group-hover:text-primary transition-colors duration-500" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-base">
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
