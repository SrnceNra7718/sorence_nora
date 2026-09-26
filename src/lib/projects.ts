export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectCaseStudy {
  problem: string;
  purpose: string;
  targetUsers: string;
  features: ProjectFeature[];
  challenges: string;
  implementation: string;
  architecture?: string;
  lessonsLearned?: string;
  futureImprovements?: string;
  results?: string;
}

export interface Project {
  number: string;
  slug: string;
  title: string;
  role: string;
  context: string;
  overview: string;
  description: string;
  technologies: string[];
  frontendTech: string[];
  backendTech?: string[];
  databaseTech?: string[];
  images: string[];
  imageAlt: Record<string, string>;
  liveUrl: string | null;
  githubUrl: string | null;
  dateCreated: string;
  caseStudy: ProjectCaseStudy;
  ogImage: string;
}

const studentClearanceMonitor: Project = {
  number: "01",
  slug: "student-clearance-monitor",
  title: "Student Clearance Monitor",
  role: "Frontend Developer",
  context: "OJT project — STI College, San Jose del Monte",
  overview:
    "A system that manages and monitors student clearance status, reflecting updates in real time across departments — admin, cashier, program head, and registrar.",
  description:
    "The Student Clearance Monitor is a web application built during my On-the-Job Training at STI College, San Jose del Monte. It digitizes the manual student clearance process, allowing staff across departments — administration, cashier, program head, and registrar — to update and view real-time clearance statuses for students. The system replaces a paper-based workflow with a responsive, browser-based interface.",
  technologies: [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Supabase",
    "PostgreSQL",
  ],
  frontendTech: [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Next.js",
  ],
  backendTech: ["Supabase", "PostgreSQL"],
  databaseTech: ["PostgreSQL (via Supabase)"],
  images: [
    "/forProject_Section/scs.png",
    "/forProject_Section/AdminPage.png",
    "/forProject_Section/CashierPage.png",
    "/forProject_Section/ProgHeadPage.png",
    "/forProject_Section/RegistrarPage.png",
  ],
  imageAlt: {
    "/forProject_Section/scs.png":
      "Student Clearance Monitor dashboard showing student clearance records overview",
    "/forProject_Section/AdminPage.png":
      "Admin department view of the Student Clearance Monitor showing administrative controls",
    "/forProject_Section/CashierPage.png":
      "Cashier department view of the Student Clearance Monitor showing financial clearance status",
    "/forProject_Section/ProgHeadPage.png":
      "Program head view of the Student Clearance Monitor showing department-level clearance tracking",
    "/forProject_Section/RegistrarPage.png":
      "Registrar department view of the Student Clearance Monitor showing final clearance records",
  },
  liveUrl: null,
  githubUrl: null,
  dateCreated: "2024-01-01",
  caseStudy: {
    problem:
      "At STI College, San Jose del Monte, the student clearance process relied on physical forms passed manually between departments. This caused delays, lost documents, and difficulty tracking a student's overall clearance status in real time.",
    purpose:
      "To build a centralized web application that digitizes the student clearance workflow, enabling real-time status updates across the admin, cashier, program head, and registrar departments.",
    targetUsers:
      "College students requesting clearance; administrative staff, cashiers, program heads, and registrar personnel managing clearance workflows across departments.",
    features: [
      {
        title: "Multi-department clearance tracking",
        description:
          "Each department — admin, cashier, program head, and registrar — has a dedicated view showing only the records relevant to their role, with clear status indicators.",
      },
      {
        title: "Real-time status updates",
        description:
          "Clearance status changes made by one department are immediately reflected across all other department views through Supabase's real-time subscriptions.",
      },
      {
        title: "Responsive interface",
        description:
          "The application is built with Tailwind CSS to ensure it works consistently across desktop and mobile devices used by staff and students.",
      },
      {
        title: "Type-safe frontend",
        description:
          "TypeScript is used throughout the Next.js frontend to catch potential errors during development and improve code maintainability.",
      },
    ],
    challenges:
      "Balancing a minimal, focused interface with the need for each department to see only their relevant data while still understanding the overall student clearance status. This was solved by structuring the Supabase schema with department-scoped views and using Next.js server-side data fetching.",
    implementation:
      "The frontend is built with Next.js and TypeScript, using the App Router for routing. Tailwind CSS provides utility-first styling and responsive layouts. Supabase serves as the backend, providing PostgreSQL for data storage and authentication. Server-side data fetching via Supabase client ensures clearance statuses update without requiring manual page refreshes.",
    architecture:
      "Frontend: Next.js (App Router) + TypeScript + Tailwind CSS. Backend: Supabase (PostgreSQL + Auth). The application uses a three-tier architecture: presentation (Next.js components), business logic (Supabase functions and client queries), and data (PostgreSQL tables for students, clearances, and department statuses).",
    lessonsLearned:
      "Building this project taught me how to structure a multi-role web application where data visibility differs by user type, and how real-time updates improve operational workflows. Working with Supabase's PostgreSQL integration also deepened my understanding of database schema design for department-scoped access.",
    futureImprovements:
      "Potential improvements include adding authentication so each staff member has a personal login, exporting clearance reports as PDFs, and adding notification support so students are alerted when their clearance is complete.",
    results:
      "The system was successfully deployed at STI College, San Jose del Monte during the OJT period, replacing the manual clearance process with a digital workflow accessible through any modern browser.",
  },
  ogImage: "/forProject_Section/scs.png",
};

