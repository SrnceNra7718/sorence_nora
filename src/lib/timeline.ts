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
