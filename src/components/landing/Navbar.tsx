import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Resume", href: "#resume-samples" },
  { label: "Cover Letter", href: "#features" },
  { label: "Blog", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Log In", href: "#" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-card/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-extrabold text-foreground">
          Rezi<span className="text-cta">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <Button className="rounded-full px-6 bg-cta hover:bg-cta-hover text-cta-foreground font-semibold hover-scale">
            Get Started — It's Free
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="block text-sm font-medium text-muted-foreground py-2" onClick={() => setMobileOpen(false)}>
              {l.label}
            </a>
          ))}
          <Button className="w-full rounded-full bg-cta hover:bg-cta-hover text-cta-foreground font-semibold">
            Get Started — It's Free
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