const yenzhenTailoring: Project = {
  number: "02",
  slug: "yenzhen-tailoring",
  title: "Yenzhen Tailoring",
  role: "Frontend Developer",
  context: "Client project — Yenzhen Tailoring (premium custom sportswear)",
  overview:
    "A marketing website for a custom sublimation sportswear business — showcasing products, finished works, sizing guides, and a customer inquiry flow for basketball teams and individual customers.",
  description:
    "Yenzhen Tailoring is a marketing and lead-generation website for a custom sublimation sportswear business specializing in basketball jerseys, team uniforms, and full team packages. Built with Next.js 14 and the App Router, the site presents a product catalog of over forty sportswear items across categories like basketball jerseys, volleyball jerseys, t-shirts, riding sleeves, warmers, and team packages. Customers can browse finished works in a responsive gallery, review sizing guides, and submit quote or contact requests. The frontend is structured around static TypeScript data files, with a Supabase-based schema prepared for future quote, contact, and admin CRUD functionality.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Lucide React",
    "Supabase (schema prepared)",
    "PostgreSQL (schema prepared)",
    "Vercel",
  ],
  frontendTech: [
    "Next.js 14 (App Router)",
    "React 18",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Lucide React",
    "clsx",
    "tailwind-merge",
  ],
  images: [
    "/forProject_Section/yenzhen-tailoring/homepage_pagev3.png",
    "/forProject_Section/yenzhen-tailoring/products_page.png",
    "/forProject_Section/yenzhen-tailoring/gallery_page.png",
    "/forProject_Section/yenzhen-tailoring/about_page.png",
    "/forProject_Section/yenzhen-tailoring/contact_page.png",
    "/forProject_Section/yenzhen-tailoring/homepage_mobilev2.png",
  ],
  imageAlt: {
    "/forProject_Section/yenzhen-tailoring/homepage_pagev3.png":
      "Yenzhen Tailoring homepage hero section with the brand name, tagline, and call-to-action buttons for browsing products and team packages",
    "/forProject_Section/yenzhen-tailoring/products_page.png":
      "Yenzhen Tailoring product catalog page showing a responsive grid of custom sportswear items with category filters",
    "/forProject_Section/yenzhen-tailoring/gallery_page.png":
      "Yenzhen Tailoring finished works gallery displaying completed custom sportswear projects in a responsive image grid with lightbox",
    "/forProject_Section/yenzhen-tailoring/about_page.png":
      "Yenzhen Tailoring about page explaining the brand's focus on custom sublimation sportswear for basketball teams",
    "/forProject_Section/yenzhen-tailoring/contact_page.png":
      "Yenzhen Tailoring contact page with business information, business hours, and a customer message form",
    "/forProject_Section/yenzhen-tailoring/homepage_mobilev2.png":
      "Yenzhen Tailoring homepage rendered on a mobile viewport showing the responsive layout",
    "/forProject_Section/yenzhen-tailoring/teamEden_jersey.png":
      "Sample custom Team Eden basketball jersey from the Yenzhen Tailoring product catalog",
    "/forProject_Section/yenzhen-tailoring/shinshumaru_jersey.png":
      "Sample custom Shinshumaru basketball jersey from the Yenzhen Tailoring product catalog",
    "/forProject_Section/yenzhen-tailoring/empress_volleyball.png":
      "Sample custom Empress volleyball jersey from the Yenzhen Tailoring product catalog",
    "/forProject_Section/yenzhen-tailoring/sientoDyes_package.png":
      "Sample custom Siento Dyes team package from the Yenzhen Tailoring product catalog",
    "/forProject_Section/yenzhen-tailoring/muse_gallery.png":
      "Finished muse performance uniform displayed in the Yenzhen Tailoring gallery",
  },
  liveUrl: "https://yenzhen-tailoring.vercel.app",
  githubUrl: "https://github.com/SrnceNra7718/yenzhen-tailoring",
  dateCreated: "2024-01-01",
  caseStudy: {
    problem:
      "Yenzhen Tailoring, a custom sublimation sportswear business specializing in basketball jerseys and team uniforms, needed a web presence that could showcase their work, present their product catalog, and give potential customers a clear path to request quotes. Without a dedicated site, the business relied on social channels for inquiries, making it harder for new customers to evaluate the range of products, view finished works, and understand the ordering process.",
    purpose:
      "To build a marketing website that introduces the Yenzhen Tailoring brand, presents its sportswear catalog and finished-works gallery, explains the custom ordering process, and gives visitors a clear way to make contact or request a quote for custom team apparel.",
    targetUsers:
      "Basketball team managers and coaches looking for custom team uniforms; individual customers and recreational players needing custom jerseys or sportswear; event organizers, schools, and leagues ordering in bulk; visitors evaluating the brand's portfolio before placing an order.",
    features: [
      {
        title: "Product catalog with category filtering",
        description:
          "A catalog of over forty products across categories — basketball jerseys, volleyball jerseys, t-shirts, warmers, riding sleeves, and team packages — presented in a responsive grid with category filters for quick browsing.",
      },
      {
        title: "Finished works gallery",
        description:
          "A responsive image gallery showcasing completed custom sportswear projects, with a lightbox view for closer inspection of detail work.",
      },
      {
        title: "About and brand storytelling",
        description:
          "A dedicated about page that introduces the brand's focus on sublimation printing for basketball teams, highlights why-choose-us points, and links back into the quote flow.",
      },
      {
        title: "Contact and quote request flow",
        description:
          "A contact page with business details, business hours, and a customer inquiry form so visitors can easily reach the business about custom orders.",
      },
      {
        title: "Responsive layout across breakpoints",
        description:
          "The site is built mobile-first with Tailwind CSS, scaling from single-column mobile layouts up to multi-column desktop grids for the catalog and gallery.",
      },
      {
        title: "Scroll-reveal and motion accents",
        description:
          "Framer Motion is used to animate sections into view as the user scrolls, paired with hover effects on product cards, gallery images, and primary CTAs.",
      },
      {
        title: "Prepared Supabase schema for future backend",
        description:
          "A SQL schema for product categories, gallery images, templates, quote requests, contact messages, and ratings is included in the repository, laying the groundwork for a future CRUD-backed admin panel and persistent quote inbox.",
      },
    ],
    challenges:
      "Presenting a large catalog (over forty products across seven categories) without overwhelming visitors, while keeping images lightweight. This was addressed by organising content into typed static data files, using Next.js Image optimization for the product photography, and grouping items into clearly labelled category sections. Designing a brand-led visual system — dark green and gold palette with a custom brush-style wordmark — that stays readable across both marketing pages and product grids was another focus.",
    implementation:
      "The site is built with Next.js 14 using the App Router, with pages for the homepage, product catalog, gallery, about, and contact. Static content (products, FAQs, testimonials, services, navigation, gallery) is held in typed TypeScript data files under `data/`, keeping the marketing surface easy to update without redeploying database infrastructure. Tailwind CSS handles styling and responsive layouts, while Framer Motion drives scroll-reveal and hover transitions. A SQL schema for Supabase (product categories, gallery images, templates, quote requests, contact messages, ratings) is included in the repository for the future admin and quote workflows. Images are served through Next.js Image optimization to keep catalog pages fast.",
    architecture:
      "Frontend: Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS, with Framer Motion for scroll-reveal and hover animations. Content layer: typed static data files (`data/products.ts`, `data/gallery.ts`, `data/faqs.ts`, etc.) used directly by the page components. Data layer (prepared): a Supabase + PostgreSQL schema for categories, gallery, templates, quotes, contact messages, and ratings, with the future admin dashboard routes already scaffolded under `app/admin/`. Deployment: Vercel for the frontend.",
    lessonsLearned:
      "Working on this project reinforced how typed static data files can power a content-heavy marketing site without needing a CMS, while still leaving a clean migration path to a database. Building a consistent responsive catalog and gallery taught me how Tailwind utility composition plus Next.js Image optimization can keep a large set of product images feeling fast. Using Framer Motion for scroll-reveal also sharpened my sense of when subtle motion adds polish and when it becomes noise.",
    futureImprovements:
      "Wiring the prepared Supabase schema into live CRUD operations so the admin dashboard can manage products, gallery images, templates, quotes, and contact messages. Adding a real multi-step quote calculator with persistent storage, an authenticated admin panel with Supabase Auth, and email notifications (via Resend) for new quote and contact submissions. Possible future additions include a customer ratings page backed by the ratings table, SEO enhancements per product, and deeper analytics on inquiry sources.",
    results:
      "A complete marketing website for Yenzhen Tailoring was delivered and deployed, presenting the brand's product catalog, finished works, ordering process, and contact flow. The site is responsive across desktop and mobile, uses typed static data for content, and ships with a Supabase schema and admin route scaffolding prepared for the next phase of backend functionality.",
  },
    ogImage: "/forProject_Section/yenzhen-tailoring/homepage_pagev3.png",
};

