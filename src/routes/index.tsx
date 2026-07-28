import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Leaf, ShieldCheck, Sparkles, Award, Star } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import arganOil from "@/assets/argan_oil.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ASLOIL® — Premium Care for Healthy Hair & Beautiful Skin" },
      { name: "description", content: "Luxury argan-based skincare. Face cream, body lotion, toner, lip balm and pure argan oil — nature in your hands." },
      { property: "og:title", content: "ASLOIL® — Premium Care for Healthy Hair & Beautiful Skin" },
      { property: "og:description", content: "Luxury argan-based skincare. Face cream, body lotion, toner, lip balm and pure argan oil — nature in your hands." },
      { property: "og:image", content: arganOil.url },
      { name: "twitter:image", content: arganOil.url },
    ],
  }),
  component: Home,
});
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-E9K66V1C8X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-E9K66V1C8X');
</script>
const reasons = [
  { n: "01", icon: Leaf, title: "Pure", desc: "100% natural argan oil sourced from Moroccan cooperatives." },
  { n: "02", icon: ShieldCheck, title: "Potent", desc: "Cold-pressed extracts, paraben & sulfate free." },
  { n: "03", icon: Sparkles, title: "Ethical", desc: "Cruelty free from source to shelf, always." },
  { n: "04", icon: Award, title: "Proven", desc: "Formulated in small batches by skincare experts." },
];

const reviews = [
  { name: "Amelia R., Paris", text: "ASLOIL has redefined my nightly ritual. The argan oil is pure luxury in every drop — mirror-shine hair without weight." },
  { name: "Sophia L., Milan", text: "The face cream is otherworldly. My skin feels plump and calm every morning — I've thrown out three other creams." },
  { name: "Isabella K., New York", text: "Elegant, effective, unmistakably luxurious. The packaging alone belongs on any vanity — the formulas belong on any face." },
];

const faqs = [
  { q: "Are ASLOIL products suitable for sensitive skin?", a: "Yes. All formulas are dermatologically tested and free from parabens, sulfates and harsh fragrances." },
  { q: "Where are your products made?", a: "Our argan oil is cold-pressed in Morocco and formulated into our final products in small batches." },
  { q: "Do you ship internationally?", a: "Yes — we ship worldwide with tracked, luxury-boxed delivery." },
  { q: "What is your return policy?", a: "Unopened products can be returned within 30 days for a full refund." },
];

