import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, '');

  const fileContent = fs.readFileSync(
    path.join(postsDir, `${postSlug}.md`),
    'utf-8'
  );
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

export function getPostsFiles() {
  return fs.readdirSync(postsDir);
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((pf) => getPostData(pf));
  allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
  return allPosts;
}

export function getFeaturedPosts() {
  return getAllPosts().filter((p) => p.isFeatured);
}
