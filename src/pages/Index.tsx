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
        {/* Marble ribbons — sharp narrow bright-red veins separated by deep black */}
        <linearGradient id="marbleBands" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0.00" stopColor="#000000" />
          <stop offset="0.03" stopColor="#000000" />
          <stop offset="0.045" stopColor="#ff1f2b" />
          <stop offset="0.055" stopColor="#ff2a36" />
          <stop offset="0.07" stopColor="#000000" />
          <stop offset="0.12" stopColor="#000000" />
          <stop offset="0.14" stopColor="#c40914" />
          <stop offset="0.16" stopColor="#ff2230" />
          <stop offset="0.18" stopColor="#5a0207" />
          <stop offset="0.22" stopColor="#000000" />
          <stop offset="0.26" stopColor="#000000" />
          <stop offset="0.285" stopColor="#ff1f2b" />
          <stop offset="0.30" stopColor="#ff3340" />
          <stop offset="0.32" stopColor="#7a040b" />
          <stop offset="0.36" stopColor="#000000" />
          <stop offset="0.41" stopColor="#000000" />
          <stop offset="0.43" stopColor="#c40914" />
          <stop offset="0.45" stopColor="#ff2a36" />
          <stop offset="0.47" stopColor="#3a0306" />
          <stop offset="0.52" stopColor="#000000" />
          <stop offset="0.57" stopColor="#000000" />
          <stop offset="0.59" stopColor="#ff1f2b" />
          <stop offset="0.61" stopColor="#ff2a36" />
          <stop offset="0.63" stopColor="#5a0207" />
          <stop offset="0.68" stopColor="#000000" />
          <stop offset="0.73" stopColor="#000000" />
          <stop offset="0.75" stopColor="#c40914" />
          <stop offset="0.77" stopColor="#ff3340" />
          <stop offset="0.79" stopColor="#7a040b" />
          <stop offset="0.83" stopColor="#000000" />
          <stop offset="0.88" stopColor="#000000" />
          <stop offset="0.905" stopColor="#ff2230" />
          <stop offset="0.92" stopColor="#ff2a36" />
          <stop offset="0.94" stopColor="#3a0306" />
          <stop offset="0.98" stopColor="#000000" />
          <stop offset="1.00" stopColor="#000000" />
        </linearGradient>

        {/* Strong low-freq turbulence with heavy displacement = marbled liquid */}
        <filter id="marbleWarp" x="-30%" y="-30%" width="160%" height="160%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.013 0.014" numOctaves="3" seed="11" result="noise">
            <animate attributeName="baseFrequency" dur="60s" repeatCount="indefinite"
              values="0.013 0.014; 0.016 0.012; 0.012 0.016; 0.013 0.014" />
            <animate attributeName="seed" dur="140s" repeatCount="indefinite" values="11; 17; 5; 11" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="120" xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation="0.25" />
        </filter>
      </defs>

      <rect width="100" height="60" fill="#000001" />

      <g filter="url(#marbleWarp)">
        <rect x="-20" y="-20" width="140" height="100" fill="url(#marbleBands)" />
      </g>

      {/* Subtle vignette to anchor text */}
      <radialGradient id="vignette" cx="50%" cy="55%" r="65%">
        <stop offset="0%" stopColor="#000" stopOpacity="0.55" />
        <stop offset="55%" stopColor="#000" stopOpacity="0.15" />
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
