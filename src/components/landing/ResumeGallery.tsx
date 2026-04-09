import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const resumeCards = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  label: ["Software Engineer", "Product Manager", "Designer", "Data Analyst", "Marketing", "Finance", "Healthcare", "Education"][i],
}));

const ResumeGallery = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="resume-samples" className="py-20 bg-gradient-to-b from-card to-background">
      <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Browse <span className="gradient-text">837 professional resume samples</span> and find one for your job title.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Learn what matters most in your industry & create a job-winning resume.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {resumeCards.map((card) => (
            <div key={card.id} className="group cursor-pointer">
              <div className="bg-card rounded-2xl border border-border shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="aspect-[3/4] p-4 flex flex-col gap-2">
                  {/* Mini resume mockup */}
                  <div className="w-10 h-10 rounded-full bg-muted mx-auto" />
                  <div className="h-2 bg-muted rounded w-3/4 mx-auto" />
                  <div className="h-1.5 bg-muted/60 rounded w-full" />
                  <div className="h-1.5 bg-muted/60 rounded w-5/6" />
                  <div className="h-1.5 bg-muted/60 rounded w-full" />
                  <div className="mt-2 h-1.5 bg-primary/20 rounded w-1/3" />
                  <div className="h-1.5 bg-muted/60 rounded w-full" />
                  <div className="h-1.5 bg-muted/60 rounded w-4/5" />
                  <div className="h-1.5 bg-muted/60 rounded w-full" />
                  <div className="mt-2 h-1.5 bg-primary/20 rounded w-1/3" />
                  <div className="h-1.5 bg-muted/60 rounded w-full" />
                  <div className="h-1.5 bg-muted/60 rounded w-3/4" />
                </div>
              </div>
              <p className="text-sm font-medium text-foreground mt-3 text-center group-hover:text-primary transition-colors">{card.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeGallery;
