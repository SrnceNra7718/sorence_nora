export interface StackCategory {
  category: string;
  items: string[];
}

export const stackCategories: StackCategory[] = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "MUI", "Responsive Design"],
  },
  {
    category: "Backend & Data",
    items: [
      "Supabase",
      "Terraform",
      "Docker",
      "PostgreSQL",
      "NoSQL",
      "AWS DynamoDB",
    ],
  },
  {
    category: "Design Tools",
    items: ["Figma", "Photoshop"],
  },
];
