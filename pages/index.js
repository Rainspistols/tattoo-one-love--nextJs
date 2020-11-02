import OurWorks from "@/components/OurWorks/OurWorks";
import Hero from "@/components/Hero/Hero";
import AboutUsSection from "@/components/AboutUsSection";
import FollowUs from "@/components/FollowUs/FollowUs";
import Subscribe from "@/components/Subscribe/Subscribe";
import Mission from "@/components/Mission/Mission";
import ContactsSection from "@/components/ContactsSection/ContactsSection";
// Strapi
import StrapiService from "@/components/StrapiService/StrapiService";

import { useBreakpoint } from "../utils/breakpoint.js";

const Home = ({ ourWorks, ourMissionText, headerHeight }) => {
  const { NEXT_PUBLIC_API_URL: API_URL } = process.env;

  const breakpoints = useBreakpoint();
  return (
    <>
      <h1 className="visually-hidden">Tattoo one love official page</h1>
      <Hero />
      <AboutUsSection headerHeight={headerHeight} />
      <OurWorks
        ourWorks={ourWorks}
        API_URL={API_URL}
        headerHeight={headerHeight}
      />
      {breakpoints.mobile && <FollowUs />}
      <ContactsSection headerHeight={headerHeight}/>
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
    revalidate: 1,
    props: {
      ourWorks,
      ourMissionText,
    },
  };
};

export default Home;
