import { Github, Instagram, Music, Play, Twitter, ExternalLink } from "lucide-react";

const socialLinks = [
  { href: "https://www.instagram.com/ledespair/", title: "Instagram de Ledespair", icon: Instagram },
  { href: "https://x.com/deernosey", title: "X (Twitter) de Deernosey", icon: Twitter },
  { href: "https://www.youtube.com/c/Deernose", title: "Canal YouTube de Deernose", icon: Play },
  { href: "https://soundcloud.com/deernose", title: "SoundCloud de Deernose", icon: Music },
  { href: "https://github.com/deernose", title: "GitHub de Deernose", icon: Github },
  { href: "https://www.instagram.com/deers.space/", title: "Instagram de Deers Space", icon: Instagram },
  { href: "https://bsky.app/profile/deers.space", title: "Bluesky de Deers Space", icon: ExternalLink },
];

const CurvedLines = () => (
  <div className="curved-lines" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--deer-orange-1))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--deer-orange-2))" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--deer-orange-3))" stopOpacity="0.75" />
          <stop offset="100%" stopColor="hsl(var(--deer-accent))" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--deer-orange-4))" stopOpacity="0.7" />
          <stop offset="100%" stopColor="hsl(var(--deer-coral))" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--deer-gold))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--deer-amber))" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path className="lava-line lava-line-slow" d="M-18 -35 Q 24 10, 4 52 T 18 135" stroke="url(#grad1)" fill="none" strokeWidth="18">
        <animate attributeName="d" dur="27s" repeatCount="indefinite" values="M-18 -35 Q 24 10, 4 52 T 18 135; M-12 -35 Q 42 28, -6 76 T 28 135; M-24 -35 Q 10 48, 14 88 T 4 135; M-18 -35 Q 24 10, 4 52 T 18 135" />
      </path>
      <path className="lava-line" d="M5 -35 Q 62 22, 24 78 T 45 135" stroke="url(#grad2)" fill="none" strokeWidth="54">
        <animate attributeName="d" dur="19s" repeatCount="indefinite" values="M5 -35 Q 62 22, 24 78 T 45 135; M18 -35 Q 78 44, 10 86 T 58 135; M-4 -35 Q 34 6, 42 66 T 32 135; M5 -35 Q 62 22, 24 78 T 45 135" />
      </path>
      <path className="lava-line lava-line-slow" d="M24 -35 Q 8 34, 48 58 T 22 135" stroke="url(#grad3)" fill="none" strokeWidth="7">
        <animate attributeName="d" dur="31s" repeatCount="indefinite" values="M24 -35 Q 8 34, 48 58 T 22 135; M30 -35 Q -4 44, 58 92 T 18 135; M14 -35 Q 34 14, 34 70 T 38 135; M24 -35 Q 8 34, 48 58 T 22 135" />
      </path>
      <path className="lava-line" d="M43 -35 Q 18 28, 62 92 T 36 135" stroke="url(#grad1)" fill="none" strokeWidth="34">
        <animate attributeName="d" dur="22s" repeatCount="indefinite" values="M43 -35 Q 18 28, 62 92 T 36 135; M35 -35 Q 74 18, 50 74 T 66 135; M54 -35 Q 22 52, 74 66 T 28 135; M43 -35 Q 18 28, 62 92 T 36 135" />
      </path>
      <path className="lava-line lava-line-slow" d="M58 -35 Q 96 6, 38 70 T 75 135" stroke="url(#grad2)" fill="none" strokeWidth="12">
        <animate attributeName="d" dur="29s" repeatCount="indefinite" values="M58 -35 Q 96 6, 38 70 T 75 135; M50 -35 Q 112 34, 48 94 T 68 135; M70 -35 Q 76 12, 56 62 T 92 135; M58 -35 Q 96 6, 38 70 T 75 135" />
      </path>
      <path className="lava-line" d="M72 -35 Q 34 42, 86 66 T 64 135" stroke="url(#grad3)" fill="none" strokeWidth="42">
        <animate attributeName="d" dur="18s" repeatCount="indefinite" values="M72 -35 Q 34 42, 86 66 T 64 135; M64 -35 Q 104 18, 72 88 T 98 135; M84 -35 Q 42 62, 96 54 T 52 135; M72 -35 Q 34 42, 86 66 T 64 135" />
      </path>
      <path className="lava-line lava-line-slow" d="M86 -35 Q 128 26, 76 92 T 112 135" stroke="url(#grad4)" fill="none" strokeWidth="9">
        <animate attributeName="d" dur="26s" repeatCount="indefinite" values="M86 -35 Q 128 26, 76 92 T 112 135; M94 -35 Q 116 4, 88 72 T 100 135; M78 -35 Q 142 54, 92 104 T 126 135; M86 -35 Q 128 26, 76 92 T 112 135" />
      </path>
      <path className="lava-line" d="M108 -35 Q 74 34, 122 78 T 94 135" stroke="url(#grad2)" fill="none" strokeWidth="28">
        <animate attributeName="d" dur="21s" repeatCount="indefinite" values="M108 -35 Q 74 34, 122 78 T 94 135; M98 -35 Q 142 18, 112 92 T 132 135; M120 -35 Q 86 56, 134 62 T 88 135; M108 -35 Q 74 34, 122 78 T 94 135" />
      </path>
      <path className="lava-line lava-line-slow" d="M124 -35 Q 150 44, 104 66 T 138 135" stroke="url(#grad3)" fill="none" strokeWidth="15">
        <animate attributeName="d" dur="33s" repeatCount="indefinite" values="M124 -35 Q 150 44, 104 66 T 138 135; M132 -35 Q 102 22, 128 88 T 116 135; M116 -35 Q 164 64, 112 56 T 148 135; M124 -35 Q 150 44, 104 66 T 138 135" />
      </path>
      <path className="lava-line" d="M145 -35 Q 104 18, 150 86 T 124 135" stroke="url(#grad4)" fill="none" strokeWidth="46">
        <animate attributeName="d" dur="20s" repeatCount="indefinite" values="M145 -35 Q 104 18, 150 86 T 124 135; M134 -35 Q 168 42, 136 72 T 156 135; M156 -35 Q 116 58, 166 98 T 118 135; M145 -35 Q 104 18, 150 86 T 124 135" />
      </path>
      <path className="lava-line lava-line-slow" d="M12 -35 Q 92 58, 16 98 T 84 135" stroke="url(#grad1)" fill="none" strokeWidth="5">
        <animate attributeName="d" dur="35s" repeatCount="indefinite" values="M12 -35 Q 92 58, 16 98 T 84 135; M28 -35 Q 118 36, 8 82 T 96 135; M-2 -35 Q 74 74, 32 106 T 68 135; M12 -35 Q 92 58, 16 98 T 84 135" />
      </path>
      <path className="lava-line" d="M48 -35 Q 122 14, 68 108 T 130 135" stroke="url(#grad3)" fill="none" strokeWidth="3">
        <animate attributeName="d" dur="17s" repeatCount="indefinite" values="M48 -35 Q 122 14, 68 108 T 130 135; M60 -35 Q 146 46, 52 88 T 142 135; M36 -35 Q 98 2, 84 116 T 116 135; M48 -35 Q 122 14, 68 108 T 130 135" />
      </path>
      <path className="lava-line lava-line-slow" d="M78 -35 Q 10 24, 98 78 T 44 135" stroke="url(#grad4)" fill="none" strokeWidth="16">
        <animate attributeName="d" dur="24s" repeatCount="indefinite" values="M78 -35 Q 10 24, 98 78 T 44 135; M66 -35 Q 28 52, 114 64 T 34 135; M90 -35 Q -2 10, 82 96 T 56 135; M78 -35 Q 10 24, 98 78 T 44 135" />
      </path>
      <path className="lava-line" d="M118 -35 Q 54 66, 142 104 T 62 135" stroke="url(#grad2)" fill="none" strokeWidth="7">
        <animate attributeName="d" dur="23s" repeatCount="indefinite" values="M118 -35 Q 54 66, 142 104 T 62 135; M106 -35 Q 72 42, 158 84 T 48 135; M132 -35 Q 38 78, 126 112 T 80 135; M118 -35 Q 54 66, 142 104 T 62 135" />
      </path>
    </svg>
  </div>
);

