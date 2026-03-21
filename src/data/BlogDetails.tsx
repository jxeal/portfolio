import { Fired, Fulltime } from "./Blogs";

export interface BlogPostMetadata {
  slug: string; // Used for the route: /blogs/[slug]
  title: string;
  date: string; // e.g., "October 30, 2025"
  excerpt: string; // A short summary for the index page
  content: React.ReactNode;
}

export const allBlogs: BlogPostMetadata[] = [
  {
    slug: "full-time",
    title: "Full Time? Ayein?",
    date: "October 23, 2025",
    excerpt:
      "No interviews, no notices, no stupid fluff, just a talk and fulltime offer? Ayein?",
    content: <Fulltime />,
  },
  {
    slug: "fired",
    title: "Fired? Already? Bruh.",
    date: "Feb 1, 2026",
    excerpt:
      "3 months of full time and already fired?",
    content: <Fired />,
  },
];
