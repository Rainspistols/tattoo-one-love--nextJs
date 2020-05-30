import Main from '../../Layouts/Main/Main';
import BlogPostsList from '../../components/BlogPostsList/BlogPostsList';
import { useState } from 'react';

const Home = ({ postsData, API_URL, inputSearchValue }) => {
  return (
    <Main headTitle='search results'>
      <h1 className='visually-hidden'>Tattoo one love official page</h1>
      <BlogPostsList
        postsData={postsData}
        API_URL={API_URL}
        inputSearchValue={inputSearchValue}
      />
    </Main>
  );
};

export const getServerSideProps = async () => {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/posts?`);
  const postsData = await res.json();

  return {
    props: {
      postsData,
      API_URL: API_URL,
    },
  };
};

export default Home;
