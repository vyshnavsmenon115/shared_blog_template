// Type definitions for the blog template

export interface WPCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  modifiedDate: string;
  featuredImage?: string;
  categories: WPCategory[];
  author?: {
    name: string;
    avatar: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}

export interface BlogTemplateConfig {
  // Logo - can be text or image
  logo?: {
    type: 'text' | 'image';
    content: string; // text string or image URL
    href?: string;
  };
  
  // Navigation links
  navLinks?: NavLink[];
  
  // Hero section content
  hero: {
    title1: string;
    title2?: string;
    subTitle?: string;
    showSearchBar?: boolean;
  };
  
  // Show/hide download app button
  showDownloadButton?: boolean;
  downloadButtonText?: string;
  downloadButtonLink?: string;
  
  // Category configuration
  categories: string[];
  
  // Popular posts for sidebar (blog post page)
  popularPosts?: {
    title: string;
    slug: string;
  }[];
  
  // Base path for blog routes
  basePath?: string; // e.g., '/hub' or '/blog'
  
  // Optional: Custom footer content
  footerContent?: React.ReactNode;
  
  // Pagination
  postsPerPage?: number;
}

export interface BlogListingPageProps {
  config: BlogTemplateConfig;
  posts: BlogPost[];
  allCategories: WPCategory[];
  initialSearchQuery?: string;
  initialPage?: number;
  onSearch?: (query: string) => void;
}

export interface BlogPostPageProps {
  config: BlogTemplateConfig;
  post: BlogPost;
  onSearch?: (query: string) => void;
}