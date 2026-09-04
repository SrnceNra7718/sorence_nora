export interface LearningPath {
  provider: string;
  title: string;
  description?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  issueDate?: string;
  dateISO?: string;
  recipient?: string;
  credentialId?: string;
  description?: string;
  courseType?: string;
  skills?: string[];
  pdf: string;
  slug: string;
  instructor?: string;
  duration?: string;
  isLearningPathCertificate?: boolean;
  learningPath?: LearningPath;
}

export interface CertificateGroup {
  provider: string;
  learningPath?: LearningPath;
  certificates: Certificate[];
}

const MASTER_LP_TITLE =
  "Master React and Next.js, the Leading Technologies Powering Modern Web Development";

const MASTER_LP_FOLDER =
  "Master React and Next.js, the Leading Technologies Powering Modern Web Development";

function pdfUrl(folder: string | null, filename: string): string {
  const parts = folder
    ? ["/certificates", ...folder.split("/"), filename]
    : ["/certificates", filename];
  return parts
    .map((p) => encodeURIComponent(p).replace(/%2F/g, "/"))
    .join("/");
}

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const MASTER_DEV_LEARNING_PATH: LearningPath = {
  provider: "Master.dev",
  title: MASTER_LP_TITLE,
  description:
    "Gain experience building, testing, and maintaining high-performance full-stack applications with React and Next.js.",
};

export const certificates: Certificate[] = [
  {
    id: "java-fundamentals",
    title: "Java Fundamentals",
    issuer: "Oracle Academy",
    year: "2023",
    issueDate: "June 24, 2023",
    dateISO: "2023-06-24",
    courseType: "Award of Course Completion",
    description:
      "Awarded for satisfactory completion of all course work in Java Fundamentals.",
    skills: ["Java", "Programming Fundamentals"],
    pdf: pdfUrl(null, "certificateJavaFundamentals.pdf"),
    slug: slugify("Java Fundamentals"),
  },
  {
    id: "systems-administration",
    title: "Systems Administration",
    issuer: "STI College",
    year: "2023",
    issueDate: "June 24, 2023",
    dateISO: "2023-06-24",
    courseType: "Award of Course Completion",
    description:
      "Awarded for satisfactory completion of all course work in Systems Administration.",
    skills: ["System Administration", "IT Operations"],
    pdf: pdfUrl(null, "certificateSystemAdministration.pdf"),
    slug: slugify("Systems Administration"),
  },
  {
    id: "react-nextjs-learning-path",
    title: "React & Next.js",
    issuer: "Frontend Masters",
    year: "2026",
    issueDate: "May 6, 2026",
    dateISO: "2026-05-06",
    recipient: "Sorence Nora",
    courseType: "Certificate of Completion",
    description:
      "Gain experience building, testing, and maintaining high-performance full-stack applications with React and Next.js.",
    skills: ["React", "Next.js", "Full-Stack Development"],
    duration: "40 hours, 7 minutes",
    pdf: pdfUrl(MASTER_LP_FOLDER, "react-dark.pdf"),
    slug: "react-nextjs-learning-path",
    isLearningPathCertificate: true,
    learningPath: MASTER_DEV_LEARNING_PATH,
  },
  {
    id: "complete-intro-to-react-v9",
    title: "Complete Intro to React, v9",
    issuer: "Frontend Masters",
    year: "2025",
    issueDate: "Dec 25, 2025",
    dateISO: "2025-12-25",
    recipient: "Sorence Nora",
    courseType: "Certificate of Completion",
    instructor: "Brian Holt",
    duration: "8 hours, 27 minutes",
    skills: ["React"],
    pdf: pdfUrl(MASTER_LP_FOLDER, "complete-react-v9-dark.pdf"),
    slug: slugify("Complete Intro to React v9"),
    learningPath: MASTER_DEV_LEARNING_PATH,
  },
  {
    id: "intermediate-react-v6",
    title: "Intermediate React, v6: RSCs, Hooks, & Performance",
    issuer: "Frontend Masters",
    year: "2026",
    issueDate: "Jan 2, 2026",
    dateISO: "2026-01-02",
    recipient: "Sorence Nora",
    courseType: "Certificate of Completion",
    instructor: "Brian Holt",
    duration: "6 hours, 22 minutes",
    skills: ["React", "RSCs", "Hooks", "Performance"],
    pdf: pdfUrl(MASTER_LP_FOLDER, "intermediate-react-v6-dark.pdf"),
    slug: slugify("Intermediate React v6 RSCs Hooks Performance"),
    learningPath: MASTER_DEV_LEARNING_PATH,
  },
  {
    id: "nextjs-fundamentals-v4",
    title: "Next.js Fundamentals, v4",
    issuer: "Frontend Masters",
    year: "2026",
    issueDate: "Jan 8, 2026",
    dateISO: "2026-01-08",
    recipient: "Sorence Nora",
    courseType: "Certificate of Completion",
    instructor: "Scott Moss",
    duration: "6 hours, 41 minutes",
    skills: ["Next.js", "React"],
    pdf: pdfUrl(MASTER_LP_FOLDER, "next-js-v4-dark.pdf"),
    slug: slugify("Nextjs Fundamentals v4"),
    learningPath: MASTER_DEV_LEARNING_PATH,
  },
  {
    id: "react-and-typescript-v3",
    title: "React and TypeScript, v3",
    issuer: "Frontend Masters",
    year: "2026",
    issueDate: "Jan 15, 2026",
    dateISO: "2026-01-15",
    recipient: "Sorence Nora",
    courseType: "Certificate of Completion",
    instructor: "Steve Kinney",
    duration: "4 hours, 22 minutes",
    skills: ["React", "TypeScript"],
    pdf: pdfUrl(MASTER_LP_FOLDER, "react-typescript-v3-dark.pdf"),
    slug: slugify("React and TypeScript v3"),
    learningPath: MASTER_DEV_LEARNING_PATH,
  },
  {
    id: "enterprise-ui-dev-testing-code-quality",
    title: "Enterprise UI Development: Testing & Code Quality",
    issuer: "Frontend Masters",
    year: "2026",
    issueDate: "Feb 2, 2026",
    dateISO: "2026-02-02",
    recipient: "Sorence Nora",
    courseType: "Certificate of Completion",
    instructor: "Steve Kinney",
    duration: "8 hours, 25 minutes",
    skills: ["Enterprise UI Development", "Testing", "Code Quality"],
    pdf: pdfUrl(MASTER_LP_FOLDER, "enterprise-ui-dev-dark.pdf"),
    slug: slugify("Enterprise UI Development Testing Code Quality"),
    learningPath: MASTER_DEV_LEARNING_PATH,
  },
  {
    id: "enterprise-ui-dev-microfrontends",
    title:
      "Enterprise UI Development: Microfrontends, Testing, & Code Quality",
    issuer: "Frontend Masters",
    year: "2026",
    issueDate: "Mar 27, 2026",
    dateISO: "2026-03-27",
    recipient: "Sorence Nora",
    courseType: "Certificate of Completion",
    instructor: "Steve Kinney",
    duration: "5 hours, 11 minutes",
    skills: ["Microfrontends", "Testing", "Code Quality", "Enterprise UI Development"],
    pdf: pdfUrl(MASTER_LP_FOLDER, "enterprise-ui-dev-v2-dark.pdf"),
    slug: slugify(
      "Enterprise UI Development Microfrontends Testing Code Quality",
    ),
    learningPath: MASTER_DEV_LEARNING_PATH,
  },
  {
    id: "state-management-react-nextjs",
    title: "State Management at Scale in React & Next.js",
    issuer: "Frontend Masters",
    year: "2026",
    issueDate: "May 6, 2026",
    dateISO: "2026-05-06",
    recipient: "Sorence Nora",
    courseType: "Certificate of Completion",
    instructor: "David Khourshid",
    duration: "4 hours, 50 minutes",
    skills: ["State Management", "React", "Next.js"],
    pdf: pdfUrl(MASTER_LP_FOLDER, "react-nextjs-state-dark.pdf"),
    slug: slugify("State Management at Scale in React Nextjs"),
    learningPath: MASTER_DEV_LEARNING_PATH,
  },
  {
    id: "react-performance-v2",
    title: "React Performance, v2",
    issuer: "Frontend Masters",
    year: "2026",
    issueDate: "May 6, 2026",
    dateISO: "2026-05-06",
    recipient: "Sorence Nora",
    courseType: "Certificate of Completion",
    instructor: "Steve Kinney",
    duration: "4 hours, 10 minutes",
    skills: ["React", "Performance"],
    pdf: pdfUrl(MASTER_LP_FOLDER, "react-performance-v2-dark.pdf"),
    slug: slugify("React Performance v2"),
    learningPath: MASTER_DEV_LEARNING_PATH,
  },
];

