import StatementsList from "./StatementsList";
import styled from "@emotion/styled";

const CoverupsParticipation = () => {
  const data = [
    {
      id: "0",
      step: "1",
      title: "",
      textContent:
        "W grę wchodzi coverup, który może być zrobiony w jedną sesję (lub z możliwością opłaty kolejnej sesji)",
    },
    {
      id: "1",
      step: "2",
      title: "",
      textContent:
        "Tatuator wybiera wzory na zakrycie tatuażu, które będą dobrze wyglądali na konkretnym miejscu na ciele (oczywiście biorąc pod uwagę upodobania klienta)",
    },
    {
      id: "2",
      step: "3",
      title: "",
      textContent:
        "Style dla zakrycia, które możemy zaproponować: new school, neotradycyjny, akwarela, dark mandala, dark lettering, japoński lub mieszanka wyżej wymienionych stylów",
    },
    {
      id: "3",
      step: "4",
      title: "",
      textContent:
        "Bycie przygotowanym do eksperymentów jest niezbędne, bo zakrycie tatuażu jest o wiele cięższe niż po prostu naniesienie świeżego wzoru na czystą skórę - zaproponowany projekt może być dla was zaskakujący, ale tatuator na pewno wie lepiej, jak zakryć stary tatuaż",
    },
  ];
  return (
    <CoverupsParticipationStyled>
      <header>
        <h4 className="title">Warunki udziału</h4>
      </header>
      <StatementsList data={data} />
    </CoverupsParticipationStyled>
  );
};

const CoverupsParticipationStyled = styled.section`
  margin-top: ${({ theme }) => theme.vw(80)};
  ${({ theme }) => theme.mediaDesktop} {
    margin-top: ${({ theme }) => theme.vw1920(157)};
  }

  .title {
    font-size: ${({ theme }) => theme.vw(24)};
    line-height: ${({ theme }) => theme.vw(36)};
    text-align: center;

    ${({ theme }) => theme.mediaDesktop} {
      font-size: ${({ theme }) => theme.vw1920(48)};
      line-height: ${({ theme }) => theme.vw1920(72)};
    }
  }
`;

export default CoverupsParticipation;
