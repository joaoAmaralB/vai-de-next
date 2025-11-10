import { Prompts } from "./enum/PromptsEnum";

export default [
  {
    topic: "Fundamentos do Next.js",
    description:
      "Entenda o que é o Next.js, por que ele é tão popular e como ele amplia o poder do React para criar aplicações modernas e otimizadas.",
    color: "#2563EB", // azul Next.js
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
    prompt: Prompts.FUNDAMENTALS,
  },
  {
    topic: "Estrutura de Pastas e Rotas",
    description:
      "Aprenda como o Next.js organiza as rotas automaticamente e como criar páginas dinâmicas e layouts reutilizáveis com o sistema de pastas.",
    color: "#7C3AED", // roxo
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    ),
    prompt: Prompts.ROUTES,
  },
  {
    topic: "Renderização (SSR, SSG, ISR, CSR)",
    description:
      "Descubra os diferentes modos de renderização do Next.js e quando usar cada um para equilibrar performance e atualização de dados.",
    color: "#10B981", // verde
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M12 6v6l4 2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    prompt: Prompts.RENDERING,
  },
  {
    topic: "Componentes e Server/Client Components",
    description:
      "Entenda a diferença entre componentes que rodam no servidor e no cliente — e como usá-los para criar apps rápidos e escaláveis.",
    color: "#F59E0B", // amarelo
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
        <path d="M10 7h4v10h-4z" />
      </svg>
    ),
    prompt: Prompts.COMPONENTS,
  },
  {
    topic: "Data Fetching",
    description:
      "Aprenda as formas de buscar dados no Next.js, desde funções como getServerSideProps até o novo modelo de data fetching no App Router.",
    color: "#06B6D4", // ciano
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M4 4v6h6M20 20v-6h-6M4 20l6-6M20 4l-6 6" />
      </svg>
    ),
    prompt: Prompts.DATA_FETCHING,
  },
  {
    topic: "API Routes",
    description:
      "Crie suas próprias APIs dentro do Next.js e aprenda a lidar com requisições HTTP direto no seu projeto, sem precisar de um backend separado.",
    color: "#EF4444", // vermelho
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h18M12 3v18" />
      </svg>
    ),
    prompt: Prompts.API_ROUTES,
  },
  {
    topic: "Navegação e Links",
    description:
      "Explore o sistema de navegação do Next.js e veja como criar experiências de transição de página rápidas e suaves.",
    color: "#8B5CF6", // lilás
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M10 6H6v12h4M14 6h4v12h-4" />
      </svg>
    ),
    prompt: Prompts.NAVIGATION,
  },
  {
    topic: "Estilização",
    description:
      "Veja como aplicar estilos no Next.js com CSS Modules, Styled JSX, Tailwind e outras ferramentas modernas de estilização.",
    color: "#EC4899", // rosa
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M2 22l10-10L2 2M22 2L12 12l10 10" />
      </svg>
    ),
    prompt: Prompts.STYLING,
  },
  {
    topic: "Gerenciamento de Estado",
    description:
      "Aprenda diferentes formas de gerenciar o estado da sua aplicação — de Context API até bibliotecas como Redux, Zustand e React Query.",
    color: "#22C55E", // verde-limão
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3" />
      </svg>
    ),
    prompt: Prompts.STATES,
  },
  {
    topic: "Autenticação e Autorização",
    description:
      "Descubra como proteger páginas, criar login/logout e gerenciar sessões com NextAuth e outras estratégias seguras.",
    color: "#F97316", // laranja
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M12 11c1.1 0 2 .9 2 2v3H10v-3c0-1.1.9-2 2-2z" />
        <path d="M17 8V6a5 5 0 0 0-10 0v2" />
        <rect x="5" y="10" width="14" height="10" rx="2" />
      </svg>
    ),
    prompt: Prompts.AUTHENTICATION,
  },
  {
    topic: "Otimização de Performance",
    description:
      "Domine as técnicas para deixar seu app mais leve e rápido: otimização de imagens, fontes, lazy loading e muito mais.",
    color: "#0EA5E9", // azul-claro
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h18M12 3v18" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    prompt: Prompts.PERFORMANCE,
  },
  {
    topic: "Deploy e Configuração de Produção",
    description:
      "Aprenda como colocar sua aplicação no ar, configurar variáveis de ambiente e otimizar o build para produção.",
    color: "#EAB308", // dourado
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M4 17l8-12 8 12H4z" />
      </svg>
    ),
    prompt: Prompts.DEPLOYMENT,
  },
  {
    topic: "Integração com Banco de Dados",
    description:
      "Veja como conectar seu projeto Next.js a bancos de dados como Prisma, MongoDB e Supabase de forma eficiente e segura.",
    color: "#14B8A6", // turquesa
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.5 4 3 9 3s9-1.5 9-3V5" />
      </svg>
    ),
    prompt: Prompts.DATABASE_INTEGRATION,
  },
  {
    topic: "Middleware e Edge Functions",
    description:
      "Descubra como interceptar requisições, aplicar autenticação e criar respostas rápidas com middleware e funções na edge.",
    color: "#6366F1", // índigo
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h18M7 8l-4 4 4 4M17 8l4 4-4 4" />
      </svg>
    ),
    prompt: Prompts.MIDDLEWARE,
  },
  {
    topic: "SEO e Metadata",
    description:
      "Aprenda a melhorar o ranqueamento do seu site nos buscadores e otimizar o compartilhamento em redes sociais com metadados.",
    color: "#A855F7", // roxo vibrante
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    prompt: Prompts.SEO,
  },
  {
    topic: "Internacionalização (i18n)",
    description:
      "Torne seu site multilíngue configurando internacionalização (i18n) e adaptando rotas e conteúdos para diferentes idiomas.",
    color: "#3B82F6", // azul vívido
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
      </svg>
    ),
    prompt: Prompts.INTERNATIONALIZATION,
  },
  {
    topic: "Boas Práticas e Padrões de Projeto",
    description:
      "Conheça as melhores práticas de organização, tipagem e estrutura de código para criar projetos escaláveis e limpos com Next.js.",
    color: "#F43F5E", // vermelho rosado
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" />
        <path d="M8 8h8v8H8z" />
      </svg>
    ),
    prompt: Prompts.BEST_PRACTICES,
  },
];
