import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "início" },
  { href: "#comunidade", label: "comunidade" },
  { href: "#hubs", label: "hubs" },
  { href: "#eventos", label: "eventos" },
  { href: "#sobre", label: "sobre" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  return (
    <nav className="navbar" aria-label="Navegação principal">
      <a href="#inicio" className="logo" title="DEER'S SPACE">
        <span className="logo-text">
          <span className="logo-deers">DEER&apos;S</span>
          <span className="logo-space">SPACE</span>
        </span>
        <span className="logo-star" aria-hidden="true">✦</span>
      </a>

      <button
        className="hamburger"
        onClick={() => setOpen((p) => !p)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ul className={open ? "nav-open" : ""}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={active === link.href ? "is-active" : ""}
              onClick={() => {
                setActive(link.href);
                setOpen(false);
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="https://discord.com/invite/kWdJFzf4rj"
        target="_blank"
        rel="noopener noreferrer"
        className="enter-btn"
      >
        entrar <ArrowUpRight size={16} strokeWidth={2.2} />
      </a>
    </nav>
  );
};

export default Navbar;
