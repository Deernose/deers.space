import { useState, useLayoutEffect, useRef } from "react";
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
  const deersRef = useRef<HTMLSpanElement | null>(null);
  const spaceRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    const equalize = () => {
      const d = deersRef.current;
      const s = spaceRef.current;
      if (!d || !s) return;
      d.style.transform = "scaleX(1)";
      s.style.transform = "scaleX(1)";
      d.style.display = "inline-block";
      s.style.display = "inline-block";
      d.style.transformOrigin = "left center";
      s.style.transformOrigin = "left center";
      const dw = d.getBoundingClientRect().width;
      const sw = s.getBoundingClientRect().width;
      if (!dw || !sw) return;
      const target = Math.max(dw, sw);
      if (dw < target) d.style.transform = `scaleX(${target / dw})`;
      if (sw < target) s.style.transform = `scaleX(${target / sw})`;
    };
    equalize();
    window.addEventListener("resize", equalize);
    return () => window.removeEventListener("resize", equalize);
  }, []);

  return (
    <nav className="navbar" aria-label="Navegação principal">
      <a href="#inicio" className="logo" title="DEER'S SPACE">
        <span className="logo-text">
          <span ref={deersRef} className="logo-deers">DEER&apos;S</span>
          <span ref={spaceRef} className="logo-space">SPACE</span>
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
