import styled from '@emotion/styled';
import { FaCopyright } from 'react-icons/fa';

const FooterCopyRight = () => {
  return (
    <FooterCopyRightStyled>
      <div className='row'>
        <FaCopyright />
        <p>Tattoo One Love All Rights Reserved</p>
      </div>

      <p className='smallText'>
        Kopiowanie jakiejkolwiek informacji, artykułów lub materiałów jest
        zabronione.
      </p>
    </FooterCopyRightStyled>
  );
};

const FooterCopyRightStyled = styled.div`
  padding: ${(props) => props.theme.pixelToVieWidth(7)} 0 0;

  .row {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
    font-size: ${(props) => props.theme.pixelToVieWidth(16)};
    line-height: ${(props) => props.theme.pixelToVieWidth(25)};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(8)};
    font-weight: 400;

    svg {
      margin-right: ${(props) => props.theme.pixelToVieWidth(10)};
    }
  }

  .smallText {
    font-size: ${(props) => props.theme.pixelToVieWidth(10)};
    line-height: ${(props) => props.theme.pixelToVieWidth(10)};
    color: ${(props) => props.theme.colors.grey2};
    font-weight: 400;
  }

  ${(props) => props.theme.mediaDesktop} {
    margin-bottom: 0;
    width: 25%;
    padding: 0;

    .row {
      margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(16)};
      text-align: center;

      p {
        font-size: ${(props) => props.theme.pixelToVieWidth1920(20)};
        line-height: ${(props) => props.theme.pixelToVieWidth1920(30)};
        font-weight: 700;
      }

      svg {
        width: ${(props) => props.theme.pixelToVieWidth1920(20)};
        height: auto;
        margin-right: ${(props) => props.theme.pixelToVieWidth1920(10)};
      }
    }

    .smallText {
      font-size: ${(props) => props.theme.pixelToVieWidth1920(10)};
      line-height: ${(props) => props.theme.pixelToVieWidth1920(12)};
    }
  }
`;

export default FooterCopyRight;
