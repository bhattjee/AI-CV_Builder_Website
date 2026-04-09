import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "Forever",
    cta: "Get Started Free",
    highlight: false,
    features: ["1 Resume", "Basic Templates", "AI Suggestions (limited)", "PDF Download", "ATS Check (basic)"],
  },
  {
    name: "Pro",
    price: "$29",
    period: "Monthly",
    cta: "Go Pro",
    highlight: true,
    badge: "Most Popular",
    features: ["Unlimited Resumes", "All Templates", "Unlimited AI Features", "Cover Letters", "ATS Checker (full)", "Priority Support"],
  },
  {
    name: "Lifetime",
    price: "$149",
    period: "One-Time",
    cta: "Get Lifetime Access",
    highlight: false,
    features: ["Everything in Pro", "Lifetime Updates", "All Future Features", "Interview Prep", "Job Tracker", "Priority Support"],
  },
];

const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-card">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Choose From The Most Popular Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 text-center flex flex-col ${
                plan.highlight
                  ? 'bg-card border-2 border-cta shadow-xl scale-105'
                  : 'bg-card border border-border shadow-lg'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cta text-cta-foreground text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{plan.period}</p>

              <ul className="space-y-3 text-left mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-lg font-semibold hover-scale ${
                  plan.highlight
                    ? 'bg-cta hover:bg-cta-hover text-cta-foreground'
                    : 'bg-primary hover:bg-primary-dark text-primary-foreground'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
