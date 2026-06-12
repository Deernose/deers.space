import { Github, Instagram, Music, Play, Twitter, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid slice">
      <defs>
        {/* Broad flowing marble — wide reds and blacks at a diagonal, like the reference */}
        <linearGradient id="marbleBands" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0.00" stopColor="#000000" />
          <stop offset="0.08" stopColor="#1a0103" />
          <stop offset="0.14" stopColor="#ff2230" />
          <stop offset="0.18" stopColor="#ff4150" />
          <stop offset="0.24" stopColor="#a00610" />
          <stop offset="0.32" stopColor="#000000" />
          <stop offset="0.42" stopColor="#000000" />
          <stop offset="0.48" stopColor="#c40914" />
          <stop offset="0.53" stopColor="#ff2a36" />
          <stop offset="0.58" stopColor="#ff5260" />
          <stop offset="0.63" stopColor="#c40914" />
          <stop offset="0.70" stopColor="#1a0103" />
          <stop offset="0.78" stopColor="#000000" />
          <stop offset="0.85" stopColor="#5a0207" />
          <stop offset="0.90" stopColor="#ff2230" />
          <stop offset="0.95" stopColor="#ff4150" />
          <stop offset="1.00" stopColor="#3a0306" />
        </linearGradient>

        {/* Heavy low-freq displacement = broad organic swirls */}
        <filter id="marbleWarp" x="-10%" y="-10%" width="120%" height="120%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.009" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="140" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      <rect width="100" height="60" fill="#000001" />

      {/*
        Two nested translates with non-commensurate periods (73s × 97s) plus a slow rotate (131s).
        Because the periods share no common factor, the visible pattern never appears to repeat —
        feels continuous and random while every track itself loops seamlessly (start = end).
      */}
      <g filter="url(#marbleWarp)">
        <g transform-origin="50 30">
          <animateTransform attributeName="transform" type="rotate" dur="131s" repeatCount="indefinite"
            calcMode="linear" values="0 50 30; 360 50 30" />
          <g>
            <animateTransform attributeName="transform" type="translate" dur="73s" repeatCount="indefinite"
              calcMode="spline" keyTimes="0; 0.5; 1"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
              values="0 0; 18 0; 0 0" />
            <g>
              <animateTransform attributeName="transform" type="translate" dur="97s" repeatCount="indefinite"
                calcMode="spline" keyTimes="0; 0.5; 1"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                values="0 0; 0 14; 0 0" />
              <rect x="-80" y="-80" width="260" height="220" fill="url(#marbleBands)" />
            </g>
          </g>
        </g>
      </g>

      {/* Subtle vignette to anchor text */}
      <radialGradient id="vignette" cx="50%" cy="55%" r="70%">
        <stop offset="0%" stopColor="#000" stopOpacity="0.45" />
        <stop offset="60%" stopColor="#000" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>
      <rect width="100" height="60" fill="url(#vignette)" />
    </svg>
  </div>
);


const Index = () => {
  return (
    <div className="site-shell">
      <div className="mini-header">
        <div className="hidden-links" aria-label="Ferramentas secretas">
          <Link to="/breeding" title="Calculadora de Breeding">Calculadora de Breeding</Link>
          <Link to="/pdf2txt" title="Extrator de PDF">Extrator de PDF</Link>
          <Link to="/story-insta" title="Ajustador de Story">Ajustador de Story</Link>
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

      <Navbar />

      <main>
        <section className="hero" id="inicio">
          <CurvedLines />
          <h1>DEER&apos;S<br />SPACE</h1>
          <p>comunidade para quem vive online. sempre.</p>
          <a href="#sobre" className="scroll-pill">role para explorar</a>
        </section>

        <section className="about" id="sobre">
          <div className="text">
            <h2>Sobre</h2>
            <p>Um espaço pra gamers e geeks. Sem firula.</p>
            <p>Jogue, converse, faça amigos.</p>
          </div>
          <div className="image">
            <img src="/images/about-us.jpg" alt="Comunidade de jogos DEER'S SPACE" loading="lazy" />
          </div>
        </section>

        <section className="community" id="comunidade">
          <div className="content">
            <div className="text">
              <h2>Discord</h2>
              <p>Entra. É de graça.</p>
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
          &copy; {new Date().getFullYear()} DEER&apos;s SPACE.
          <br />
          <a href="https://deers.space" title="Comunidade de Gamers Deers Space">deers.space</a>
        </p>
        <nav className="footer-nav" aria-label="Navegação do rodapé">
          <ul>
            <li><a href="#sobre" title="Sobre a comunidade DEER'S SPACE">Sobre</a></li>
            <li><a href="#comunidade" title="Como se juntar à comunidade DEER'S SPACE">Comunidade</a></li>
            <li><a href="mailto:contato@deers.space" title="Entre em contato com DEER'S SPACE">Contato</a></li>
            <li><a href="https://x.com/deernosey" target="_blank" rel="noopener noreferrer" title="Siga Deernosey no X (Twitter)">Twitter</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Index;
