import { Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  { name: "Sarah Johnson", title: "Software Engineer", quote: "I was blown away by how quickly I got interviews after using this builder." },
  { name: "Mike Chen", title: "Product Manager", quote: "The ATS optimization feature made all the difference. Landed my dream job!" },
  { name: "Emily Davis", title: "Marketing Director", quote: "Best resume tool I've ever used. The AI suggestions were incredibly helpful." },
];

const logos = ["Forbes", "TechCrunch", "The Verge", "Wired", "Business Insider"];

const SocialProof = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-card">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Real Users. Real Conversations.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="bg-muted aspect-video flex items-center justify-center relative">
                <div className="w-14 h-14 rounded-full bg-cta/90 flex items-center justify-center hover-scale cursor-pointer">
                  <Play size={24} className="text-cta-foreground ml-1" />
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground italic mb-3">"{t.quote}"</p>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {logos.map((l) => (
            <span key={l} className="text-lg font-bold text-muted-foreground/40 tracking-wide">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
