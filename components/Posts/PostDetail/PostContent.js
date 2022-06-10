import ReactMarkdown from 'react-markdown';
import PostHeader from './PostHeader';

import classes from './PostContent.module.css';

const FAKE = {
  title: 'title1',
  image: 'getting-started-nextjs.png',
  content: '# This is a first post',
  date: '2022-06-11',
  slug: 'getting-started-with-nextjs',
};

export default function PostContent() {
  const path = `/images/posts/${FAKE.slug}/${FAKE.image}`,
    title = FAKE.title;

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={path} />
      <ReactMarkdown>{FAKE.content}</ReactMarkdown>
    </article>
  );
}
