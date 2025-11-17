// Type definitions for shared blog template module

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

export interface HomePageProps {
    // Components from parent
    HeroComponent: React.ComponentType<{ searchQuery?: string }>;
    FooterComponent: React.ComponentType;

    // Data from parent
    posts: BlogPost[];
    categories: WPCategory[];

    // Search state from parent
    searchQuery?: string;

    // Pagination from parent
    currentPage?: number;

    // Optional customization
    postsPerPage?: number;
    categoryNames?: string[];

    // Optional extra component
    ExtraComponent?: React.ComponentType;
}

export interface BlogPostPageProps {
    // Components from parent
    NavbarComponent: React.ComponentType<{
        searchQuery?: string;
        onSearch?: (query: string) => void;
    }>;
    FooterComponent: React.ComponentType;

    // Post data from parent
    post: BlogPost;

    // Search state from parent
    searchQuery?: string;
    onSearch?: (query: string) => void;

    // Optional extra component (e.g., popular posts, related posts)
    ExtraComponent?: React.ComponentType<{ post?: BlogPost }>;

    // Optional customization
    showPopularPosts?: boolean;
    popularPostLinks?: Array<{
        href: string;
        title: string;
    }>;
}

export interface BlogsGridProps {
    posts: BlogPost[];
    selectedCategory: string;
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    isSearchActive: boolean;
    searchQuery: string;
    LinkComponent?: React.ComponentType<{ href: string; className?: string; children: React.ReactNode }>;
}

export interface CategoriesSectionProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}