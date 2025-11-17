# Shared Blog Template

A reusable blog template module for Next.js projects with TypeScript support.

## Installation

### From GitHub
```bash
npm install github:your-org/shared-blog-template
```

### From npm (if published)
```bash
npm install @your-org/shared-blog-template
```

## Usage

### HomePage Component
```tsx
import { HomePage } from '@your-org/shared-blog-template';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function BlogHub({ posts, categories, searchQuery, currentPage }) {
  const HeroComponent = ({ searchQuery }) => (
    <div>
      <Navbar searchQuery={searchQuery} />
      <h1>My Blog Hub</h1>
    </div>
  );

  return (
    <HomePage
      HeroComponent={HeroComponent}
      FooterComponent={Footer}
      posts={posts}
      categories={categories}
      searchQuery={searchQuery}
      currentPage={currentPage}
      postsPerPage={51}
    />
  );
}
```

### BlogPostPage Component
```tsx
import { BlogPostPage } from '@your-org/shared-blog-template';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function BlogPost({ post }) {
  return (
    <BlogPostPage
      NavbarComponent={Navbar}
      FooterComponent={Footer}
      post={post}
      onSearch={(query) => router.push(`/hub?s=${query}`)}
      popularPostLinks={[
        { href: '/hub/post-1', title: 'Popular Post 1' },
        { href: '/hub/post-2', title: 'Popular Post 2' },
      ]}
    />
  );
}
```

## Props

### HomePage Props
- `HeroComponent`: React component for hero section (receives searchQuery)
- `FooterComponent`: React component for footer
- `posts`: Array of blog posts
- `categories`: Array of categories
- `searchQuery`: Current search query (optional)
- `currentPage`: Current page number (optional, default: 1)
- `postsPerPage`: Posts per page (optional, default: 51)
- `categoryNames`: Custom category names (optional)
- `ExtraComponent`: Extra component to render (optional)

### BlogPostPage Props
- `NavbarComponent`: React component for navbar
- `FooterComponent`: React component for footer
- `post`: Blog post data
- `searchQuery`: Current search query (optional)
- `onSearch`: Search handler function (optional)
- `ExtraComponent`: Extra component to render (optional)
- `showPopularPosts`: Show popular posts sidebar (optional, default: true)
- `popularPostLinks`: Array of popular post links (optional)

## License

MIT