import styled from '@emotion/styled';
import { useState, useRef } from 'react';
// Components
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Container from '../../Layouts/Container/Container';
import ImportantMessage from '../ImportantMessage/ImportantMessage';
import NavMenu from '../NavMenu/NavMenu';
import NavigationDesktop from '../NavigationDesktop/NavigationDesktop';
import CookieAgreement from '../CookieAgreement/CookieAgreement';
import HeaderSearchBtn from './HeaderSearchBtn';
// Icons
import navigationIcon from './images/navigationIcon.svg';

const Header = ({ importantMessageJson, categories, onSearchToGo }) => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);

  const navigationBox = useRef(null);

  return (
    <HeaderStyled>
      <CookieAgreement />
      <ImportantMessage importantMessageJson={importantMessageJson} />

      <nav className='navigation'>
        <Container>
          <div className='wrap'>
            {isSearchActive ? null : (
              <>
                <Logo />

                <NavigationDesktop />

                <HeaderSearchBtn setSearchActive={setSearchActive} />
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
                  onCloseMenu={setMenuActive.bind(this, false)}
                  onMenuItem={setMenuActive.bind(this, false)}
                  onCategory={setMenuActive.bind(this, false)}
                  categories={categories}
                />
              ) : null}
            </div>

            {isSearchActive ? (
              <Search
                onSearchToGo={onSearchToGo}
                onCloseSearch={setSearchActive.bind(this, false)}
                onSubmitSearch={setSearchActive.bind(this, false)}
              />
            ) : null}
          </div>
        </Container>
      </nav>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background: ${({ theme }) => theme.colors.pinkGradient};
  height: 100%;

  .navigation {
    .wrap {
      display: flex;
      align-items: center;
      height: ${({ theme }) => theme.pixelToVieWidth(45)};
    }
  }

  .navigationBox {
    margin-right: 0;
    margin-left: ${({ theme }) => theme.pixelToVieWidth(25)};
    display: flex;

    .menuButton {
      border: none;
      background: transparent;
      cursor: pointer;
      width: ${({ theme }) => theme.pixelToVieWidth(40)};
    }

    .menuIcon {
      width: ${({ theme }) => theme.pixelToVieWidth(40)};
    }
  }

  .navigationBox.activeSearch {
    margin-left: 0;
    margin-right: ${({ theme }) => theme.pixelToVieWidth(8)};
  }

  ${({ theme }) => theme.mediaDesktop} {
    .navigation {
      .wrap {
        display: flex;
        align-items: center;
        height: ${({ theme }) => theme.pixelToVieWidth1920(94)};
      }
    }

    .Logo {
      margin-right: ${({ theme }) => theme.pixelToVieWidth1920(121)};
    }

    .navigationBox {
      display: none;
    }
  }
`;

export default Header;