const browsByHer: Project = {
  number: "03",
  slug: "brows-by-her",
  title: "Brows By Her",
  role: "Frontend Developer & UI Designer",
  context: "Client project — Brows By Her (luxury eyebrow artistry studio, Melbourne)",
  overview:
    "A luxury marketing and appointment booking website for an eyebrow artistry studio in Melbourne, featuring interactive service pricing, gallery lightbox, FAQ accordions, and Cal.com integration.",
  description:
    "Brows By Her is a modern, responsive web application and brand presence created for an eyebrow artistry studio in Melbourne, Australia. Built with Next.js 14, React 18, TypeScript, and Tailwind CSS, the site showcases signature beauty services including brow sculpting, brow lamination, hybrid dye, and cosmetic tattooing. Visitors can explore detailed treatment descriptions, transparent pricing packages, a transformation gallery, and verified client testimonials, with seamless appointment scheduling integrated via Cal.com.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Lucide React",
    "React Hook Form",
    "Zod",
    "Cal.com",
    "Vercel",
  ],
  frontendTech: [
    "Next.js 14 (App Router)",
    "React 18",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Lucide React",
    "React Hook Form",
    "Zod",
    "next-themes",
    "clsx",
    "tailwind-merge",
  ],
  backendTech: ["Next.js Route Handlers (API)"],
  images: [
    "/forProject_Section/brows-by-her/homepage_hero.png",
    "/forProject_Section/brows-by-her/services_page.png",
    "/forProject_Section/brows-by-her/gallery_page.png",
    "/forProject_Section/brows-by-her/pricing_page.png",
    "/forProject_Section/brows-by-her/about_page.png",
    "/forProject_Section/brows-by-her/booking_page.png",
  ],
  imageAlt: {
    "/forProject_Section/brows-by-her/homepage_hero.png":
      "Brows By Her luxury salon homepage hero section with elegant typography, studio tagline, and direct booking call to action",
    "/forProject_Section/brows-by-her/services_page.png":
      "Brows By Her services catalog showcasing brow sculpt, lamination, hybrid tint, and cosmetic tattoo treatment options",
    "/forProject_Section/brows-by-her/gallery_page.png":
      "Brows By Her client transformation gallery with responsive photo grid and high-definition beauty results",
    "/forProject_Section/brows-by-her/pricing_page.png":
      "Brows By Her treatment pricing tiers and maintenance packages with transparent service details",
    "/forProject_Section/brows-by-her/about_page.png":
      "Brows By Her about page presenting the studio philosophy, artist background, and hygiene standards",
    "/forProject_Section/brows-by-her/booking_page.png":
      "Brows By Her appointment booking page integrated with Cal.com for real-time consultation scheduling",
  },
  liveUrl: "https://brows-by-her.vercel.app",
  githubUrl: "https://github.com/SrnceNra7718/brows-by-her",
  dateCreated: "2026-08-07",
  caseStudy: {
    problem:
      "Eyebrow studios often struggle with fragmented customer booking, answering repetitive inquiries about pricing and aftercare via direct messaging, and demonstrating high-end artistry without a curated, high-performance web experience.",
    purpose:
      "To build a refined, conversion-focused digital studio experience that establishes brand authority, clearly communicates specialized brow treatments and transparent pricing, and streamlines appointment scheduling through integrated booking.",
    targetUsers:
      "Clients seeking professional brow shaping, lamination, tinting, and cosmetic tattooing in Melbourne; beauty enthusiasts evaluating artist portfolios; existing clients booking routine maintenance sessions.",
    features: [
      {
        title: "Comprehensive treatment catalog",
        description:
          "Dedicated service breakdowns with procedure times, recommended frequencies, preparation notes, and aftercare guidance.",
      },
      {
        title: "Filtered artistry gallery",
        description:
          "Categorized photo showcase demonstrating precision brow transformations across different facial structures and styling preferences.",
      },
      {
        title: "Transparent tier pricing",
        description:
          "Structured service pricing and bundled treatment packages clearly outlined with no hidden fees.",
      },
      {
        title: "Interactive FAQ accordion",
        description:
          "Quick-reference knowledge base answering frequent client questions regarding pain tolerance, skin sensitivity, and longevity.",
      },
      {
        title: "Integrated Cal.com scheduling",
        description:
          "Embedded and linked direct booking flow allowing clients to select dates, times, and service types without back-and-forth messaging.",
      },
      {
        title: "Type-safe validated forms",
        description:
          "Contact and inquiry forms built with React Hook Form and Zod schemas with instant field validation and toast notifications.",
      },
    ],
    challenges:
      "Designing an ultra-clean, luxury aesthetic (cream, warm gold, charcoal) that feels high-end yet performs lightning fast with modern Web Vitals, while ensuring mobile navigation and booking interactions feel natural on handheld screens.",
    implementation:
      "Built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Framer Motion handles tasteful scroll reveals and micro-interactions. Client state is managed cleanly with React Hook Form and Zod validation, while Next.js Route Handlers (/api/contact, /api/subscribe) process form submissions.",
    architecture:
      "Frontend: Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion. Form management: React Hook Form + Zod. Scheduling integration: Cal.com. Deployment: Vercel with automated continuous deployment.",
    lessonsLearned:
      "Balancing aesthetic minimalism with rich commercial information architecture. Integrating third-party booking workflows seamlessly into custom brand UI while preserving responsive usability across device sizes.",
    futureImprovements:
      "Integrating an automated SMS/email appointment reminder system, introducing an interactive brow shape visualizer, and building an e-commerce shelf for aftercare serums and styling balms.",
    results:
      "Delivered a polished, responsive salon platform that elevated the brand identity, consolidated service inquiries, and established a direct booking funnel for new and returning clients.",
  },
  ogImage: "/forProject_Section/brows-by-her/homepage_hero.png",
};

