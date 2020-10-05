import OurWorks from '@/components/OurWorks/OurWorks';
import Hero from '@/components/Hero/Hero';
import AboutUsSection from '@/components/AboutUsSection';
import FollowUs from '@/components/FollowUs/FollowUs';
import Subscribe from '@/components/Subscribe/Subscribe';
import Mission from '@/components/Mission/Mission';
import ContactsSection from '@/components/ContactsSection/ContactsSection';
// Strapi
import StrapiService from '@/components/StrapiService/StrapiService';

import { useBreakpoint } from '../utils/breakpoint.js';
import ImportantMessage from '@/components/ImportantMessage/ImportantMessage.js';
import Header from '@/components/Header/Header.js';

const Home = ({ ourWorks, importantMessageJson }) => {
  const { NEXT_PUBLIC_API_URL: API_URL } = process.env;

  const breakpoints = useBreakpoint();
  return (
    <>
      {/* <ImportantMessage importantMessageJson={importantMessageJson} />
      <Header /> */}
      <main>
        <h1 className='visually-hidden'>Tattoo one love official page</h1>
        <Hero />
        <AboutUsSection />
        <OurWorks ourWorks={ourWorks} API_URL={API_URL} />
        {breakpoints.mobile && <FollowUs />}
        <ContactsSection />
        {breakpoints.mobile && <Subscribe API_URL={API_URL} />}
        <Mission />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const strapiService = new StrapiService();
  const ourWorks = await strapiService.getOurWorks();
  const importantMessageJson = await strapiService.getImportantMessage();

  return {
    revalidate: 1,
    props: {
      ourWorks,
    },
  };
};

export default Home;
