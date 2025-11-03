import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-primary text-lg mb-4 tracking-wider uppercase">Entre em Contato</h2>
            <p className="text-4xl md:text-5xl font-light text-foreground mb-8">
              Vamos criar algo extraordinário juntos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 animate-fade-in-up">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:gustavomnzs1@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    gustavomnzs1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                  <a 
                    href="tel:+5561992662886"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    (61) 99266-2886
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">
                    Brasília - Brasil
                  </p>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-16 h-16 text-primary" />
                  </div>
                  <p className="text-xl text-muted-foreground">
                    Pronto para começar um projeto?
                  </p>
                  <Button
                    size="lg"
                    onClick={() => window.location.href = 'mailto:gustavomnzs1@gmail.com'}
                    className="bg-primary text-primary-foreground hover:shadow-[0_0_40px_hsl(180,80%,50%,0.4)] transition-all duration-300"
                  >
                    Falar com Gustavo
                  </Button>
                </div>

                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-24 h-24 rounded-full border border-primary/20 animate-glow-pulse" />
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full border border-primary/20 animate-glow-pulse" style={{ animationDelay: "1s" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-32">
        <div className="max-w-6xl mx-auto pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Gustavo Menezes. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a 
                href="https://wa.me/5561992662886" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300"
              >
                WhatsApp
              </a>
              <a 
                href="https://www.linkedin.com/in/gustavo-menezes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
