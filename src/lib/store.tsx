import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Store = {
  cart: string[];
  wishlist: string[];
  addToCart: (slug: string) => void;
  removeFromCart: (slug: string) => void;
  toggleWishlist: (slug: string) => void;
  clearCart: () => void;
};

const StoreContext = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      setCart(JSON.parse(localStorage.getItem("asloil_cart") || "[]"));
      setWishlist(JSON.parse(localStorage.getItem("asloil_wish") || "[]"));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem("asloil_cart", JSON.stringify(cart));
  }, [cart, hydrated]);
  useEffect(() => {
    if (hydrated) localStorage.setItem("asloil_wish", JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        addToCart: (s) => setCart((c) => [...c, s]),
        removeFromCart: (s) => setCart((c) => {
          const i = c.indexOf(s);
          if (i === -1) return c;
          const n = [...c]; n.splice(i, 1); return n;
        }),
        toggleWishlist: (s) => setWishlist((w) => w.includes(s) ? w.filter(x => x !== s) : [...w, s]),
        clearCart: () => setCart([]),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be inside StoreProvider");
  return ctx;
};
