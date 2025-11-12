'use client';

import Link from 'next/link';
import { NavLink } from '../types';
import styles from './Navbar.module.css';

interface NavbarProps {
  logo?: {
    type: 'text' | 'image';
    content: string;
    href?: string;
  };
  navLinks?: NavLink[];
  showDownloadButton?: boolean;
  downloadButtonText?: string;
  downloadButtonLink?: string;
  theme?: 'light' | 'dark';
  showSearchBar?: boolean;
  searchBarComponent?: React.ReactNode;
  className?: string;
}

export default function Navbar({
  logo,
  navLinks = [],
  showDownloadButton = false,
  downloadButtonText = 'Get App',
  downloadButtonLink = '#',
  theme = 'dark',
  showSearchBar = false,
  searchBarComponent,
  className = '',
}: NavbarProps) {
  return (
    <nav className={`${styles.navbar} ${styles[theme]} ${className}`}>
      <div className={styles.navbarContent}>
        {/* Logo */}
        {logo && (
          <Link href={logo.href || '/'} className={styles.logo}>
            {logo.type === 'image' ? (
              <img src={logo.content} alt="Logo" className={styles.logoImage} />
            ) : (
              <span className={styles.logoText}>{logo.content}</span>
            )}
          </Link>
        )}

        {/* Desktop Nav Links */}
        {navLinks.length > 0 && (
          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Search Bar and Download Button Container */}
        <div className={styles.rightSection}>
          {/* Search Bar */}
          {showSearchBar && searchBarComponent && (
            <div className={styles.searchBarWrapper}>
              {searchBarComponent}
            </div>
          )}

          {/* Download Button - Desktop */}
          {showDownloadButton && (
            <Link href={downloadButtonLink} className={`${styles.downloadBtn} ${styles.desktopOnly}`}>
              {downloadButtonText}
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Nav Links */}
      {navLinks.length > 0 && (
        <div className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.mobileNavLink}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}