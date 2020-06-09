import OurWorks from '../components/OurWorks/OurWorks';
import Hero from '../components/Hero/Hero';
import AboutUsSection from '../components/AboutUsSection/AboutUsSection';
import Main from '../Layouts/Main/Main';
import FollowUs from '../components/FollowUs/FollowUs';
import BlogCarousel from '../components/BlogCarousel/BlogCarousel';
import Subscribe from '../components/Subscribe/Subscribe';
import Mission from '../components/Mission/Mission';
import StrapiService from '../components/StrapiService/StrapiService';
import styled from '@emotion/styled';

const Home = ({ ourWorks, fiveLastPosts, API_URL }) => {
  return (
    <Main headTitle='Tattoo one love (Tattoo salon in Warsaw) official page'>
      <HomeStyled>
        <h1 className='visually-hidden'>Tattoo one love official page</h1>
        <Hero />
        <AboutUsSection />
        <OurWorks ourWorks={ourWorks} />
        <FollowUs />
        <BlogCarousel postsData={fiveLastPosts} API_URL={API_URL} />
        <Subscribe API_URL={API_URL} />
        <Mission />
      </HomeStyled>
    </Main>
  );
};

export const getStaticProps = async () => {
  const strapiService = new StrapiService();
  const ourWorks = await strapiService.getOurWorks();
  const fiveLastPosts = await strapiService.get5LastPosts();
  const { API_URL } = process.env;

  return {
    props: {
      ourWorks,
      fiveLastPosts,
      API_URL,
    },
  };
};

const HomeStyled = styled.div`
  ${(props) => props.theme.mediaDesktop} {
    .FollowUs {
      display: none;
    }
  }
`;

export default Home;
