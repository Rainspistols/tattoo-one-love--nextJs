import Main from '../../../Layouts/Main/Main';
import BlogPostsList from '../../../components/BlogPostsList';
import Subscribe from '../../../components/Subscribe/Subscribe';
import StrapiService from '../../../components/StrapiService/StrapiService';

const Category = ({ categoryBySlug, API_URL, category }) => {
  return (
    <Main headTitle='Tattoo one love blog'>
      <BlogPostsList
        category={category}
        postsData={categoryBySlug}
        API_URL={API_URL}
      />
      <Subscribe API_URL={API_URL} />
    </Main>
  );
};

export const getStaticPaths = async () => {
  const strapiService = new StrapiService();
  const postsCategories = await strapiService.getPostsCategories();

  const paths = postsCategories.map((item) => ({
    params: { category: item.slug },
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
      category: context.params.category.toUpperCase(),
    },
  };
};

export default Category;
