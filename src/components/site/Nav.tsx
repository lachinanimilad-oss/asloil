import { Link } from "@tanstack/react-router";
import { ShoppingBag, Heart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";
import logo from "@/assets/asloil-logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { cart, wishlist } = useStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="ASLOIL logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-serif text-2xl tracking-[0.25em] text-gold">ASLOIL<span className="align-super text-xs">®</span></span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-gold [&.active]:text-gold"
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/wishlist" className="relative text-foreground/80 transition-colors hover:text-gold">
            <Heart className="h-5 w-5" />
            {wishlist.length > 0 && (
              <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-gold text-[10px] font-semibold text-background">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative text-foreground/80 transition-colors hover:text-gold">
            <ShoppingBag className="h-5 w-5" />
            {cart.length > 0 && (
              <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-gold text-[10px] font-semibold text-background">
                {cart.length}
              </span>
            )}
          </Link>
          <button
            className="md:hidden text-foreground/80"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.2em] text-foreground/80 hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
