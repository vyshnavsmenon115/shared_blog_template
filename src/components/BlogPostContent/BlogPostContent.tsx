'use client';

import React from 'react';
import { BlogPost } from '../../types';
import { formatDate } from '../../utils/blogUtils';
import styles from './BlogPostContent.module.css';

interface BlogPostContentProps {
    post: BlogPost;
    LinkComponent?: React.ComponentType<{ href: string; className?: string; children: React.ReactNode }>;
    popularPostLinks?: Array<{
        href: string;
        title: string;
    }>;
    showPopularPosts?: boolean;
}

// Default Link component
const DefaultLink: React.FC<{ href: string; className?: string; children: React.ReactNode }> = ({
    href,
    className,
    children
}) => (
    <a href={href} className={className}>
        {children}
    </a>
);

export default function BlogPostContent({
    post,
    LinkComponent = DefaultLink,
    popularPostLinks = [],
    showPopularPosts = true,
}: BlogPostContentProps) {
    return (
        <div className={styles.blog}>
            <div className={styles.blogPostPage}>
                <div className={styles.blogPostHeader}>
                    <h1 className={styles.blogPostTitle}>{post.title}</h1>

                    <div className={styles.blogPostMeta}>
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        {post.author && (
                            <>
                                <span>|</span>
                                <span>{post.author.name}</span>
                            </>
                        )}
                    </div>

                    {post.featuredImage && (
                        <div className={styles.blogPostFeaturedImage}>
                            <img src={post.featuredImage} alt={post.title} className={styles.featuredImage} />
                        </div>
                    )}
                </div>

                <div
                    className={styles.blogPostContent}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>

            {showPopularPosts && popularPostLinks.length > 0 && (
                <div className={styles.popularPosts}>
                    <div className={styles.popularPostsTitle}>Popular Posts</div>
                    {popularPostLinks.map((link, index) => (
                        <LinkComponent key={index} href={link.href} className={styles.popularLinks}>
                            {link.title}
                        </LinkComponent>
                    ))}
                </div>
            )}
        </div>
    );
}