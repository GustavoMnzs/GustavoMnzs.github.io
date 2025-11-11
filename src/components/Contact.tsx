import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative scroll-fade-section">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="text-primary text-sm mb-8 tracking-[0.3em] uppercase font-semibold">Entre em Contato</h2>
            <p className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              Vamos criar algo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">extraordinário</span> juntos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
                  <Mail className="w-6 h-6 text-primary/80 group-hover:text-primary transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-foreground/60 mb-2">Email</h3>
                  <a 
                    href="mailto:gustavomnzs1@gmail.com"
                    className="text-foreground text-lg hover:text-primary transition-colors duration-500"
                  >
                    gustavomnzs1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
                  <Phone className="w-6 h-6 text-primary/80 group-hover:text-primary transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-foreground/60 mb-2">Phone</h3>
                  <a 
                    href="tel:+5561992662886"
                    className="text-foreground text-lg hover:text-primary transition-colors duration-500"
                  >
                    (61) 99266-2886
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
                  <MapPin className="w-6 h-6 text-primary/80 group-hover:text-primary transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-foreground/60 mb-2">Location</h3>
                  <p className="text-foreground text-lg">
                    Brasília - Brasil
                  </p>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/[0.08] to-primary/[0.02] backdrop-blur-xl border border-primary/10 p-12 flex items-center justify-center group hover:border-primary/20 transition-all duration-700">
                <div className="text-center space-y-8">
                  <div className="w-28 h-28 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                    <Mail className="w-14 h-14 text-primary/80" />
                  </div>
                  <p className="text-xl text-muted-foreground font-light">
                    Pronto para começar um projeto?
                  </p>
                  <Button
                    size="lg"
                    onClick={() => window.location.href = 'mailto:gustavomnzs1@gmail.com'}
                    className="bg-primary/90 backdrop-blur-sm text-primary-foreground hover:bg-primary hover:scale-105 transition-all duration-500 text-base px-10 py-7 rounded-2xl shadow-lg hover:shadow-[0_0_30px_hsl(180,70%,55%,0.3)]"
                  >
                    Falar com Gustavo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-32">
        <div className="max-w-6xl mx-auto pt-12 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-muted-foreground/70">
            <p className="font-light">© 2025 Gustavo Menezes. Todos os direitos reservados.</p>
            <div className="flex gap-8 items-center">
              <a 
                href="https://wa.me/5561992662886" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-all duration-500 flex items-center gap-2 group"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="font-light">WhatsApp</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/gustavo-menezes-dev/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-all duration-500 flex items-center gap-2 group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="font-light">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
