import { NavLink } from '../types';
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
export default function Navbar({ logo, navLinks, showDownloadButton, downloadButtonText, downloadButtonLink, theme, showSearchBar, searchBarComponent, className, }: NavbarProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Navbar.d.ts.map