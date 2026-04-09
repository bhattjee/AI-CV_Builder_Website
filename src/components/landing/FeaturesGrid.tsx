import { Bot, Search, Video, Target, FileText, Gauge } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Bot, title: "AI Resume Agent", desc: "Chat with our AI to craft the perfect resume. It understands context, industry jargon, and what recruiters look for." },
  { icon: Search, title: "Job Search & Tracking", desc: "Find relevant job openings and track your applications all in one place with our integrated job tracker." },
  { icon: Video, title: "AI Interview", desc: "Practice mock interviews with AI. Get scored on your answers and receive feedback to improve." },
  { icon: Target, title: "AI Keyword Targeting", desc: "Automatically identify and integrate the right keywords to pass ATS filters every time." },
  { icon: FileText, title: "AI Summary Writer", desc: "Generate powerful professional summaries tailored to your target role in seconds." },
  { icon: Gauge, title: "ATS Resume Checker", desc: "Get an instant ATS compatibility score and actionable tips to improve your resume." },
];

const FeaturesGrid = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-20" style={{ background: 'hsl(var(--accent) / 0.1)' }}>
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            <span className="gradient-text">Content-focused</span> features developed to get you hired
          </h2>
          <p className="text-muted-foreground mt-4">Even more reasons to love our AI Resume Builder</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
