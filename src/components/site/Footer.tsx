import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";
import logo from "@/assets/asloil-logo.jpg";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-gradient-to-b from-background to-black/95">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="ASLOIL logo"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/30"
              />

              <div>
                <span className="font-serif text-2xl tracking-[0.25em] text-gold">
                  ASLOIL
                  <span className="align-super text-xs">®</span>
                </span>

                <p className="text-xs text-muted-foreground">
                  Premium Natural Cosmetics
                </p>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Discover luxurious skincare and haircare inspired by nature,
              crafted with premium ingredients for timeless beauty.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold">
              Shop
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">

              <li>
                <Link to="/products" className="transition hover:text-gold">
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  to="/product/$slug"
                  params={{ slug: "argan-oil" }}
                  className="transition hover:text-gold"
                >
                  Argan Oil
                </Link>
              </li>

              <li>
                <Link
                  to="/product/$slug"
                  params={{ slug: "face-cream" }}
                  className="transition hover:text-gold"
                >
                  Face Cream
                </Link>
              </li>

              <li>
                <Link
                  to="/product/$slug"
                  params={{ slug: "body-lotion" }}
                  className="transition hover:text-gold"
                >
                  Body Lotion
                </Link>
              </li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold">
              Company
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">

              <li>
                <Link to="/about" className="transition hover:text-gold">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/faq" className="transition hover:text-gold">
                  FAQ
                </Link>
              </li>

              <li>
                <Link to="/contact" className="transition hover:text-gold">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h4 className="text-xs uppercase tracking-[0.25em] text-gold">
              Contact
            </h4>

            <div className="mt-5 space-y-4 text-sm text-muted-foreground">

              <a
                href="mailto:info@asloil.com"
                className="flex items-center gap-3 transition hover:text-gold"
              >
                <Mail className="h-4 w-4" />
                info@asloil.com
              </a>

              <a
                href="mailto:support@asloil.com"
                className="flex items-center gap-3 transition hover:text-gold"
              >
                <Mail className="h-4 w-4" />
                support@asloil.com
              </a>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" />
                Australia
              </div>

              <div className="flex gap-5 pt-4">

                <a
                  href="https://instagram.com/asloil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition hover:text-gold"
                >
                  <Instagram className="h-5 w-5" />
                </a>

                <a
                  href="https://facebook.com/asloil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="transition hover:text-gold"
                >
                  <Facebook className="h-5 w-5" />
                </a>

                <a
                  href="https://x.com/asloil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold tracking-wider hover:text-gold transition"
                >
                  X
                </a>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-gold/20 pt-8">

          <p className="text-center text-xs tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} ASLOIL®. Premium Natural Cosmetics.
            All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}