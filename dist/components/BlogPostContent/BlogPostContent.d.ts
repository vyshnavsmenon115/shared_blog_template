import React from 'react';
import { BlogPost } from '../../types';
interface BlogPostContentProps {
    post: BlogPost;
    LinkComponent?: React.ComponentType<{
        href: string;
        className?: string;
        children: React.ReactNode;
    }>;
    popularPostLinks?: Array<{
        href: string;
        title: string;
    }>;
    showPopularPosts?: boolean;
    showFeaturedImageOrNot?: boolean;
}
export default function BlogPostContent({ post, LinkComponent, popularPostLinks, showPopularPosts, showFeaturedImageOrNot, }: BlogPostContentProps): React.JSX.Element;
export {};
//# sourceMappingURL=BlogPostContent.d.ts.map