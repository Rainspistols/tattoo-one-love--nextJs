import styled from "@emotion/styled";

const CoverupsMemo = () => {
  const data = [
    {
      id: "0",
      textContent:
        "Cover zawsze będzie większy niż poprzedni tatuaż, bo inaczej nie da się uzyskać oczekiwanego efektu.",
    },
    {
      id: "1",
      textContent:
        "Jeśli poprzednio zrobiony tatuaż ma za głęboko wbity tusz, to jest duża szansa, że po zrobieniu coveru stary tatuaż będzie prześwitywał.",
    },
    {
      id: "2",
      textContent:
        "Całkowicie zakryć stary tatuaż, tak żeby nawet jego posiadacz nie zauważał, udaje się w bardzo małej ilości przypadków, więc trzeba być przygotowanym/-ą na to, że nawet po zrobieniu coveru, stary tatuaż będzie trochę widoczny. Ewentualna poprawka tatuażu po zrobieniu nie jest włączona w ofertę, ale może być zrobiona odpłatnie.",
    },
  ];

  return (
    <CoverupsMemoStyled>
      <h4 className="title">O czym warto pamiętać</h4>
      <ul className="memo-list">
        {data.map(({ id, textContent }) => (
          <li className="memo-list__item" key={id}>
            {textContent}
          </li>
        ))}
      </ul>
    </CoverupsMemoStyled>
  );
};

const CoverupsMemoStyled = styled.section`
  background-color: #e8ecf2;
  box-sizing: border-box;
  max-width: ${({ theme }) => theme.vw(375)};
  padding: ${({ theme }) => theme.vw(25)};
  margin: ${({ theme }) => theme.vw(70)} auto;

  ${({ theme }) => theme.mediaDesktop} {
    max-width: ${({ theme }) => theme.vw1920(1000)};
    padding: ${({ theme }) => theme.vw1920(50)};
    margin: ${({ theme }) => theme.vw1920(140)} auto;
  }

  .title {
    font-size: ${({ theme }) => theme.vw(24)};
    line-height: ${({ theme }) => theme.vw(36)};
    margin-bottom: ${({ theme }) => theme.vw(15)};

    ${({ theme }) => theme.mediaDesktop} {
      font-size: ${({ theme }) => theme.vw1920(48)};
      line-height: ${({ theme }) => theme.vw1920(72)};
      margin-bottom: ${({ theme }) => theme.vw1920(15)};
    }
  }

  .memo-list {
    &__item {
      font-size: ${({ theme }) => theme.vw(13)};
      line-height: ${({ theme }) => theme.vw(20)};
      margin-bottom: ${({ theme }) => theme.vw(15)};
      position: relative;

      ${({ theme }) => theme.mediaDesktop} {
        font-size: ${({ theme }) => theme.vw1920(20)};
        line-height: ${({ theme }) => theme.vw1920(30)};
        margin-bottom: ${({ theme }) => theme.vw1920(15)};
      }

      &:before {
        content: "-";
        position: absolute;
        left: -${({ theme }) => theme.vw(10)};

        ${({ theme }) => theme.mediaDesktop} {
          left: -${({ theme }) => theme.vw1920(20)};
        }
      }
    }
  }
`;

export default CoverupsMemo;
