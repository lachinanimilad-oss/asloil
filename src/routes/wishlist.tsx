import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore } from "@/lib/store";
import { getProduct } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { useT, useDocMeta } from "@/lib/i18n";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Wishlist — ASLOIL®" },
      { name: "description", content: "Your saved ASLOIL® favorites." },
    ],
  }),
  component: WishPage,
});

function WishPage() {
  const t = useT();
  useDocMeta(t("meta.wish.title"), t("meta.wish.desc"));
  const { wishlist } = useStore();
  const items = wishlist.map(getProduct).filter(Boolean) as ReturnType<typeof getProduct>[];

  return (
    <div className="bg-background ambient-glow min-h-screen pb-24 pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="font-serif text-5xl">{t("wish.title")}</h1>
        <div className="gold-hairline mt-6" />
        {items.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">{t("wish.empty")}</p>
            <Link to="/products" className="mt-6 inline-block btn-solid-gold rounded-full px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium">{t("wish.browse")}</Link>
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
