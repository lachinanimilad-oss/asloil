import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { useStore } from "@/lib/store";
import { getProduct } from "@/lib/products";
import { useT, useDocMeta, useProductI18n } from "@/lib/i18n";
import type { Product } from "@/lib/products";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — ASLOIL®" },
      { name: "description", content: "Review your ASLOIL® cart before checkout." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const t = useT();
  useDocMeta(t("meta.cart.title"), t("meta.cart.desc"));
  const { cart, removeFromCart, clearCart } = useStore();
  const items = cart.map(getProduct).filter(Boolean) as Product[];
  const total = items.length * 10;

  return (
    <div className="bg-background ambient-glow min-h-screen pb-24 pt-40">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="font-serif text-5xl">{t("cart.title")}</h1>
        <div className="gold-hairline mt-6" />

        {items.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">{t("cart.empty")}</p>
            <Link to="/products" className="mt-6 inline-block btn-solid-gold rounded-full px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium">{t("cart.shop")}</Link>
          </div>
        ) : (
          <>
            <div className="mt-10 space-y-4">
              {items.map((p, i) => (
                <CartRow key={i} product={p} onRemove={() => removeFromCart(p.slug)} removeLabel={t("cart.remove")} />
              ))}
            </div>
            <div className="mt-10 card-rim rounded-2xl p-8">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-[0.25em]">{t("cart.total")}</span>
                <span className="font-serif text-3xl text-gold">${total.toFixed(2)}</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="btn-solid-gold flex-1 rounded-full py-4 text-xs uppercase tracking-[0.25em] font-medium">{t("cart.checkout")}</button>
                <button onClick={clearCart} className="rounded-full border border-border px-6 py-4 text-xs uppercase tracking-[0.25em] hover:border-gold hover:text-gold">{t("cart.clear")}</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function CartRow({ product, onRemove, removeLabel }: { product: Product; onRemove: () => void; removeLabel: string }) {
  const p = useProductI18n(product);
  return (
    <div className="card-rim flex items-center gap-6 rounded-2xl p-4">
      <img src={p.image} alt={p.name} className="h-24 w-24 rounded-xl object-cover" />
      <div className="flex-1 min-w-0">
        <p className="font-serif text-xl truncate">{p.name}</p>
        <p className="text-xs text-muted-foreground">{p.size}</p>
      </div>
      <span className="font-serif text-gold text-lg">{p.price}</span>
      <button onClick={onRemove} aria-label={removeLabel} className="text-muted-foreground hover:text-destructive">
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}
