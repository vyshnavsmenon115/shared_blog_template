// Type declarations for CSS Modules

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.module.sass' {
    const classes: { [key: string]: string };
    export default classes;
}

// Optional: If you want to support regular CSS imports
declare module '*.css' {
    const content: { [key: string]: string };
    export default content;
}

declare module '*.scss' {
    const content: { [key: string]: string };
    export default content;
}