const stylishFlowHairBeauty: Project = {
  number: "04",
  slug: "stylish-flow-hair-beauty",
  title: "Stylish Flow Hair & Beauty",
  role: "Frontend Developer & UI Designer",
  context: "Client project — Stylish Flow Hair & Beauty Salon (Melbourne)",
  overview:
    "A modern luxury single-page website for a Melbourne hair and beauty salon, featuring an interactive gold scroll-progress flow line, filterable masonry gallery, service pricing menu, and client reviews.",
  description:
    "Stylish Flow Hair & Beauty is a bespoke marketing website built for a premier Melbourne salon offering haircuts, balayage, bespoke colour treatments, and beauty therapies. Developed with clean semantic HTML5, modern CSS3 custom properties, and vanilla JavaScript, the site delivers a high-end luxury feel without heavy framework overhead. Key features include a signature gold scroll-progress flow line, responsive masonry gallery with category filters, detailed pricing menu, customer testimonial carousel, and an appointment booking flow.",
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Lucide Icons",
    "Google Fonts",
    "Vercel",
  ],
  frontendTech: [
    "Semantic HTML5",
    "Modern CSS3 (Custom Properties & Flexbox/Grid)",
    "Vanilla JavaScript (ES6+)",
    "Lucide Icons",
    "Google Fonts (Manrope & Inter)",
  ],
  images: [
    "/forProject_Section/stylish-flow-hair-beauty/homepage_hero.png",
    "/forProject_Section/stylish-flow-hair-beauty/about_section.png",
    "/forProject_Section/stylish-flow-hair-beauty/services_section.png",
    "/forProject_Section/stylish-flow-hair-beauty/gallery_section.png",
    "/forProject_Section/stylish-flow-hair-beauty/testimonials_section.png",
    "/forProject_Section/stylish-flow-hair-beauty/contact_section.png",
  ],
  imageAlt: {
    "/forProject_Section/stylish-flow-hair-beauty/homepage_hero.png":
      "Stylish Flow Hair & Beauty homepage hero section with custom gold ribbon brand mark and appointment call to action",
    "/forProject_Section/stylish-flow-hair-beauty/about_section.png":
      "Stylish Flow Hair & Beauty studio about section detailing salon philosophy and hair artistry standards",
    "/forProject_Section/stylish-flow-hair-beauty/services_section.png":
      "Stylish Flow Hair & Beauty comprehensive service menu with pricing for styling, cuts, colour, and treatments",
    "/forProject_Section/stylish-flow-hair-beauty/gallery_section.png":
      "Stylish Flow Hair & Beauty filterable client transformation gallery displaying hair styling and colour results",
    "/forProject_Section/stylish-flow-hair-beauty/testimonials_section.png":
      "Stylish Flow Hair & Beauty client testimonials and customer reviews highlighting service satisfaction",
    "/forProject_Section/stylish-flow-hair-beauty/contact_section.png":
      "Stylish Flow Hair & Beauty contact section with Melbourne salon address, opening hours, and appointment inquiry form",
  },
  liveUrl: "https://stylish-flow-hair-beauty.vercel.app",
  githubUrl: "https://github.com/SrnceNra7718/stylish-flow-hair-beauty",
  dateCreated: "2026-08-07",
  caseStudy: {
    problem:
      "Traditional salon websites often suffer from slow page loads, bloated third-party templates, and clunky mobile layouts that make it difficult for prospective clients to browse hairstyle galleries or quickly book appointments.",
    purpose:
      "To craft an elegant, ultra-fast web presence using lightweight modern web standards that highlights the salon's luxury aesthetic, organizes extensive styling services, and provides frictionless booking access.",
    targetUsers:
      "Melbourne residents seeking haircut, colouring, balayage, and beauty services; wedding and event groups booking styling packages; mobile users checking opening hours and service pricing.",
    features: [
      {
        title: "Signature gold flow progress indicator",
        description:
          "A custom-styled scroll-progress line across the top of the viewport reflecting reading depth with luxury gold styling.",
      },
      {
        title: "Categorized service & treatment menu",
        description:
          "Structured presentation of styling, cutting, colouring, keratin, and facial beauty treatments with duration and pricing.",
      },
      {
        title: "Interactive transformation gallery",
        description:
          "Responsive image gallery featuring before-and-after client styling with category filter buttons.",
      },
      {
        title: "Client review showcase",
        description:
          "Curated customer testimonials highlighting five-star ratings and real client salon experiences.",
      },
      {
        title: "Integrated appointment contact",
        description:
          "Direct phone access, operating hours breakdown, and interactive booking request form with date and service selection.",
      },
    ],
    challenges:
      "Achieving fluid animations, responsive masonry layouts, and instant tab filtering using purely vanilla JavaScript and CSS without external UI frameworks.",
    implementation:
      "Engineered with semantic HTML5, modular CSS architecture using CSS custom properties for color tokens and typography, and unobtrusive vanilla JavaScript. Lucide icons provide clean vector accents, and Google Fonts (Manrope and Inter) establish typographic hierarchy.",
    architecture:
      "Architecture: Single-page static web application. Presentation: Vanilla CSS3 with responsive Grid and Flexbox layouts. Interactivity: Vanilla ES6+ event listeners for mobile drawer navigation, smooth scroll, tab filtering, and scroll progress tracking. Hosting: Vercel Edge Network.",
    lessonsLearned:
      "Mastering high-performance vanilla web design demonstrates how much can be achieved without JavaScript framework overhead, resulting in near-zero load latency and pristine Core Web Vitals.",
    futureImprovements:
      "Integrating an automated calendar availability engine, adding customer review submission via API, and implementing gift card purchase capabilities.",
    results:
      "Delivered an ultra-fast, visually captivating marketing website that provides an effortless browsing experience on both desktop and mobile devices.",
  },
  ogImage: "/forProject_Section/stylish-flow-hair-beauty/homepage_hero.png",
};

