import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Are ASLOIL products suitable for sensitive skin?", a: "Yes. All formulas are dermatologically tested and free from parabens, sulfates and harsh fragrances." },
  { q: "Where are your products made?", a: "Our argan oil is cold-pressed in Morocco and our products are formulated in small batches by trained cosmetic experts." },
  { q: "Do you ship internationally?", a: "Yes — we ship worldwide with tracked, luxury-boxed delivery. Delivery times vary by region." },
  { q: "What is your return policy?", a: "Unopened products can be returned within 30 days for a full refund." },
  { q: "Are your products cruelty free?", a: "Absolutely. ASLOIL® is 100% cruelty free — from source to shelf." },
  { q: "Do the products contain parabens or sulfates?", a: "No. Our formulas are paraben-free, sulfate-free and free from harsh chemicals." },
  { q: "How should I store my products?", a: "Store in a cool, dry place away from direct sunlight to preserve their potency." },
  { q: "Can I use multiple ASLOIL products together?", a: "Yes — our range is designed as a complete ritual: toner, oil, cream, lotion and balm layer beautifully." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — ASLOIL®" },
      { name: "description", content: "Answers to common questions about ASLOIL® products, shipping and ingredients." },
      { property: "og:title", content: "FAQ — ASLOIL®" },
      { property: "og:description", content: "Common questions about ASLOIL® products, shipping and ingredients." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="bg-background ambient-glow pt-40 pb-24 min-h-screen">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-gold text-center">Support</p>
        <h1 className="mt-4 text-center font-serif text-5xl md:text-6xl">Frequently Asked</h1>
        <div className="gold-hairline mx-auto mt-6" />

        <div className="mt-14 divide-y divide-border/60 border-y border-border/60">
          {faqs.map((f, i) => (<Item key={i} q={f.q} a={f.a} />))}
        </div>
      </div>
    </div>
  );
}

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => setOpen(!open)} className="block w-full py-6 text-left">
      <div className="flex items-center justify-between gap-6">
        <span className="font-serif text-lg text-foreground">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-gold transition-transform ${open ? "rotate-180" : ""}`} />
      </div>
      {open && <p className="mt-3 text-sm text-muted-foreground">{a}</p>}
    </button>
  );
}
