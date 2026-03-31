export interface ProjectData {
  slug: string;
  name: string;
  url: string;
  role: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  stack: string[];
  tags: string[];
  hasPreview: boolean;
}

export const allProjects: ProjectData[] = [
  {
    slug: "olym",
    name: "Olym",
    url: "https://olym.com.br/",
    role: "Fundador e CTO",
    tagline: "Meu produto. Da ideia ao deploy, tudo construído por mim.",
    description:
      "A Olym é meu produto principal. Uma plataforma que nasceu de uma necessidade real que identifiquei no mercado. Fui responsável por toda a jornada: validação da ideia, definição do produto, arquitetura técnica, desenvolvimento e deploy em produção.",
    challenge:
      "Construir um produto completo do zero, sozinho no início, garantindo que a arquitetura fosse escalável desde o dia 1. Precisava de uma base sólida que suportasse crescimento sem reescritas.",
    solution:
      "Optei por uma stack moderna com React e TypeScript no frontend, Node.js no backend, PostgreSQL como banco e inteligência artificial integrada nos fluxos principais. Deploy automatizado na Vercel com CI/CD.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "IA", "Vercel"],
    tags: ["Produto Próprio", "Full-Stack", "IA"],
    hasPreview: true,
  },
  {
    slug: "social-ia",
    name: "Social IA",
    url: "https://socialia.com.br/",
    role: "CTO",
    tagline: "Conteúdo que se cria sozinho. IA aplicada a redes sociais.",
    description:
      "Social IA é uma plataforma de automação e geração de conteúdo para redes sociais usando inteligência artificial. Como CTO, lidero toda a parte técnica do produto, desde a arquitetura até a integração com modelos de IA.",
    challenge:
      "Criar uma plataforma que gerasse conteúdo de qualidade de forma automatizada, mantendo a personalidade e tom de voz de cada marca. A integração com múltiplas redes sociais e APIs de IA era complexa.",
    solution:
      "Arquitetura baseada em agentes de IA com pipelines de geração de conteúdo. Integração com LLMs para criação de textos, imagens e estratégias de postagem. Stack moderna com foco em performance e escalabilidade.",
    stack: ["React", "TypeScript", "Node.js", "IA", "LLMs", "APIs"],
    tags: ["IA", "SaaS", "CTO"],
    hasPreview: true,
  },
  {
    slug: "sabido",
    name: "Sabido",
    url: "https://sabido.pro/",
    role: "CTO",
    tagline: "Aprendizado que se adapta ao aluno, não o contrário.",
    description:
      "O Sabido é uma plataforma de educação que usa IA para personalizar a experiência de aprendizado. Como CTO, sou responsável por toda a liderança técnica, definição de stack e arquitetura do sistema.",
    challenge:
      "Criar uma experiência de aprendizado personalizada que se adaptasse ao ritmo de cada aluno. O sistema precisava processar dados em tempo real e ajustar o conteúdo dinamicamente.",
    solution:
      "Implementei uma arquitetura que combina análise de dados do aluno com modelos de IA para recomendar conteúdo. O frontend é rápido e responsivo, o backend processa dados em tempo real.",
    stack: ["React", "TypeScript", "Node.js", "Supabase", "IA"],
    tags: ["EdTech", "CTO", "IA"],
    hasPreview: true,
  },
  {
    slug: "atlasbase",
    name: "AtlasBase",
    url: "https://atlasbase.com.br/",
    role: "CTO",
    tagline: "Dados organizados, acessíveis e prontos para decisão.",
    description:
      "AtlasBase é uma plataforma de infraestrutura de dados. Como CTO, defino a arquitetura do sistema, lidero o time de desenvolvimento e garanto que a plataforma seja robusta e escalável.",
    challenge:
      "Lidar com grandes volumes de dados de forma eficiente, garantindo integridade e velocidade de consulta. A arquitetura precisava ser flexível para diferentes tipos de dados.",
    solution:
      "Arquitetura baseada em PostgreSQL com camadas de cache e indexação otimizada. APIs REST bem estruturadas e frontend com visualizações de dados em tempo real.",
    stack: ["React", "TypeScript", "PostgreSQL", "Node.js", "APIs REST"],
    tags: ["Data", "CTO", "Arquitetura"],
    hasPreview: true,
  },
  {
    slug: "tichub",
    name: "TicHub",
    url: "https://tichub.com.br/",
    role: "CTO",
    tagline: "Tecnologia conectada em um só lugar.",
    description:
      "TicHub é um hub de tecnologia onde sou responsável pela estratégia técnica completa. Defino a stack, arquitetura e padrões de desenvolvimento do produto.",
    challenge:
      "Criar uma plataforma que conectasse diferentes serviços e ferramentas de tecnologia em um único lugar, com uma experiência fluida e integrada.",
    solution:
      "Arquitetura modular que permite integração com múltiplos serviços. Frontend componentizado e backend com APIs bem documentadas.",
    stack: ["React", "TypeScript", "Node.js", "Supabase"],
    tags: ["Tech", "CTO", "Plataforma"],
    hasPreview: true,
  },
  {
    slug: "vestgo",
    name: "VestGo",
    url: "https://vestgo.com.br/",
    role: "CTO",
    tagline: "Preparação inteligente para quem quer passar.",
    description:
      "VestGo é uma plataforma focada em preparação para vestibular. Como CTO, lidero a parte técnica e garanto que a experiência do estudante seja a melhor possível.",
    challenge:
      "Criar uma plataforma educacional que suportasse milhares de alunos simultâneos com conteúdo interativo e simulados em tempo real.",
    solution:
      "Arquitetura escalável com foco em performance. Sistema de simulados com correção automática e dashboard de desempenho para os alunos.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    tags: ["EdTech", "CTO", "Full-Stack"],
    hasPreview: true,
  },
  {
    slug: "wolfex",
    name: "Wolfex",
    url: "https://wolfex.com.br/",
    role: "Tech Lead",
    tagline: "Logística reconstruída do zero. Mais rápido, mais limpo.",
    description:
      "Na Wolfex, atuei como Tech Lead liderando a refatoração e redesign completo do sistema de logística. O sistema antigo era lento e difícil de manter, então reconstruímos do zero com uma arquitetura moderna.",
    challenge:
      "O sistema legado era monolítico, lento e cheio de débito técnico. Precisava ser reconstruído sem parar a operação da empresa.",
    solution:
      "Migração gradual para uma nova arquitetura. Redesign completo da interface com foco em UX. Nova API mais performática e banco de dados otimizado.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    tags: ["Logística", "Tech Lead", "Redesign"],
    hasPreview: true,
  },
  {
    slug: "condor-contratos",
    name: "Condor | Contratos",
    url: "#",
    role: "Desenvolvedor Full-Stack",
    tagline: "10 dias virou 1. Automação que mudou a operação.",
    description:
      "Construí do zero um sistema completo de criação e assinatura de contratos para a Condor. O processo que antes levava 10 dias passou a ser feito em apenas 1 dia.",
    challenge:
      "O processo de contratos era totalmente manual: criação em Word, envio por email, assinatura física, escaneamento e arquivamento. Lento, propenso a erros e custoso.",
    solution:
      "Sistema web completo com templates de contratos dinâmicos, preenchimento automático de dados, assinatura digital integrada e armazenamento seguro. Fluxo de aprovação automatizado com notificações.",
    stack: ["React", "Node.js", "PostgreSQL", "Assinatura Digital"],
    tags: ["Automação", "Contratos", "10→1 dia"],
    hasPreview: false,
  },
  {
    slug: "condor-facilities",
    name: "Condor | Facilities",
    url: "#",
    role: "Desenvolvedor Full-Stack",
    tagline: "Planilhas viraram sistema. Controle real das operações.",
    description:
      "Construí do zero o sistema completo de facilities da Condor. Uma plataforma de gestão integrada de operações e manutenção predial.",
    challenge:
      "A gestão de facilities era feita em planilhas e comunicação por WhatsApp. Sem rastreabilidade, sem métricas, sem controle real das operações.",
    solution:
      "Sistema web completo com gestão de ordens de serviço, controle de manutenção preventiva e corretiva, dashboard de indicadores e relatórios automatizados.",
    stack: ["React", "Node.js", "PostgreSQL", "Dashboard"],
    tags: ["Facilities", "Sistemas", "Full-Stack"],
    hasPreview: false,
  },
];