const subbieStreetGarageProto: Project = {
  number: "05",
  slug: "subbie-street-garage-proto",
  title: "Subbie Street Garage (Prototype)",
  role: "Frontend Developer & UI Designer",
  context: "Prototype design — Subaru specialist workshop (Dandenong VIC)",
  overview:
    "An interactive dark motorsport web prototype for a Subaru performance garage, featuring an animated SVG boxer engine, custom motorsport livery accents, and service cards.",
  description:
    "Subbie Street Garage (Prototype) is the foundational concept and interactive prototype developed for a dedicated Subaru mechanical and performance workshop in Dandenong, Victoria. Crafted with pure HTML5, CSS3, and custom SVG animation, the prototype establishes the brand's aggressive motorsport identity. It showcases custom animated boxer engine piston graphics, chevron racing livery textures, dark high-contrast motorsport color palette (black, orange, white), service breakdowns, customer reviews, and workshop inquiry flows.",
  technologies: [
    "HTML5",
    "CSS3",
    "SVG Animation",
    "Google Fonts",
    "Vercel",
  ],
  frontendTech: [
    "Semantic HTML5",
    "CSS3 Custom Properties & Keyframe Animations",
    "Custom SVG Vector Graphics",
    "Google Fonts (Bebas Neue & Inter)",
  ],
  images: [
    "/forProject_Section/subbie-street-garage-proto/homepage_hero.png",
    "/forProject_Section/subbie-street-garage-proto/services_section.png",
    "/forProject_Section/subbie-street-garage-proto/specialist_section.png",
    "/forProject_Section/subbie-street-garage-proto/reviews_section.png",
    "/forProject_Section/subbie-street-garage-proto/contact_section.png",
  ],
  imageAlt: {
    "/forProject_Section/subbie-street-garage-proto/homepage_hero.png":
      "Subbie Street Garage prototype hero section featuring animated boxer engine SVG and dark motorsport typography",
    "/forProject_Section/subbie-street-garage-proto/services_section.png":
      "Subbie Street Garage prototype service cards showing boxer rebuilds, ECU tuning, and logbook maintenance",
    "/forProject_Section/subbie-street-garage-proto/specialist_section.png":
      "Subbie Street Garage prototype specialist section highlighting Subaru boxer engine and AWD expertise",
    "/forProject_Section/subbie-street-garage-proto/reviews_section.png":
      "Subbie Street Garage prototype customer testimonials from WRX and STI vehicle owners",
    "/forProject_Section/subbie-street-garage-proto/contact_section.png":
      "Subbie Street Garage prototype contact and location section with Dandenong workshop details and inquiry form",
  },
  liveUrl: "https://subbie-street-garage-proto.vercel.app",
  githubUrl: "https://github.com/SrnceNra7718/subbie-street-garage-proto",
  dateCreated: "2026-08-05",
  caseStudy: {
    problem:
      "Automotive specialist workshops need visual branding and digital interfaces that resonate specifically with passionate car enthusiasts and track drivers rather than looking like generic repair shops.",
    purpose:
      "To prototype an energetic, motorsport-inspired digital interface and brand aesthetic that speaks directly to Subaru WRX, STI, and BRZ owners, testing key animated visual concepts before full production development.",
    targetUsers:
      "Subaru WRX, STI, Forester XT, and BRZ owners; track day enthusiasts seeking performance tuning; everyday drivers looking for certified boxer engine maintenance.",
    features: [
      {
        title: "Animated SVG boxer engine illustration",
        description:
          "Custom-crafted SVG vector graphic illustrating horizontally opposed pistons firing in synchrony with CSS keyframe animation.",
      },
      {
        title: "Motorsport livery visual texture",
        description:
          "Angled chevron race patterns and diamond carbon-texture CSS gradients evoking rally and track heritage.",
      },
      {
        title: "Specialist service grid",
        description:
          "Dedicated service cards covering EJ20/EJ25 and FA/FB engine rebuilds, turbo upgrades, suspension setups, and logbook servicing.",
      },
      {
        title: "Driver testimonial cards",
        description:
          "Enthusiast feedback quotes detailing real-world dyno tuning results, reliability, and track performance improvements.",
      },
      {
        title: "Direct contact & location module",
        description:
          "Fast access to workshop address on Hammond Road Dandenong, operating schedule, direct phone dialing, and email quote submission.",
      },
    ],
    challenges:
      "Designing complex vector graphics and smooth continuous piston animations purely in CSS and SVG while keeping the site featherweight and compatible across mobile and desktop browsers.",
    implementation:
      "Created as a static prototype using vanilla HTML5 and CSS3. CSS custom properties define the high-contrast motorsport color palette (#0B0B0B black, #F36C21 orange, #FFFFFF white). CSS keyframes drive the boxer engine piston stroke cycles. Typography pairs Bebas Neue display headers with Inter body text.",
    architecture:
      "Architecture: Static web prototype. Styling: Pure CSS3 with custom properties and keyframe animations. Graphics: Custom inline SVGs for the boxer engine schematic and motorsport motifs. Deployment: Deployed on Vercel.",
    lessonsLearned:
      "Prototyping brand visual hooks (like the animated boxer engine) early provided an engaging identity that established the design foundation for the full Next.js production build.",
    futureImprovements:
      "Using the lessons and visual motifs validated in this prototype to architect the complete multi-page Next.js web application with dynamic booking and quote calculators.",
    results:
      "Successfully validated the brand aesthetic, motorsport identity, and enthusiast engagement hooks, serving as the blueprint for the full Subbie Street Garage production website.",
  },
  ogImage: "/forProject_Section/subbie-street-garage-proto/homepage_hero.png",
};

