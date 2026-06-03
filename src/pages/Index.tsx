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
        <linearGradient id="lavaDark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a0000" />
          <stop offset="50%" stopColor="#3a0204" />
          <stop offset="100%" stopColor="#0a0000" />
        </linearGradient>
        <linearGradient id="lavaMid" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5a0306" />
          <stop offset="50%" stopColor="#9a0810" />
          <stop offset="100%" stopColor="#2a0103" />
        </linearGradient>
        <linearGradient id="lavaBright" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c8121c" />
          <stop offset="50%" stopColor="#ff1f2c" />
          <stop offset="100%" stopColor="#7a0510" />
        </linearGradient>
        <filter id="lavaBlur" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>

      <rect width="100" height="60" fill="#000001" />

      <g filter="url(#lavaBlur)">
        <path
          className="lava-line lava-line-slow"
          d="M-10 12 C 15 4, 35 22, 55 14 S 95 6, 120 18"
          stroke="url(#lavaDark)"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        >
          <animate attributeName="d" dur="38s" repeatCount="indefinite"
            values="M-10 12 C 15 4, 35 22, 55 14 S 95 6, 120 18;
                    M-10 14 C 15 6, 35 20, 55 16 S 95 8, 120 16;
                    M-10 12 C 15 4, 35 22, 55 14 S 95 6, 120 18" />
        </path>

        <path
          className="lava-line"
          d="M-10 22 C 20 14, 40 32, 60 24 S 100 16, 120 28"
          stroke="url(#lavaMid)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        >
          <animate attributeName="d" dur="44s" repeatCount="indefinite"
            values="M-10 22 C 20 14, 40 32, 60 24 S 100 16, 120 28;
                    M-10 24 C 20 16, 40 30, 60 26 S 100 18, 120 26;
                    M-10 22 C 20 14, 40 32, 60 24 S 100 16, 120 28" />
        </path>

        <path
          className="lava-line lava-line-slow"
          d="M-10 30 C 25 22, 45 40, 65 32 S 105 24, 120 36"
          stroke="url(#lavaBright)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          opacity="0.85"
        >
          <animate attributeName="d" dur="52s" repeatCount="indefinite"
            values="M-10 30 C 25 22, 45 40, 65 32 S 105 24, 120 36;
                    M-10 32 C 25 24, 45 38, 65 34 S 105 26, 120 34;
                    M-10 30 C 25 22, 45 40, 65 32 S 105 24, 120 36" />
        </path>

        <path
          className="lava-line"
          d="M-10 38 C 18 30, 38 48, 58 40 S 98 32, 120 44"
          stroke="url(#lavaMid)"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
        >
          <animate attributeName="d" dur="46s" repeatCount="indefinite"
            values="M-10 38 C 18 30, 38 48, 58 40 S 98 32, 120 44;
                    M-10 40 C 18 32, 38 46, 58 42 S 98 34, 120 42;
                    M-10 38 C 18 30, 38 48, 58 40 S 98 32, 120 44" />
        </path>

        <path
          className="lava-line lava-line-slow"
          d="M-10 46 C 22 38, 42 56, 62 48 S 102 40, 120 52"
          stroke="url(#lavaDark)"
          strokeWidth="16"
          fill="none"
          strokeLinecap="round"
        >
          <animate attributeName="d" dur="56s" repeatCount="indefinite"
            values="M-10 46 C 22 38, 42 56, 62 48 S 102 40, 120 52;
                    M-10 48 C 22 40, 42 54, 62 50 S 102 42, 120 50;
                    M-10 46 C 22 38, 42 56, 62 48 S 102 40, 120 52" />
        </path>

        <path
          className="lava-line"
          d="M-10 6 C 20 -2, 40 14, 60 6 S 100 -2, 120 10"
          stroke="url(#lavaMid)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        >
          <animate attributeName="d" dur="42s" repeatCount="indefinite"
            values="M-10 6 C 20 -2, 40 14, 60 6 S 100 -2, 120 10;
                    M-10 8 C 20 0, 40 12, 60 8 S 100 0, 120 8;
                    M-10 6 C 20 -2, 40 14, 60 6 S 100 -2, 120 10" />
        </path>
      </g>
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
        <section className="hero">
          <h1>DEER&apos;s SPACE</h1>
          <p>comunidade para quem vive online. sempre.</p>
          <CurvedLines />
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
