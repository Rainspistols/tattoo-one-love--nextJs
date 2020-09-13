import styled from '@emotion/styled';
// Components
import ImportantMessage from '../ImportantMessage/ImportantMessage';
import CookieAgreement from '../CookieAgreement/CookieAgreement';
import Navigation from '../Navigation/Navigation';

const Header = ({ importantMessageJson }) => {
  return (
    <HeaderStyled>
      <CookieAgreement />
      <ImportantMessage importantMessageJson={importantMessageJson} />

      <Navigation />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background: ${({ theme }) => theme.colors.pinkGradient};
  height: 100%;
`;

export default Header;
