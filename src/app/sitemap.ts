import type { MetadataRoute } from "next";

const SITE_URL = "https://extremecommerce.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/amazon-audit", changeFrequency: "weekly", priority: 0.95 },
    { path: "/elite", changeFrequency: "monthly", priority: 0.9 },
    { path: "/elite-tiktok", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services", changeFrequency: "monthly", priority: 0.85 },
    { path: "/services/launch-analytics", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/ppc-advertising", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/creative-listings", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/virtual-assistants", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/mentorship", changeFrequency: "monthly", priority: 0.8 },
    { path: "/ask-sunny-ali", changeFrequency: "monthly", priority: 0.75 },
    { path: "/how-it-works", changeFrequency: "monthly", priority: 0.7 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
    { path: "/apply", changeFrequency: "yearly", priority: 0.6 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
