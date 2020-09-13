import StrapiService from '@/components/StrapiService/StrapiService';

const Test = () => {
  return (
    <main>
      <h2>lalal</h2>
    </main>
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

export default Test;
