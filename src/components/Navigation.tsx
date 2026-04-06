import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "Sobre", id: "about" },
  { label: "Projetos", id: "projects" },
  { label: "Serviços", id: "services" },
  { label: "Skills", id: "skills" },
  { label: "Experiência", id: "experience" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerReady, setDrawerReady] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection with better threshold
  useEffect(() => {
    const ids = ["about", "projects", "services", "skills", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio
        let best: IntersectionObserverEntry | null = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!best || entry.intersectionRatio > best.intersectionRatio) {
              best = entry;
            }
          }
        });
        if (best) {
          setActiveSection((best as IntersectionObserverEntry).target.id);
        }
      },
      { threshold: [0.1, 0.3, 0.5], rootMargin: "-100px 0px -40% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Update sliding pill position when active section changes
  useEffect(() => {
    const btn = buttonRefs.current.get(activeSection);
    const nav = navRef.current;
    if (btn && nav) {
      const navRect = nav.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setPillStyle({
        left: btnRect.left - navRect.left,
        width: btnRect.width,
        opacity: 1,
      });
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    handleClose();
  };

  const handleOpen = () => {
    setMobileOpen(true);
    setTimeout(() => setDrawerReady(true), 500);
  };

  const handleClose = () => {
    setDrawerReady(false);
    setTimeout(() => setMobileOpen(false), 400);
  };

  const glassStyle = scrolled
    ? "bg-background/60 backdrop-blur-2xl border border-border/50 shadow-lg shadow-black/20"
    : "bg-background/30 backdrop-blur-xl border border-white/[0.06]";

  return (
    <>
      {/* Desktop nav */}
      <div className="fixed top-4 left-0 right-0 z-50 hidden md:flex justify-center px-6">
        <nav className={`flex items-center gap-2 px-5 py-3 rounded-2xl transition-all duration-500 ${glassStyle}`}>
          <div className="flex items-center cursor-pointer group px-1" onClick={() => scrollTo("hero")}>
            <img src={logo} alt="GM" className="h-9 w-auto transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="w-px h-5 bg-border/50 mx-2" />
          <div ref={navRef} className="relative flex items-center gap-0.5">
            {/* Sliding pill background */}
            <motion.div
              className="absolute top-0 h-full rounded-lg bg-primary/10"
              animate={{
                left: pillStyle.left,
                width: pillStyle.width,
                opacity: pillStyle.opacity,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
            {navLinks.map((link) => (
              <button
                key={link.id}
                ref={(el) => { if (el) buttonRefs.current.set(link.id, el); }}
                onClick={() => scrollTo(link.id)}
                className={`relative z-10 px-3 py-1.5 text-sm rounded-lg transition-colors duration-200 ${
                  activeSection === link.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="w-px h-5 bg-border/50 mx-2" />
          <Button
            size="sm"
            onClick={() => scrollTo("contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-xl px-4 font-medium text-sm h-8"
          >
            Contato
          </Button>
        </nav>
      </div>

      {/* Mobile: floating pill header */}
      <div className="fixed top-4 z-50 flex justify-center md:hidden" style={{ left: '20px', right: '20px' }}>
        <motion.nav
          className={`flex items-center justify-between w-full px-4 py-3 rounded-2xl transition-colors duration-500 ${glassStyle}`}
          animate={{
            scaleX: mobileOpen ? 0 : 1,
            opacity: mobileOpen ? 0 : 1,
          }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          style={{ originX: 0.5 }}
        >
          <div className="flex items-center cursor-pointer" onClick={() => scrollTo("hero")}>
            <img src={logo} alt="GM" className="h-8 w-auto" />
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-3.5 font-medium text-xs h-8"
            >
              Contato
            </Button>
            <button
              onClick={handleOpen}
              className="p-2 text-foreground hover:text-primary transition-colors rounded-lg"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile drawer overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: drawerReady ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer panel */}
      <AnimatePresence>
        {drawerReady && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 z-[60] w-72 bg-background/95 backdrop-blur-2xl border-l border-white/[0.06] md:hidden flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 200 }}
          >
            <div className="flex items-center justify-between p-6 border-b border-white/[0.06]">
              <img src={logo} alt="GM" className="h-8 w-auto" />
              <button onClick={handleClose} className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg" aria-label="Fechar menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 flex flex-col gap-1 p-5">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  className={`text-left px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
            <div className="p-5 border-t border-white/[0.06]">
              <Button
                onClick={() => scrollTo("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold w-full h-12 text-base shadow-[0_0_20px_hsl(180,100%,50%,0.15)]"
              >
                Contato
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
