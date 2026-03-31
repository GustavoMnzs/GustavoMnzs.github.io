import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allProjects } from "@/data/projects";
import CustomCursor from "@/components/CustomCursor";
import BackgroundGlow from "@/components/BackgroundGlow";

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = allProjects.find((p) => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Projeto não encontrado.</p>
          <Button onClick={() => navigate("/")} variant="outline" className="rounded-xl">
            Voltar ao início
          </Button>
        </div>
      </div>
    );
  }

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-background text-foreground relative">
        <BackgroundGlow />
        <div className="relative z-10">
          {/* Header */}
          <motion.div
            className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-background/60 backdrop-blur-2xl border border-border/50 shadow-lg shadow-black/20">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-lg hover:bg-white/[0.04]"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </button>
              <div className="w-px h-5 bg-border/50" />
              <span className="text-sm text-foreground font-medium">{project.name}</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="section-container pt-28 pb-20"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <div className="max-w-4xl mx-auto">
              {/* Hero */}
              <motion.div className="space-y-6 mb-16" {...fadeUp}>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mono">
                    {project.role}
                  </span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-muted-foreground text-xs mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  {project.name}
                </h1>

                <p className="text-xl text-muted-foreground font-light max-w-2xl">
                  {project.tagline}
                </p>

                {project.url !== "#" && (
                  <Button
                    onClick={() => window.open(project.url, "_blank")}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold shadow-[0_0_20px_hsl(180,100%,50%,0.15)] hover:shadow-[0_0_30px_hsl(180,100%,50%,0.3)] transition-all duration-300"
                  >
                    Visitar projeto
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </motion.div>

              {/* Preview */}
              {project.hasPreview && project.url !== "#" && (
                <motion.div
                  className="mb-16 rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02]"
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                      <div className="w-3 h-3 rounded-full bg-white/10" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <span className="text-xs text-muted-foreground mono truncate">{project.url}</span>
                    </div>
                  </div>
                  {/* Desktop: scaled iframe */}
                  <div className="hidden md:block relative" style={{ height: '450px', overflow: 'hidden' }}>
                    <iframe
                      src={project.url}
                      title={`Preview de ${project.name}`}
                      className="absolute top-0 left-0 border-0"
                      style={{ width: '1440px', height: '900px', transform: 'scale(0.555)', transformOrigin: 'top left' }}
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin"
                    />
                  </div>
                  {/* Mobile: link card instead of iframe */}
                  <div
                    className="md:hidden flex items-center justify-center py-12 cursor-pointer group"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    <div className="text-center space-y-3">
                      <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                        <ExternalLink className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Toque para abrir o site</p>
                      <p className="text-xs text-primary mono">{project.url}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Case study sections */}
              <div className="space-y-12">
                <motion.div
                  className="rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-sm text-primary font-semibold mono tracking-wider uppercase mb-4">Sobre o projeto</h2>
                  <p className="text-foreground/90 leading-relaxed">{project.description}</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    className="rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] p-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h2 className="text-sm text-primary font-semibold mono tracking-wider uppercase mb-4">Desafio</h2>
                    <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                  </motion.div>

                  <motion.div
                    className="rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] p-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h2 className="text-sm text-primary font-semibold mono tracking-wider uppercase mb-4">Solução</h2>
                    <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                  </motion.div>
                </div>

                <motion.div
                  className="rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <h2 className="text-sm text-primary font-semibold mono tracking-wider uppercase mb-4">Stack utilizada</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-sm bg-white/[0.04] text-foreground/80 rounded-lg border border-white/[0.06] mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Back */}
              <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Button
                  variant="outline"
                  onClick={() => navigate("/")}
                  className="border-white/[0.06] bg-transparent text-foreground hover:bg-white/[0.04] hover:border-white/[0.12] hover:text-primary transition-all duration-300 rounded-xl font-semibold"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Ver todos os projetos
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
