import Main from '../../../Layouts/Main/Main';
import BlogPostsList from '../../../components/BlogPostsList/BlogPostsList';
import Subscribe from '../../../components/Subscribe/Subscribe';
import StrapiService from '../../../components/StrapiService/StrapiService';

const Blog = ({ categoryBySlug, API_URL }) => {
  return (
    <Main headTitle='Tattoo one love blog'>
      <h1 className='visually-hidden'>Tattoo one love blog</h1>
      <BlogPostsList postsData={categoryBySlug} API_URL={API_URL} />
      <Subscribe API_URL={API_URL} />
    </Main>
  );
};

export const getStaticPaths = async () => {
  const strapiService = new StrapiService();
  const postsCategories = await strapiService.getPostsCategories();
  console.log(postsCategories.map((item) => item));

  const paths = postsCategories.map((item) => ({
    params: { category: `/blog/${item.slug}` },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const strapiService = new StrapiService();
  const categoryBySlug = await strapiService.getCategoriesBySlug(
    context.params.category
  );
  const { API_URL } = process.env;

  return {
    props: {
      categoryBySlug,
      API_URL,
    },
  };
};

export default Blog;
