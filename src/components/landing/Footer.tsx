const footerLinks = {
  Product: ["Resume Builder", "Cover Letter", "Resignation Letter", "AI Interview", "Job Tracker"],
  Resources: ["Blog", "Resume Examples", "Career Guides", "ATS Guide", "Templates"],
  Company: ["About Us", "Careers", "Contact", "Press", "Affiliates"],
};

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-xl font-extrabold mb-3">
            Rezi<span className="text-cta">.</span>
          </h3>
          <p className="text-sm text-secondary-foreground/60 mb-4">
            AI-powered resume builder trusted by millions of job seekers worldwide.
          </p>
          <div className="flex gap-3">
            {["LinkedIn", "Twitter", "GitHub"].map((s) => (
              <a key={s} href="#" className="w-8 h-8 rounded-full bg-secondary-foreground/10 flex items-center justify-center text-xs font-bold text-secondary-foreground/50 hover:bg-secondary-foreground/20 transition-colors">
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold text-sm mb-4 text-secondary-foreground/80">{title}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-secondary-foreground/50 hover:text-secondary-foreground transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-secondary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/40">
        <p>© 2026 AI Resume Builder. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-secondary-foreground/70">Terms</a>
          <a href="#" className="hover:text-secondary-foreground/70">Privacy</a>
          <a href="#" className="hover:text-secondary-foreground/70">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
