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

    CustomModelBannerComponent: React.ComponentType;

    // Post data from parent
    post: BlogPost;

    // Search state from parent
    searchQuery?: string;
    onSearch?: (query: string) => void;

    showFeaturedImage?: boolean;

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

export interface HeroContainerProps {
    // Required Components from parent
    NavbarComponent: React.ComponentType<{
        searchQuery?: string;
        showGetAppBtnDesktop?: boolean;
        showGetAppBtnMobile?: boolean;
        showSearchBar?: boolean;
        theme?: 'dark' | 'light';
        onSearch?: (query: string) => void;
    }>;

    // Optional Christmas Banner Component
    ChristmasBannerComponent?: React.ComponentType<{
        isVisible: boolean;
        onClose: () => void;
        className?: string;
        [key: string]: any;
    }>;

    // Content
    title1: string;
    title2: string;
    title3?: string;

    // Search state
    searchQuery?: string;

    showGetAppBtnDesktop?: boolean;
    showGetAppBtnMobile?: boolean;
    showSearchBar?: boolean;
    navbarTheme?: 'dark' | 'light';
    onSearch?: (query: string) => void;

    // Banner visibility control
    showChristmasBanner?: boolean;
    onChristmasBannerClose?: () => void;

    // Styling customization via className
    containerClassName?: string;
    headingContainerClassName?: string;
    title1ClassName?: string;
    title2ClassName?: string;
}