import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/asloil-logo.jpg.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={logo.url} alt="ASLOIL logo" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-serif text-2xl tracking-[0.25em] text-gold">ASLOIL<span className="align-super text-xs">®</span></span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Nature In Your Hands. Premium care crafted for healthy hair and beautiful skin.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products" className="hover:text-gold">All Products</Link></li>
              <li><Link to="/product/$slug" params={{ slug: "argan-oil" }} className="hover:text-gold">Argan Oil</Link></li>
              <li><Link to="/product/$slug" params={{ slug: "face-cream" }} className="hover:text-gold">Face Cream</Link></li>
              <li><Link to="/product/$slug" params={{ slug: "body-lotion" }} className="hover:text-gold">Body Lotion</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-gold">About</Link></li>
              <li><Link to="/faq" className="hover:text-gold">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold">Follow</h4>
            <div className="mt-4 flex gap-4 text-muted-foreground">
              <a href="#" aria-label="Instagram" className="hover:text-gold"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-gold"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-gold"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border/40 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ASLOIL®. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
