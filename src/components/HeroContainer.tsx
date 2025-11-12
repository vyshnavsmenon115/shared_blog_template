'use client';

import Navbar from './Navbar';
import { NavLink } from '../types';
import styles from './hero_container.css';

interface HeroContainerProps {
  logo?: {
    type: 'text' | 'image';
    content: string;
    href?: string;
  };
  navLinks?: NavLink[];
  title1: string;
  title2?: string;
  subTitle?: string;
  showDownloadButton?: boolean;
  downloadButtonText?: string;
  downloadButtonLink?: string;
  showSearchBar?: boolean;
  searchBarComponent?: React.ReactNode;
  bannerComponent?: React.ReactNode;
  className?: string;
}

export default function HeroContainer({
  logo,
  navLinks,
  title1,
  title2,
  subTitle,
  showDownloadButton,
  downloadButtonText,
  downloadButtonLink,
  showSearchBar,
  searchBarComponent,
  bannerComponent,
  className = '',
}: HeroContainerProps) {
  return (
    <div className={`${styles.heroContainer} ${className}`}>
      <Navbar
        logo={logo}
        navLinks={navLinks}
        showDownloadButton={showDownloadButton}
        downloadButtonText={downloadButtonText}
        downloadButtonLink={downloadButtonLink}
        theme="dark"
        showSearchBar={showSearchBar}
        searchBarComponent={searchBarComponent}
      />
      
      {bannerComponent && (
        <div className={styles.bannerWrapper}>
          {bannerComponent}
        </div>
      )}
      
      <div className={styles.mainHeading}>
        {title1}
        {title2 && (
          <>
            {' '}<br /> {title2}
          </>
        )}
        {subTitle && (
          <div className={styles.subHeading}>
            {subTitle}
          </div>
        )}
      </div>
    </div>
  );
}