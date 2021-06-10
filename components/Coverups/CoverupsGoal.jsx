import styled from "@emotion/styled";
import { TextWrapper, Text } from "~/pages/coverups";

const CoverupsGoal = () => {
  return (
    <GoalSection>
      <TextWrapper withBorder borderPos="top" setPadding pos="bottom" value="0">
        <Text>
          Źle wykonane tatuaże mają bardzo negatywny wpływ na postrzeganie
          branży tatuażu. Widząc nieudane tatuaże ludzie boją się ozdabiać swoje
          ciało, ponieważ nie ma żadnej gwarancji, że tatuaże będą wyglądał tak,
          jak oni chcą. Planujemy zmienić sytuację - chcemy zmniejszyć ilość
          niechcianych i nieudanych tatuaży na świecie, i zwiększyć ilość
          szczęśliwych posiadaczów wymarzonych dziar.
        </Text>
      </TextWrapper>

      <TextWrapper setPadding pos="top" value="20">
        <Text>
          Pragniemy też pomóc ludziom zakryć tatuaże związane z rasizmem,
          ksenofobią itd. Każdy musi mieć szansę na zmianę. Tatuaż powinien
          przynosić tylko te emocje, które osoba w niego wkłada, ale na pewno
          nie wstyd, rozczarowanie czy irytację.
        </Text>
      </TextWrapper>

      <TextWrapper withBorder borderPos="top">
        <Text>
          Dlatego my jako studio tatuażu i jako przedstawiciele całej branży
          tatuatorskiej ogłaszamy początek naszego projektu socjalnego „Cover to
          recover”, bo niechciany tatuaż nie musi Cię określać.
        </Text>
      </TextWrapper>
    </GoalSection>
  );
};

const GoalSection = styled.div`
  padding: ${({ theme }) => theme.vw(20)};

  ${({ theme }) => theme.mediaDesktop} {
    padding: ${({ theme }) => theme.vw1920(90)};
  }
`;

export default CoverupsGoal;
