import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import seastormImage from "@/assets/seastorm.png";
import equilibriumImage from "@/assets/equilibrium.png";
import snowfoxImage from "@/assets/snowfox.png";
import imagnisImage from "@/assets/imagnis.png";

const projects = [
  {
    name: "SeaStorm",
    url: "https://seastorm.com.br/",
    image: seastormImage,
    year: "2023",
    type: "Website Institucional",
  },
  {
    name: "Equilibrium Latam",
    url: "https://equilibriumlatam.com/",
    image: equilibriumImage,
    year: "2023",
    type: "Website Institucional",
  },
  {
    name: "Snowfox AI",
    url: "https://snowfox-ai.com/",
    image: snowfoxImage,
    year: "2024",
    type: "Website Corporativo",
  },
  {
    name: "Imagnis",
    url: "https://imagnis.com.br/",
    image: imagnisImage,
    year: "2024",
    type: "Website Institucional",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative bg-secondary/30 scroll-fade-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-primary text-lg mb-4 tracking-wider uppercase">Projetos</h2>
            <p className="text-4xl md:text-5xl font-light text-foreground">
              Trabalhos Selecionados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.name}
                data-cursor-hover
                className="group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Button
                        size="lg"
                        onClick={() => window.open(project.url, "_blank")}
                        className="bg-primary text-primary-foreground hover:shadow-[0_0_40px_hsl(180,80%,50%,0.5)] transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Ver Projeto
                      </Button>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{project.type}</span>
                      <span>•</span>
                      <span>{project.year}</span>
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

export default Projects;
