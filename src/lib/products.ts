import arganOil from "@/assets/argan_oil.png.asset.json";
import bodyLotion from "@/assets/body_lotion.png.asset.json";
import faceCream from "@/assets/face_cream.png.asset.json";
import facialToner from "@/assets/facial_toner.png.asset.json";
import lipBalm from "@/assets/lip_balm.png.asset.json";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  price: string;
  size: string;
  benefits: string[];
  ingredients: string[];
  directions: string;
  faqs: { q: string; a: string }[];
};

export const products: Product[] = [
  {
    slug: "argan-oil",
    name: "Argan Oil",
    tagline: "Nature In Your Hands",
    description:
      "Pure, cold-pressed Moroccan argan oil for body, face and hair. A single drop restores softness, shine and elasticity.",
    image: arganOil.url,
    price: "$10.00",
    size: "50ml / 1.69oz",
    benefits: [
      "Deeply nourishes skin and hair",
      "Rich in vitamin E and essential fatty acids",
      "Reduces frizz and split ends",
      "Restores natural glow",
    ],
    ingredients: ["100% pure Argania Spinosa kernel oil", "Vitamin E", "Omega 6 & 9"],
    directions:
      "Apply 2–3 drops to clean skin or damp hair. Massage gently until fully absorbed. Use morning and night.",
    faqs: [
      { q: "Is it suitable for all skin types?", a: "Yes — including sensitive and oily skin." },
      { q: "Can I use it on my hair?", a: "Absolutely. It tames frizz and adds mirror-like shine." },
    ],
  },
  {
    slug: "body-lotion",
    name: "Body Lotion",
    tagline: "Deep Hydration & Softness",
    description:
      "Silky body lotion with argan oil and shea butter. Long-lasting hydration that leaves skin visibly softer.",
    image: bodyLotion.url,
    price: "$10.00",
    size: "200ml / 6.76oz",
    benefits: [
      "24-hour deep hydration",
      "Softens and smooths skin",
      "Non-greasy, fast-absorbing",
      "Delicate luxury scent",
    ],
    ingredients: ["Argan Oil", "Shea Butter", "Glycerin", "Vitamin E"],
    directions: "Massage generously into clean skin daily. Ideal after showering.",
    faqs: [
      { q: "Is it heavy on skin?", a: "No — it feels silky and absorbs quickly." },
      { q: "Suitable for sensitive skin?", a: "Yes, dermatologically tested." },
    ],
  },
  {
    slug: "face-cream",
    name: "Face Cream",
    tagline: "Nourishing & Hydrating",
    description:
      "Rich facial cream with argan oil and aloe vera. Nourishes, hydrates and helps repair the skin barrier.",
    image: faceCream.url,
    price: "$10.00",
    size: "50ml / 1.69oz",
    benefits: [
      "Repairs skin barrier",
      "Deep hydration all day",
      "Soothes and calms",
      "Visibly firmer skin",
    ],
    ingredients: ["Argan Oil", "Aloe Vera", "Hyaluronic Acid", "Vitamin E"],
    directions: "Apply a small amount to cleansed face and neck morning and evening.",
    faqs: [
      { q: "Can I wear makeup over it?", a: "Yes — it makes an excellent base." },
      { q: "Is it fragrance free?", a: "It contains a very light, natural scent." },
    ],
  },
  {
    slug: "facial-toner",
    name: "Facial Toner",
    tagline: "Refreshes & Balances",
    description:
      "Refreshing toner with rose water and argan oil. Balances the skin, tightens pores and preps for serum.",
    image: facialToner.url,
    price: "$10.00",
    size: "100ml / 3.38oz",
    benefits: [
      "Balances skin pH",
      "Tightens visible pores",
      "Refreshes tired skin",
      "Preps skin for serum",
    ],
    ingredients: ["Rose Water", "Argan Oil", "Witch Hazel", "Glycerin"],
    directions: "After cleansing, sweep across face with a cotton pad. Follow with cream.",
    faqs: [
      { q: "Alcohol free?", a: "Yes — completely alcohol free." },
      { q: "How often to use?", a: "Morning and night for best results." },
    ],
  },
  {
    slug: "lip-balm",
    name: "Lip Balm",
    tagline: "Nourishing & Repairing",
    description:
      "Melt-in lip balm with argan oil and vitamin E. Repairs dry lips and locks in moisture for hours.",
    image: lipBalm.url,
    price: "$10.00",
    size: "5g / 0.17oz",
    benefits: [
      "Repairs dry, cracked lips",
      "Long-lasting moisture",
      "Smooth, non-sticky finish",
      "Subtle natural shine",
    ],
    ingredients: ["Argan Oil", "Vitamin E", "Beeswax", "Shea Butter"],
    directions: "Glide across lips whenever needed. Reapply throughout the day.",
    faqs: [
      { q: "Is it tinted?", a: "No — it's a clear balm with a subtle sheen." },
      { q: "Vegan?", a: "It contains natural beeswax." },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
