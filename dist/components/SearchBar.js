'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Search } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import styles from './SearchBar.module.css';
export default function SearchBar({ initialQuery = '', theme = 'dark', onSearch, className = '', placeholder = 'Search' }) {
    const [searchValue, setSearchValue] = useState(initialQuery);
    const [isExpanded, setIsExpanded] = useState(!!initialQuery);
    const [isMobile, setIsMobile] = useState(false);
    const searchBarRef = useRef(null);
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
        if (isMobile)
            return;
        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                if (searchValue.trim() === '') {
                    setIsExpanded(false);
                }
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [searchValue, isMobile]);
    const handleSearch = (e) => {
        e.preventDefault();
        const query = searchValue.trim();
        onSearch(query);
    };
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setSearchValue(newValue);
        // If field is cleared, trigger search with empty query
        if (newValue.trim() === '') {
            onSearch('');
        }
    };
    const handleIconClick = (e) => {
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
        }
        else if (searchValue.trim() === '') {
            setIsExpanded(false);
        }
        else {
            const formElement = searchBarRef.current;
            if (formElement) {
                formElement.requestSubmit();
            }
        }
    };
    return (_jsxs("form", { ref: searchBarRef, onSubmit: handleSearch, className: `${styles.searchBar} ${!isExpanded && !isMobile ? styles.collapsed : ''} ${className}`, children: [_jsx("input", { type: "search", className: `${styles.searchField} ${!isExpanded && !isMobile ? styles.collapsed : ''} ${styles[theme]}`, placeholder: placeholder, value: searchValue, onChange: handleInputChange, autoFocus: !isMobile && isExpanded }), _jsx("button", { type: "button", className: `${styles.searchIconContainer} ${!isExpanded && !isMobile ? styles.collapsed : ''}`, onClick: handleIconClick, children: _jsx(Search, { className: styles.searchIcon }) }), _jsx("div", { className: `${styles.searchIconWrapper} ${styles[theme]} ${isExpanded || isMobile ? styles.hidden : ''}`, onClick: handleIconClick, children: _jsx(Search, { className: styles.searchIcon }) })] }));
}
