import OurWorks from '../components/OurWorks/';
import Hero from '../components/Hero/Hero';
import AboutUsSection from '../components/AboutUsSection/AboutUsSection';
import Main from '../Layouts/Main/Main';
import FollowUs from '../components/FollowUs/FollowUs';
import Subscribe from '../components/Subscribe/Subscribe';
import Mission from '../components/Mission/Mission';
import StrapiService from '../components/StrapiService/StrapiService';
import useWindowDimensions from '../hooks/useWindowDimension';
import ContactInformation from '../components/ContactInformation/ContactInformation';
import BlogPreview from '../components/BlogPreview/';

import { useState, useEffect } from 'react';

const Home = ({ ourWorks, fiveLastPosts, API_URL }) => {
  const { width } = useWindowDimensions();
  const [stateWidth, setStateWidth] = useState(null);

  useEffect(() => {
    setStateWidth(width);
  }, [width]);

  const isFollowUs = stateWidth < 1280 ? <FollowUs /> : null;
  const isSubscribe =
    stateWidth < 1280 ? <Subscribe API_URL={API_URL} /> : null;
  const isContactInformationDesktop =
    stateWidth >= 1280 ? <ContactInformation /> : null;

  return (
    <Main headTitle='Tattoo one love (Tattoo salon in Warsaw) official page'>
      <h1 className='visually-hidden'>Tattoo one love official page</h1>
      <Hero />
      <AboutUsSection />
      <OurWorks ourWorks={ourWorks} />
      {isFollowUs}
      <BlogPreview postsData={fiveLastPosts} API_URL={API_URL} />
      {isSubscribe}
      {isContactInformationDesktop}
      <Mission />
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

export default Home;
