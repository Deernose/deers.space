import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "https://deers.space", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#comunidade", label: "Comunidade" },
  { href: "mailto:contato@deers.space", label: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Navegação principal">
      <a href="https://deers.space" className="logo" title="DEER'S SPACE - Comunidade de Gamers, deers space, deer space, deersspace">
        DEER&apos;s SPACE
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
            <a href={link.href} title={`${link.label} - DEER'S SPACE`} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
