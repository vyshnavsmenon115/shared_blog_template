# Shared Blog Template

A reusable, customizable blog template module for Next.js applications. This module provides pre-built components for creating beautiful blog listing pages and individual blog post pages.

## Features

- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Customizable styling through CSS modules
- 🔍 Built-in search functionality
- 📑 Category filtering
- 📄 Pagination support
- ⚡ Built with Next.js and TypeScript
- 🎯 Props-based configuration (host handles data/API)

## Installation

### 1. Install from GitHub

Add this to your `package.json`:

```json
{
  "dependencies": {
    "shared-blog-template": "github:your-username/shared-blog-template"
  }
}
```

Or install directly:

```bash
npm install github:your-username/shared-blog-template
```

### 2. Install Peer Dependencies

```bash
npm install lucide-react
```

## Usage

### Blog Listing Page

```tsx
// app/hub/page.tsx
import { BlogListingPage, SearchBar } from 'shared-blog-template';
import { fetchAllPosts, fetchCategories } from './utility/utility_function';

export default async function ResourceHub({ searchParams }) {
  const params = await searchParams;
  const searchQuery = params.s || '';
  const currentPage = parseInt(params.page || '1', 10);

  // Fetch your data
  const [posts, categories] = await Promise.all([
    fetchAllPosts(),
    fetchCategories(),
  ]);

  // Configure the blog template
  const config = {
    logo: {
      type: 'text',
      content: 'My Blog',
      href: '/',
    },
    navLinks: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    hero: {
      title1: "My Blog's",
      title2: "Resource Hub",
      subTitle: "Your Learning Center",
      showSearchBar: true,
    },
    showDownloadButton: true,
    downloadButtonText: 'Get App',
    downloadButtonLink: '/download',
    categories: ['Latest', 'Tutorials', 'News', 'Guides'],
    basePath: '/hub',
    postsPerPage: 51,
  };

  return (
    <BlogListingPage
      config={config}
      posts={posts}
      allCategories={categories}
      initialSearchQuery={searchQuery}
      initialPage={currentPage}
      searchBarComponent={
        <SearchBar
          initialQuery={searchQuery}
          theme="dark"
          onSearch={(query) => {
            // Handle search - navigate to URL with search param
          }}
        />
      }
      footerComponent={<YourFooterComponent />}
    />
  );
}
```

### Individual Blog Post Page

```tsx
// app/hub/[slug]/page.tsx
import { BlogPostPage, SearchBar } from 'shared-blog-template';
import { fetchPostBySlug } from '../utility/utility_function';

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  const config = {
    logo: {
      type: 'text',
      content: 'My Blog',
      href: '/',
    },
    navLinks: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/hub' },
    ],
    hero: {
      title1: 'Blog Post',
      showSearchBar: true,
    },
    showDownloadButton: true,
    downloadButtonText: 'Get App',
    downloadButtonLink: '/download',
    categories: [],
    popularPosts: [
      { title: 'Popular Post 1', slug: 'popular-post-1' },
      { title: 'Popular Post 2', slug: 'popular-post-2' },
    ],
    basePath: '/hub',
  };

  return (
    <BlogPostPage
      config={config}
      post={post}
      searchBarComponent={
        <SearchBar
          theme="light"
          onSearch={(query) => {
            // Handle search
          }}
        />
      }
      footerComponent={<YourFooterComponent />}
    />
  );
}
```

## Configuration Options

### BlogTemplateConfig

```typescript
interface BlogTemplateConfig {
  // Logo configuration
  logo?: {
    type: 'text' | 'image';
    content: string; // text or image URL
    href?: string;
  };
  
  // Navigation links
  navLinks?: NavLink[];
  
  // Hero section
  hero: {
    title1: string;
    title2?: string;
    subTitle?: string;
    showSearchBar?: boolean;
  };
  
  // Download button
  showDownloadButton?: boolean;
  downloadButtonText?: string;
  downloadButtonLink?: string;
  
  // Categories
  categories: string[];
  
  // Popular posts (for blog post page)
  popularPosts?: {
    title: string;
    slug: string;
  }[];
  
  // Routing
  basePath?: string; // default: '/hub'
  
  // Pagination
  postsPerPage?: number; // default: 51
}
```

## Data Structure

Your API/data functions should return data in this format:

```typescript
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  modifiedDate: string;
  featuredImage?: string;
  categories: WPCategory[];
  author?: {
    name: string;
    avatar: string;
  };
}

interface WPCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
}
```

## Customization

### Custom Components

You can pass custom components for:
- Search bar
- Footer
- Banner (e.g., Christmas banner, announcement)

### Styling

The module uses CSS modules. To override styles, you can:

1. **Wrap components with your own className:**
```tsx
<BlogListingPage
  className="my-custom-class"
  config={config}
  posts={posts}
/>
```

2. **Use global CSS to override:**
```css
/* In your global CSS */
.my-custom-class .hero-section {
  background: linear-gradient(to right, #667eea, #764ba2);
}
```

## Project Structure

```
shared-blog-template/
├── src/
│   ├── components/
│   │   ├── BlogListingPage/
│   │   ├── BlogPostPage/
│   │   ├── Navbar/
│   │   ├── SearchBar/
│   │   ├── HeroContainer/
│   │   ├── CategoriesSection/
│   │   └── BlogsGrid/
│   ├── types/
│   │   └── index.ts
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Requirements

- Next.js >= 13.0.0
- React >= 18.0.0
- lucide-react >= 0.263.0

## License

MIT