import { useState, useEffect } from 'react';
import Main from '@/Layouts/Main/Main';
import useWindowSize from '../hooks/useWindowSize';
// Components
import OurWorks from '@/components/OurWorks/OurWorks';
import Hero from '@/components/Hero/Hero';
import AboutUsSection from '@/components/AboutUsSection';
import FollowUs from '@/components/FollowUs/FollowUs';
import Subscribe from '@/components/Subscribe/Subscribe';
import Mission from '@/components/Mission/Mission';
import ContactsBlock from '@/components/ContactsBlock/ContactsBlock';
// Strapi
import StrapiService from '@/components/StrapiService/StrapiService';

const Home = ({ ourWorks, matchPoints }) => {
  const { NEXT_PUBLIC_API_URL: API_URL } = process.env;

  // console.log(matchPoints.mobile);
  const [stateWidth, setStateWidth] = useState(null);
  const windowWidth = useWindowSize().width;

  useEffect(() => {
    setStateWidth(windowWidth);
  }, [windowWidth]);

  got rid of variables

  return (
    <Main headTitle='Wyjątkowe Studio Tatuażu Warszawa Wola | Tattoo One Love'>
      <h1 className='visually-hidden'>Tattoo one love official page</h1>
      <Hero />
      <AboutUsSection />
      <OurWorks ourWorks={ourWorks} />
      {stateWidth < 1280 && <FollowUs />}
      <ContactsBlock />
      {stateWidth < 1280 && <Subscribe API_URL={API_URL} />}
      <Mission />
    </Main>
  );
};

export const getStaticProps = async () => {
  const strapiService = new StrapiService();
  const ourWorks = await strapiService.getOurWorks();

  return {
    props: {
      ourWorks,
    },
  };
};

export default Home;
