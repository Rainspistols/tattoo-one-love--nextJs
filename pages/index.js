import OurWorks from '../components/OurWorks/OurWorks';
import Hero from '../components/Hero/Hero';
import AboutUsSection from '../components/AboutUsSection/AboutUsSection';
import Main from '../Layouts/Main/Main';
import FollowUs from '../components/FollowUs/FollowUs';
import BlogCarousel from '../components/BlogCarousel/BlogCarousel';
import Subscribe from '../components/Subscribe/Subscribe';
import Mission from '../components/Mission/Mission';
import cookies from 'next-cookies';

const Home = ({ ourWorks, postsData, API_URL, importantMessageData }) => {
  return (
    <Main
      headTitle='Tattoo one love (Tattoo salon in Warsaw) official page'
      importantMessageData={importantMessageData}
    >
      <h1 className='visually-hidden'>Tattoo one love official page</h1>
      <Hero />
      <AboutUsSection />
      <OurWorks ourWorks={ourWorks} />
      <FollowUs />
      <BlogCarousel postsData={postsData} />
      <Subscribe API_URL={API_URL} />
      <Mission />
    </Main>
  );
};

export const getServerSideProps = async (ctx) => {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/our-works`);
  const ourWorksData = await res.json();

  const res2 = await fetch(`${API_URL}/posts`);
  const postsData = await res2.json();

  const res3 = await fetch(`${API_URL}/important-message`);
  const importantMessage = await res3.json();
  const importantMessageStatusChecked = importantMessage.statusCode
    ? null
    : importantMessage;

  return {
    props: {
      ourWorks: ourWorksData.works.map(({ id, url }) => ({
        id,
        url: API_URL + url,
      })),

      postsData: postsData.map(({ id, title, img, post_categories, slug }) => ({
        id,
        title,
        slug,
        category: post_categories[0].category,
        src: API_URL + img.url,
      })),

      API_URL: API_URL,

      importantMessageData: cookies(ctx)['im-stop-download']
        ? null
        : importantMessageStatusChecked,
    },
  };
};

export default Home;
