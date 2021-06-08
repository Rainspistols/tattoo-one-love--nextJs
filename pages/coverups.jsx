import styled from "@emotion/styled";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Hero from "~/components/Hero/Hero";
import Container from "~/Layouts/Container/Container";

const Coverups = () => {
  return (
    <>
      <NextSeo title={"Coverups | Tattoo One Love"} />
      <h1 className="visually-hidden">PROJEKT SOCJALNY: COVER TO RECOVER</h1>
      <Hero
        type="coverups"
        text1="PROJEKT SOCJALNY: COVER TO RECOVER"
        text2="Niechciany tatuaż nie musi Cię definiować."
      />
      <Container>
        <DescriptionContainer>
          <Image
            src="/Coverups/coverup-description.jpeg"
            width="665"
            height="664"
          />
          <Text>
            Tatuaże powinni pomagać wyrażać siebie i dodawać wiary w siebie, a
            nie na odwrót. Ale niestety, czasem tak się zdarza, że wymarzony
            tatuaż, z różnych powodów, nie spełnia oczekiwań. Patrzenie na
            nieudany wzór, który szpeci ciało, jest krępujące, a niekiedy wręcz
            żenujące. Więc postanowiliśmy pomóc ludziom cieszyć się rysunkami na
            ich ciałach, ponieważ wszyscy na to zasługują.
          </Text>
        </DescriptionContainer>
      </Container>
    </>
  );
};

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mediaDesktop} {
    grid-template-columns: auto 1fr;
  }
`;

const Text = styled.p`
  padding: 64px 32px;
  background: #f4f4f4;
  font-weight: 400;
  font-size: ${({ theme }) => theme.vw(13)};
  line-height: ${({ theme }) => theme.vw(20)};

  ${({ theme }) => theme.mediaDesktop} {
    padding: 117px 64px;
    font-size: ${(props) => props.theme.vw1920(29)};
    line-height: ${(props) => props.theme.vw1920(43)};
  }
`;

export default Coverups;
