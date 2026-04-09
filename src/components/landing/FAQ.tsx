import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { q: "What are the main differences between the Free, Pro, and Lifetime plans?", a: "The Free plan includes 1 resume with basic templates and limited AI suggestions. Pro unlocks unlimited resumes, all templates, full AI features, and cover letters for $29/month. Lifetime gives you everything in Pro forever with a one-time payment of $149." },
  { q: "What is your refund policy?", a: "We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied, contact our support team for a full refund, no questions asked." },
  { q: "Can I switch or upgrade plans later?", a: "Absolutely! You can upgrade from Free to Pro or Lifetime at any time. If you upgrade from Pro to Lifetime, we'll prorate your remaining subscription." },
  { q: "How does the ATS optimization work?", a: "Our AI analyzes your resume against known ATS parsing algorithms and checks for proper formatting, keyword usage, section headers, and file compatibility to maximize your pass-through rate." },
  { q: "Can I download my resume as a PDF?", a: "Yes! All plans include PDF downloads. Pro and Lifetime users also get access to Word (.docx) format and direct sharing links." },
  { q: "Is my data safe and private?", a: "Absolutely. We use bank-level encryption and never share your personal data with third parties. You can delete your account and all data at any time." },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background">
      <div ref={ref} className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Frequently Asked Questions (FAQs)
        </h2>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