const subbieStreetGarage: Project = {
  number: "06",
  slug: "subbie-street-garage",
  title: "Subbie Street Garage",
  role: "Frontend Developer & UI Designer",
  context: "Production application — Subaru specialist workshop (Dandenong VIC)",
  overview:
    "A full-scale production web application for an independent Subaru specialist workshop, built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4, featuring multi-step quote and booking forms with Zod validation.",
  description:
    "Subbie Street Garage is a full-featured web application engineered for an independent Subaru mechanical and performance workshop in Dandenong, Victoria. Built on cutting-edge Next.js 16, React 19, TypeScript, and Tailwind CSS v4, the application expands upon initial concept work to deliver a complete multi-route digital experience. It features dedicated pages for services, Subaru platform expertise (EJ and FA/FB platforms), customer testimonials, interactive vehicle quote and service booking forms validated with Zod and React Hook Form, workshop build gallery, and comprehensive LocalBusiness structured data.",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Lucide React",
    "React Hook Form",
    "Zod",
    "Vercel",
  ],
  frontendTech: [
    "Next.js 16 (App Router)",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "Lucide React",
    "React Hook Form",
    "Zod",
    "clsx",
    "tailwind-merge",
  ],
  images: [
    "/forProject_Section/subbie-street-garage/homepage_hero.png",
    "/forProject_Section/subbie-street-garage/services_page.png",
    "/forProject_Section/subbie-street-garage/specialists_page.png",
    "/forProject_Section/subbie-street-garage/gallery_page.png",
    "/forProject_Section/subbie-street-garage/quote_page.png",
    "/forProject_Section/subbie-street-garage/booking_page.png",
  ],
  imageAlt: {
    "/forProject_Section/subbie-street-garage/homepage_hero.png":
      "Subbie Street Garage production homepage hero section with dynamic navigation and service highlights",
    "/forProject_Section/subbie-street-garage/services_page.png":
      "Subbie Street Garage dedicated services catalog detailing engine building, transmission, and dyno tuning",
    "/forProject_Section/subbie-street-garage/specialists_page.png":
      "Subbie Street Garage technical focus page on EJ20, EJ25, FA20, and FA24 Subaru engine platforms",
    "/forProject_Section/subbie-street-garage/gallery_page.png":
      "Subbie Street Garage workshop gallery displaying customer vehicle builds and performance projects",
    "/forProject_Section/subbie-street-garage/quote_page.png":
      "Subbie Street Garage interactive quote builder with detailed vehicle specification fields",
    "/forProject_Section/subbie-street-garage/booking_page.png":
      "Subbie Street Garage appointment booking form with vehicle information and preferred scheduling",
  },
  liveUrl: "https://subbie-street-garage.vercel.app",
  githubUrl: "https://github.com/SrnceNra7718/subbie-street-garage",
  dateCreated: "2026-08-05",
  caseStudy: {
    problem:
      "High-performance automotive workshops require comprehensive job intake forms to capture precise vehicle specifications (engine code, modifications, symptoms) before quoting, while still providing a modern, fast user experience on mobile devices.",
    purpose:
      "To engineer an enterprise-grade automotive web application that showcases deep technical Subaru expertise, streamlines service scheduling, and captures granular quote requests with type-safe validation.",
    targetUsers:
      "Subaru owners needing certified logbook maintenance; performance enthusiasts commissioning forged engine builds or ECU tuning; drivers requiring urgent diagnostics or drivetrain repairs in Greater Melbourne.",
    features: [
      {
        title: "Subaru platform specialist deep-dive",
        description:
          "Technical overview pages explaining expertise across EJ20/EJ25 boxer turbos, FA/FB direct injection, and Symmetrical All-Wheel Drive systems.",
      },
      {
        title: "Granular multi-field quote builder",
        description:
          "Interactive quote request form capturing vehicle model, year, VIN or registration, current modifications, target power levels, and specific service needs.",
      },
      {
        title: "Service booking scheduler",
        description:
          "Structured booking system allowing drivers to schedule routine servicing, pre-purchase inspections, or major maintenance.",
      },
      {
        title: "Categorized service directory",
        description:
          "Individual route-driven service pages covering logbook servicing, engine rebuilds, suspension & brakes, and dyno tuning.",
      },
      {
        title: "Workshop gallery & case studies",
        description:
          "Visual build catalog showcasing completed track and street projects with specifications.",
      },
      {
        title: "Local SEO & schema structured data",
        description:
          "Complete Schema.org AutoRepair JSON-LD structured data with geo-coordinates, trading hours, and service catalogs.",
      },
    ],
    challenges:
      "Building on the early release of Next.js 16 and Tailwind CSS v4 while ensuring rock-solid type safety, rapid hydration, and comprehensive form validation across multi-step technical input flows.",
    implementation:
      "Constructed with Next.js 16 App Router using React 19 Server Components for high-performance static rendering, paired with isolated Client Components for interactive forms. React Hook Form and Zod schemas enforce strict data validation on client inputs. Tailwind CSS v4 provides modernized styling rules and custom font variables.",
    architecture:
      "Frontend: Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4. Form management: React Hook Form + Zod validation. SEO: Next.js Metadata API, sitemap.ts, robots.ts, and Schema.org AutoRepair JSON-LD. Deployment: Vercel with automated CI/CD pipeline.",
    lessonsLearned:
      "Early adoption of Next.js 16 and Tailwind v4 required careful adherence to evolving bundling and CSS conventions, rewarding the project with superior compilation performance and clean component boundaries.",
    futureImprovements:
      "Integrating an automated customer SMS notification pipeline for live vehicle service updates, dyno graph PDF generation, and customer portal for service history.",
    results:
      "Delivered a high-performance, technically robust web application that establishes Subbie Street Garage as Melbourne's premier independent Subaru specialist.",
  },
  ogImage: "/forProject_Section/subbie-street-garage/homepage_hero.png",
};

