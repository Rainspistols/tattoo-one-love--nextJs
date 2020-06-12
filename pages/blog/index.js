import Main from '../../Layouts/Main/Main';
import BlogPostsList from '../../components/BlogPostsList';
import Subscribe from '../../components/Subscribe/Subscribe';
import StrapiService from '../../components/StrapiService/StrapiService';

const Blog = ({ allPosts, API_URL }) => {
  return (
    <Main headTitle='Tattoo one love blog'>
      <h1 className='visually-hidden'>Tattoo one love blog</h1>
      <BlogPostsList postsData={allPosts} API_URL={API_URL} />
      <Subscribe API_URL={API_URL} />
    </Main>
  );
};

export const getServerSideProps = async () => {
  const strapiService = new StrapiService();
  const allPosts = await strapiService.getAllPosts();

  const { API_URL } = process.env;

  return {
    props: {
      allPosts,
      API_URL,
    },
  };
};

export default Blog;
