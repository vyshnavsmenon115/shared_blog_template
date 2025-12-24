'use client';
import React from 'react';
import styles from './BlogsGrid.module.css';
// Default Link component for non-Next.js projects
const DefaultLink = ({ href, className, children, onClick }) => (React.createElement("a", { href: href, className: className, onClick: onClick }, children));
export default function BlogsGrid({ posts, selectedCategory, currentPage, totalPages, onPageChange, onBlogClick, isSearchActive, searchQuery, LinkComponent = DefaultLink, }) {
    const showPagination = selectedCategory === 'Latest' && !isSearchActive && totalPages > 1;
    // Generate page numbers for pagination
    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 7;
        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        }
        else {
            pages.push(1);
            if (currentPage > 3) {
                pages.push('...');
            }
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
            if (currentPage < totalPages - 2) {
                pages.push('...');
            }
            pages.push(totalPages);
        }
        return pages;
    };
    if (posts.length === 0) {
        return (React.createElement("div", { className: styles.noResults },
            React.createElement("h2", null, "No posts found"),
            isSearchActive && (React.createElement("p", null,
                "No results found for \"",
                searchQuery,
                "\". Try a different search term."))));
    }
    return (React.createElement("div", { className: styles.blogsSection },
        isSearchActive && (React.createElement("div", { className: styles.searchResultsInfo },
            React.createElement("h2", null,
                "Search Results for \"",
                searchQuery,
                "\""),
            React.createElement("p", null,
                posts.length,
                " post",
                posts.length !== 1 ? 's' : '',
                " found"))),
        React.createElement("div", { className: styles.blogsGrid }, posts.map((post) => (React.createElement(LinkComponent, { href: `/hub/${post.slug}`, key: post.id, className: styles.blogCard, onClick: () => onBlogClick?.(post) },
            React.createElement(React.Fragment, null,
                post.featuredImage && (React.createElement("div", { className: styles.blogImage },
                    React.createElement("img", { src: post.featuredImage, alt: post.title }))),
                React.createElement("div", { className: styles.blogContent },
                    React.createElement("div", { className: styles.blogMeta }, post.categories.length > 0 && (React.createElement("span", { className: styles.blogCategory }, post.categories[0].name))),
                    React.createElement("h3", { className: styles.blogTitle }, post.title),
                    post.author && (React.createElement("div", { className: styles.author },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: styles.person },
                            React.createElement("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
                            React.createElement("circle", { cx: "12", cy: "7", r: "4" })),
                        post.author.name)))))))),
        showPagination && (React.createElement("div", { className: styles.pagination },
            React.createElement("button", { className: styles.paginationBtn, onClick: () => onPageChange(currentPage - 1), disabled: currentPage === 1 }, "Previous"),
            React.createElement("div", { className: styles.paginationNumbers }, getPageNumbers().map((page, index) => {
                if (page === '...') {
                    return (React.createElement("span", { key: `ellipsis-${index}`, className: styles.paginationEllipsis }, "..."));
                }
                return (React.createElement("button", { key: page, className: `${styles.paginationNumber} ${currentPage === page ? styles.active : ''}`, onClick: () => onPageChange(page) }, page));
            })),
            React.createElement("button", { className: styles.paginationBtn, onClick: () => onPageChange(currentPage + 1), disabled: currentPage === totalPages }, "Next")))));
}
