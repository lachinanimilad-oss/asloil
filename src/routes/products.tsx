import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

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
  return (
    <div className="bg-background ambient-glow pb-24 pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">The Collection</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">All Products</h1>
          <div className="gold-hairline mx-auto mt-6" />
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Every ASLOIL® formula is crafted from pure argan oil and thoughtfully chosen botanicals.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (<ProductCard key={p.slug} product={p} />))}
        </div>
      </div>
    </div>
  );
}
