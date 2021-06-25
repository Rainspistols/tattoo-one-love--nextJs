
import { NextSeo } from 'next-seo';
import Hero, { heroTypes } from '~/components/Hero/Hero';
import Container from '~/Layouts/Container/Container';
import TopPageDescription from '~/UI/TopPageDescription';
import CoverupsGoal from '~/components/Coverups/CoverupsGoal';

const Coverups = () => (
  <>
    <NextSeo title='Coverups | Tattoo One Love' />
    <h1 className='visually-hidden'>cover tatuażu</h1>
    <Hero
      type={heroTypes.coverups}
      text1='projekt socjalny: cover to recover'
      text2='Niechciany tatuaż nie musi Cię definiować.'
    />
    <Container>
      <TopPageDescription
        imageUrl='/Coverups/coverup-description.jpeg'
        imageDescription='cover tatuaż'
        textContent='Tatuaże powinni pomagać wyrażać siebie i dodawać wiary w siebie, a nie na odwrót. Ale niestety, czasem tak się zdarza, że wymarzony tatuaż, z różnych powodów, nie spełnia oczekiwań. Patrzenie na nieudany wzór, który szpeci ciało, jest krępujące, a niekiedy wręcz żenujące. Więc postanowiliśmy pomóc ludziom cieszyć się rysunkami na ich ciałach, ponieważ wszyscy na to zasługują.'
      />
      <CoverupsGoal />
    </Container>
  </>
);

export default Coverups;
