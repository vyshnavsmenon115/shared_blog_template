'use client';

import React from 'react';
import { BlogsGridProps } from '../../types';
import { formatDate, stripHtml } from '../../utils/blogUtils';
import styles from './BlogsGrid.module.css';

// Default Link component for non-Next.js projects
const DefaultLink: React.FC<{ href: string; className?: string; children: React.ReactNode }> = ({
    href,
    className,
    children
}) => (
    <a href={href} className={className}>
        {children}
    </a>
);

export default function BlogsGrid({
    posts,
    selectedCategory,
    currentPage,
    totalPages,
    onPageChange,
    isSearchActive,
    searchQuery,
    LinkComponent = DefaultLink,
}: BlogsGridProps) {
    const showPagination = selectedCategory === 'Latest' && !isSearchActive && totalPages > 1;

    // Generate page numbers for pagination
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxVisible = 7;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
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
        return (
            <div className={styles.noResults}>
                <h2>No posts found</h2>
                {isSearchActive && (
                    <p>No results found for &quot;{searchQuery}&quot;. Try a different search term.</p>
                )}
            </div>
        );
    }

    return (
        <div className={styles.blogsSection}>
            {isSearchActive && (
                <div className={styles.searchResultsInfo}>
                    <h2>Search Results for &quot;{searchQuery}&quot;</h2>
                    <p>{posts.length} post{posts.length !== 1 ? 's' : ''} found</p>
                </div>
            )}

            <div className={styles.blogsGrid}>
                {posts.map((post) => (
                    <LinkComponent href={`/hub/${post.slug}`} key={post.id} className={styles.blogCard}>
                        <>
                            {post.featuredImage && (
                                <div className={styles.blogImage}>
                                    <img src={post.featuredImage} alt={post.title} />
                                </div>
                            )}
                            <div className={styles.blogContent}>
                                <div className={styles.blogMeta}>
                                    {post.categories.length > 0 && (
                                        <span className={styles.blogCategory}>{post.categories[0].name}</span>
                                    )}
                                </div>
                                <h3 className={styles.blogTitle}>{post.title}</h3>
                                {post.author && (
                                    <div className={styles.author}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className={styles.person}
                                        >
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        {post.author.name}
                                    </div>
                                )}
                            </div>
                        </>
                    </LinkComponent>
                ))}
            </div>

            {showPagination && (
                <div className={styles.pagination}>
                    <button
                        className={styles.paginationBtn}
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>

                    <div className={styles.paginationNumbers}>
                        {getPageNumbers().map((page, index) => {
                            if (page === '...') {
                                return (
                                    <span key={`ellipsis-${index}`} className={styles.paginationEllipsis}>
                                        ...
                                    </span>
                                );
                            }

                            return (
                                <button
                                    key={page}
                                    className={`${styles.paginationNumber} ${currentPage === page ? styles.active : ''}`}
                                    onClick={() => onPageChange(page as number)}
                                >
                                    {page}
                                </button>
                            );
                        })}
                    </div>

                    <button
                        className={styles.paginationBtn}
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}