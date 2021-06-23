import TopPageDescription from '../TopPageDescription/TopPageDescription';

const CoverupsTopDescription = () => {
  const data = {
    imageUrl: '/Coverups/coverup-description.jpeg',
    textContent:
      'Tatuaże powinni pomagać wyrażać siebie i dodawać wiary w siebie, a nie na odwrót. Ale niestety, czasem tak się zdarza, że wymarzony tatuaż, z różnych powodów, nie spełnia oczekiwań. Patrzenie na nieudany wzór, który szpeci ciało, jest krępujące, a niekiedy wręcz żenujące. Więc postanowiliśmy pomóc ludziom cieszyć się rysunkami na ich ciałach, ponieważ wszyscy na to zasługują.',
  };
  return <TopPageDescription imageUrl={data.imageUrl} textContent={data.textContent} />;
};

export default CoverupsTopDescription;