export function getCertificateBySlug(
  slug: string,
): Certificate | undefined {
  return certificates.find((c) => c.slug === slug);
}

export function getCertificateById(
  id: string,
): Certificate | undefined {
  return certificates.find((c) => c.id === id);
}

export function getCertificateGroups(): CertificateGroup[] {
  const groups: CertificateGroup[] = [];
  const lpGroup: CertificateGroup = {
    provider: MASTER_DEV_LEARNING_PATH.provider,
    learningPath: MASTER_DEV_LEARNING_PATH,
    certificates: [],
  };
  const standalone: Record<string, Certificate[]> = {};

  for (const cert of certificates) {
    if (cert.learningPath) {
      lpGroup.certificates.push(cert);
    } else {
      if (!standalone[cert.issuer]) standalone[cert.issuer] = [];
      standalone[cert.issuer].push(cert);
    }
  }

  if (lpGroup.certificates.length > 0) {
    lpGroup.certificates.sort((a, b) => {
      if (a.isLearningPathCertificate && !b.isLearningPathCertificate)
        return -1;
      if (!a.isLearningPathCertificate && b.isLearningPathCertificate)
        return 1;
      return a.year.localeCompare(b.year);
    });
    groups.push(lpGroup);
  }

  Object.entries(standalone).forEach(([provider, certs]) => {
    groups.push({ provider, certificates: certs });
  });

  return groups;
}

export function getCertificatesForHomepage(): Certificate[] {
  return getCertificateGroups().flatMap((g) => g.certificates);
}

export function getLearningPathCertificates(): Certificate[] {
  return certificates.filter((c) => c.learningPath);
}

export function getStandaloneCertificates(): Certificate[] {
  return certificates.filter((c) => !c.learningPath);
}
