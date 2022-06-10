import AllPosts from '../../components/Posts/AllPosts';

import { getAllPosts } from '../../lib/PostsUtil';

export default function AllPostsPage({ posts }) {
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 1800,
  };
}
