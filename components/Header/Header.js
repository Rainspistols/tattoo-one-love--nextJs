import styled from '@emotion/styled';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Navigation from '../Navigation/Navigation';
import Container from '../../Layouts/Container/Container';
import ImportantMessage from '../ImportantMessage/ImportantMessage';
import CookieBanner from 'react-cookie-banner';

const Header = ({ importantMessageData }) => {
  return (
    <HeaderStyled>
      <div>
        <CookieBanner
          className='cookieBanner'
          message="Yes, we use cookies. If you don't like it change website, we won't miss you!"
          cookie='user-has-accepted-cookies'
          disableStyle={true}
        />
      </div>

      {importantMessageData && (
        <ImportantMessage
          text={importantMessageData.text}
          link={importantMessageData.link}
        />
      )}

      <Container>
        <div className='logoBox'>
          <Logo />
        </div>

        <div className='searchBox'>
          <Search />
        </div>

        <div className='navigationBox'>
          <Navigation />
        </div>
      </Container>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background: ${(props) => props.theme.colors.pinkGradient};
  height: 100%;

  .Container {
    display: flex;
    align-items: center;
    height: 100%;
    height: ${(props) => props.theme.pixelToVieWidth(45)};
  }

  .cookieBanner.react-cookie-banner {
    position: absolute;
    text-align: center;
    color: ${(props) => props.theme.colors.grey4};
    background-color: ${(props) => props.theme.colors.white};
    border: ${(props) => props.theme.pixelToVieWidth(1)} solid
      ${(props) => props.theme.colors.pink};
    display: flex;
    flex-wrap: wrap;
    z-index: 10000;

    .cookie-message {
      font-size: ${(props) => props.theme.pixelToVieWidth(14)};
      line-height: ${(props) => props.theme.pixelToVieWidth(16)};
      font-weight: 400;
      padding: ${(props) => props.theme.pixelToVieWidth(10)}
        ${(props) => props.theme.pixelToVieWidth(20)};
    }

    .button-close {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      text-transform: uppercase;
      font-weight: 600;
      color: ${(props) => props.theme.colors.grey4};
      width: 100%;
      padding: ${(props) => props.theme.pixelToVieWidth(10)} 0;
      margin: 0;
      border-radius: 0;
      border: none;
      border-top: ${(props) => props.theme.pixelToVieWidth(1)} solid
        ${(props) => props.theme.colors.pink};
      background-color: ${(props) => props.theme.colors.white};
    }
  }

  .logoBox {
    height: 100%;
  }

  .navigationBox {
    margin-right: 0;
    margin-left: ${(props) => props.theme.pixelToVieWidth(25)};
  }
  .searchBox {
    margin-right: 0;
    margin-left: auto;
  }
`;

export default Header;
