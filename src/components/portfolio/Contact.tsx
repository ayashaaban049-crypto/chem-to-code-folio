import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

const contacts = [
  { icon: Mail, label: "Email", value: "ayashaaban049@gmail.com", href: "mailto:ayashaaban049@gmail.com" },
  { icon: Phone, label: "Phone", value: "(+2) 010 1987 2096", href: "tel:+201019872096" },
  { icon: MapPin, label: "Location", value: "Cairo, Egypt" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/aya-shaaban25", href: "https://linkedin.com/in/aya-shaaban25" },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio inquiry from ${result.data.name}`);
      const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
      window.location.href = `mailto:ayashaaban049@gmail.com?subject=${subject}&body=${body}`;
      toast.success("Opening your email client…");
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
    }, 400);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk data."
          description="Have a project, a dataset, or a question? I'd love to hear from you."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Info */}
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
                  <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block transition-opacity hover:opacity-80">
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label}>{Inner}</div>
                );
              })}
            </div>

            <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-5">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground">Open to</span> junior data analyst roles, freelance dashboards
                and pharmacoinformatics collaborations.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="glass-card p-8 space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  maxLength={100}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="h-11 bg-surface/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  maxLength={255}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="h-11 bg-surface/50"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                rows={6}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or question…"
                className="bg-surface/50"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full sm:w-auto">
              {loading ? "Sending…" : (<>Send message <Send size={16} /></>)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
