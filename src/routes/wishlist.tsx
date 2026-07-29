import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore } from "@/lib/store";
import { getProduct } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Wishlist — ASLOIL®" },
      { name: "description", content: "Your saved ASLOIL® favorites." },
      { property: "og:title", content: "Wishlist — ASLOIL®" },
      { property: "og:description", content: "Your saved ASLOIL® favorites." },
    ],
  }),
  component: WishPage,
});

function WishPage() {
  const { wishlist } = useStore();
  const items = wishlist.map(getProduct).filter(Boolean) as ReturnType<typeof getProduct>[];

  return (
    <div className="bg-background ambient-glow min-h-screen pb-24 pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="font-serif text-5xl">Wishlist</h1>
        <div className="gold-hairline mt-6" />
        {items.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">Nothing saved yet.</p>
            <Link to="/products" className="mt-6 inline-block btn-solid-gold rounded-full px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium">Browse Products</Link>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => p && <ProductCard key={p.slug} product={p} />)}
          </div>
        )}
      </div>
    </div>
  );
}
