export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
}

export interface TimelineSection {
  heading: string;
  items: TimelineItem[];
}

export const education: TimelineSection = {
  heading: "Education",
  items: [
    {
      year: "2022—24",
      title: "Associate in Computer Technology",
      subtitle: "STI San Jose del Monte · 2-year college program",
    },
    {
      year: "2020—22",
      title: "IT in Mobile App and Web Development",
      subtitle: "STI Fairview · Senior high school program (Grade 11–12)",
    },
  ],
};

export const certifications: TimelineSection = {
  heading: "Certifications",
  items: [
    {
      year: "2023",
      title: "Java Fundamentals",
      subtitle: "Oracle Academy · Award of Course Completion",
    },
    {
      year: "2023",
      title: "Systems Administration",
      subtitle: "STI College · Award of Course Completion",
    },
  ],
};
