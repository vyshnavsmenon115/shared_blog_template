'use client';

import Link from 'next/link';
import Navbar from './Navbar';
import { BlogPost, BlogTemplateConfig } from '../types';
import styles from './blog_post_page.module.css';

interface BlogPostPageProps {
  config: BlogTemplateConfig;
  post: BlogPost;
  searchBarComponent?: React.ReactNode;
  footerComponent?: React.ReactNode;
  bannerComponent?: React.ReactNode;
  className?: string;
}

export default function BlogPostPage({
  config,
  post,
  searchBarComponent,
  footerComponent,
  bannerComponent,
  className = '',
}: BlogPostPageProps) {
  const basePath = config.basePath || '/hub';

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={`${styles.post} ${className}`}>
      <Navbar
        logo={config.logo}
        navLinks={config.navLinks}
        showDownloadButton={config.showDownloadButton}
        downloadButtonText={config.downloadButtonText}
        downloadButtonLink={config.downloadButtonLink}
        theme="light"
        showSearchBar={config.hero.showSearchBar}
        searchBarComponent={searchBarComponent}
      />
      
      <div className={styles.postPage}>
        <div className={styles.blog}>
          <div className={styles.blogPostPage}>
            <div className={styles.blogPostHeader}>
              <h1 className={styles.blogPostTitle}>{post.title}</h1>

              <div className={styles.blogPostMeta}>
                <time dateTime={post.date}>{formatDate(post.date)}</time> |
                <span>{post.author?.name}</span>
              </div>

              {post.featuredImage && (
                <div className={styles.blogPostFeaturedImage}>
                  <img src={post.featuredImage} alt={post.title} className={styles.featuredImage} />
                </div>
              )}
            </div>

            <div
              className={styles.blogPostContent}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {config.popularPosts && config.popularPosts.length > 0 && (
            <div className={styles.popularPosts}>
              Popular Posts
              {config.popularPosts.map((popularPost) => (
                <Link
                  key={popularPost.slug}
                  href={`${basePath}/${popularPost.slug}`}
                  className={styles.popularLinks}
                >
                  {popularPost.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {bannerComponent && (
          <div className={styles.bannerWrapper}>
            {bannerComponent}
          </div>
        )}
      </div>

      {footerComponent && (
        <div className={styles.footerWrapper}>
          {footerComponent}
        </div>
      )}
    </div>
  );
}