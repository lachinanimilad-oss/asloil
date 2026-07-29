import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Product } from "./products";

export type Lang = "en" | "es";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Español", short: "ES" },
];

type Dict = Record<string, string>;

const en: Dict = {
  // Nav
  "nav.home": "Home",
  "nav.shop": "Shop",
  "nav.about": "About",
  "nav.faq": "FAQ",
  "nav.contact": "Contact",
  "nav.menu": "Menu",
  "nav.language": "Language",

  // Footer
  "footer.tagline": "Nature In Your Hands. Premium care crafted for healthy hair and beautiful skin.",
  "footer.shop": "Shop",
  "footer.company": "Company",
  "footer.follow": "Follow",
  "footer.allProducts": "All Products",
  "footer.rights": "All rights reserved.",

  // Home — Hero
  "home.hero.eyebrow": "Collection Premiere",
  "home.hero.title1": "Alchemy",
  "home.hero.title2": "of Nature",
  "home.hero.subtitle": "Harnessing the regenerative power of Moroccan argan on a bed of midnight marble — premium care for healthy hair and beautiful skin.",
  "home.hero.cta1": "Explore Rituals",
  "home.hero.cta2": "Our Story",
  "home.hero.meta": "Natural · Paraben Free · Cruelty Free",
  "home.hero.origin": "Est. Morocco",

  // Home — sections
  "home.collection.eyebrow": "The Collection",
  "home.collection.title": "Curated Essentials",
  "home.collection.viewAll": "View All",

  "home.story.eyebrow": "Our Story",
  "home.story.title": "Crafted in the shadows, to shine in the light.",
  "home.story.p1": "ASLOIL® was born from a single belief — that nature's finest ingredients, treated with respect, produce the most extraordinary results.",
  "home.story.p2": "Every bottle is a promise: pure, potent, and beautifully crafted. From the argan groves of Morocco to your bathroom shelf, we obsess over every step so your skin and hair can simply glow.",
  "home.story.cta": "Read More",

  "home.why.eyebrow": "The ASLOIL Difference",
  "home.why.title": "Science met excellence.",
  "home.why.r1.title": "Pure",
  "home.why.r1.desc": "100% natural argan oil sourced from Moroccan cooperatives.",
  "home.why.r2.title": "Potent",
  "home.why.r2.desc": "Cold-pressed extracts, paraben & sulfate free.",
  "home.why.r3.title": "Ethical",
  "home.why.r3.desc": "Cruelty free from source to shelf, always.",
  "home.why.r4.title": "Proven",
  "home.why.r4.desc": "Formulated in small batches by skincare experts.",

  "home.reviews.eyebrow": "Testimonials",
  "home.reviews.title": "In their words.",
  "home.reviews.1.text": "ASLOIL has redefined my nightly ritual. The argan oil is pure luxury in every drop — mirror-shine hair without weight.",
  "home.reviews.1.name": "Amelia R., Paris",
  "home.reviews.2.text": "The face cream is otherworldly. My skin feels plump and calm every morning — I've thrown out three other creams.",
  "home.reviews.2.name": "Sophia L., Milan",
  "home.reviews.3.text": "Elegant, effective, unmistakably luxurious. The packaging alone belongs on any vanity — the formulas belong on any face.",
  "home.reviews.3.name": "Isabella K., New York",

  "home.faq.eyebrow": "FAQ",
  "home.faq.title": "Questions & Answers",
  "home.faq.1.q": "Are ASLOIL products suitable for sensitive skin?",
  "home.faq.1.a": "Yes. All formulas are dermatologically tested and free from parabens, sulfates and harsh fragrances.",
  "home.faq.2.q": "Where are your products made?",
  "home.faq.2.a": "Our argan oil is cold-pressed in Morocco and formulated into our final products in small batches.",
  "home.faq.3.q": "Do you ship internationally?",
  "home.faq.3.a": "Yes — we ship worldwide with tracked, luxury-boxed delivery.",
  "home.faq.4.q": "What is your return policy?",
  "home.faq.4.a": "Unopened products can be returned within 30 days for a full refund.",

  "home.news.eyebrow": "Join the Inner Circle",
  "home.news.title": "Exclusive Access",
  "home.news.desc": "Editorial notes, botanical insights and first access to new collections — sent quietly to your inbox.",
  "home.news.placeholder": "Email Address",
  "home.news.cta": "Subscribe →",

  // Products page
  "shop.eyebrow": "The Collection",
  "shop.title": "All Products",
  "shop.desc": "Every ASLOIL® formula is crafted from pure argan oil and thoughtfully chosen botanicals.",

  // Product card
  "card.addToCart": "Add to cart",
  "card.wishlist": "Wishlist",
  "card.viewDetails": "View Details",

  // Product detail
  "pdp.back": "Back to Shop",
  "pdp.addToCart": "Add to Cart",
  "pdp.addWishlist": "Add to Wishlist",
  "pdp.inWishlist": "In Wishlist",
  "pdp.benefits": "Benefits",
  "pdp.ingredients": "Ingredients",
  "pdp.directions": "Directions",
  "pdp.faq": "FAQ",
  "pdp.related.eyebrow": "You may also love",
  "pdp.related.title": "Related Products",

  // Cart
  "cart.title": "Your Cart",
  "cart.empty": "Your cart is empty.",
  "cart.shop": "Shop Products",
  "cart.remove": "Remove",
  "cart.total": "Total",
  "cart.checkout": "Checkout",
  "cart.clear": "Clear Cart",

  // Wishlist
  "wish.title": "Wishlist",
  "wish.empty": "Nothing saved yet.",
  "wish.browse": "Browse Products",

  // About
  "about.eyebrow": "Our Story",
  "about.title": "Nature In Your Hands",
  "about.p1": "ASLOIL® was founded with a simple, uncompromising promise: to create luxury skincare rooted in what nature does best. Every product begins with the finest cold-pressed argan oil from Morocco — an ingredient prized for centuries for its ability to restore, protect and reveal the skin's natural radiance.",
  "about.p2": "We believe premium care shouldn't require compromise. That's why every formula is free from parabens, sulfates, and harsh chemicals — and never tested on animals. Just pure, powerful ingredients, crafted in small batches by people who care deeply about what goes on your skin.",
  "about.p3": "Whether it's our silken Face Cream, restorative Argan Oil, or nourishing Lip Balm, each ASLOIL® ritual is designed to feel like an act of self-respect — quiet, elegant, and effective.",

  // FAQ page
  "faqpg.eyebrow": "Support",
  "faqpg.title": "Frequently Asked",
  "faqpg.1.q": "Are ASLOIL products suitable for sensitive skin?",
  "faqpg.1.a": "Yes. All formulas are dermatologically tested and free from parabens, sulfates and harsh fragrances.",
  "faqpg.2.q": "Where are your products made?",
  "faqpg.2.a": "Our argan oil is cold-pressed in Morocco and our products are formulated in small batches by trained cosmetic experts.",
  "faqpg.3.q": "Do you ship internationally?",
  "faqpg.3.a": "Yes — we ship worldwide with tracked, luxury-boxed delivery. Delivery times vary by region.",
  "faqpg.4.q": "What is your return policy?",
  "faqpg.4.a": "Unopened products can be returned within 30 days for a full refund.",
  "faqpg.5.q": "Are your products cruelty free?",
  "faqpg.5.a": "Absolutely. ASLOIL® is 100% cruelty free — from source to shelf.",
  "faqpg.6.q": "Do the products contain parabens or sulfates?",
  "faqpg.6.a": "No. Our formulas are paraben-free, sulfate-free and free from harsh chemicals.",
  "faqpg.7.q": "How should I store my products?",
  "faqpg.7.a": "Store in a cool, dry place away from direct sunlight to preserve their potency.",
  "faqpg.8.q": "Can I use multiple ASLOIL products together?",
  "faqpg.8.a": "Yes — our range is designed as a complete ritual: toner, oil, cream, lotion and balm layer beautifully.",

  // Contact
  "contact.eyebrow": "Contact",
  "contact.title": "Get in touch",
  "contact.desc": "We'd love to hear from you. Send us a message and our team will reply within 24 hours.",
  "contact.email": "Email",
  "contact.phone": "Phone",
  "contact.address": "Address",
  "contact.form.name": "Name",
  "contact.form.email": "Email",
  "contact.form.message": "Message",
  "contact.form.send": "Send Message",
  "contact.form.thanks": "Thank you",
  "contact.form.received": "Your message has been received.",

  // Document titles
  "meta.home.title": "ASLOIL® — Premium Care for Healthy Hair & Beautiful Skin",
  "meta.home.desc": "Luxury argan-based skincare. Face cream, body lotion, toner, lip balm and pure argan oil — nature in your hands.",
  "meta.shop.title": "Shop All Products — ASLOIL®",
  "meta.shop.desc": "Shop the full ASLOIL® collection: argan oil, face cream, body lotion, facial toner and lip balm.",
  "meta.about.title": "About ASLOIL® — Nature In Your Hands",
  "meta.about.desc": "The story behind ASLOIL® — a luxury cosmetics brand built on pure argan oil and natural ingredients.",
  "meta.faq.title": "FAQ — ASLOIL®",
  "meta.faq.desc": "Answers to common questions about ASLOIL® products, shipping and ingredients.",
  "meta.contact.title": "Contact — ASLOIL®",
  "meta.contact.desc": "Get in touch with the ASLOIL® team for support, wholesale or press enquiries.",
  "meta.cart.title": "Your Cart — ASLOIL®",
  "meta.cart.desc": "Review your ASLOIL® cart before checkout.",
  "meta.wish.title": "Wishlist — ASLOIL®",
  "meta.wish.desc": "Your saved ASLOIL® favorites.",
};

