import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background relative overflow-hidden">
      {/* Gradient blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
        {/* Left */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            Free AI Resume Builder.{" "}
            <span className="gradient-text">ATS-Optimized.</span>{" "}
            Recruiter-ready.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg">
            Our AI-based resume builder includes templates to help you design a resume that is sure to check the boxes when it comes to applicant tracking systems. Trusted by millions worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-full px-8 py-3 bg-cta hover:bg-cta-hover text-cta-foreground font-semibold text-base hover-scale">
              Get Started — It's Free
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-3 border-primary text-primary font-semibold hover:bg-primary/5 text-base">
              View Templates
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Check size={16} className="text-primary" /> No card required</span>
            <span className="flex items-center gap-1.5"><Star size={16} className="text-cta fill-cta" /> 4M+ users</span>
          </div>
        </div>

        {/* Right - Product mockup placeholder */}
        <div className="relative">
          <div className="bg-card rounded-2xl shadow-2xl border border-border p-4 aspect-[4/3]" style={{ boxShadow: '0 25px 60px -12px hsl(var(--primary) / 0.2)' }}>
            {/* Browser chrome */}
            <div className="flex gap-1.5 mb-3">
              <div className="w-3 h-3 rounded-full bg-destructive/40" />
              <div className="w-3 h-3 rounded-full bg-cta/40" />
              <div className="w-3 h-3 rounded-full bg-primary/40" />
            </div>
            <div className="bg-muted rounded-lg h-full flex items-center justify-center text-muted-foreground text-sm overflow-hidden relative">
              {/* Resume Builder Interface Mockup */}
              <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/50 p-4">
                <div className="h-full flex gap-4">
                  {/* Left sidebar */}
                  <div className="w-1/4 bg-card rounded-lg p-3 space-y-2">
                    <div className="h-3 bg-primary/20 rounded w-3/4" />
                    <div className="h-2 bg-muted rounded w-full" />
                    <div className="h-2 bg-muted rounded w-5/6" />
                    <div className="h-2 bg-muted rounded w-full" />
                    <div className="h-2 bg-muted rounded w-4/5" />
                    <div className="mt-4 h-2 bg-primary/20 rounded w-1/2" />
                    <div className="h-2 bg-muted rounded w-full" />
                    <div className="h-2 bg-muted rounded w-3/4" />
                  </div>
                  {/* Main content */}
                  <div className="flex-1 bg-white rounded-lg p-4 shadow-inner">
                    <div className="flex gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10" />
                      <div className="flex-1 space-y-2">
                        <div className="h-3 bg-foreground/20 rounded w-1/2" />
                        <div className="h-2 bg-muted rounded w-3/4" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded w-full" />
                      <div className="h-2 bg-muted rounded w-5/6" />
                      <div className="h-2 bg-muted rounded w-full" />
                      <div className="h-2 bg-muted rounded w-4/5" />
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="h-2 bg-primary/20 rounded w-1/3" />
                      <div className="h-2 bg-muted rounded w-full" />
                      <div className="h-2 bg-muted rounded w-5/6" />
                      <div className="h-2 bg-muted rounded w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-3 -right-3 bg-card rounded-xl shadow-lg border border-border px-4 py-2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Star size={14} className="text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">AI Score</p>
              <p className="text-sm font-extrabold text-primary">92</p>
            </div>
          </div>
          <div className="absolute -bottom-3 -left-3 bg-card rounded-xl shadow-lg border border-border px-4 py-2">
            <p className="text-xs font-bold text-primary flex items-center gap-1"><Check size={12} /> ATS Friendly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
