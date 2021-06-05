import styled from '@emotion/styled';
import { FaCopyright } from 'react-icons/fa';

const FooterCopyRight = () => {
  return (
    <FooterCopyRightStyled>
      <div className="row">
        <FaCopyright />
        <p>Tattoo One Love All Rights Reserved</p>
      </div>

      <p className="smallText">
        Kopiowanie jakiejkolwiek informacji, artykułów lub materiałów jest zabronione.
      </p>
    </FooterCopyRightStyled>
  );
};

const FooterCopyRightStyled = styled.div`
  padding: ${({ theme }) => theme.vw(7)} 0 0;

  .row {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.vw(16)};
    line-height: ${({ theme }) => theme.vw(25)};
    margin-bottom: ${({ theme }) => theme.vw(8)};
    font-weight: 400;

    svg {
      margin-right: ${({ theme }) => theme.vw(10)};
    }
  }

  .smallText {
    font-size: ${({ theme }) => theme.vw(10)};
    line-height: ${({ theme }) => theme.vw(10)};
    color: ${({ theme }) => theme.colors.grey2};
    font-weight: 400;
  }

  ${({ theme }) => theme.mediaDesktop} {
    margin-bottom: 0;
    width: 25%;
    padding: 0;

    .row {
      margin-bottom: ${({ theme }) => theme.vw1920(16)};

      p {
        font-size: ${({ theme }) => theme.vw1920(20)};
        line-height: ${({ theme }) => theme.vw1920(30)};
        font-weight: 700;
      }

      svg {
        width: ${({ theme }) => theme.vw1920(40)};
        height: auto;
        margin-right: ${({ theme }) => theme.vw1920(10)};
      }
    }

    .smallText {
      font-size: ${({ theme }) => theme.vw1920(10)};
      line-height: ${({ theme }) => theme.vw1920(12)};
    }
  }
`;

export default FooterCopyRight;
