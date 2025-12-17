'use client';
import React from 'react';
import BlogPostContent from '../BlogPostContent/BlogPostContent';
import styles from './BlogPostPage.module.css';
export default function BlogPostPage({ NavbarComponent, FooterComponent, CustomModelBannerComponent, post, searchQuery = '', onSearch, showFeaturedImage = true, ExtraComponent, showPopularPosts = true, popularPostLinks = [], }) {
    return (React.createElement("div", { className: styles.post },
        React.createElement(NavbarComponent, { searchQuery: searchQuery, onSearch: onSearch }),
        React.createElement(CustomModelBannerComponent, null),
        React.createElement("div", { className: styles.postPage },
            React.createElement(BlogPostContent, { post: post, showFeaturedImageOrNot: showFeaturedImage, popularPostLinks: popularPostLinks, showPopularPosts: showPopularPosts }),
            ExtraComponent && React.createElement(ExtraComponent, { post: post })),
        React.createElement(FooterComponent, null)));
}
