'use client';
import React, { useEffect, useState } from 'react';
import styles from './HeroContainer.module.css';
export default function HeroContainer({ NavbarComponent, ChristmasBannerComponent, title1, title2, title3, searchQuery = '', containerClassName = '', headingContainerClassName = '', title1ClassName = '', title2ClassName = '', showChristmasBanner = false, onChristmasBannerClose, }) {
    const [isBannerVisible, setIsBannerVisible] = useState(showChristmasBanner);
    useEffect(() => {
        setIsBannerVisible(showChristmasBanner);
    }, [showChristmasBanner]);
    const handleBannerClose = () => {
        setIsBannerVisible(false);
        if (onChristmasBannerClose) {
            onChristmasBannerClose();
        }
    };
    return (React.createElement("div", { className: `${styles.hubHeroContainer} ${isBannerVisible ? styles.christmasBannerVisible : ''} ${containerClassName}` },
        React.createElement(NavbarComponent, { searchQuery: searchQuery }),
        ChristmasBannerComponent && isBannerVisible && (React.createElement(ChristmasBannerComponent, { isVisible: isBannerVisible, onClose: handleBannerClose })),
        React.createElement("div", { className: `${styles.hubMainHeading} ${headingContainerClassName}` },
            React.createElement("div", null,
                React.createElement("span", { className: title1ClassName }, title1),
                React.createElement("br", null),
                React.createElement("span", { className: title1ClassName }, title2)),
            title3 && (React.createElement("div", { className: `${styles.hubSubHeading} ${title2ClassName}` }, title3)))));
}
