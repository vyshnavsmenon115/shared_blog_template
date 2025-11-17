'use client';

import React from 'react';
import { BlogPostPageProps } from '../../types';
import BlogPostContent from '../BlogPostContent/BlogPostContent';
import styles from './BlogPostPage.module.css';

export default function BlogPostPage({
    NavbarComponent,
    FooterComponent,
    post,
    searchQuery = '',
    onSearch,
    showFeaturedImage = true,
    ExtraComponent,
    showPopularPosts = true,
    popularPostLinks = [],
}: BlogPostPageProps) {
    return (
        <div className={styles.post}>
            <NavbarComponent searchQuery={searchQuery} onSearch={onSearch} />

            <div className={styles.postPage}>
                <BlogPostContent
                    post={post}
                    showFeaturedImageOrNot={showFeaturedImage}
                    popularPostLinks={popularPostLinks}
                    showPopularPosts={showPopularPosts}
                />

                {ExtraComponent && <ExtraComponent post={post} />}
            </div>

            <FooterComponent />
        </div>
    );
}