import styled from "@emotion/styled";
import Image from "next/image";
import { TextWrapper, Text } from "~/pages/coverups";

const CoverupsDescription = () => {
  return (
    <DescriptionContainer>
      <Image
        src="/Coverups/coverup-description.jpeg"
        width="665"
        height="664"
      />
      <TextWrapper withBg>
        <Text>
          Tatuaże powinni pomagać wyrażać siebie i dodawać wiary w siebie, a nie
          na odwrót. Ale niestety, czasem tak się zdarza, że wymarzony tatuaż, z
          różnych powodów, nie spełnia oczekiwań. Patrzenie na nieudany wzór,
          który szpeci ciało, jest krępujące, a niekiedy wręcz żenujące. Więc
          postanowiliśmy pomóc ludziom cieszyć się rysunkami na ich ciałach,
          ponieważ wszyscy na to zasługują.
        </Text>
      </TextWrapper>
    </DescriptionContainer>
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

export default CoverupsDescription;
