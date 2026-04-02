import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative scroll-fade-section">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mono">
              Contato
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
              Vamos{" "}
              <span className="text-primary">conversar</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Tem um projeto, produto ou desafio técnico? Me chama.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-3 animate-fade-in-up">
              <a
                href="mailto:gustavomnzs1@gmail.com"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-foreground group-hover:text-primary transition-colors truncate text-sm">
                    gustavomnzs1@gmail.com
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>

              <a
                href="https://wa.me/5561992662886"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                  <p className="text-foreground group-hover:text-primary transition-colors text-sm">
                    (61) 99266-2886
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>

              <a
                href="tel:+5561992662886"
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">Telefone</p>
                  <p className="text-foreground group-hover:text-primary transition-colors text-sm">
                    (61) 99266-2886
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06]">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Localização</p>
                  <p className="text-foreground text-sm">Brasília, Brasil</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "150ms" }}>
              <div className="relative rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] p-8 text-center space-y-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/8 rounded-full blur-3xl" />

                <div className="relative space-y-6">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Pronto para começar?</h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      Vamos transformar sua ideia em produto.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button
                      size="lg"
                      onClick={() => window.open("https://wa.me/5561992662886", "_blank")}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-xl font-semibold shadow-[0_0_20px_hsl(180,100%,50%,0.2)] hover:shadow-[0_0_40px_hsl(180,100%,50%,0.35)] w-full"
                    >
                      Chamar no WhatsApp
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => window.location.href = "mailto:gustavomnzs1@gmail.com"}
                      className="border-white/[0.06] bg-transparent text-foreground hover:bg-white/[0.04] hover:border-white/[0.12] hover:text-primary transition-all duration-300 rounded-xl font-semibold w-full"
                    >
                      Enviar Email
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="section-container mt-20">
        <div className="max-w-6xl mx-auto pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <p className="font-light">© {new Date().getFullYear()} Gustavo Menezes</p>
            </div>
            <div className="flex gap-5 items-center">
              <a href="https://wa.me/5561992662886" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300" aria-label="WhatsApp">WhatsApp</a>
              <a href="https://www.linkedin.com/in/gustavo-ai/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300" aria-label="LinkedIn">LinkedIn</a>
              <a href="https://github.com/GustavoMnzs" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300" aria-label="GitHub">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
