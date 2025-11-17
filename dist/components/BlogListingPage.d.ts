import { BlogPost, WPCategory, BlogTemplateConfig } from '../types';
interface BlogListingPageProps {
    config: BlogTemplateConfig;
    posts: BlogPost[];
    allCategories: WPCategory[];
    initialSearchQuery?: string;
    initialPage?: number;
    onPageChange?: (page: number) => void;
    onCategoryChange?: (category: string) => void;
    searchBarComponent?: React.ReactNode;
    footerComponent?: React.ReactNode;
    bannerComponent?: React.ReactNode;
    className?: string;
}
export default function BlogListingPage({ config, posts, allCategories, initialSearchQuery, initialPage, onPageChange, onCategoryChange, searchBarComponent, footerComponent, bannerComponent, className, }: BlogListingPageProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BlogListingPage.d.ts.map