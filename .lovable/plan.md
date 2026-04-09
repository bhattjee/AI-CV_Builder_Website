# AI Resume Builder Landing Page

A full Rezi.ai-style landing page with your custom color palette.

## Custom Color System

- **Primary:** #23607d (teal-blue)
- **Primary Dark:** #174a5e | **Primary Light:** #3a8eac
- **Secondary:** #0f2e3a (deep navy)
- **Accent:** #8ad4e3 (light cyan)
- **CTA:** #ff6a3d (vibrant orange) → Hover: #e45c34
- **Background:** #f6f9fb | **Text:** #0e1b22

## Sections to Build (11 total)

### 1. Fixed Navigation

Glassmorphism navbar (backdrop-blur, bg-white/80). Logo on left, nav links (Resume, Cover Letter, Blog, Pricing, Log In), CTA button in orange (#ff6a3d), rounded-full.

### 2. Hero Section

Two-column layout. Left: bold H1 "Free AI Resume Builder. ATS-Optimized. Recruiter-ready." with gradient text on "ATS-Optimized" using primary→accent gradient. Subheadline, two CTAs (orange primary + outline secondary), trust badges. Right: placeholder for product screenshot with floating "AI Score" and "ATS Friendly" badge cards.

### 3. Social Proof

3 image testimonial cards with button overlays, quotes, names. Grayscale publication logos row below.

### 4. Resume Samples Gallery

4-column grid of A4-ratio placeholder cards with hover lift effect. Header with bold stat number in gradient text.

### 5. Features Grid

6 feature cards (2×3 grid) on accent background (#8ad4e3/10). Each card: white bg, rounded-2xl, icon area placeholder, title, description. Features: AI Resume Agent, Job Search & Tracking, AI Interview, AI Keyword Targeting, AI Summary Writer, ATS Resume Checker.

### 6. Expanded Features

Alternating layout showcasing additional tools (resignation letter, cover letter, templates) with placeholder image areas and descriptions.

### 7. Pricing Section

3 pricing cards — Free, Pro ($29/mo, highlighted with orange CTA), Lifetime ($149). Checkmark feature lists, rounded-2xl cards.

### 8. Testimonials Grid

3×2 grid of testimonial cards with avatar placeholders, star ratings, quotes. Large counter number "4,005,400+" in gradient text.

### 9. FAQ Accordion

Expandable accordion using shadcn/ui accordion component. 5-6 common questions.

### 10. CTA Banner

Deep navy (#0f2e3a) background, large heading, orange glowing CTA button.

### 11. Footer

4-column footer on navy background. Brand column, Product links, Resources, Company. Bottom bar with copyright and social icons.

## Animations & Interactions

- Scroll-triggered fade-in animations using Intersection Observer
- Hover states on all buttons (scale) and cards (shadow lift)
- Smooth scroll for anchor links
- Number counter animation for statistics
- Mobile hamburger menu

## Responsive Design

- Mobile: single column, hamburger nav, stacked layouts
- Tablet: 2-column grids
- Desktop: full layouts as described

## Font

Inter from Google Fonts (400, 500, 600, 700, 800)

All image areas will use placeholder boxes so you can swap in real screenshots later.