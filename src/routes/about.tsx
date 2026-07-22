import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ASLOIL® — Nature In Your Hands" },
      { name: "description", content: "The story behind ASLOIL® — a luxury cosmetics brand built on pure argan oil and natural ingredients." },
      { property: "og:title", content: "About ASLOIL® — Nature In Your Hands" },
      { property: "og:description", content: "The story behind ASLOIL® — luxury argan-based skincare." },
      { property: "og:image", content: products[2].image },
      { name: "twitter:image", content: products[2].image },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="bg-background ambient-glow pt-40 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-gold text-center">Our Story</p>
        <h1 className="mt-4 text-center font-serif text-5xl md:text-6xl">Nature In Your Hands</h1>
        <div className="gold-hairline mx-auto mt-6" />

        <div className="mt-16 space-y-6 text-lg text-muted-foreground">
          <p>ASLOIL® was founded with a simple, uncompromising promise: to create luxury skincare rooted in what nature does best. Every product begins with the finest cold-pressed argan oil from Morocco — an ingredient prized for centuries for its ability to restore, protect and reveal the skin's natural radiance.</p>
          <p>We believe premium care shouldn't require compromise. That's why every formula is free from parabens, sulfates, and harsh chemicals — and never tested on animals. Just pure, powerful ingredients, crafted in small batches by people who care deeply about what goes on your skin.</p>
          <p>Whether it's our silken Face Cream, restorative Argan Oil, or nourishing Lip Balm, each ASLOIL® ritual is designed to feel like an act of self-respect — quiet, elegant, and effective.</p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <img key={p.slug} src={p.image} alt={p.name} className="w-full rounded-2xl card-rim object-cover aspect-square" />
          ))}
        </div>
      </div>
    </div>
  );
}
