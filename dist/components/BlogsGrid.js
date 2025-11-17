'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import { UserRound } from 'lucide-react';
import styles from './BlogsGrid.module.css';
export default function BlogsGrid({ posts, selectedCategory, currentPage, totalPages, onPageChange, isSearchActive, searchQuery, basePath = '/hub', className = '', }) {
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
    // Format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };
    if (posts.length === 0) {
        return (_jsxs("div", { className: styles.noResults, children: [_jsx("h2", { children: "No posts found" }), isSearchActive && (_jsxs("p", { children: ["No results found for \"", searchQuery, "\". Try a different search term."] }))] }));
    }
    return (_jsxs("div", { className: `${styles.blogsSection} ${className}`, children: [isSearchActive && (_jsxs("div", { className: styles.searchResultsInfo, children: [_jsxs("h2", { children: ["Search Results for \"", searchQuery, "\""] }), _jsxs("p", { children: [posts.length, " post", posts.length !== 1 ? 's' : '', " found"] })] })), _jsx("div", { className: styles.blogsGrid, children: posts.map((post) => (_jsxs(Link, { href: `${basePath}/${post.slug}`, className: styles.blogCard, children: [post.featuredImage && (_jsx("div", { className: styles.blogImage, children: _jsx("img", { src: post.featuredImage, alt: post.title }) })), _jsxs("div", { className: styles.blogContent, children: [_jsx("div", { className: styles.blogMeta, children: post.categories.length > 0 && (_jsx("span", { className: styles.blogCategory, children: post.categories[0].name })) }), _jsx("h3", { className: styles.blogTitle, children: post.title }), _jsxs("div", { className: styles.author, children: [_jsx(UserRound, { className: styles.person }), post.author?.name] })] })] }, post.id))) }), showPagination && (_jsxs("div", { className: styles.pagination, children: [_jsx("button", { className: styles.paginationBtn, onClick: () => onPageChange(currentPage - 1), disabled: currentPage === 1, children: "Previous" }), _jsx("div", { className: styles.paginationNumbers, children: getPageNumbers().map((page, index) => {
                            if (page === '...') {
                                return (_jsx("span", { className: styles.paginationEllipsis, children: "..." }, `ellipsis-${index}`));
                            }
                            return (_jsx("button", { className: `${styles.paginationNumber} ${currentPage === page ? styles.active : ''}`, onClick: () => onPageChange(page), children: page }, page));
                        }) }), _jsx("button", { className: styles.paginationBtn, onClick: () => onPageChange(currentPage + 1), disabled: currentPage === totalPages, children: "Next" })] }))] }));
}
