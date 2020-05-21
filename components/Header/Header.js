import styled from '@emotion/styled';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Container from '../../Layouts/Container/Container';
import ImportantMessage from '../ImportantMessage/ImportantMessage';
import CookieConsent from 'react-cookie-consent';
import navigationIcon from './images/navigationIcon.svg';
import NavMenu from '../NavMenu/NavMenu';
import { useState, useRef } from 'react';
import searchIcon from './images/searchIcon.svg';

const Header = ({ importantMessageData, categories }) => {
  console.log(importantMessageData)
  const [isMenuActive, setMenuActive] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);

  const navigationBox = useRef(null);

  const onMenu = () => {
    setMenuActive(true);
  };

  const onCloseMenu = () => {
    setMenuActive(false);
  };

  const onCloseSearch = () => {
    setSearchActive(false);
  };

  const onSearch = () => {
    setSearchActive(true);
  };

  return (
    <HeaderStyled>
      <CookieConsent
        cookie='user-has-accepted-cookies'
        disableStyles={true}
        location='top'
        acceptOnScroll={true}
        buttonWrapperClasses='button-close__wrapper'
        buttonClasses='button-close'
        contentClasses='cookie-message'
        buttonText='click or scroll down to agree'
      >
        Yes, we use cookies. If you don't like it change website, we won't miss
        you!
      </CookieConsent>

      {importantMessageData && (
        <ImportantMessage
          text={importantMessageData.text}
          link={importantMessageData.link}
        />
      )}

      <nav className='navigation'>
        <Container>
          <div className='wrap'>
            {isSearchActive ? null : (
              <>
                <div className='logoBox'>
                  <Logo />
                </div>

                <div className='searchBox'>
                  <img
                    src={searchIcon}
                    alt='search'
                    onClick={() => onSearch()}
                  />
                </div>
              </>
            )}
            <div
              className={
                isSearchActive ? 'navigationBox activeSearch' : 'navigationBox'
              }
              ref={navigationBox}
            >
              <button className='menuButton'>
                <img
                  className='menuIcon'
                  src={navigationIcon}
                  alt='menu'
                  onClick={() => onMenu()}
                />
              </button>

              {isMenuActive ? (
                <NavMenu onCloseMenu={onCloseMenu} categories={categories} />
              ) : null}
            </div>

            {isSearchActive ? <Search onCloseSearch={onCloseSearch} /> : null}
          </div>
        </Container>
      </nav>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background: ${(props) => props.theme.colors.pinkGradient};
  height: 100%;

  .navigation {
    .wrap {
      display: flex;
      align-items: center;
      height: ${(props) => props.theme.pixelToVieWidth(45)};
    }
  }

  .CookieConsent {
    position: absolute;
    text-align: center;
    color: ${(props) => props.theme.colors.grey4};
    background: ${(props) => props.theme.colors.white};
    border: ${(props) => props.theme.pixelToVieWidth(2)} solid
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
      background: transparent;
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
      border-top: ${(props) => props.theme.pixelToVieWidth(2)} solid
        ${(props) => props.theme.colors.pink};
      background-color: ${(props) => props.theme.colors.white};
      cursor: pointer;
    }
    .button-close__wrapper {
      width: 100%;
    }
  }

  .logoBox {
    height: 100%;
  }

  .navigationBox {
    margin-right: 0;
    margin-left: ${(props) => props.theme.pixelToVieWidth(25)};
    display: flex;

    .menuButton {
      border: none;
      background: transparent;
      cursor: pointer;
      width: ${(props) => props.theme.pixelToVieWidth(40)};
    }

    .menuIcon {
      width: ${(props) => props.theme.pixelToVieWidth(40)};
    }
  }

  .navigationBox.activeSearch {
    margin-left: 0;
    margin-right: ${(props) => props.theme.pixelToVieWidth(8)};
  }

  .searchBox {
    margin-right: 0;
    margin-left: auto;

    img {
      width: ${(props) => props.theme.pixelToVieWidth(24)};
    }
  }
`;

export default Header;
