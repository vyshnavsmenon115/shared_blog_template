import { NavLink } from '../types';
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
export default function HeroContainer({ logo, navLinks, title1, title2, subTitle, showDownloadButton, downloadButtonText, downloadButtonLink, showSearchBar, searchBarComponent, bannerComponent, className, }: HeroContainerProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=HeroContainer.d.ts.map