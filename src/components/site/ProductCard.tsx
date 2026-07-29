import { Link } from "@tanstack/react-router";
import { Heart, Plus } from "lucide-react";
import type { Product } from "@/lib/products";
import { useStore } from "@/lib/store";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const wished = wishlist.includes(product.slug);

  return (
    <div className="group flex flex-col">
      <div className="card-rim relative overflow-hidden">
        <button
          onClick={() => toggleWishlist(product.slug)}
          aria-label="Wishlist"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-background/60 backdrop-blur transition-colors hover:border-gold hover:text-gold"
        >
          <Heart className={`h-3.5 w-3.5 ${wished ? "fill-gold text-gold" : ""}`} />
        </button>
        <Link to="/product/$slug" params={{ slug: product.slug }} className="block">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover grayscale transition-all duration-[1200ms] group-hover:grayscale-0 group-hover:scale-[1.03]"
            />
          </div>
        </Link>
      </div>

      <div className="mt-6 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{product.tagline}</p>
          <Link to="/product/$slug" params={{ slug: product.slug }}>
            <h3 className="mt-1.5 font-serif text-2xl italic font-light text-foreground transition-colors hover:text-gold">
              {product.name}
            </h3>
          </Link>
          <p className="mt-2 text-xs text-muted-foreground">{product.size}</p>
        </div>
        <div className="flex flex-col items-end gap-3 shrink-0">
          <span className="font-serif text-xl italic text-foreground">{product.price}</span>
          <button
            onClick={() => addToCart(product.slug)}
            aria-label="Add to cart"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition-colors hover:border-gold hover:text-gold"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="mt-4 self-start text-[10px] uppercase tracking-[0.3em] text-muted-foreground border-b border-white/10 pb-1 transition-colors hover:text-gold hover:border-gold"
      >
        View Details
      </Link>
    </div>
  );
}