const es: Dict = {
  "nav.home": "Inicio",
  "nav.shop": "Tienda",
  "nav.about": "Nosotros",
  "nav.faq": "Preguntas",
  "nav.contact": "Contacto",
  "nav.menu": "Menú",
  "nav.language": "Idioma",

  "footer.tagline": "La Naturaleza en tus Manos. Cuidado premium creado para un cabello sano y una piel hermosa.",
  "footer.shop": "Tienda",
  "footer.company": "Compañía",
  "footer.follow": "Síguenos",
  "footer.allProducts": "Todos los Productos",
  "footer.rights": "Todos los derechos reservados.",

  "home.hero.eyebrow": "Estreno de Colección",
  "home.hero.title1": "Alquimia",
  "home.hero.title2": "de la Naturaleza",
  "home.hero.subtitle": "Aprovechamos el poder regenerador del argán marroquí sobre un lecho de mármol de medianoche — cuidado premium para un cabello sano y una piel hermosa.",
  "home.hero.cta1": "Descubre los Rituales",
  "home.hero.cta2": "Nuestra Historia",
  "home.hero.meta": "Natural · Sin Parabenos · Libre de Crueldad",
  "home.hero.origin": "Origen Marruecos",

  "home.collection.eyebrow": "La Colección",
  "home.collection.title": "Esenciales Seleccionados",
  "home.collection.viewAll": "Ver Todo",

  "home.story.eyebrow": "Nuestra Historia",
  "home.story.title": "Creado en la sombra, para brillar en la luz.",
  "home.story.p1": "ASLOIL® nació de una sola convicción: que los mejores ingredientes de la naturaleza, tratados con respeto, ofrecen resultados extraordinarios.",
  "home.story.p2": "Cada frasco es una promesa: puro, potente y bellamente elaborado. Desde los bosques de argán de Marruecos hasta tu tocador, cuidamos cada paso para que tu piel y tu cabello simplemente brillen.",
  "home.story.cta": "Leer Más",

  "home.why.eyebrow": "La Diferencia ASLOIL",
  "home.why.title": "La ciencia se encontró con la excelencia.",
  "home.why.r1.title": "Puro",
  "home.why.r1.desc": "Aceite de argán 100% natural de cooperativas marroquíes.",
  "home.why.r2.title": "Potente",
  "home.why.r2.desc": "Extractos prensados en frío, sin parabenos ni sulfatos.",
  "home.why.r3.title": "Ético",
  "home.why.r3.desc": "Libre de crueldad desde el origen hasta el estante, siempre.",
  "home.why.r4.title": "Comprobado",
  "home.why.r4.desc": "Formulado en pequeños lotes por expertos en el cuidado de la piel.",

  "home.reviews.eyebrow": "Testimonios",
  "home.reviews.title": "En sus palabras.",
  "home.reviews.1.text": "ASLOIL ha redefinido mi ritual nocturno. El aceite de argán es puro lujo en cada gota — cabello con brillo espejo, sin peso.",
  "home.reviews.1.name": "Amelia R., París",
  "home.reviews.2.text": "La crema facial es de otro mundo. Mi piel se siente firme y calmada cada mañana — dejé de usar otras tres cremas.",
  "home.reviews.2.name": "Sofía L., Milán",
  "home.reviews.3.text": "Elegante, eficaz, inconfundiblemente lujoso. El empaque merece cualquier tocador — las fórmulas merecen cualquier rostro.",
  "home.reviews.3.name": "Isabella K., Nueva York",

  "home.faq.eyebrow": "Preguntas",
  "home.faq.title": "Preguntas y Respuestas",
  "home.faq.1.q": "¿Los productos ASLOIL son aptos para piel sensible?",
  "home.faq.1.a": "Sí. Todas las fórmulas están dermatológicamente probadas y libres de parabenos, sulfatos y fragancias agresivas.",
  "home.faq.2.q": "¿Dónde se fabrican sus productos?",
  "home.faq.2.a": "Nuestro aceite de argán se prensa en frío en Marruecos y se formula en pequeños lotes.",
  "home.faq.3.q": "¿Realizan envíos internacionales?",
  "home.faq.3.a": "Sí — enviamos a todo el mundo con seguimiento y presentación de lujo.",
  "home.faq.4.q": "¿Cuál es su política de devoluciones?",
  "home.faq.4.a": "Los productos sin abrir pueden devolverse dentro de los 30 días para un reembolso completo.",

  "home.news.eyebrow": "Únete al Círculo Íntimo",
  "home.news.title": "Acceso Exclusivo",
  "home.news.desc": "Notas editoriales, secretos botánicos y acceso anticipado a nuevas colecciones — enviado con calma a tu bandeja.",
  "home.news.placeholder": "Correo electrónico",
  "home.news.cta": "Suscribirse →",

  "shop.eyebrow": "La Colección",
  "shop.title": "Todos los Productos",
  "shop.desc": "Cada fórmula ASLOIL® está elaborada con aceite de argán puro y botánicos cuidadosamente seleccionados.",

  "card.addToCart": "Añadir al carrito",
  "card.wishlist": "Favoritos",
  "card.viewDetails": "Ver Detalles",

  "pdp.back": "Volver a la Tienda",
  "pdp.addToCart": "Añadir al Carrito",
  "pdp.addWishlist": "Añadir a Favoritos",
  "pdp.inWishlist": "En Favoritos",
  "pdp.benefits": "Beneficios",
  "pdp.ingredients": "Ingredientes",
  "pdp.directions": "Modo de Uso",
  "pdp.faq": "Preguntas",
  "pdp.related.eyebrow": "También te encantará",
  "pdp.related.title": "Productos Relacionados",

  "cart.title": "Tu Carrito",
  "cart.empty": "Tu carrito está vacío.",
  "cart.shop": "Ir a la Tienda",
  "cart.remove": "Eliminar",
  "cart.total": "Total",
  "cart.checkout": "Finalizar Compra",
  "cart.clear": "Vaciar Carrito",

  "wish.title": "Favoritos",
  "wish.empty": "Aún no has guardado nada.",
  "wish.browse": "Explorar Productos",

  "about.eyebrow": "Nuestra Historia",
  "about.title": "La Naturaleza en tus Manos",
  "about.p1": "ASLOIL® nació con una promesa simple e inquebrantable: crear skincare de lujo enraizado en lo mejor que la naturaleza sabe hacer. Cada producto comienza con el mejor aceite de argán prensado en frío de Marruecos — un ingrediente valorado durante siglos por su capacidad de restaurar, proteger y revelar el brillo natural de la piel.",
  "about.p2": "Creemos que el cuidado premium no debería exigir compromisos. Por eso cada fórmula está libre de parabenos, sulfatos y químicos agresivos — y nunca se prueba en animales. Solo ingredientes puros y poderosos, elaborados en pequeños lotes por personas que se preocupan profundamente por lo que va sobre tu piel.",
  "about.p3": "Ya sea nuestra sedosa Crema Facial, el restaurador Aceite de Argán o el nutritivo Bálsamo Labial, cada ritual ASLOIL® está diseñado para sentirse como un acto de respeto propio — silencioso, elegante y eficaz.",

  "faqpg.eyebrow": "Soporte",
  "faqpg.title": "Preguntas Frecuentes",
  "faqpg.1.q": "¿Los productos ASLOIL son aptos para piel sensible?",
  "faqpg.1.a": "Sí. Todas las fórmulas están dermatológicamente probadas y libres de parabenos, sulfatos y fragancias agresivas.",
  "faqpg.2.q": "¿Dónde se fabrican sus productos?",
  "faqpg.2.a": "Nuestro aceite de argán se prensa en frío en Marruecos y nuestros productos se formulan en pequeños lotes por expertos cosméticos.",
  "faqpg.3.q": "¿Realizan envíos internacionales?",
  "faqpg.3.a": "Sí — enviamos a todo el mundo con seguimiento y presentación de lujo. Los tiempos varían según la región.",
  "faqpg.4.q": "¿Cuál es su política de devoluciones?",
  "faqpg.4.a": "Los productos sin abrir pueden devolverse dentro de los 30 días para un reembolso completo.",
  "faqpg.5.q": "¿Sus productos son libres de crueldad?",
  "faqpg.5.a": "Absolutamente. ASLOIL® es 100% libre de crueldad — desde el origen hasta el estante.",
  "faqpg.6.q": "¿Los productos contienen parabenos o sulfatos?",
  "faqpg.6.a": "No. Nuestras fórmulas son libres de parabenos, sulfatos y químicos agresivos.",
  "faqpg.7.q": "¿Cómo debo conservar mis productos?",
  "faqpg.7.a": "Consérvalos en un lugar fresco y seco, lejos de la luz solar directa, para preservar su potencia.",
  "faqpg.8.q": "¿Puedo usar varios productos ASLOIL juntos?",
  "faqpg.8.a": "Sí — nuestra gama está diseñada como un ritual completo: tónico, aceite, crema, loción y bálsamo se combinan a la perfección.",

  "contact.eyebrow": "Contacto",
  "contact.title": "Ponte en contacto",
  "contact.desc": "Nos encantaría escucharte. Envíanos un mensaje y nuestro equipo responderá en 24 horas.",
  "contact.email": "Correo",
  "contact.phone": "Teléfono",
  "contact.address": "Dirección",
  "contact.form.name": "Nombre",
  "contact.form.email": "Correo",
  "contact.form.message": "Mensaje",
  "contact.form.send": "Enviar Mensaje",
  "contact.form.thanks": "Gracias",
  "contact.form.received": "Hemos recibido tu mensaje.",

  "meta.home.title": "ASLOIL® — Cuidado Premium para un Cabello Sano y Piel Hermosa",
  "meta.home.desc": "Skincare de lujo a base de argán. Crema facial, loción corporal, tónico, bálsamo labial y aceite de argán puro — la naturaleza en tus manos.",
  "meta.shop.title": "Todos los Productos — ASLOIL®",
  "meta.shop.desc": "Descubre toda la colección ASLOIL®: aceite de argán, crema facial, loción corporal, tónico facial y bálsamo labial.",
  "meta.about.title": "Sobre ASLOIL® — La Naturaleza en tus Manos",
  "meta.about.desc": "La historia detrás de ASLOIL® — una marca de cosméticos de lujo basada en aceite de argán puro e ingredientes naturales.",
  "meta.faq.title": "Preguntas Frecuentes — ASLOIL®",
  "meta.faq.desc": "Respuestas a las preguntas más comunes sobre los productos, envíos e ingredientes ASLOIL®.",
  "meta.contact.title": "Contacto — ASLOIL®",
  "meta.contact.desc": "Ponte en contacto con el equipo de ASLOIL® para soporte, ventas mayoristas o prensa.",
  "meta.cart.title": "Tu Carrito — ASLOIL®",
  "meta.cart.desc": "Revisa tu carrito ASLOIL® antes de finalizar la compra.",
  "meta.wish.title": "Favoritos — ASLOIL®",
  "meta.wish.desc": "Tus favoritos ASLOIL® guardados.",
};

