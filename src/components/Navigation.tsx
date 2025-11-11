import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/60 backdrop-blur-2xl border-b border-border/30 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer group" 
            onClick={() => scrollToSection("hero")}
          >
            <img 
              src={logo} 
              alt="Gustavo Menezes Logo" 
              className="h-14 w-auto transition-transform duration-500 group-hover:scale-105" 
            />
          </div>

          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-500 rounded-xl px-6 backdrop-blur-sm"
          >
            Contato
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
