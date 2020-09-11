import styled from '@emotion/styled';
import { useState, useRef, useEffect } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
// Components
import Logo from '@/UI/Logo/Logo';
import Container from '@/Layouts/Container/Container';
import ImportantMessage from '../ImportantMessage/ImportantMessage';
import NavMenu from '../NavMenu/NavMenu';
import NavigationDesktop from './NavigationDesktop/NavigationDesktop';
import CookieAgreement from '../CookieAgreement/CookieAgreement';
// Icons
import navigationIcon from './images/navigationIcon.svg';

const Header = ({ importantMessageJson, categories }) => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [stateWidth, setStateWidth] = useState('');
  const windowWidth = useWindowSize().width;

  useEffect(() => {
    setStateWidth(windowWidth);
  }, [windowWidth]);

  const navigationBox = useRef(null);

  return (
    <HeaderStyled>
      <CookieAgreement />
      <ImportantMessage importantMessageJson={importantMessageJson} />

      <nav className='navigation'>
        <Container>
          <div className='wrap'>
            <Logo />
            {stateWidth >= 1280 && <NavigationDesktop />}

            <div className='navigationBox' ref={navigationBox}>
              <button className='menuButton'>
                <img
                  className='menuIcon'
                  src={navigationIcon}
                  alt='menu'
                  onClick={() => setMenuActive(true)}
                />
              </button>

              {isMenuActive && stateWidth < 1280 ? (
                <NavMenu
                  onCloseMenu={setMenuActive.bind(this, false)}
                  onMenuItem={setMenuActive.bind(this, false)}
                  onCategory={setMenuActive.bind(this, false)}
                  categories={categories}
                />
              ) : null}
            </div>
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
