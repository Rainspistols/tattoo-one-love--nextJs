import styled from '@emotion/styled';
import { useState, useRef } from 'react';
import { useBreakpoint } from 'utils/breakpoint';

import NavMenuMobile from '../NavMenuMobile/NavMenuMobile';

const NavigationMobile = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const navigationBox = useRef(null);
  const breakpoint = useBreakpoint();

  return (
    <NavigationMobileStyled>
      <div className='navigationBox' ref={navigationBox}>
        <button className='menuButton'>
          <img
            className='menuIcon'
            src='/Header/navigationIcon.svg'
            alt='menu'
            onClick={setMenuVisible.bind(this, true)}
          />
        </button>

        {breakpoint.mobile && (
          <NavMenuMobile
            isMenuVisible={isMenuVisible}
            onCloseMenu={setMenuVisible.bind(this, false)}
            onMenuItem={setMenuVisible.bind(this, false)}
          />
        )}
      </div>
    </NavigationMobileStyled>
  );
};

const NavigationMobileStyled = styled.div`
  .navigationBox {
    margin-right: 0;
    margin-left: ${({ theme }) => theme.vw(25)};
    display: flex;

    .menuButton {
      border: none;
      background: transparent;
      cursor: pointer;
      width: ${({ theme }) => theme.vw(40)};
    }

    .menuIcon {
      width: ${({ theme }) => theme.vw(40)};
    }
  }

  ${({ theme }) => theme.mediaDesktop} {
    .Logo {
      margin-right: ${({ theme }) => theme.vw1920(121)};
    }

    .navigationBox {
      display: none;
    }
  }
`;

export default NavigationMobile;
