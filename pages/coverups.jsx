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
          <TextWrapper withBg>
            <Text>
              Tatuaże powinni pomagać wyrażać siebie i dodawać wiary w siebie, a
              nie na odwrót. Ale niestety, czasem tak się zdarza, że wymarzony
              tatuaż, z różnych powodów, nie spełnia oczekiwań. Patrzenie na
              nieudany wzór, który szpeci ciało, jest krępujące, a niekiedy
              wręcz żenujące. Więc postanowiliśmy pomóc ludziom cieszyć się
              rysunkami na ich ciałach, ponieważ wszyscy na to zasługują.
            </Text>
          </TextWrapper>
        </DescriptionContainer>

        <GoalSection>
          <TextWrapper
            withBorder
            borderPos="top"
            setPadding
            pos="bottom"
            value="0"
          >
            <Text>
              Źle wykonane tatuaże mają bardzo negatywny wpływ na postrzeganie
              branży tatuażu. Widząc nieudane tatuaże ludzie boją się ozdabiać
              swoje ciało, ponieważ nie ma żadnej gwarancji, że tatuaże będą
              wyglądał tak, jak oni chcą. Planujemy zmienić sytuację - chcemy
              zmniejszyć ilość niechcianych i nieudanych tatuaży na świecie, i
              zwiększyć ilość szczęśliwych posiadaczów wymarzonych dziar.
            </Text>
          </TextWrapper>

          <TextWrapper setPadding pos="top" value="20">
            <Text>
              Pragniemy też pomóc ludziom zakryć tatuaże związane z rasizmem,
              ksenofobią itd. Każdy musi mieć szansę na zmianę. Tatuaż powinien
              przynosić tylko te emocje, które osoba w niego wkłada, ale na
              pewno nie wstyd, rozczarowanie czy irytację.
            </Text>
          </TextWrapper>

          <TextWrapper withBorder borderPos="top">
            <Text>
              Dlatego my jako studio tatuażu i jako przedstawiciele całej branży
              tatuatorskiej ogłaszamy początek naszego projektu socjalnego
              „Cover to recover”, bo niechciany tatuaż nie musi Cię określać.
            </Text>
          </TextWrapper>
        </GoalSection>
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

const TextWrapper = styled.div`
  padding: ${({ theme }) => theme.vw(32)} ${({ theme }) => theme.vw(16)};

  ${({ theme }) => theme.mediaDesktop} {
    padding: ${({ theme }) => theme.vw1920(117)}
      ${({ theme }) => theme.vw1920(64)};
  }

  ${({ withBorder, borderPos }) => {
    return withBorder && `border-${borderPos}: 1px solid #D8E2EB`;
  }}

  ${({ withBg }) => {
    return withBg && "background-color: #f4f4f4";
  }};

  ${({ setPadding, pos, value }) => {
    return setPadding && `padding-${pos}: ${value}px !important`;
  }};
`;

const Text = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.vw(13)};
  line-height: ${({ theme }) => theme.vw(20)};

  ${({ theme }) => theme.mediaDesktop} {
    font-size: ${({ theme }) => theme.vw1920(29)};
    line-height: ${({ theme }) => theme.vw1920(43)};
  }
`;

const GoalSection = styled.div`
  padding: ${({ theme }) => theme.vw(20)};

  ${({ theme }) => theme.mediaDesktop} {
    padding: ${({ theme }) => theme.vw1920(90)};
  }
`;

export default Coverups;