const seekMigration: Project = {
  number: "07",
  slug: "seek-migration",
  title: "Seek Migration",
  role: "Frontend Developer & UI Designer",
  context: "Client project — Seek Migration (international visa consultancy)",
  overview:
    "A professional migration services landing page for Filipino applicants seeking visa pathways to Australia and New Zealand, featuring interactive pathway guides, animated route graphics, and consultation booking.",
  description:
    "Seek Migration is a professional immigration consultancy website tailored for individuals and families in the Philippines planning their migration journey to Australia or New Zealand. Built with semantic HTML5, modern CSS3, and vanilla JavaScript, the website guides prospective migrants through complex visa pathways including skilled migration, student visas, partner visas, and employer sponsorships. Features include an interactive destination switcher, animated flight path graphics, verified migrant success stories, and a consultation booking interface.",
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "SVG Graphics",
    "Google Fonts",
    "Vercel",
  ],
  frontendTech: [
    "Semantic HTML5",
    "Modern CSS3 (Grid, Flexbox, Keyframes)",
    "Vanilla JavaScript (ES6+)",
    "SVG Vector Graphics & Route Maps",
    "Google Fonts (DM Sans & Instrument Sans)",
  ],
  images: [
    "/forProject_Section/seek-migration/homepage_hero.png",
    "/forProject_Section/seek-migration/services_section.png",
    "/forProject_Section/seek-migration/destinations_section.png",
    "/forProject_Section/seek-migration/stories_section.png",
    "/forProject_Section/seek-migration/contact_section.png",
  ],
  imageAlt: {
    "/forProject_Section/seek-migration/homepage_hero.png":
      "Seek Migration homepage hero section with professional branding, tagline, and consultation booking call to action",
    "/forProject_Section/seek-migration/services_section.png":
      "Seek Migration visa pathways breakdown covering skilled migration, student visas, and partner applications",
    "/forProject_Section/seek-migration/destinations_section.png":
      "Seek Migration Australia and New Zealand destination comparison with animated pathway indicators",
    "/forProject_Section/seek-migration/stories_section.png":
      "Seek Migration client success stories featuring testimonials from Filipino migrants living abroad",
    "/forProject_Section/seek-migration/contact_section.png":
      "Seek Migration consultation booking and office contact section with Manila and Australian details",
  },
  liveUrl: "https://seek-migration.vercel.app",
  githubUrl: "https://github.com/SrnceNra7718/seek_migration",
  dateCreated: "2026-08-22",
  caseStudy: {
    problem:
      "Immigration rules and visa categories are notoriously complicated and overwhelming, causing anxiety and hesitation for Filipino applicants who need clear, trustworthy advice and structured guidance.",
    purpose:
      "To design and develop an approachable, authoritative web presence that demystifies migration pathways, highlights successful applicant journeys, and provides a clear pathway to book a professional visa assessment.",
    targetUsers:
      "Filipino professionals, skilled workers, students, and families exploring permanent residency or study options in Australia and New Zealand; sponsors and employers seeking accredited migration agents.",
    features: [
      {
        title: "Comprehensive visa category guide",
        description:
          "Structured breakdowns of General Skilled Migration (189/190/491), Student Visas (500), Partner Visas (820/801), and NZ Essential Skills visas.",
      },
      {
        title: "Interactive destination pathways",
        description:
          "Dedicated country comparison panels contrasting lifestyle, employment sectors, and immigration requirements for Australia versus New Zealand.",
      },
      {
        title: "Animated migration route graphics",
        description:
          "Visual flight trajectories and route indicators symbolizing the journey from Manila to Australian and New Zealand capitals.",
      },
      {
        title: "Client success story carousel",
        description:
          "Relatable case narratives with photos, visa subclasses, and timelines demonstrating verified client approvals.",
      },
      {
        title: "Structured consultation booking",
        description:
          "Direct inquiry form collecting applicant background, target destination, and preferred visa category for initial agent review.",
      },
    ],
    challenges:
      "Organizing extensive regulatory immigration information into clean, digestible visual chunks that reassure anxious users without cluttering the interface.",
    implementation:
      "Constructed with semantic HTML5 for maximum accessibility and SEO clarity, paired with responsive CSS3 layouts and vanilla JavaScript for interactive drawer menus, smooth scroll anchors, and destination tabs. Branded with an authoritative navy, teal, and gold color scheme and Google Fonts (DM Sans and Instrument Sans).",
    architecture:
      "Architecture: Static web application. Styling: Custom CSS3 with responsive CSS Grid and Flexbox modules. Interactivity: Vanilla JavaScript ES6+ managing navigation state, tab switching, and form interaction. Deployment: Vercel.",
    lessonsLearned:
      "Designing for high-stakes services like international migration requires deep empathy and clear visual hierarchy; establishing trust upfront through clean typography and verified client stories dramatically increases consultation conversions.",
    futureImprovements:
      "Building an interactive visa points eligibility calculator for Australia and New Zealand, adding client portal access for document uploads, and multi-language support (English and Tagalog).",
    results:
      "Delivered an authoritative, user-friendly migration consultancy platform that streamlines client onboarding and establishes a credible digital presence for prospective immigrants.",
  },
  ogImage: "/forProject_Section/seek-migration/homepage_hero.png",
};

export const projects: Project[] = [
  studentClearanceMonitor,
  yenzhenTailoring,
  browsByHer,
  stylishFlowHairBeauty,
  subbieStreetGarageProto,
  subbieStreetGarage,
  seekMigration,
];

