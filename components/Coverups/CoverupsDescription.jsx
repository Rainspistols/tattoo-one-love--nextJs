import styled from "@emotion/styled";
import Image from "next/image";

const CoverupsDescription = () => {
  return (
    <DescriptionContainer>
      <div className="description-image-wrapper">
        <Image
          src="/Coverups/coverup-description.jpeg"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="description-content">
        Tatuaże powinni pomagać wyrażać siebie i dodawać wiary w siebie, a nie
        na odwrót. Ale niestety, czasem tak się zdarza, że wymarzony tatuaż, z
        różnych powodów, nie spełnia oczekiwań. Patrzenie na nieudany wzór,
        który szpeci ciało, jest krępujące, a niekiedy wręcz żenujące. Więc
        postanowiliśmy pomóc ludziom cieszyć się rysunkami na ich ciałach,
        ponieważ wszyscy na to zasługują.
      </p>
    </DescriptionContainer>
  );
};

const DescriptionContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mediaDesktop} {
    grid-template-columns: auto 1fr;
  }

  .description-image-wrapper {
    position: relative;
    width: ${({ theme }) => theme.vw(375)};
    height: ${({ theme }) => theme.vw(375)};

    ${({ theme }) => theme.mediaDesktop} {
      position: relative;
      width: ${({ theme }) => theme.vw1920(665)};
      height: ${({ theme }) => theme.vw1920(664)};
    }
  }

  .description-content {
    font-size: ${({ theme }) => theme.vw(20)};
    line-height: ${({ theme }) => theme.vw(35)};
    padding: ${({ theme }) => theme.vw(32)} ${({ theme }) => theme.vw(16)};
    background-color: ${({ theme }) => theme.colors.lightGrey};

    ${({ theme }) => theme.mediaDesktop} {
      font-size: ${({ theme }) => theme.vw1920(29)};
      line-height: ${({ theme }) => theme.vw1920(43)};
      padding: ${({ theme }) => theme.vw1920(117)}
        ${({ theme }) => theme.vw1920(64)};
    }
  }
`;

export default CoverupsDescription;
