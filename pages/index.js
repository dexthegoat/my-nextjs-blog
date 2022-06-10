import Hero from '../components/HomePage/Hero';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';

import { getFeaturedPosts } from '../lib/PostsUtil';

export default function HomePage({ posts }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
}
