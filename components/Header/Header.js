import styled from '@emotion/styled';

import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Container from '../../Layouts/Container/Container';
import ImportantMessage from '../ImportantMessage/ImportantMessage';
import navigationIcon from './images/navigationIcon.svg';
import NavMenu from '../NavMenu/NavMenu';
import searchIcon from './images/searchIcon.svg';
import NavigationDesktop from '../NavigationDesktop/NavigationDesktop';
import CookieAgreement from '../CookieAgreement/CookieAgreement';

import { useState, useRef } from 'react';

const Header = ({ importantMessageData, categories, onSearchToGo }) => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);

  const navigationBox = useRef(null);

  return (
    <HeaderStyled>
      <CookieAgreement />

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

                <NavigationDesktop />

                <div className='searchBox'>
                  <img
                    src={searchIcon}
                    alt='search'
                    onClick={() => setSearchActive(true)}
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
                  onClick={() => setMenuActive(true)}
                />
              </button>

              {isMenuActive ? (
                <NavMenu
                  onCloseMenu={() => setMenuActive(false)}
                  onMenuItem={() => setMenuActive(false)}
                  onCategory={() => setMenuActive(false)}
                  categories={categories}
                />
              ) : null}
            </div>

            {isSearchActive ? (
              <Search
                onSearchToGo={onSearchToGo}
                onCloseSearch={() => setSearchActive(false)}
                onSubmitSearch={() => setSearchActive(false)}
              />
            ) : null}
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
      cursor: pointer;
    }
  }

  ${(props) => props.theme.mediaDesktop} {
    .navigation {
      .wrap {
        display: flex;
        align-items: center;
        height: ${(props) => props.theme.pixelToVieWidth1920(94)};
      }
    }

    .navigationBox {
      display: none;
      .menuButton {
      }
    }

    .searchBox {
      img {
        width: ${(props) => props.theme.pixelToVieWidth1920(20)};
      }
    }

    .logoBox {
      margin-right: ${(props) => props.theme.pixelToVieWidth1920(106)};
    }
  }
`;

export default Header;
