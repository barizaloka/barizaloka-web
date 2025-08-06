// src/lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Definisi interface untuk data blog post
export interface BlogPost {
  slug: string; // Nama file tanpa ekstensi (digunakan untuk URL)
  title: string;
  date: string; // Format YYYY-MM-DD
  description: string;
  imageUrl: string;
  tags: string[];
  contentHtml?: string; // Konten HTML dari Markdown (opsional untuk daftar, wajib untuk detail)
}

// Path ke direktori blog posts
const postsDirectory = path.join(process.cwd(), 'blogs');
console.log('Posts directory:', postsDirectory);

// Fungsi untuk mendapatkan semua slug (nama file) dari blog posts
export function getPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ''));
}

// Fungsi untuk mendapatkan data blog post berdasarkan slug
export async function getPostData(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Gunakan gray-matter untuk mem-parse frontmatter dan konten
  const matterResult = matter(fileContents);

  // Gunakan remark untuk mengonversi markdown menjadi string HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Pastikan tipe data sesuai dengan BlogPost
  const frontmatter = matterResult.data as Omit<BlogPost, 'slug' | 'contentHtml'>;

  return {
    slug,
    contentHtml,
    ...frontmatter,
  };
}

// Fungsi untuk mendapatkan semua blog post (hanya metadata) untuk daftar
export async function getAllPostsMetadata(): Promise<BlogPost[]> {
  const slugs = getPostSlugs();
  const allPostsData: BlogPost[] = [];

  for (const slug of slugs) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Ambil hanya metadata (frontmatter)
    const frontmatter = matterResult.data as Omit<BlogPost, 'slug' | 'contentHtml'>;
    
    // Untuk deskripsi, ambil dari frontmatter. Jika tidak ada, ambil beberapa baris pertama dari konten
    // const description = frontmatter.description || matterResult.content.split('\n').slice(0, 2).join(' ').substring(0, 150) + '...';

    allPostsData.push({
      slug,
      ...frontmatter, // Ini akan menimpa description jika ada di frontmatter
    });
  }

  // Urutkan posts berdasarkan tanggal (terbaru di atas)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
