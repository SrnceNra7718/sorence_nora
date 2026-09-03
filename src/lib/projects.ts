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

export const project: Project = {
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

export const projects: Project[] = [project];
