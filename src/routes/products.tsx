import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { useT, useDocMeta } from "@/lib/i18n";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Shop All Products — ASLOIL®" },
      { name: "description", content: "Shop the full ASLOIL® collection: argan oil, face cream, body lotion, facial toner and lip balm." },
      { property: "og:title", content: "Shop All Products — ASLOIL®" },
      { property: "og:description", content: "Shop the full ASLOIL® luxury collection." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const t = useT();
  useDocMeta(t("meta.shop.title"), t("meta.shop.desc"));
  return (
    <div className="bg-background ambient-glow pb-24 pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">{t("shop.eyebrow")}</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">{t("shop.title")}</h1>
          <div className="gold-hairline mx-auto mt-6" />
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">{t("shop.desc")}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (<ProductCard key={p.slug} product={p} />))}
        </div>
      </div>
    </div>
  );
}
