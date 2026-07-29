import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Leaf, ShieldCheck, Sparkles, Award, Star } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { useT, useDocMeta } from "@/lib/i18n";
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

function Home() {
  const t = useT();
  useDocMeta(t("meta.home.title"), t("meta.home.desc"));

  const reasons = [
    { n: "01", icon: Leaf, title: t("home.why.r1.title"), desc: t("home.why.r1.desc") },
    { n: "02", icon: ShieldCheck, title: t("home.why.r2.title"), desc: t("home.why.r2.desc") },
    { n: "03", icon: Sparkles, title: t("home.why.r3.title"), desc: t("home.why.r3.desc") },
    { n: "04", icon: Award, title: t("home.why.r4.title"), desc: t("home.why.r4.desc") },
  ];
  const reviews = [
    { name: t("home.reviews.1.name"), text: t("home.reviews.1.text") },
    { name: t("home.reviews.2.name"), text: t("home.reviews.2.text") },
    { name: t("home.reviews.3.name"), text: t("home.reviews.3.text") },
  ];
  const faqs = [
    { q: t("home.faq.1.q"), a: t("home.faq.1.a") },
    { q: t("home.faq.2.q"), a: t("home.faq.2.a") },
    { q: t("home.faq.3.q"), a: t("home.faq.3.a") },
    { q: t("home.faq.4.q"), a: t("home.faq.4.a") },
  ];

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="pointer-events-none absolute -right-[10%] -top-[15%] h-[500px] w-[500px] rounded-full bg-[oklch(0.76_0.13_82/0.12)] blur-[120px]" />
        <div className="pointer-events-none absolute -left-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-[oklch(0.4_0.11_78/0.2)] blur-[110px]" />
        <div className="absolute inset-0">
          <img src={arganOil.url} alt="" className="h-full w-full object-cover opacity-70 md:opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/20 to-transparent md:via-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-40 md:justify-center md:pt-32">
          <div className="max-w-xl animate-fade-up">
            <p className="text-[10px] uppercase tracking-[0.5em] text-gold">{t("home.hero.eyebrow")}</p>
            <h1 className="mt-6 font-serif text-5xl leading-[0.95] text-foreground md:text-7xl">
              <span className="italic font-light">{t("home.hero.title1")}</span>
              <br />
              <span className="font-medium">{t("home.hero.title2")}</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{t("home.hero.subtitle")}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/products" className="btn-ghost-gold">{t("home.hero.cta1")}</Link>
              <Link to="/about" className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground border-b border-white/10 pb-1 hover:text-gold hover:border-gold transition-colors">{t("home.hero.cta2")}</Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-8 z-10 mx-auto hidden max-w-7xl px-6 md:flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span>{t("home.hero.meta")}</span>
          <span className="flex items-center gap-2"><span className="h-px w-8 bg-gold" /> {t("home.hero.origin")}</span>
        </div>
      </section>

      <section id="products" className="relative bg-background py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{t("home.collection.eyebrow")}</p>
              <h2 className="mt-3 font-serif text-4xl italic font-light md:text-5xl">{t("home.collection.title")}</h2>
              <div className="gold-hairline mt-4" />
            </div>
            <Link to="/products" className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground border-b border-white/10 pb-1 hover:text-gold hover:border-gold transition-colors">
              {t("home.collection.viewAll")}
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (<ProductCard key={p.slug} product={p} />))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-32">
        <div className="pointer-events-none absolute -right-[15%] top-1/3 h-[450px] w-[450px] rounded-full bg-[oklch(0.76_0.13_82/0.12)] blur-[110px]" />
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{t("home.story.eyebrow")}</p>
            <h2 className="mt-3 font-serif text-4xl italic font-light md:text-5xl">{t("home.story.title")}</h2>
            <div className="gold-hairline mt-6" />
            <p className="mt-8 leading-relaxed text-muted-foreground">{t("home.story.p1")}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t("home.story.p2")}</p>
            <Link to="/about" className="mt-10 inline-flex btn-ghost-gold">{t("home.story.cta")}</Link>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="card-rim relative overflow-hidden">
              <img src={products[2].image} alt="ASLOIL Face Cream" className="w-full aspect-[4/5] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-background py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{t("home.why.eyebrow")}</p>
            <h2 className="mt-3 font-serif text-4xl italic font-light md:text-5xl">{t("home.why.title")}</h2>
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

      <section className="relative overflow-hidden py-32">
        <div className="pointer-events-none absolute -left-[10%] top-1/4 h-[420px] w-[420px] rounded-full bg-[oklch(0.4_0.11_78/0.18)] blur-[110px]" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{t("home.reviews.eyebrow")}</p>
            <h2 className="mt-3 font-serif text-4xl italic font-light md:text-5xl">{t("home.reviews.title")}</h2>
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
                {i < reviews.length - 1 && (<div className="mt-10 h-px w-full bg-white/5 md:hidden" />)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-background py-28">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-14 text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{t("home.faq.eyebrow")}</p>
            <h2 className="mt-3 font-serif text-4xl italic font-light md:text-5xl">{t("home.faq.title")}</h2>
            <div className="gold-hairline mx-auto mt-4" />
          </div>
          <div className="divide-y divide-white/5 border-y border-white/5">
            {faqs.map((f, i) => (<FaqItem key={i} q={f.q} a={f.a} />))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[500px] w-[600px] rounded-full bg-[oklch(0.76_0.13_82/0.1)] blur-[120px]" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gold">{t("home.news.eyebrow")}</p>
          <h2 className="mt-3 font-serif text-4xl italic font-light md:text-5xl">{t("home.news.title")}</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">{t("home.news.desc")}</p>
          <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-12 max-w-md">
            <div className="relative">
              <input
                type="email"
                required
                placeholder={t("home.news.placeholder")}
                className="w-full border-b border-white/20 bg-transparent py-4 pr-28 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold"
              />
              <button className="absolute right-0 bottom-3 text-[10px] uppercase tracking-[0.3em] text-gold hover:text-foreground transition-colors">
                {t("home.news.cta")}
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
