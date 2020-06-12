import Main from '../../Layouts/Main/Main';
import BlogPostsList from '../../components/BlogPostsList';
import StrapiService from '../../components/StrapiService/StrapiService';

const Home = ({ allPosts, API_URL, inputSearchValue }) => {
  return (
    <Main headTitle='search results'>
      <h1 className='visually-hidden'>Tattoo one love official page</h1>
      <BlogPostsList
        postsData={allPosts}
        API_URL={API_URL}
        inputSearchValue={inputSearchValue}
      />
    </Main>
  );
};

export const getStaticProps = async () => {
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

export default Home;
