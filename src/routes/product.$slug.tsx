import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Heart, ShoppingBag, ArrowLeft } from "lucide-react";
import { getProduct, products, type Product } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.product.name} — ASLOIL®` },
      { name: "description", content: loaderData.product.description },
      { property: "og:title", content: `${loaderData.product.name} — ASLOIL®` },
      { property: "og:description", content: loaderData.product.description },
      { property: "og:image", content: loaderData.product.image },
      { name: "twitter:image", content: loaderData.product.image },
    ] : [],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const wished = wishlist.includes(product.slug);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="bg-background ambient-glow pb-24 pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <Link to="/products" className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-gold">
          <ArrowLeft className="h-4 w-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* Gallery */}
          <div>
            <div className="card-rim overflow-hidden rounded-3xl">
              <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[product.image, product.image, product.image, product.image].map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-xl border border-border hover:border-gold transition-colors cursor-pointer">
                  <img src={src} alt="" className="h-full w-full object-cover opacity-80" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">{product.tagline}</p>
            <h1 className="mt-4 font-serif text-5xl md:text-6xl">{product.name}</h1>
            <div className="gold-hairline mt-6" />
            <p className="mt-6 text-muted-foreground text-lg">{product.description}</p>

            <div className="mt-8 flex items-baseline gap-4">
              <span className="font-serif text-4xl text-gold">{product.price}</span>
              <span className="text-sm text-muted-foreground">{product.size}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => addToCart(product.slug)}
                className="btn-solid-gold inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium"
              >
                <ShoppingBag className="h-4 w-4" /> Add to Cart
              </button>
              <button
                onClick={() => toggleWishlist(product.slug)}
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-xs uppercase tracking-[0.25em] transition-colors hover:border-gold hover:text-gold"
              >
                <Heart className={`h-4 w-4 ${wished ? "fill-gold text-gold" : ""}`} />
                {wished ? "In Wishlist" : "Add to Wishlist"}
              </button>
            </div>

            <div className="mt-10 space-y-1">
              <Accordion title="Benefits" defaultOpen>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {product.benefits.map((b) => (
                    <li key={b} className="flex gap-3"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />{b}</li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Ingredients">
                <p className="text-sm text-muted-foreground">{product.ingredients.join(", ")}</p>
              </Accordion>
              <Accordion title="Directions">
                <p className="text-sm text-muted-foreground">{product.directions}</p>
              </Accordion>
              <Accordion title="FAQ">
                <div className="space-y-4">
                  {product.faqs.map((f) => (
                    <div key={f.q}>
                      <p className="font-serif text-foreground">{f.q}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{f.a}</p>
                    </div>
                  ))}
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-28">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">You may also love</p>
            <h2 className="mt-4 font-serif text-4xl">Related Products</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (<ProductCard key={p.slug} product={p} />))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Accordion({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-t border-border/60">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-5">
        <span className="text-sm uppercase tracking-[0.25em] text-foreground">{title}</span>
        <ChevronDown className={`h-4 w-4 text-gold transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-6">{children}</div>}
    </div>
  );
}