const Index = () => {
  return (
    <div className="site-shell">
      <div className="mini-header">
        <div className="hidden-links" aria-hidden="true">
          <a href="/breeding/">Calculadora de Breeding</a>
          <a href="/pdf2txt/">Extrator de PDF</a>
          <a href="/story-insta/">Ajustador de Story</a>
        </div>

        <div className="social-icons" aria-label="Redes sociais">
          <ul>
            {socialLinks.map(({ href, title, icon: Icon }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer" title={title} aria-label={title}>
                  <Icon size={18} strokeWidth={2.1} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <nav className="navbar" id="navbar" aria-label="Navegação principal">
        <a href="https://deers.space" className="logo" title="DEER'S SPACE - Comunidade de Gamers, deers space, deer space, deersspace">
          DEER&apos;s SPACE
        </a>
        <ul>
          <li><a href="https://deers.space" title="Página inicial de DEER'S SPACE">Início</a></li>
          <li><a href="#sobre" title="Sobre a comunidade DEER'S SPACE">Sobre</a></li>
          <li><a href="#comunidade" title="Como se juntar à comunidade DEER'S SPACE">Comunidade</a></li>
          <li><a href="mailto:contato@deers.space" title="Entre em contato com DEER'S SPACE">Contato</a></li>
        </ul>
      </nav>

      <main>
        <section className="hero">
          <h1>Bem-vindo ao DEER&apos;s SPACE</h1>
          <p>Uma comunidade para amizades e aprendizado coletivo no mundo geek.</p>
          <a href="https://discord.com/invite/kWdJFzf4rj" className="button" title="Junte-se à comunidade de games DEER'S SPACE, deers space, deer space, deersspace">
            Junte-se ao nosso Discord
          </a>
          <CurvedLines />
        </section>

        <section className="about" id="sobre">
          <div className="text">
            <h2>Sobre Nós</h2>
            <p>O <strong>DEER&apos;s SPACE</strong> é uma comunidade dedicada a conectar pessoas apaixonadas por tecnologia, jogos, cultura geek e muito mais. Aqui, você pode aprender, compartilhar conhecimento e fazer novas amizades em um ambiente acolhedor e inclusivo.</p>
            <p>Nossa comunidade promove discussões sobre os mais diversos temas geeks, desde os últimos lançamentos de jogos e filmes até debates profundos sobre tecnologias emergentes. Organizamos eventos online, torneios, maratonas de séries e muito mais.</p>
            <p>Estamos sempre abertos a novas ideias e projetos. Se você tem uma paixão ou quer aprender algo novo, o DEER&apos;s SPACE é o lugar ideal para você. Junte-se a nós e faça parte desta jornada incrível no universo geek!</p>
          </div>
          <div className="image">
            <img src="/images/about-us.jpg" alt="Comunidade de jogos DEER'S SPACE" loading="lazy" />
          </div>
        </section>

        <section className="community" id="comunidade">
          <div className="content">
            <div className="text">
              <h2>Nosso Discord</h2>
              <p>Entre em nosso servidor do Discord para interagir com outros membros, participar de eventos e ficar por dentro das novidades.</p>
            </div>
            <div className="discord-invite">
              <a href="https://discord.com/invite/kWdJFzf4rj" target="_blank" rel="noopener noreferrer">
                <img src="/images/discord-banner.png" alt="Banner do Discord da Comunidade DEER'S SPACE" loading="lazy" />
              </a>
              <a href="https://discord.com/invite/kWdJFzf4rj" target="_blank" rel="noopener noreferrer" className="button button-discord">Acessar o Discord</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          &copy; 2025 DEER&apos;s SPACE. Todos os direitos reservados.
          <br />
          Encontre sua comunidade de gamers em <a href="https://deers.space" title="Comunidade de Gamers Deers Space">deers.space</a>!
        </p>
        <nav className="footer-nav" aria-label="Navegação do rodapé">
          <ul>
            <li><a href="#sobre" title="Sobre a comunidade DEER'S SPACE">Sobre</a></li>
            <li><a href="#comunidade" title="Como se juntar à comunidade DEER'S SPACE">Comunidade</a></li>
            <li><a href="mailto:contato@deers.space" title="Entre em contato com DEER'S SPACE">Contato</a></li>
            <li><a href="https://twitter.com/deersspace" target="_blank" rel="noopener noreferrer" title="Siga Deers Space no Twitter">Twitter</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Index;
