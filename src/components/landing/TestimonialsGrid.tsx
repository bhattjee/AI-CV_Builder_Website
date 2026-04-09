import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState, useRef } from "react";

const reviews = [
  { name: "Alex Rivera", role: "UX Designer", quote: "This tool completely transformed my job search. The AI suggestions were spot-on and I landed 3 interviews in the first week." },
  { name: "Priya Sharma", role: "Data Scientist", quote: "The ATS optimization gave me confidence that my resume would actually be seen. Highly recommended!" },
  { name: "James Wilson", role: "Sales Manager", quote: "I've tried many resume builders, but this is by far the most intuitive. The cover letter feature is a game-changer." },
  { name: "Maria Garcia", role: "Nurse Practitioner", quote: "Simple to use with beautiful templates. Got compliments from recruiters on my resume layout." },
  { name: "David Kim", role: "Full-Stack Developer", quote: "The keyword targeting feature helped me tailor my resume perfectly for each application. Worth every penny." },
  { name: "Lisa Thompson", role: "Project Manager", quote: "From resume to cover letter to interview prep — everything I needed in one place. Fantastic tool!" },
];

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 2000;
        const step = (ts: number) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const TestimonialsGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trusted by Over{" "}
            <span className="gradient-text text-5xl md:text-6xl font-extrabold">
              <AnimatedCounter target={4005400} />+
            </span>{" "}
            Job Seekers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-xl border border-border p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-cta fill-cta" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{r.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  {r.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;
