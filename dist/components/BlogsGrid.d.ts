import { BlogPost } from '../types';
interface BlogsGridProps {
    posts: BlogPost[];
    selectedCategory: string;
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    isSearchActive: boolean;
    searchQuery: string;
    basePath?: string;
    className?: string;
}
export default function BlogsGrid({ posts, selectedCategory, currentPage, totalPages, onPageChange, isSearchActive, searchQuery, basePath, className, }: BlogsGridProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BlogsGrid.d.ts.map