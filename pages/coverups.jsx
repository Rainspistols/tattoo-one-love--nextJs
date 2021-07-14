import { NextSeo } from 'next-seo';
import Hero, { heroTypes } from '~/components/Hero/Hero';

const NewPage = () => (
  <>
    <NextSeo title='Coverups | Tattoo One Love' />
    <h1 className='visually-hidden'>cover tatuażu</h1>
    <Hero
      type={heroTypes.coverups}
      text1='projekt socjalny: cover to recover'
      text2='Niechciany tatuaż nie musi Cię definiować.'
    />
  </>
);

export default NewPage;
