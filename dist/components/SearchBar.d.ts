interface SearchBarProps {
    initialQuery?: string;
    theme?: 'light' | 'dark';
    className?: string;
    onSearch: (query: string) => void;
    placeholder?: string;
}
export default function SearchBar({ initialQuery, theme, onSearch, className, placeholder }: SearchBarProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SearchBar.d.ts.map