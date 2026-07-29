import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useT, useDocMeta } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ASLOIL®" },
      { name: "description", content: "Get in touch with the ASLOIL® team for support, wholesale or press enquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const t = useT();
  useDocMeta(t("meta.contact.title"), t("meta.contact.desc"));
  const [sent, setSent] = useState(false);

  const contacts = [
    { icon: Mail, label: t("contact.email"), value: "hello@asloil.com" },
    { icon: Phone, label: t("contact.phone"), value: "+1 (555) 234-5678" },
    { icon: MapPin, label: t("contact.address"), value: "1 Golden Avenue, Casablanca, Morocco" },
  ];

  return (
    <div className="bg-background ambient-glow pt-40 pb-24 min-h-screen">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">{t("contact.eyebrow")}</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">{t("contact.title")}</h1>
          <div className="gold-hairline mx-auto mt-6" />
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">{t("contact.desc")}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            {contacts.map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/50 text-gold">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.25em] text-gold">{c.label}</p>
                  <p className="mt-1 text-foreground">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="card-rim rounded-2xl p-8 space-y-4">
            {sent ? (
              <div className="py-12 text-center">
                <p className="font-serif text-2xl text-gold">{t("contact.form.thanks")}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t("contact.form.received")}</p>
              </div>
            ) : (
              <>
                <Field label={t("contact.form.name")} type="text" />
                <Field label={t("contact.form.email")} type="email" />
                <div>
                  <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{t("contact.form.message")}</label>
                  <textarea required rows={5} className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-gold" />
                </div>
                <button className="btn-solid-gold w-full rounded-full py-4 text-xs uppercase tracking-[0.25em] font-medium">{t("contact.form.send")}</button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
      <input required type={type} className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-gold" />
    </div>
  );
}