function Home() {
  return (
    <>
      {/* HERO — full-bleed product photo, cinematic fade to black */}
      <section className="relative min-h-[100svh] overflow-hidden">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -right-[10%] -top-[15%] h-[500px] w-[500px] rounded-full bg-[oklch(0.76_0.13_82/0.12)] blur-[120px]" />
        <div className="pointer-events-none absolute -left-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[oklch(0.4_0.11_78/0.2)] blur-[110px]" />

        {/* Background photograph */}
        <div className="absolute inset-0">
          <img
            src={arganOil.url}
            alt=""
            className="h-full w-full object-cover opacity-70 md:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/20 to-transparent md:via-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-40 md:justify-center md:pt-32">
          <div className="max-w-xl animate-fade-up">
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold">Collection Premiere</p>
            <h1 className="mt-6 font-serif text-5xl leading-[0.95] text-foreground md:text-7xl">
              <span className="italic font-light">Alchemy</span>
              <br />
              <span className="font-medium">of Nature</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Harnessing the regenerative power of Moroccan argan on a bed of midnight marble — premium care for healthy hair and beautiful skin.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/products" className="btn-ghost-gold">Explore Rituals</Link>
              <Link to="/about" className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground border-b border-white/10 pb-1 hover:text-gold hover:border-gold transition-colors">Our Story</Link>
            </div>
          </div>
        </div>

        {/* bottom hairline meta */}
        <div className="absolute inset-x-0 bottom-8 z-10 mx-auto hidden max-w-7xl px-6 md:flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>Natural · Paraben Free · Cruelty Free</span>
          <span className="flex items-center gap-2"><span className="h-px w-8 bg-gold" /> Est. Morocco</span>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="products" className="relative bg-background py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold">The Collection</p>
              <h2 className="mt-3 font-serif text-4xl italic font-light md:text-5xl">Curated Essentials</h2>
              <div className="gold-hairline mt-4" />
            </div>
            <Link to="/products" className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground border-b border-white/10 pb-1 hover:text-gold hover:border-gold transition-colors">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (<ProductCard key={p.slug} product={p} />))}
          </div>
        </div>
      </section>

      {/* BRAND STORY — editorial split with warm rim light */}
      <section className="relative overflow-hidden py-32">
        <div className="pointer-events-none absolute -right-[15%] top-1/3 h-[450px] w-[450px] rounded-full bg-[oklch(0.76_0.13_82/0.12)] blur-[110px]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Our Story</p>
            <h2 className="mt-3 font-serif text-4xl italic font-light md:text-5xl">
              Crafted in the shadows,<br />to shine in the light.
            </h2>
            <div className="gold-hairline mt-6" />
            <p className="mt-8 leading-relaxed text-muted-foreground">
              ASLOIL® was born from a single belief — that nature's finest ingredients, treated with respect, produce the most extraordinary results.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Every bottle is a promise: pure, potent, and beautifully crafted. From the argan groves of Morocco to your bathroom shelf, we obsess over every step so your skin and hair can simply glow.
            </p>
            <Link to="/about" className="mt-10 inline-flex btn-ghost-gold">Read More</Link>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="card-rim relative overflow-hidden">
              <img src={products[2].image} alt="ASLOIL Face Cream" className="w-full aspect-[4/5] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE — magazine strip */}
      <section className="border-y border-white/5 bg-background py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">The ASLOIL Difference</p>
            <h2 className="mt-3 font-serif text-4xl italic font-light md:text-5xl">Science met excellence.</h2>
            <div className="gold-hairline mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 gap-y-14 gap-x-8 md:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="text-center md:text-left">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/40 text-gold md:mx-0">
                  <r.icon className="h-5 w-5" strokeWidth={1.2} />
                </div>
                <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.3em] text-gold">{r.n} · {r.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS — editorial pull quote carousel */}
      <section className="relative overflow-hidden py-32">
        <div className="pointer-events-none absolute -left-[10%] top-1/4 h-[420px] w-[420px] rounded-full bg-[oklch(0.4_0.11_78/0.18)] blur-[110px]" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Testimonials</p>
            <h2 className="mt-3 font-serif text-4xl italic font-light md:text-5xl">In their words.</h2>
            <div className="gold-hairline mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={r.name} className="relative">
                <span className="font-serif text-6xl leading-none text-gold/30">"</span>
                <p className="mt-2 font-serif text-xl italic leading-relaxed text-foreground/90">{r.text}</p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, j) => (<Star key={j} className="h-3 w-3 fill-gold" />))}
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">— {r.name}</span>
                </div>
                {i < reviews.length - 1 && (
                  <div className="mt-10 h-px w-full bg-white/5 md:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5 bg-background py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-14 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">FAQ</p>
            <h2 className="mt-3 font-serif text-4xl italic font-light md:text-5xl">Questions & Answers</h2>
            <div className="gold-hairline mx-auto mt-4" />
          </div>
          <div className="divide-y divide-white/5 border-y border-white/5">
            {faqs.map((f, i) => (<FaqItem key={i} q={f.q} a={f.a} />))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER — editorial subscribe */}
      <section className="relative overflow-hidden py-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[500px] w-[600px] rounded-full bg-[oklch(0.76_0.13_82/0.1)] blur-[120px]" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold">Join the Inner Circle</p>
          <h2 className="mt-3 font-serif text-4xl italic font-light md:text-5xl">Exclusive Access</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Editorial notes, botanical insights and first access to new collections — sent quietly to your inbox.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-12 max-w-md">
            <div className="relative">
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full border-b border-white/20 bg-transparent py-4 pr-28 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold"
              />
              <button className="absolute right-0 bottom-3 text-[10px] uppercase tracking-[0.3em] text-gold hover:text-foreground transition-colors">
                Subscribe →
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(!open)} className="block w-full py-6 text-left">
      <div className="flex items-center justify-between gap-6">
        <span className="font-serif text-lg italic text-foreground">{q}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-gold transition-transform ${open ? "rotate-180" : ""}`} />
      </div>
      {open && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </button>
  );
}
