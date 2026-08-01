import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ASLOIL®" },
      { name: "description", content: "Get in touch with the ASLOIL® team for support, wholesale or press enquiries." },
      { property: "og:title", content: "Contact — ASLOIL®" },
      { property: "og:description", content: "Reach the ASLOIL® team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-background ambient-glow pt-40 pb-24 min-h-screen">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Contact</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl">Get in touch</h1>
          <div className="gold-hairline mx-auto mt-6" />
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">We'd love to hear from you. Send us a message and our team will reply within 24 hours.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            {[
              { icon: Mail, label: "Email", value: "info@asloil.com" },
              { icon: Phone, label: "Phone", value: "+1 (555) 234-5678" },
              { icon: MapPin, label: "Address", value: "1 Golden Avenue, Casablanca, Morocco" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/50 text-gold">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.25em] text-gold">{c.label}</p>
                  {c.label === "Email" ? (
  <a
    href={`mailto:${c.value}`}
    className="mt-1 text-foreground hover:text-gold"
  >
    {c.value}
  </a>
) : (
  <p className="mt-1 text-foreground">{c.value}</p>
)}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="card-rim rounded-2xl p-8 space-y-4">
            {sent ? (
              <div className="py-12 text-center">
                <p className="font-serif text-2xl text-gold">Thank you</p>
                <p className="mt-2 text-sm text-muted-foreground">Your message has been received.</p>
              </div>
            ) : (
              <>
                <Field label="Name" type="text" />
                <Field label="Email" type="email" />
                <div>
                  <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Message</label>
                  <textarea required rows={5} className="mt-2 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-gold" />
                </div>
                <button className="btn-solid-gold w-full rounded-full py-4 text-xs uppercase tracking-[0.25em] font-medium">Send Message</button>
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
