'use client';
import React from 'react';
import { formatDate } from '../../utils/blogUtils';
import styles from './BlogPostContent.module.css';
// Default Link component
const DefaultLink = ({ href, className, children }) => (React.createElement("a", { href: href, className: className }, children));
export default function BlogPostContent({ post, LinkComponent = DefaultLink, popularPostLinks = [], showPopularPosts = true, showFeaturedImageOrNot, }) {
    return (React.createElement("div", { className: styles.blog },
        React.createElement("div", { className: styles.blogPostPage },
            React.createElement("div", { className: styles.blogPostHeader },
                React.createElement("h1", { className: styles.blogPostTitle }, post.title),
                React.createElement("div", { className: styles.blogPostMeta },
                    React.createElement("time", { dateTime: post.date }, formatDate(post.date)),
                    post.author && (React.createElement(React.Fragment, null,
                        React.createElement("span", null, "|"),
                        React.createElement("span", null, post.author.name)))),
                showFeaturedImageOrNot && post.featuredImage && (React.createElement("div", { className: styles.blogPostFeaturedImage },
                    React.createElement("img", { src: post.featuredImage, alt: post.title, className: styles.featuredImage })))),
            React.createElement("div", { className: styles.blogPostContent, dangerouslySetInnerHTML: { __html: post.content } })),
        showPopularPosts && popularPostLinks.length > 0 && (React.createElement("div", { className: styles.popularPosts },
            React.createElement("div", { className: styles.popularPostsTitle }, "Popular Posts"),
            popularPostLinks.map((link, index) => (React.createElement(LinkComponent, { key: index, href: link.href, className: styles.popularLinks }, link.title)))))));
}
