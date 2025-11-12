'use client';

import { Search } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import styles from './search_bar.module.css';

interface SearchBarProps {
  initialQuery?: string;
  theme?: 'light' | 'dark';
  className?: string;
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchBar({ 
  initialQuery = '', 
  theme = 'dark', 
  onSearch, 
  className = '',
  placeholder = 'Search'
}: SearchBarProps) {
  const [searchValue, setSearchValue] = useState(initialQuery);
  const [isExpanded, setIsExpanded] = useState(!!initialQuery);
  const [isMobile, setIsMobile] = useState(false);
  const searchBarRef = useRef<HTMLFormElement>(null);

  // Check if device is mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update local state when initialQuery changes
  useEffect(() => {
    setSearchValue(initialQuery);
    setIsExpanded(!!initialQuery || isMobile);
  }, [initialQuery, isMobile]);

  // Handle click outside to collapse (only on desktop)
  useEffect(() => {
    if (isMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        if (searchValue.trim() === '') {
          setIsExpanded(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchValue, isMobile]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = searchValue.trim();
    onSearch(query);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchValue(newValue);

    // If field is cleared, trigger search with empty query
    if (newValue.trim() === '') {
      onSearch('');
    }
  };

  const handleIconClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // On mobile/tablet, always just search
    if (isMobile) {
      const formElement = searchBarRef.current;
      if (formElement) {
        formElement.requestSubmit();
      }
      return;
    }

    // Desktop behavior
    if (!isExpanded) {
      setIsExpanded(true);
    } else if (searchValue.trim() === '') {
      setIsExpanded(false);
    } else {
      const formElement = searchBarRef.current;
      if (formElement) {
        formElement.requestSubmit();
      }
    }
  };

  return (
    <form
      ref={searchBarRef}
      onSubmit={handleSearch}
      className={`${styles.searchBar} ${!isExpanded && !isMobile ? styles.collapsed : ''} ${className}`}
    >
      <input
        type="search"
        className={`${styles.searchField} ${!isExpanded && !isMobile ? styles.collapsed : ''} ${styles[theme]}`}
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
        autoFocus={!isMobile && isExpanded}
      />
      <button
        type="button"
        className={`${styles.searchIconContainer} ${!isExpanded && !isMobile ? styles.collapsed : ''}`}
        onClick={handleIconClick}
      >
        <Search className={styles.searchIcon} />
      </button>
      <div 
        className={`${styles.searchIconWrapper} ${styles[theme]} ${isExpanded || isMobile ? styles.hidden : ''}`} 
        onClick={handleIconClick}
      >
        <Search className={styles.searchIcon} />
      </div>
    </form>
  );
}