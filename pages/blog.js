import Main from '../Layouts/Main/Main';
import BlogPostsList from '../components/BlogPostsList/BlogPostsList';
import Subscribe from '../components/Subscribe/Subscribe';
import cookies from 'next-cookies';

const Blog = ({ postsData, API_URL, importantMessageData }) => {
  return (
    <Main
      headTitle='Tattoo one love blog'
      importantMessageData={importantMessageData}
    >
      <h1 className='visually-hidden'>Tattoo one love blog</h1>
      <BlogPostsList postsData={postsData} />
      <Subscribe API_URL={API_URL} />
    </Main>
  );
};

export const getServerSideProps = async (ctx) => {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/posts`);
  const postsData = await res.json();

  const res2 = await fetch(`${API_URL}/important-message`);
  const importantMessage = await res2.json();
  const importantMessageStatusChecked = importantMessage.statusCode
    ? null
    : importantMessage;

  return {
    props: {
      postsData: postsData.map(({ id, title, img, slug, post_categories }) => ({
        postId: id,
        postTitle: title,
        postSlug: slug,
        categories: post_categories,
        postImgHref: API_URL + img.url,
      })),

      API_URL: API_URL,

      importantMessageData: cookies(ctx)['im-stop-download']
        ? null
        : importantMessageStatusChecked,
    },
  };
};

export default Blog;
