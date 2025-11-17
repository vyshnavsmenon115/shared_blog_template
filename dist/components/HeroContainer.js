'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from './Navbar';
import styles from './HeroContainer.module.css;;
export default function HeroContainer({ logo, navLinks, title1, title2, subTitle, showDownloadButton, downloadButtonText, downloadButtonLink, showSearchBar, searchBarComponent, bannerComponent, className = '', }) {
    return (_jsxs("div", { className: `${styles.heroContainer} ${className}`, children: [_jsx(Navbar, { logo: logo, navLinks: navLinks, showDownloadButton: showDownloadButton, downloadButtonText: downloadButtonText, downloadButtonLink: downloadButtonLink, theme: "dark", showSearchBar: showSearchBar, searchBarComponent: searchBarComponent }), bannerComponent && (_jsx("div", { className: styles.bannerWrapper, children: bannerComponent })), _jsxs("div", { className: styles.mainHeading, children: [title1, title2 && (_jsxs(_Fragment, { children: [' ', _jsx("br", {}), " ", title2] })), subTitle && (_jsx("div", { className: styles.subHeading, children: subTitle }))] })] }));
}
