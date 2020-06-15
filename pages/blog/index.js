import Main from '../../Layouts/Main/Main';
import Subscribe from '../../components/Subscribe/Subscribe';
import StrapiService from '../../components/StrapiService/StrapiService';
import BlogPostsList from '../../components/BlogPostsList/BlogPostsList';
import useWindowDimensions from '../../hooks/useWindowDimension';
import { useState, useEffect } from 'react';

const Blog = ({ allPosts, API_URL, allCategories }) => {
  const { width } = useWindowDimensions();
  const [stateWidth, setStateWidth] = useState(null);

  useEffect(() => {
    setStateWidth(width);
  }, [width]);
  return (
    <Main headTitle='Tattoo one love blog'>
      <h1 className='visually-hidden'>Tattoo one love blog</h1>
      <BlogPostsList
        postsData={allPosts}
        API_URL={API_URL}
        allCategories={allCategories}
      />
      {stateWidth < 1280 && <Subscribe API_URL={API_URL} />}
    </Main>
  );
};

export const getServerSideProps = async () => {
  const strapiService = new StrapiService();
  const allPosts = await strapiService.getAllPosts();
  const allCategories = await strapiService.getPostsCategories();

  const { API_URL } = process.env;

  return {
    props: {
      allPosts,
      API_URL,
      allCategories,
    },
  };
};

export default Blog;
