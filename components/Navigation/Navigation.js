import styled from '@emotion/styled';
import navigationIcon from './images/navigationIcon.svg';

const Navigation = () => {
  return (
    <NavigationStyled>
      <img src={navigationIcon} alt='menu'/>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  img {
    width: ${(40 / 375) * 100 + 'vw'};
  }
`;

export default Navigation;
