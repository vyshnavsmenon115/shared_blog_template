'use client';

import React, { useEffect, useState } from 'react';
import { HeroContainerProps } from '../../types';
import styles from './HeroContainer.module.css';

export default function HeroContainer({
    NavbarComponent,
    ChristmasBannerComponent,
    title1,
    title2,
    title3,
    searchQuery = '',
    containerClassName = '',
    headingContainerClassName = '',
    title1ClassName = '',
    title2ClassName = '',
    showChristmasBanner = false,
    onChristmasBannerClose,
}: HeroContainerProps) {
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

    return (
        <div
            className={`${styles.hubHeroContainer} ${isBannerVisible ? styles.christmasBannerVisible : ''
                } ${containerClassName}`}
        >
            <NavbarComponent searchQuery={searchQuery} />

            {ChristmasBannerComponent && isBannerVisible && (
                <ChristmasBannerComponent
                    isVisible={isBannerVisible}
                    onClose={handleBannerClose}
                />
            )}

            <div className={`${styles.hubMainHeading} ${headingContainerClassName}`}>
                <div>
                    <span className={title1ClassName}>{title1}</span><br />
                    <span className={title1ClassName}>{title2}</span>
                </div>
                {title3 && (
                    <div className={`${styles.hubSubHeading} ${title2ClassName}`}>
                        {title3}
                    </div>
                )}
            </div>
        </div>
    );
}