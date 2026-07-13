export interface Post {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  readMinutes: number;
  tag?: string;
}

export const posts: Post[] = [
  {
    slug: "the-mechanism",
    title: "Your System Under Pressure",
    description:
      "The mechanism most senior leaders never see - until it's already compounded. Map the equation your brain runs on every decision, and the three zones it operates in.",
    pubDate: new Date("2025-10-20"),
    readMinutes: 18,
    tag: "Mechanism",
  },
  {
    slug: "cost-of-handling-pressure-well",
    title: "The Cost of Handling Pressure Well",
    description:
      "What founders normalise that's quietly compounding. The variance, the mopping problem, and the pipe underneath your B-days.",
    pubDate: new Date("2026-06-01"),
    readMinutes: 5,
    tag: "Founder Notes",
  },
];

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
}

export function getLatestPosts(n: number): Post[] {
  return getAllPosts().slice(0, n);
}

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
}
