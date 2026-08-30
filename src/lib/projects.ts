export interface Project {
  number: string;
  slug: string;
  title: string;
  role: string;
  context: string;
  overview: string;
  technologies: string[];
  images: string[];
  liveUrl: string | null;
  githubUrl: string | null;
}

export const project: Project = {
  number: "01",
  slug: "student-clearance-monitor",
  title: "Student Clearance Monitor",
  role: "Frontend Developer",
  context: "OJT project — STI College, San Jose del Monte",
  overview:
    "A system that manages and monitors student clearance status, reflecting updates in real time across departments — admin, cashier, program head, and registrar.",
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
  images: [
    "/forProject_Section/scs.png",
    "/forProject_Section/AdminPage.png",
    "/forProject_Section/CashierPage.png",
    "/forProject_Section/ProgHeadPage.png",
    "/forProject_Section/RegistrarPage.png",
  ],
  liveUrl: null,
  githubUrl: null,
};
