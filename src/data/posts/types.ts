export interface BlogPost {
  slug: string;
  date: string;
  readTime: number;
  category: { es: string; en: string };
  title: { es: string; en: string };
  excerpt: { es: string; en: string };
  content: { es: string; en: string };
  gradient: string;
  icon: string;
  image?: string;
}
