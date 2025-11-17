import { BlogPost, BlogTemplateConfig } from '../types';
interface BlogPostPageProps {
    config: BlogTemplateConfig;
    post: BlogPost;
    searchBarComponent?: React.ReactNode;
    footerComponent?: React.ReactNode;
    bannerComponent?: React.ReactNode;
    className?: string;
}
export default function BlogPostPage({ config, post, searchBarComponent, footerComponent, bannerComponent, className, }: BlogPostPageProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BlogPostPage.d.ts.map