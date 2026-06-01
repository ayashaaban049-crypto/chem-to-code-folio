import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Mail, Phone, MapPin, Linkedin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { MagneticButton } from "./MagneticButton";
import { useLang } from "@/contexts/LanguageContext";

export const Contact = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const schema = z.object({
    name: z.string().trim().min(1, t.contact.errName).max(100),
    email: z.string().trim().email(t.contact.errEmail).max(255),
    message: z.string().trim().min(5, t.contact.errMsg).max(1000),
  });

  const contacts = [
    { icon: Mail, label: t.contact.labels.email, value: "ayashaaban049@gmail.com", href: "mailto:ayashaaban049@gmail.com" },
    { icon: Phone, label: t.contact.labels.phone, value: "(+2) 010 1987 2096", href: "tel:+201019872096" },
    { icon: MapPin, label: t.contact.labels.location, value: t.contact.location },
    { icon: Linkedin, label: t.contact.labels.linkedin, value: "linkedin.com/in/aya-shaaban25", href: "https://linkedin.com/in/aya-shaaban25" },
  ];

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) { toast.error(result.error.issues[0].message); return; }
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xzdozoby", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success(t.contact.success);
      setForm({ name: "", email: "", message: "" });
    } catch { toast.error(t.contact.error); }
    finally { setLoading(false); }
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container-tight">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description} />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="glass-card flex flex-col justify-between p-8">
            <div className="space-y-5">
              {contacts.map((c) => {
                const Icon = c.icon;
                const Inner = (
                  <div className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30">
                      <Icon size={16} />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                      <div className="mt-0.5 text-sm text-foreground">{c.value}</div>
                    </div>
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block transition-opacity hover:opacity-80">{Inner}</a>
                ) : (<div key={c.label}>{Inner}</div>);
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-5">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground">{t.contact.openTo}</span> {t.contact.openToBody}
              </p>
            </div>
          </div>

          <motion.form onSubmit={onSubmit} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="glass-card p-8 space-y-5"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <motion.div variants={{ hidden: { y: 30, opacity: 0 }, show: { y: 0, opacity: 1 } }} transition={{ duration: 0.5, ease: "easeOut" }} className="field-anim space-y-2">
                <Label htmlFor="name">{t.contact.labels.name}</Label>
                <Input id="name" value={form.name} maxLength={100} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t.contact.placeholders.name} className="h-11 bg-surface/50" />
              </motion.div>
              <motion.div variants={{ hidden: { y: 30, opacity: 0 }, show: { y: 0, opacity: 1 } }} transition={{ duration: 0.5, ease: "easeOut" }} className="field-anim space-y-2">
                <Label htmlFor="email">{t.contact.labels.email}</Label>
                <Input id="email" type="email" value={form.email} maxLength={255} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={t.contact.placeholders.email} className="h-11 bg-surface/50" />
              </motion.div>
            </div>
            <motion.div variants={{ hidden: { y: 30, opacity: 0 }, show: { y: 0, opacity: 1 } }} transition={{ duration: 0.5, ease: "easeOut" }} className="field-anim space-y-2">
              <Label htmlFor="message">{t.contact.labels.message}</Label>
              <Textarea id="message" rows={6} maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={t.contact.placeholders.message} className="bg-surface/50" />
            </motion.div>
            <motion.div variants={{ hidden: { y: 30, opacity: 0 }, show: { y: 0, opacity: 1 } }} transition={{ duration: 0.5, ease: "easeOut" }}>
              <MagneticButton>
                <Button type="submit" variant="hero" size="lg" disabled={loading} className="ripple w-full sm:w-auto">
                  {loading ? (<><Loader2 size={16} className="animate-spin" /> {t.contact.sending}</>) : (<>{t.contact.send} <Send size={16} className="rtl:-scale-x-100" /></>)}
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
