import ReactMarkdown from 'react-markdown';
import PostHeader from './PostHeader';

import classes from './PostContent.module.css';

export default function PostContent({ post }) {
  const path = `/images/posts/${post.slug}/${post.image}`,
    title = post.title;

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={path} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
