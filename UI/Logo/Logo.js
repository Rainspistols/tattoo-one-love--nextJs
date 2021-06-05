import styled from '@emotion/styled';
import Link from 'next/link';
import LogoImg from './images/logo--black.svg';
import { useRouter } from 'next/router';

const Logo = () => {
  const router = useRouter();
  return (
    <StyledLogo className="Logo">
      <Link href="/">
        <a className={router.pathname == '/' ? 'inactive' : ''}>
          <LogoImg aria-label="Tattoo one love logo" width="45" height="38" alt="" />
        </a>
      </Link>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) => theme.vw(98)};
  ${({ theme }) => theme.flex.center};
  clip-path: polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%);
  height: 100%;

  svg {
    width: ${({ theme }) => theme.vw(45)};
    height: auto;
  }

  ${({ theme }) => theme.mediaDesktop} {
    width: ${({ theme }) => theme.vw1920(174)};
    height: 100%;

    svg {
      width: ${({ theme }) => theme.vw1920(105)};
    }
  }
`;

export default Logo;
