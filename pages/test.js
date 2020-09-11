import Main from '../Layouts/Main/Main';
import StrapiService from '@/components/StrapiService/StrapiService';

const Test = () => {
  return (
    <Main>
      <h2>lalal</h2>
    </Main>
  );
};

export const getStaticProps = async () => {
  const strapiService = new StrapiService();
  const ourWorks = await strapiService.getOurWorks();

  const { API_URL } = process.env;

  return {
    props: {
      ourWorks,
      API_URL,
    },
  };
};

export default Test;
