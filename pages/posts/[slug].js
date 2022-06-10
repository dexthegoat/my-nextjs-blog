import PostContent from '../../components/Posts/PostDetail/PostContent';

import { getPostData, getPostsFiles } from '../../lib/PostsUtil';

export default function PostDetailPage({ post }) {
  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const post = getPostData(slug);
  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
