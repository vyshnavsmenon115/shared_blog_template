'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import styles from './categories_section.module.css';
export default function CategoriesSection({ categories, selectedCategory, onCategoryChange, className = '', }) {
    return (_jsx("div", { className: `${styles.categoriesSection} ${className}`, children: _jsx("div", { className: styles.categoriesContainer, children: categories.map((category) => (_jsx("button", { className: `${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`, onClick: () => onCategoryChange(category), children: category }, category))) }) }));
}
