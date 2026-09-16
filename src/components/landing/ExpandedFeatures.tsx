import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileSignature, Mail, LayoutTemplate } from "lucide-react";

const items = [
  { icon: FileSignature, title: "AI Resignation Letter Generator", desc: "Generate professional resignation letters tailored to your situation. Leave on good terms with a polished, respectful letter.", flip: false },
  { icon: Mail, title: "AI Cover Letter Writer", desc: "Create personalized cover letters that match the job description and highlight your most relevant qualifications.", flip: true },
  { icon: LayoutTemplate, title: "20+ ATS-Friendly Resume Templates", desc: "Choose from a curated collection of professionally designed templates, all tested and verified against major ATS systems.", flip: false },
];

const ExpandedFeatures = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-card">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            We do more than any other AI resume builder.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From resignation letters to cover letters and 20+ templates, we've got every step of your career transition covered.
          </p>
        </div>

        <div className="space-y-16">
          {items.map((item) => (
            <div key={item.title} className={`flex flex-col ${item.flip ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}>
              <div className="flex-1">
                <div className="bg-muted rounded-2xl aspect-[16/10] flex items-center justify-center overflow-hidden relative">
                  {item.title.includes("Resignation") && (
                    <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/50 p-6">
                      <div className="bg-white rounded-lg shadow-lg p-4 h-full">
                        <div className="space-y-3">
                          <div className="h-3 bg-foreground/20 rounded w-1/3" />
                          <div className="h-2 bg-muted rounded w-full" />
                          <div className="h-2 bg-muted rounded w-5/6" />
                          <div className="h-2 bg-muted rounded w-full" />
                          <div className="mt-4 h-2 bg-primary/20 rounded w-1/4" />
                          <div className="h-2 bg-muted rounded w-full" />
                          <div className="h-2 bg-muted rounded w-4/5" />
                        </div>
                      </div>
                    </div>
                  )}
                  {item.title.includes("Cover Letter") && (
                    <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/50 p-6">
                      <div className="bg-white rounded-lg shadow-lg p-4 h-full">
                        <div className="space-y-3">
                          <div className="h-2 bg-muted rounded w-1/4" />
                          <div className="h-2 bg-muted rounded w-1/3" />
                          <div className="h-2 bg-foreground/20 rounded w-1/2" />
                          <div className="mt-4 h-2 bg-muted rounded w-full" />
                          <div className="h-2 bg-muted rounded w-5/6" />
                          <div className="h-2 bg-muted rounded w-full" />
                          <div className="h-2 bg-primary/20 rounded w-1/3" />
                        </div>
                      </div>
                    </div>
                  )}
                  {item.title.includes("Templates") && (
                    <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/50 p-6">
                      <div className="grid grid-cols-3 gap-3 h-full">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-white rounded-lg shadow p-2">
                            <div className="space-y-1">
                              <div className="h-2 bg-muted rounded w-full" />
                              <div className="h-1.5 bg-muted/60 rounded w-3/4" />
                              <div className="h-1.5 bg-muted/60 rounded w-full" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                <a href="#" className="text-primary font-semibold text-sm hover:underline">Learn more →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpandedFeatures;
