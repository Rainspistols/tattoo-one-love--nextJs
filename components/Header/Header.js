import styled from '@emotion/styled';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Container from '../../Layouts/Container/Container';
import ImportantMessage from '../ImportantMessage/ImportantMessage';
import CookieBanner from 'react-cookie-banner';
import navigationIcon from './images/navigationIcon.svg';
import NavMenu from '../NavMenu/NavMenu';

const Header = ({ importantMessageData, categories }) => {
  return (
    <HeaderStyled>
      <CookieBanner
        className='cookieBanner'
        message="Yes, we use cookies. If you don't like it change website, we won't miss you!"
        cookie='user-has-accepted-cookies'
        disableStyle={true}
      />

      {importantMessageData && (
        <ImportantMessage
          text={importantMessageData.text}
          link={importantMessageData.link}
        />
      )}

      <nav className='Navigation'>
        <Container>
          <div className='logoBox'>
            <Logo />
          </div>

          <div className='searchBox'>
            <Search />
          </div>

          <div className='navigationBox'>
            <img className='menuIcon' src={navigationIcon} alt='menu' />
            <NavMenu categories={categories} />
          </div>
        </Container>
      </nav>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background: ${(props) => props.theme.colors.pinkGradient};
  height: 100%;

  .Navigation {
    .Container {
      display: flex;
      align-items: center;
      height: 100%;
    }
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

    .menuIcon {
      width: ${(props) => props.theme.pixelToVieWidth(40)};
    }
  }
  .searchBox {
    margin-right: 0;
    margin-left: auto;
  }
`;

export default Header;
