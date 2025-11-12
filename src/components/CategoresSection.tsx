'use client';

import styles from './categories_section.module.css';

interface CategoriesSectionProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

export default function CategoriesSection({
  categories,
  selectedCategory,
  onCategoryChange,
  className = '',
}: CategoriesSectionProps) {
  return (
    <div className={`${styles.categoriesSection} ${className}`}>
      <div className={styles.categoriesContainer}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}