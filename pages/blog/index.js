import { useState, useEffect } from 'react';
import StrapiService from '../../components/StrapiService/StrapiService';
import { useRouter } from 'next/router';
// Components
import Main from '../../Layouts/Main/Main';
import Subscribe from '../../components/Subscribe/Subscribe';
import BlogPostsList from '../../components/Blog/BlogPostsList/BlogPostsList';

const Blog = (props) => {
  const [isSubscribeVisible, setSubscribeVisible] = useState(false);

  if (process.browser) {
    useEffect(() => {
      window.innerWidth < 1280
        ? setSubscribeVisible(true)
        : setSubscribeVisible(false);
    }, [window.innerWidth]);
  }

  const router = useRouter();

  const onShowMeroButton = () => {
    router.push(`/blog?postsAmount=${props.postsAmount + 10}`);
  };

  return (
    <Main headTitle='Tattoo one love | blog'>
      <h1 className='visually-hidden'>Tattoo one love blog</h1>
      <BlogPostsList {...props} onShowMeroButton={onShowMeroButton} />
      {isSubscribeVisible ? <Subscribe API_URL={props.API_URL} /> : null}
    </Main>
  );
};

export const getServerSideProps = async ({ query: { postsAmount = 10 } }) => {
  const strapiService = new StrapiService();
  const postsData = await strapiService.getNLastPosts(postsAmount);
  const allCategories = await strapiService.getPostsCategories();
  const allPostsCount = await strapiService.getAllPostsCount();

  const { API_URL } = process.env;

  return {
    props: {
      postsData,
      API_URL,
      allCategories,
      postsAmount: +postsAmount,
      allPostsCount,
    },
  };
};

export default Blog;
