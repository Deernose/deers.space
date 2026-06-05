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
        {/* Vertical-ish flowing red bands -- alternating dark/bright stripes */}
        <linearGradient id="marbleBands" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#c40914" />
          <stop offset="4%"   stopColor="#ff2230" />
          <stop offset="8%"   stopColor="#5a0207" />
          <stop offset="13%"  stopColor="#0a0000" />
          <stop offset="18%"  stopColor="#3a0306" />
          <stop offset="23%"  stopColor="#a80812" />
          <stop offset="27%"  stopColor="#ff2a36" />
          <stop offset="32%"  stopColor="#7a040b" />
          <stop offset="38%"  stopColor="#0a0000" />
          <stop offset="44%"  stopColor="#1a0102" />
          <stop offset="50%"  stopColor="#c40914" />
          <stop offset="55%"  stopColor="#ff3340" />
          <stop offset="60%"  stopColor="#6a040a" />
          <stop offset="66%"  stopColor="#0a0000" />
          <stop offset="72%"  stopColor="#2a0204" />
          <stop offset="78%"  stopColor="#9a0810" />
          <stop offset="83%"  stopColor="#ff2a36" />
          <stop offset="88%"  stopColor="#5a0408" />
          <stop offset="94%"  stopColor="#0a0000" />
          <stop offset="100%" stopColor="#c40914" />
        </linearGradient>

        {/* Marble deformation: low-freq turbulence -> heavy displacement */}
        <filter id="marbleWarp" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.05" numOctaves="2" seed="7" result="noise">
            <animate attributeName="baseFrequency" dur="40s" repeatCount="indefinite"
              values="0.012 0.05; 0.018 0.045; 0.014 0.055; 0.012 0.05" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="55" xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation="0.35" />
        </filter>

        <filter id="marbleGlow">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
      </defs>

      <rect width="100" height="60" fill="#000001" />

      {/* Two displaced layers, offset & differently scaled for organic depth */}
      <g filter="url(#marbleWarp)">
        <rect x="-10" y="-10" width="120" height="80" fill="url(#marbleBands)" />
      </g>
      <g filter="url(#marbleWarp)" opacity="0.55" style={{ mixBlendMode: "screen" }}>
        <rect x="-15" y="-10" width="130" height="80" fill="url(#marbleBands)" transform="translate(8 0) scale(1.05 1)" />
      </g>

      {/* Central darkening for text legibility */}
      <radialGradient id="vignette" cx="50%" cy="55%" r="60%">
        <stop offset="0%" stopColor="#000" stopOpacity="0.7" />
        <stop offset="55%" stopColor="#000" stopOpacity="0.25" />
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
