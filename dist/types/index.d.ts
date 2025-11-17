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
    logo?: {
        type: 'text' | 'image';
        content: string;
        href?: string;
    };
    navLinks?: NavLink[];
    hero: {
        title1: string;
        title2?: string;
        subTitle?: string;
        showSearchBar?: boolean;
    };
    showDownloadButton?: boolean;
    downloadButtonText?: string;
    downloadButtonLink?: string;
    categories: string[];
    popularPosts?: {
        title: string;
        slug: string;
    }[];
    basePath?: string;
    footerContent?: React.ReactNode;
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
//# sourceMappingURL=index.d.ts.map