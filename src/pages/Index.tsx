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
      <path className="lava-line lava-line-slow" d="M-2 -35 Q 0 0 -4 35 T -2 105 T 0 170" stroke="url(#grad1)" fill="none" strokeWidth="18">
        <animate attributeName="d" dur="81s" repeatCount="indefinite" values="M-2 -35 Q 0 0 -4 35 T -2 105 T 0 170; M-2 -35 Q -4 0 0 35 T -4 105 T 2 170; M-2 -35 Q 0 0 -4 35 T -2 105 T 0 170" />
      </path>
      <path className="lava-line" d="M10 -35 Q 14 0 8 35 T 12 105 T 9 170" stroke="url(#grad2)" fill="none" strokeWidth="40">
        <animate attributeName="d" dur="57s" repeatCount="indefinite" values="M10 -35 Q 14 0 8 35 T 12 105 T 9 170; M10 -35 Q 6 0 14 35 T 8 105 T 13 170; M10 -35 Q 14 0 8 35 T 12 105 T 9 170" />
      </path>
      <path className="lava-line lava-line-slow" d="M22 -35 Q 18 0 24 35 T 20 105 T 23 170" stroke="url(#grad3)" fill="none" strokeWidth="6">
        <animate attributeName="d" dur="93s" repeatCount="indefinite" values="M22 -35 Q 18 0 24 35 T 20 105 T 23 170; M22 -35 Q 26 0 18 35 T 24 105 T 19 170; M22 -35 Q 18 0 24 35 T 20 105 T 23 170" />
      </path>
      <path className="lava-line" d="M34 -35 Q 38 0 32 35 T 36 105 T 33 170" stroke="url(#grad1)" fill="none" strokeWidth="26">
        <animate attributeName="d" dur="66s" repeatCount="indefinite" values="M34 -35 Q 38 0 32 35 T 36 105 T 33 170; M34 -35 Q 30 0 38 35 T 32 105 T 37 170; M34 -35 Q 38 0 32 35 T 36 105 T 33 170" />
      </path>
      <path className="lava-line lava-line-slow" d="M46 -35 Q 42 0 48 35 T 44 105 T 47 170" stroke="url(#grad2)" fill="none" strokeWidth="10">
        <animate attributeName="d" dur="87s" repeatCount="indefinite" values="M46 -35 Q 42 0 48 35 T 44 105 T 47 170; M46 -35 Q 50 0 42 35 T 48 105 T 43 170; M46 -35 Q 42 0 48 35 T 44 105 T 47 170" />
      </path>
      <path className="lava-line" d="M58 -35 Q 62 0 56 35 T 60 105 T 57 170" stroke="url(#grad3)" fill="none" strokeWidth="34">
        <animate attributeName="d" dur="54s" repeatCount="indefinite" values="M58 -35 Q 62 0 56 35 T 60 105 T 57 170; M58 -35 Q 54 0 62 35 T 56 105 T 61 170; M58 -35 Q 62 0 56 35 T 60 105 T 57 170" />
      </path>
      <path className="lava-line lava-line-slow" d="M70 -35 Q 66 0 72 35 T 68 105 T 71 170" stroke="url(#grad4)" fill="none" strokeWidth="8">
        <animate attributeName="d" dur="78s" repeatCount="indefinite" values="M70 -35 Q 66 0 72 35 T 68 105 T 71 170; M70 -35 Q 74 0 66 35 T 72 105 T 67 170; M70 -35 Q 66 0 72 35 T 68 105 T 71 170" />
      </path>
      <path className="lava-line" d="M82 -35 Q 86 0 80 35 T 84 105 T 81 170" stroke="url(#grad2)" fill="none" strokeWidth="22">
        <animate attributeName="d" dur="63s" repeatCount="indefinite" values="M82 -35 Q 86 0 80 35 T 84 105 T 81 170; M82 -35 Q 78 0 86 35 T 80 105 T 85 170; M82 -35 Q 86 0 80 35 T 84 105 T 81 170" />
      </path>
      <path className="lava-line lava-line-slow" d="M94 -35 Q 90 0 96 35 T 92 105 T 95 170" stroke="url(#grad3)" fill="none" strokeWidth="12">
        <animate attributeName="d" dur="99s" repeatCount="indefinite" values="M94 -35 Q 90 0 96 35 T 92 105 T 95 170; M94 -35 Q 98 0 90 35 T 96 105 T 91 170; M94 -35 Q 90 0 96 35 T 92 105 T 95 170" />
      </path>
      <path className="lava-line" d="M106 -35 Q 110 0 104 35 T 108 105 T 105 170" stroke="url(#grad4)" fill="none" strokeWidth="36">
        <animate attributeName="d" dur="60s" repeatCount="indefinite" values="M106 -35 Q 110 0 104 35 T 108 105 T 105 170; M106 -35 Q 102 0 110 35 T 104 105 T 109 170; M106 -35 Q 110 0 104 35 T 108 105 T 105 170" />
      </path>
      <path className="lava-line lava-line-slow" d="M16 -35 Q 20 0 14 35 T 18 105 T 15 170" stroke="url(#grad1)" fill="none" strokeWidth="4">
        <animate attributeName="d" dur="105s" repeatCount="indefinite" values="M16 -35 Q 20 0 14 35 T 18 105 T 15 170; M16 -35 Q 12 0 20 35 T 14 105 T 19 170; M16 -35 Q 20 0 14 35 T 18 105 T 15 170" />
      </path>
      <path className="lava-line" d="M52 -35 Q 56 0 50 35 T 54 105 T 51 170" stroke="url(#grad3)" fill="none" strokeWidth="3">
        <animate attributeName="d" dur="51s" repeatCount="indefinite" values="M52 -35 Q 56 0 50 35 T 54 105 T 51 170; M52 -35 Q 48 0 56 35 T 50 105 T 55 170; M52 -35 Q 56 0 50 35 T 54 105 T 51 170" />
      </path>
      <path className="lava-line lava-line-slow" d="M76 -35 Q 72 0 78 35 T 74 105 T 77 170" stroke="url(#grad4)" fill="none" strokeWidth="14">
        <animate attributeName="d" dur="72s" repeatCount="indefinite" values="M76 -35 Q 72 0 78 35 T 74 105 T 77 170; M76 -35 Q 80 0 72 35 T 78 105 T 73 170; M76 -35 Q 72 0 78 35 T 74 105 T 77 170" />
      </path>
      <path className="lava-line" d="M100 -35 Q 104 0 98 35 T 102 105 T 99 170" stroke="url(#grad2)" fill="none" strokeWidth="6">
        <animate attributeName="d" dur="69s" repeatCount="indefinite" values="M100 -35 Q 104 0 98 35 T 102 105 T 99 170; M100 -35 Q 96 0 104 35 T 98 105 T 103 170; M100 -35 Q 104 0 98 35 T 102 105 T 99 170" />
      </path>
    </svg>
  </div>
);

const Index = () => {
  return (
    <div className="site-shell">
      <div className="mini-header">
        <div className="hidden-links">
          <a href="https://deers.space/breeding/" title="Calculadora de Breeding">Calculadora de Breeding</a>
          <a href="https://deers.space/pdf2txt/" title="Extrator de PDF">Extrator de PDF</a>
          <a href="https://deers.space/story-insta/" title="Ajustador de Story">Ajustador de Story</a>
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
