import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTABanner = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
      <div ref={ref} className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
        <h2 className="text-3xl md:text-5xl font-extrabold text-secondary-foreground mb-6">
          Ready to build your resume?
        </h2>
        <p className="text-lg text-secondary-foreground/70 mb-10 max-w-2xl mx-auto">
          Join over 4 million people who use our AI Resume Builder to take control of their job search.
        </p>
        <Button
          className="rounded-full px-10 py-4 text-lg bg-cta hover:bg-cta-hover text-cta-foreground font-bold hover-scale"
          style={{ boxShadow: '0 0 40px hsl(var(--cta) / 0.4)' }}
        >
          Create Your Resume
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;
