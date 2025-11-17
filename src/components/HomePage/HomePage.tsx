'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { HomePageProps } from '../../types';
import { filterPostsByCategory, searchPosts, paginateItems, getTotalPages } from '../../utils/blogUtils';
import CategoriesSection from '../CategoriesSection/CategoriesSection';
import BlogsGrid from '../BlogsGrid/BlogsGrid';
import styles from './HomePage.module.css';

const DEFAULT_CATEGORY_NAMES = [
    'Latest',
    'App Features',
    'Comparison Guide',
    'FAQ',
    'How to guide',
    'Real world integrations',
    'Tutorials',
];

export default function HomePage({
    HeroComponent,
    FooterComponent,
    posts,
    categories,
    searchQuery = '',
    currentPage = 1,
    postsPerPage = 51,
    categoryNames = DEFAULT_CATEGORY_NAMES,
    ExtraComponent,
}: HomePageProps) {
    const [selectedCategory, setSelectedCategory] = useState('Latest');
    const [page, setPage] = useState(currentPage);

    // Reset page when search or category changes
    useEffect(() => {
        setPage(1);
    }, [selectedCategory, searchQuery]);

    // Update page state when prop changes
    useEffect(() => {
        setPage(currentPage);
    }, [currentPage]);

    // Filter and search posts
    const filteredPosts = useMemo(() => {
        let result = posts;

        // Apply search if query exists
        if (searchQuery) {
            result = searchPosts(result, searchQuery);
        }

        // Apply category filter
        result = filterPostsByCategory(result, selectedCategory);

        return result;
    }, [posts, selectedCategory, searchQuery]);

    // Paginate posts (only for 'Latest' category without search)
    const paginatedPosts = useMemo(() => {
        if (selectedCategory === 'Latest' && !searchQuery) {
            return paginateItems(filteredPosts, page, postsPerPage);
        }

        return filteredPosts;
    }, [filteredPosts, selectedCategory, page, postsPerPage, searchQuery]);

    // Calculate total pages
    const totalPages = useMemo(() => {
        if (selectedCategory === 'Latest' && !searchQuery) {
            return getTotalPages(filteredPosts.length, postsPerPage);
        }
        return 1;
    }, [filteredPosts.length, selectedCategory, postsPerPage, searchQuery]);

    // Get available categories (filter by ones that have posts)
    const availableCategories = useMemo(() => {
        return categoryNames.filter(catName => {
            if (catName === 'Latest') return true;

            return categories.some(cat =>
                cat.name.toLowerCase() === catName.toLowerCase()
            );
        });
    }, [categories, categoryNames]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        // Scroll to top of content
        window.scrollTo({ top: 400, behavior: 'smooth' });
    };

    return (
        <div className={styles.mainContainer}>
            <HeroComponent searchQuery={searchQuery} />

            <div className={styles.content}>
                <CategoriesSection
                    categories={availableCategories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />

                <BlogsGrid
                    posts={paginatedPosts}
                    selectedCategory={selectedCategory}
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    isSearchActive={!!searchQuery}
                    searchQuery={searchQuery}
                />

                {ExtraComponent && <ExtraComponent />}
            </div>

            <FooterComponent />
        </div>
    );
}