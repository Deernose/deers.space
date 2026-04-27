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
      <path d="M0 -30 Q 15 35, 0 85 T 0 130" stroke="url(#grad1)" fill="none" strokeWidth="2" />
      <path d="M8 -30 Q 25 20, 8 70 T 8 130" stroke="url(#grad2)" fill="none" strokeWidth="56" />
      <path d="M18 -30 Q 30 60, 18 100 T 18 130" stroke="url(#grad3)" fill="none" strokeWidth="4" />
      <path d="M25 -30 Q 45 25, 25 80 T 25 130" stroke="url(#grad1)" fill="none" strokeWidth="40" />
      <path d="M35 -30 Q 55 15, 35 85 T 35 130" stroke="url(#grad2)" fill="none" strokeWidth="8" />
      <path d="M43 -30 Q 60 50, 43 70 T 43 130" stroke="url(#grad3)" fill="none" strokeWidth="32" />
      <path d="M53 -30 Q 70 30, 53 90 T 53 130" stroke="url(#grad4)" fill="none" strokeWidth="6" />
      <path d="M65 -30 Q 85 40, 65 70 T 65 130" stroke="url(#grad2)" fill="none" strokeWidth="24" />
      <path d="M75 -30 Q 90 10, 75 80 T 75 130" stroke="url(#grad3)" fill="none" strokeWidth="10" />
      <path d="M85 -30 Q 105 25, 85 75 T 85 130" stroke="url(#grad4)" fill="none" strokeWidth="48" />
      <path d="M93 -30 Q 110 45, 93 70 T 93 130" stroke="url(#grad1)" fill="none" strokeWidth="12" />
      <path d="M103 -30 Q 120 35, 103 90 T 103 130" stroke="url(#grad3)" fill="none" strokeWidth="3" />
      <path d="M110 -30 Q 125 40, 110 85 T 110 130" stroke="url(#grad4)" fill="none" strokeWidth="16" />
      <path d="M115 -30 Q 135 20, 115 80 T 115 130" stroke="url(#grad2)" fill="none" strokeWidth="7" />
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
