// src/app/blog/[slug]/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, getAllPostsWithMetadata } from '@/barizaloka-web/lib/blog';
import { BlogPost } from '@/barizaloka-web/components/BlogListClient';

// Types
interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}

interface WPTag {
  id: number;
  name: string;
}

interface WPEmbedded {
  'wp:featuredmedia'?: [{
    source_url: string;
    alt_text: string;
  }];
  'wp:term'?: [WPTag[]];
}

// Constants
const DEFAULT_IMAGE = {
  url: 'https://placehold.co/800x450/E5E7EB/4B5563?text=Gambar+Tidak+Tersedia',
  width: 1200,
  height: 675,
};

// Components
const NotFoundPage: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center font-sans text-gray-800">
    <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md mx-4">
      <h1 className="text-4xl font-extrabold text-purple-800 mb-4">
        Artikel Tidak Ditemukan
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Maaf, artikel yang Anda cari tidak ada atau terjadi kesalahan saat memuatnya.
      </p>
      <Link
        href="/blog"
        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 transform hover:scale-105"
      >
        &larr; Kembali ke Blog
      </Link>
    </div>
  </div>
);

const NavigationBar: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-lg rounded-b-3xl mx-auto mt-4 max-w-6xl p-4 flex items-center justify-between">
    <Link
      href="/blog"
      className="text-gray-700 hover:text-purple-700 font-medium transition duration-300 ease-in-out px-3 py-2 rounded-md hover:bg-purple-100"
    >
      &larr; Kembali ke Daftar Blog
    </Link>
  </nav>
);

const FeaturedImage: React.FC<{
  src: string;
  alt: string;
}> = ({ src, alt }) => (
  <Image
    width={DEFAULT_IMAGE.width}
    height={DEFAULT_IMAGE.height}
    src={src}
    alt={alt}
    className="w-full h-auto rounded-xl mb-8 object-cover"
    priority
  />
);

const ArticleHeader: React.FC<{
  title: string;
  tags?: WPTag[];
}> = ({ title, tags }) => (
  <header className="mb-8">
    <h1 
      className="text-4xl sm:text-5xl font-extrabold text-purple-800 mb-4 leading-tight" 
      dangerouslySetInnerHTML={{ __html: title }} 
    />
    
    {tags && tags.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.id}
            className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full"
          >
            {tag.name}
          </span>
        ))}
      </div>
    )}
  </header>
);

const ArticleContent: React.FC<{
  content: string;
}> = ({ content }) => (
  <div
    className="prose prose-lg max-w-none text-gray-700 leading-relaxed [&_h2]:text-purple-700 [&_h3]:text-purple-600 [&_a]:text-purple-500 [&_a]:hover:underline"
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

// Helper functions
const getFeaturedImageData = (post: BlogPost) => {
  const embedded = post._embedded as WPEmbedded | undefined;
  const featuredMedia = embedded?.['wp:featuredmedia']?.[0];
  return {
    url: featuredMedia?.source_url || DEFAULT_IMAGE.url,
    alt: featuredMedia?.alt_text || post.title.rendered || 'Blog post image',
  };
};

const getPostTags = (post: BlogPost): WPTag[] => {
  const embedded = post._embedded as WPEmbedded | undefined;
  return embedded?.['wp:term']?.[0] || [];
};

// Static generation
export async function generateStaticParams() {
  try {
    const allPosts = await getAllPostsWithMetadata();
    return allPosts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Main component
const BlogPostPage: React.FC<PageParams> = async ({ params }) => {
  const { slug } = await params;

  let post: BlogPost | null = null;

  try {
    post = await getPostBySlug(slug);
  } catch (error) {
    console.error(`Failed to fetch blog post with slug: ${slug}`, error);
  }

  if (!post) {
    return <NotFoundPage />;
  }

  const featuredImage = getFeaturedImageData(post);
  const tags = getPostTags(post);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 font-sans text-gray-800 flex flex-col">
      <NavigationBar />

      <main className="flex-grow container mx-auto px-4 py-28 md:py-32">
        <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 mx-auto max-w-4xl">
          <FeaturedImage 
            src={featuredImage.url} 
            alt={featuredImage.alt} 
          />
          
          <ArticleHeader 
            title={post.title.rendered} 
            tags={tags} 
          />
          
          <ArticleContent content={post.content.rendered} />
        </article>
      </main>
    </div>
  );
};

export default BlogPostPage;