import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');

function getPostData(fileName) {
  const fileContent = fs.readFileSync(path.join(postsDir, fileName), 'utf-8');
  const { data, content } = matter(fileContent);

  const postSlug = fileName.replace(/\.md$/, '');

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

function getAllPosts(params) {
  const postFiles = fs.readdirSync(postsDir);

  const allPosts = postFiles.map((pf) => getPostData(pf));
  allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
  return allPosts;
}

export function getFeaturedPosts() {
  return getAllPosts().filter((p) => p.isFeatured);
}
