import styled from "@emotion/styled";

const CoverupsFAQ = () => {
  return (
    <FAQSection>
      <ul className="list">
        <li className="list-item">
          <h2 className="list-item__title">Co ten projekt oznacza?</h2>
          <p className="list-item__content">
            W ramach projektu, tatuatorzy naszego studia raz w miesiącu będą
            wykonywali darmowy cover tatuażu.
          </p>
        </li>
        <li className="list-item">
          <h2 className="list-item__title">Kto może wziąć udział?</h2>
          <p className="list-item__content">
            Każdy tatuator będzie wybierał kandydata, kierując się warunkami
            opisanymi niżej i zakresem swoich umiejętności.
          </p>
        </li>
        <li className="list-item">
          <h2 className="list-item__title">Jak się skontaktować?</h2>
          <ul className="list-item__sublist">
            <li>Zgłoś się na maila tattooonelovewwa@gmail.com</li>
            <li>W tytule napisz „Cover to Recover”</li>
            <li>
              Opowiedz jak dawno ten tatuaż był zrobiony, i dlaczego chcesz go
              zakryć
            </li>
            <li>Załącz zdjęcie przy dobrym oświetleniu</li>
            <li>Opisz swój pomysł na zakrycie</li>
            <li>Oczekuj na informację zwrotną</li>
          </ul>
        </li>
      </ul>
    </FAQSection>
  );
};

const FAQSection = styled.div`
  padding: ${({ theme }) => theme.vw(20)};

  ${({ theme }) => theme.mediaDesktop} {
    padding: ${({ theme }) => theme.vw1920(90)};
  }

  .list {
    padding-left: 30px;
    .list-item {
      position: relative;
      margin-bottom: 50px;
      &:before {
        content: "";
        display: block;
        width: ${({ theme }) => theme.vw(20)};
        height: ${({ theme }) => theme.vw(20)};
        left: ${({ theme }) => theme.vw(-30)};
        background: #f41791;
        border-radius: 50%;
        position: absolute;

        ${({ theme }) => theme.mediaDesktop} {
          left: ${({ theme }) => theme.vw1920(-100)};
          top: 0;
        }
      }

      &__title {
        font-size: ${({ theme }) => theme.vw(20)};
        line-height: ${({ theme }) => theme.vw(30)};

        ${({ theme }) => theme.mediaDesktop} {
          font-size: ${({ theme }) => theme.vw1920(48)};
          line-height: ${({ theme }) => theme.vw1920(72)};
        }
      }

      &__content {
        font-size: ${({ theme }) => theme.vw(13)};
        line-height: ${({ theme }) => theme.vw(20)};

        ${({ theme }) => theme.mediaDesktop} {
          font-size: ${({ theme }) => theme.vw1920(29)};
          line-height: ${({ theme }) => theme.vw1920(43)};
        }
      }

      &__sublist {
      }
    }
  }
`;

export default CoverupsFAQ;
