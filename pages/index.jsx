import OurWorks from '~/components/OurWorks/OurWorks';
import Hero from '~/components/Hero/Hero';
import AboutUsSection from '~/components/AboutUsSection';
import FollowUs from '~/components/FollowUs/FollowUs';
import Subscribe from '~/components/Subscribe/Subscribe';
import Mission from '~/components/Mission/Mission';
import ContactsSection from '~/components/ContactsSection/ContactsSection';
import { useBreakpoint } from '~/utils/breakpoint';
import StrapiService from '~/components/StrapiService/StrapiService';

const Home = ({ ourWorks, ourMissionText }) => {
  const { NEXT_PUBLIC_API_URL: API_URL } = process.env;

  const breakpoints = useBreakpoint();
  return (
    <>
      <h1 className="visually-hidden">Tattoo one love official page</h1>
      <Hero
        type="main"
        text1="Bodies are not born. Bodies are made."
        text2="Studio tatuażu, w którym znajdziesz sposób na wyrażenia siebie."
      />
      <AboutUsSection />
      <OurWorks ourWorks={ourWorks} API_URL={API_URL} />
      {breakpoints.mobile && <FollowUs />}
      <ContactsSection />
      {breakpoints.mobile && <Subscribe API_URL={API_URL} />}
      <Mission ourMissionText={ourMissionText} />
    </>
  );
};

export const getStaticProps = async () => {
  const strapiService = new StrapiService();
  const ourWorks = await strapiService.getOurWorks();
  const ourMissionText = await strapiService.getOurMission();

  return {
    props: {
      ourWorks,
      ourMissionText,
    },

    revalidate: 1,
  };
};

export default Home;
