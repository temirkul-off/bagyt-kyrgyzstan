import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/bagyt-logo.png";
import heroCane from "@/assets/smart-cane-hero.jpg";
import walking from "@/assets/walking-confident.jpg";
import sensor from "@/assets/sensor-detail.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bagyt — Smart Cane for the Blind & Visually Impaired" },
      { name: "description", content: "Bagyt is a smart cane with ultrasonic obstacle detection, SOS GPS button and Telegram alerts — a step toward freedom and confidence." },
      { property: "og:title", content: "Bagyt — A Step Toward Freedom" },
      { property: "og:description", content: "Smart cane with ultrasonic sensor detecting waist & chest-level obstacles, SOS GPS, Telegram alerts. 7x cheaper than global alternatives." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Story />
      <Features />
      <Product />
      <Stats />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Bagyt logo" className="h-9 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#story" className="hover:text-foreground transition">Story</a>
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#impact" className="hover:text-foreground transition">Impact</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </div>
        <a href="#contact" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold hover:opacity-90 transition">
          Order Bagyt
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
      <div className="absolute top-20 -right-32 w-[600px] h-[600px] rounded-full blur-3xl opacity-30" style={{ background: "var(--gradient-hero)" }} />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold tracking-wide uppercase">
            Hult Prize Kyrgyzstan Champions
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-[1.05] text-foreground">
            A step toward <span style={{ background: "var(--gradient-hero)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>freedom.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Bagyt is a smart cane for the blind and visually impaired. More than a cane — an additional sense of orientation that detects obstacles before you reach them.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold shadow-[var(--shadow-elegant)] hover:opacity-90 transition">
              Get Bagyt — 12,000 som
            </a>
            <a href="#story" className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-sm font-semibold hover:bg-secondary transition">
              Read our story
            </a>
          </div>
          <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
            <div><span className="block text-2xl font-bold text-foreground">7×</span>cheaper than global alternatives</div>
            <div><span className="block text-2xl font-bold text-foreground">170+</span>canes already ordered</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl blur-3xl opacity-40" style={{ background: "var(--gradient-hero)" }} />
          <img src={heroCane} alt="Bagyt smart cane" width={1536} height={1536} className="relative rounded-3xl shadow-[var(--shadow-elegant)] w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Story</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">"I'm not afraid of the dark. I'm afraid of the street."</h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>The main problem isn't darkness. It's a city that wasn't built for people who can't see it.</p>
          <p>Over <strong className="text-foreground">2 billion people worldwide</strong> live with visual impairments. In Kyrgyzstan alone, over <strong className="text-foreground">9,000 people</strong> face an urban environment every day that wasn't designed for them.</p>
          <p>We met Amurbek Myrzaev at an event with the Phenomenon foundation. For him, a walk to the store isn't a route — it's constant fear of every step. After his first walk with Bagyt, he said: <em className="text-foreground">"This is the first time in a long time I've walked to the store without someone holding my hand."</em></p>
          <p>That's how Bagyt began.</p>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { title: "Ultrasonic Detection", desc: "Detects obstacles at waist and chest level — poles, open trunks, branches — and vibrates the handle." },
    { title: "SOS + GPS", desc: "Emergency button sends live location directly to a loved one's Telegram account." },
    { title: "Smooth Wheel Base", desc: "Glides across any surface so the cane maneuvers freely without snagging." },
    { title: "Ergonomic Handle", desc: "Comfortable grip with intuitive haptic feedback you can trust at every step." },
  ];
  return (
    <section id="features" className="py-24 px-6 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">What's Inside</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">An additional sense of orientation.</h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f) => (
            <div key={f.title} className="rounded-2xl bg-card p-6 border border-border hover:shadow-[var(--shadow-elegant)] transition">
              <div className="h-10 w-10 rounded-xl mb-5" style={{ background: "var(--gradient-hero)" }} />
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <img src={sensor} alt="Bagyt sensor close-up" width={1280} height={1280} loading="lazy" className="rounded-3xl shadow-[var(--shadow-elegant)] w-full h-auto" />
        <div>
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">The Technology</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Built around an ultrasonic sensor.</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Bagyt constantly emits a signal forward and reads what bounces back. Unlike a regular cane, it sees what's ahead at body height — silently warning the user before contact.
          </p>
          <ul className="mt-8 space-y-4">
            {["Production cost: 9,500 som", "Retail price: 12,000 som", "7× cheaper than imported alternatives"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent" />
                <span className="font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "20", l: "Canes already in hands" },
    { v: "150", l: "Units in active order" },
    { v: "600", l: "Year-one sales target" },
    { v: "7.2M", l: "Projected revenue (som)" },
  ];
  return (
    <section id="impact" className="py-24 px-6 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="max-w-7xl mx-auto text-primary-foreground">
        <h2 className="text-4xl md:text-5xl font-bold max-w-2xl">Real people. Real steps. Real freedom.</h2>
        <p className="mt-4 text-lg opacity-90 max-w-2xl">Twenty people are more confident leaving home today than they were yesterday. And we're just getting started.</p>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl bg-white/10 backdrop-blur p-6 border border-white/20">
              <div className="text-4xl font-extrabold">{s.v}</div>
              <div className="mt-2 text-sm opacity-90">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partners = [
    "Phenomenon Public Foundation",
    "Ministry of Labor, Social Security & Migration KR",
    "Vocational Education Development Fund",
    "Mostcom LLC",
    "Startup KSTU 2026 — Winners",
    "Hult Prize Kyrgyzstan — Champions",
  ];
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Partners & Recognition</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">Backed by people who believe in walking freely.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We sell direct to people (B2C) and serve government & institutional procurement (B2G). Bagyt advances UN Sustainable Development Goals 3, 9, 10 and 11.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {partners.map((p) => (
            <div key={p} className="rounded-xl border border-border p-4 bg-card text-sm font-medium">{p}</div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16">
        <img src={walking} alt="A man walking confidently with a cane" width={1536} height={1024} loading="lazy" className="rounded-3xl w-full h-auto object-cover shadow-[var(--shadow-elegant)]" />
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto rounded-3xl p-12 md:p-16 text-center" style={{ background: "var(--gradient-hero)" }}>
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">Give someone the right to walk safely.</h2>
        <p className="mt-4 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
          Order a Bagyt cane, partner with us, or support our mission. Every cane is a step toward confidence.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="mailto:hello@bagyt.kg" className="inline-flex items-center rounded-full bg-white text-primary px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition">
            Contact our team
          </a>
          <a href="#features" className="inline-flex items-center rounded-full border border-white/40 text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Bagyt" className="h-8 w-auto" />
          <span className="text-sm text-muted-foreground">A step toward freedom.</span>
        </div>
        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Bagyt. Bishkek, Kyrgyzstan.</div>
      </div>
    </footer>
  );
}
