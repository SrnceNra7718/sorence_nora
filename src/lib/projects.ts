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

export const projects: Project[] = [studentClearanceMonitor, yenzhenTailoring];
