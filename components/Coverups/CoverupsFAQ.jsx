import styled from "@emotion/styled";
import FAQListItem from "./FAQ/FAQListItem";

const CoverupsFAQ = () => {
  const data = [
    {
      id: "0",
      title: "Co ten projekt oznacza?",
      textContent:
        "W ramach projektu, tatuatorzy naszego studia raz w miesiącu będą wykonywali darmowy cover tatuażu.",
      sublist: [],
    },
    {
      id: "1",
      title: "Kto może wziąć udział?",
      textContent:
        "Każdy tatuator będzie wybierał kandydata, kierując się warunkami opisanymi niżej i zakresem swoich umiejętności.",
      sublist: [],
    },
    {
      id: "2",
      title: "Jak się skontaktować?",
      textContent: "",
      sublist: [
        {
          id: "0",
          textContent: "Zgłoś się na maila tattooonelovewwa@gmail.com",
        },
        {
          id: "1",
          textContent: 'W tytule napisz "Cover to Recover"',
        },
        {
          id: "2",
          textContent:
            "Opowiedz jak dawno ten tatuaż był zrobiony, i dlaczego chcesz go zakryć",
        },
        {
          id: "3",
          textContent: "Załącz zdjęcie przy dobrym oświetleniu",
        },
        {
          id: "4",
          textContent: "Opisz swój pomysł na zakrycie",
        },
        {
          id: "5",
          textContent: "Oczekuj na informację zwrotną",
        },
      ],
    },
  ];

  return (
    <FAQSection>
      <FAQListStyled>
        {data.map(({ id, title, textContent, sublist }) => (
          <FAQListItem key={id} title={title} sublist={sublist}>
            {textContent}
          </FAQListItem>
        ))}
      </FAQListStyled>
    </FAQSection>
  );
};

const FAQSection = styled.div`
  padding: 0 ${({ theme }) => theme.vw(20)};

  ${({ theme }) => theme.mediaDesktop} {
    padding: 0 ${({ theme }) => theme.vw1920(90)};
  }
`;

const FAQListStyled = styled.ul`
  padding: 0 ${({ theme }) => theme.vw(40)};

  ${({ theme }) => theme.mediaDesktop} {
    padding: 0 ${({ theme }) => theme.vw1920(160)};;
  }
`;

export default CoverupsFAQ;
