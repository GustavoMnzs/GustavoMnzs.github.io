import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse opacity-40 delay-100" />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-50 delay-200" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            Gustavo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Menezes
            </span>
          </h1>

          <h2 className="text-3xl md:text-5xl font-light text-muted-foreground">
            Web Developer –{" "}
            <span className="text-primary font-normal">Low Code</span>
          </h2>

          <div className="flex justify-center pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-primary-foreground hover:shadow-[0_0_40px_hsl(180,80%,50%,0.4)] transition-all duration-300 text-lg px-8 py-6"
            >
              Projetos
            </Button>
          </div>
        </div>

        {/* Scroll Down - Fixed positioning */}
        <div 
          onClick={() => scrollToSection("services")}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce z-20"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300">
            <span className="text-sm font-light">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
