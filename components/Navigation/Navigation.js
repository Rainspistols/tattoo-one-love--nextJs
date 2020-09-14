import styled from '@emotion/styled';
import { useBreakpoint } from '../../utils/breakpoint';

import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';
import Container from '@/Layouts/Container/Container';
import Logo from '@/UI/Logo/Logo';

const Navigation = () => {
  const breakpoint = useBreakpoint();

  return (
    <NavigationStyled>
      <Container>
        <div className='wrap'>
          <Logo />

          {breakpoint.mobile ? <NavigationMobile /> : <NavigationDesktop />}
        </div>
      </Container>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  .wrap {
    ${({ theme }) => theme.flex.between};
    height: ${({ theme }) => theme.vw(45)};
  }

  ${({ theme }) => theme.mediaDesktop} {
    .wrap {
      height: ${({ theme }) => theme.vw1920(94)};
    }
  }
`;

export default Navigation;
