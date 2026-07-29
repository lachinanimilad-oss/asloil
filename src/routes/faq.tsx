import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useT, useDocMeta } from "@/lib/i18n";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — ASLOIL®" },
      { name: "description", content: "Answers to common questions about ASLOIL® products, shipping and ingredients." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const t = useT();
  useDocMeta(t("meta.faq.title"), t("meta.faq.desc"));
  const faqs = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
    q: t(`faqpg.${n}.q`),
    a: t(`faqpg.${n}.a`),
  }));
  return (
    <div className="bg-background ambient-glow pt-40 pb-24 min-h-screen">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-gold text-center">{t("faqpg.eyebrow")}</p>
        <h1 className="mt-4 text-center font-serif text-5xl md:text-6xl">{t("faqpg.title")}</h1>
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
