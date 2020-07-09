import Main from '../../../Layouts/Main/Main';
import Subscribe from '../../../components/Subscribe/Subscribe';
import StrapiService from '../../../components/StrapiService/StrapiService';
import useWindowDimensions from '../../../hooks/useWindowDimension';
import { useState, useEffect } from 'react';
import BlogPostsList from '../../../components/Blog/BlogPostsList/BlogPostsList';

const Category = ({
  categoryBySlug,
  API_URL,
  activeCategory,
  allCategories,
}) => {
  const { width } = useWindowDimensions();
  const [isSubscribeVisible, setSubscribeVisible] = useState(false);

  useEffect(() => {
    if (width < 1280) {
      setSubscribeVisible(true);
    }
  }, [width]);
  return (
    <Main headTitle='Tattoo one love blog'>
      <BlogPostsList
        activeCategory={activeCategory}
        postsData={categoryBySlug}
        API_URL={API_URL}
        allCategories={allCategories}
      />
      {isSubscribeVisible ? <Subscribe API_URL={API_URL} /> : null}
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
  const allCategories = await strapiService.getPostsCategories();
  const { API_URL } = process.env;

  return {
    props: {
      categoryBySlug,
      API_URL,
      allCategories,
      activeCategory: context.params.category.toUpperCase(),
    },
  };
};

export default Category;
