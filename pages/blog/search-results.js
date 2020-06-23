import Main from '../../Layouts/Main/Main';
import StrapiService from '../../components/StrapiService/StrapiService';
import BlogPostsList from '../../components/Blog/BlogPostsList/BlogPostsList';

const Home = ({ allPosts, API_URL, inputSearchValue, allCategories }) => {
  return (
    <Main headTitle='search results'>
      <h1 className='visually-hidden'>Tattoo one love official page</h1>
      <BlogPostsList
        postsData={allPosts}
        API_URL={API_URL}
        inputSearchValue={inputSearchValue}
        allCategories={allCategories}
      />
    </Main>
  );
};

export const getStaticProps = async () => {
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

export default Home;
