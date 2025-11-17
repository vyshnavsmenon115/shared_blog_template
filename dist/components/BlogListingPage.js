'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import HeroContainer from './HeroContainer';
import CategoriesSection from './CategoresSection';
import BlogsGrid from './BlogsGrid';
import styles from './BlogListingPage.module.css';
export default function BlogListingPage({ config, posts, allCategories, initialSearchQuery = '', initialPage = 1, onPageChange, onCategoryChange, searchBarComponent, footerComponent, bannerComponent, className = '', }) {
    const [selectedCategory, setSelectedCategory] = useState('Latest');
    const [currentPage, setCurrentPage] = useState(initialPage);
    const postsPerPage = config.postsPerPage || 51;
    // Filter posts by category
    const filterPostsByCategory = (postsToFilter, categoryName) => {
        if (categoryName === 'Latest') {
            return [...postsToFilter].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        }
        return postsToFilter.filter(post => post.categories.some(cat => cat.name.toLowerCase() === categoryName.toLowerCase()));
    };
    const filteredPosts = useMemo(() => {
        return filterPostsByCategory(posts, selectedCategory);
    }, [posts, selectedCategory]);
    const paginatedPosts = useMemo(() => {
        if (selectedCategory === 'Latest' && !initialSearchQuery) {
            const startIndex = (currentPage - 1) * postsPerPage;
            const endIndex = startIndex + postsPerPage;
            return filteredPosts.slice(startIndex, endIndex);
        }
        return filteredPosts;
    }, [filteredPosts, selectedCategory, currentPage, initialSearchQuery, postsPerPage]);
    const totalPages = useMemo(() => {
        if (selectedCategory === 'Latest' && !initialSearchQuery) {
            return Math.ceil(filteredPosts.length / postsPerPage);
        }
        return 1;
    }, [filteredPosts.length, selectedCategory, initialSearchQuery, postsPerPage]);
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        if (onCategoryChange) {
            onCategoryChange(category);
        }
    };
    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 400, behavior: 'smooth' });
        if (onPageChange) {
            onPageChange(page);
        }
    };
    return (_jsxs("div", { className: `${styles.mainContainer} ${className}`, children: [_jsx(HeroContainer, { logo: config.logo, navLinks: config.navLinks, title1: config.hero.title1, title2: config.hero.title2, subTitle: config.hero.subTitle, showDownloadButton: config.showDownloadButton, downloadButtonText: config.downloadButtonText, downloadButtonLink: config.downloadButtonLink, showSearchBar: config.hero.showSearchBar, searchBarComponent: searchBarComponent, bannerComponent: bannerComponent }), _jsxs("div", { className: styles.hubContent, children: [_jsx(CategoriesSection, { categories: config.categories, selectedCategory: selectedCategory, onCategoryChange: handleCategoryChange }), _jsx(BlogsGrid, { posts: paginatedPosts, selectedCategory: selectedCategory, currentPage: currentPage, totalPages: totalPages, onPageChange: handlePageChange, isSearchActive: !!initialSearchQuery, searchQuery: initialSearchQuery, basePath: config.basePath })] }), footerComponent && (_jsx("div", { className: styles.footerWrapper, children: footerComponent }))] }));
}
