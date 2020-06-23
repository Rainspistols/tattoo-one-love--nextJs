import Main from '../../Layouts/Main/Main';
import Subscribe from '../../components/Subscribe/Subscribe';
import StrapiService from '../../components/StrapiService/StrapiService';
import { useState, useEffect } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimension';
import BlogPostsList from '../../components/Blog/BlogPostsList/BlogPostsList';

const Blog = ({ allPosts, API_URL, allCategories }) => {
  const { width } = useWindowDimensions();
  const [isSubscribeVisible, setSubscribeVisible] = useState(false);

  useEffect(() => {
    if (width < 1280) {
      setSubscribeVisible(true);
    }
  }, [width]);

  return (
    <Main headTitle='Tattoo one love | blog'>
      <h1 className='visually-hidden'>Tattoo one love blog</h1>
      <BlogPostsList
        postsData={allPosts}
        API_URL={API_URL}
        allCategories={allCategories}
      />
      {isSubscribeVisible ? <Subscribe API_URL={API_URL} /> : null}
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
