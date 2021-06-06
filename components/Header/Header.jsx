import styled from '@emotion/styled';

import CookieAgreement from '../CookieAgreement/CookieAgreement';
import Navigation from '../Navigation/Navigation';

const Header = () => (
  <HeaderStyled>
    <CookieAgreement />

    <Navigation />
  </HeaderStyled>
);

const HeaderStyled = styled.header`
  background: ${({ theme }) => theme.colors.pinkGradient};
  z-index: 10;
  box-shadow: ${({ theme }) => `${theme.colors.pink} 0px ${theme.vw(1)} ${theme.vw(2)} 0px`};
  position: fixed;
  top: 0;
  width: 100%;
  transition: box-shadow 1s ease-ease-in-out;
  height: ${({ theme }) => theme.headerHeight.mobile};

  ${({ theme }) => theme.mediaDesktop} {
    box-shadow: ${({ theme }) => `${theme.colors.pink} 0 ${theme.vw1920(2)} ${theme.vw1920(4)} 0`};
    height: ${({ theme }) => theme.headerHeight.desktop};
  }
`;

export default Header;
