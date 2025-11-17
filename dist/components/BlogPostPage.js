'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import Navbar from './Navbar';
import styles from './blog_post_page.module.css';
export default function BlogPostPage({ config, post, searchBarComponent, footerComponent, bannerComponent, className = '', }) {
    const basePath = config.basePath || '/hub';
    // Format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };
    return (_jsxs("div", { className: `${styles.post} ${className}`, children: [_jsx(Navbar, { logo: config.logo, navLinks: config.navLinks, showDownloadButton: config.showDownloadButton, downloadButtonText: config.downloadButtonText, downloadButtonLink: config.downloadButtonLink, theme: "light", showSearchBar: config.hero.showSearchBar, searchBarComponent: searchBarComponent }), _jsxs("div", { className: styles.postPage, children: [_jsxs("div", { className: styles.blog, children: [_jsxs("div", { className: styles.blogPostPage, children: [_jsxs("div", { className: styles.blogPostHeader, children: [_jsx("h1", { className: styles.blogPostTitle, children: post.title }), _jsxs("div", { className: styles.blogPostMeta, children: [_jsx("time", { dateTime: post.date, children: formatDate(post.date) }), " |", _jsx("span", { children: post.author?.name })] }), post.featuredImage && (_jsx("div", { className: styles.blogPostFeaturedImage, children: _jsx("img", { src: post.featuredImage, alt: post.title, className: styles.featuredImage }) }))] }), _jsx("div", { className: styles.blogPostContent, dangerouslySetInnerHTML: { __html: post.content } })] }), config.popularPosts && config.popularPosts.length > 0 && (_jsxs("div", { className: styles.popularPosts, children: ["Popular Posts", config.popularPosts.map((popularPost) => (_jsx(Link, { href: `${basePath}/${popularPost.slug}`, className: styles.popularLinks, children: popularPost.title }, popularPost.slug)))] }))] }), bannerComponent && (_jsx("div", { className: styles.bannerWrapper, children: bannerComponent }))] }), footerComponent && (_jsx("div", { className: styles.footerWrapper, children: footerComponent }))] }));
}