const dicts: Record<Lang, Dict> = { en, es };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("asloil_lang");
      if (saved === "en" || saved === "es") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("asloil_lang", l); } catch {}
  };

  const t = (k: string) => dicts[lang][k] ?? dicts.en[k] ?? k;
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useI18n() {
  const c = useContext(LangCtx);
  if (!c) throw new Error("LanguageProvider missing");
  return c;
}
export const useT = () => useI18n().t;

// ---- Product translations ----
type ProductI18n = {
  name: string;
  tagline: string;
  description: string;
  size: string;
  benefits: string[];
  ingredients: string[];
  directions: string;
  faqs: { q: string; a: string }[];
};

const productsEs: Record<string, ProductI18n> = {
  "argan-oil": {
    name: "Aceite de Argán",
    tagline: "La Naturaleza en tus Manos",
    description: "Aceite de argán marroquí puro y prensado en frío para cuerpo, rostro y cabello. Una sola gota restaura suavidad, brillo y elasticidad.",
    size: "50ml / 1.69oz",
    benefits: [
      "Nutre profundamente piel y cabello",
      "Rico en vitamina E y ácidos grasos esenciales",
      "Reduce el frizz y las puntas abiertas",
      "Restaura el brillo natural",
    ],
    ingredients: ["Aceite puro 100% de Argania Spinosa", "Vitamina E", "Omega 6 y 9"],
    directions: "Aplica 2–3 gotas sobre piel limpia o cabello húmedo. Masajea suavemente hasta su total absorción. Úsalo mañana y noche.",
    faqs: [
      { q: "¿Es apto para todo tipo de piel?", a: "Sí — incluyendo piel sensible y grasa." },
      { q: "¿Puedo usarlo en el cabello?", a: "Absolutamente. Controla el frizz y aporta un brillo espejo." },
    ],
  },
  "body-lotion": {
    name: "Loción Corporal",
    tagline: "Hidratación Profunda y Suavidad",
    description: "Sedosa loción corporal con aceite de argán y manteca de karité. Hidratación duradera que deja la piel visiblemente más suave.",
    size: "200ml / 6.76oz",
    benefits: [
      "Hidratación profunda por 24 horas",
      "Suaviza y alisa la piel",
      "No grasosa, de rápida absorción",
      "Delicado aroma de lujo",
    ],
    ingredients: ["Aceite de Argán", "Manteca de Karité", "Glicerina", "Vitamina E"],
    directions: "Masajea generosamente sobre la piel limpia a diario. Ideal después de la ducha.",
    faqs: [
      { q: "¿Es pesada sobre la piel?", a: "No — es sedosa y se absorbe rápidamente." },
      { q: "¿Apta para piel sensible?", a: "Sí, dermatológicamente probada." },
    ],
  },
  "face-cream": {
    name: "Crema Facial",
    tagline: "Nutritiva e Hidratante",
    description: "Rica crema facial con aceite de argán y aloe vera. Nutre, hidrata y ayuda a reparar la barrera cutánea.",
    size: "50ml / 1.69oz",
    benefits: [
      "Repara la barrera cutánea",
      "Hidratación profunda todo el día",
      "Calma y suaviza",
      "Piel visiblemente más firme",
    ],
    ingredients: ["Aceite de Argán", "Aloe Vera", "Ácido Hialurónico", "Vitamina E"],
    directions: "Aplica una pequeña cantidad sobre el rostro y cuello limpios, mañana y noche.",
    faqs: [
      { q: "¿Puedo usar maquillaje encima?", a: "Sí — es una excelente base de maquillaje." },
      { q: "¿No contiene fragancia?", a: "Tiene un aroma muy ligero y natural." },
    ],
  },
  "facial-toner": {
    name: "Tónico Facial",
    tagline: "Refresca y Equilibra",
    description: "Tónico refrescante con agua de rosas y aceite de argán. Equilibra la piel, cierra los poros y la prepara para el sérum.",
    size: "100ml / 3.38oz",
    benefits: [
      "Equilibra el pH de la piel",
      "Minimiza los poros visibles",
      "Refresca la piel cansada",
      "Prepara la piel para el sérum",
    ],
    ingredients: ["Agua de Rosas", "Aceite de Argán", "Hamamelis", "Glicerina"],
    directions: "Tras la limpieza, aplica con un algodón por todo el rostro. Continúa con la crema.",
    faqs: [
      { q: "¿Libre de alcohol?", a: "Sí — completamente libre de alcohol." },
      { q: "¿Con qué frecuencia usarlo?", a: "Mañana y noche para mejores resultados." },
    ],
  },
  "lip-balm": {
    name: "Bálsamo Labial",
    tagline: "Nutritivo y Reparador",
    description: "Bálsamo labial fundente con aceite de argán y vitamina E. Repara los labios secos y sella la hidratación durante horas.",
    size: "5g / 0.17oz",
    benefits: [
      "Repara labios secos y agrietados",
      "Hidratación duradera",
      "Acabado suave, no pegajoso",
      "Brillo natural sutil",
    ],
    ingredients: ["Aceite de Argán", "Vitamina E", "Cera de Abejas", "Manteca de Karité"],
    directions: "Desliza sobre los labios cuando lo necesites. Reaplica durante el día.",
    faqs: [
      { q: "¿Tiene color?", a: "No — es un bálsamo transparente con un sutil brillo." },
      { q: "¿Es vegano?", a: "Contiene cera de abejas natural." },
    ],
  },
};

export function useProductI18n(base: Product): Product {
  const { lang } = useI18n();
  if (lang === "es") {
    const tr = productsEs[base.slug];
    if (tr) return { ...base, ...tr };
  }
  return base;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  if (typeof document === "undefined") return;
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useDocMeta(title: string, description: string) {
  const { lang } = useI18n();
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
  }, [lang, title, description]);
}
