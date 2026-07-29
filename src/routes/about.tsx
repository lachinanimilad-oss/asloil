import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { useT, useDocMeta } from "@/lib/i18n";

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
  const t = useT();
  useDocMeta(t("meta.about.title"), t("meta.about.desc"));
  return (
    <div className="bg-background ambient-glow pt-40 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-gold text-center">{t("about.eyebrow")}</p>
        <h1 className="mt-4 text-center font-serif text-5xl md:text-6xl">{t("about.title")}</h1>
        <div className="gold-hairline mx-auto mt-6" />

        <div className="mt-16 space-y-6 text-lg text-muted-foreground">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
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
