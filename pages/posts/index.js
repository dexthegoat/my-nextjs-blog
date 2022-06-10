import AllPosts from '../../components/Posts/AllPosts';

const DUMMY_POSTS = [
  {
    title: 'title1',
    image: 'getting-started-nextjs.png',
    excerpt: 'axxxxxxxxxxxcasddddasdddddddddddddddddd ',
    date: '2022-06-10',
    slug: 'getting-started-with-nextjs',
  },
  {
    title: 'title3',
    image: 'getting-started-nextjs.png',
    excerpt: 'axxxxxxxxxxxcasddddasdddddddddddddddddd ',
    date: '2022-06-10',
    slug: 'getting-started-with-nextjs',
  },
  {
    title: 'title2',
    image: 'getting-started-nextjs.png',
    excerpt: 'axxxxxxxxxxxcasddddasdddddddddddddddddd ',
    date: '2022-06-10',
    slug: 'getting-started-with-nextjs',
  },
  {
    title: 'title4',
    image: 'getting-started-nextjs.png',
    excerpt: 'axxxxxxxxxxxcasddddasdddddddddddddddddd ',
    date: '2022-06-10',
    slug: 'getting-started-with-nextjs',
  },
];

export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
