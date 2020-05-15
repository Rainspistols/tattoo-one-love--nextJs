import OurWorks from '../components/OurWorks/OurWorks';
import Hero from '../components/Hero/Hero';

const Home = ({ ourWorks }) => {
  return (
    <>
      <h1 className='visually-hidden'>Tattoo one love official page</h1>
      {/* <OurWorks ourWorks={ourWorks} /> */}
      <Hero />
    </>
  );
};

export const getServerSideProps = async () => {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/our-works`);
  const data = await res.json();

  return {
    props: {
      ourWorks: data.works.map(({ id, url }) => ({
        id,
        url: API_URL + url,
      })),
    },
  };
};

export default Home;
