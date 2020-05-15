import styled from '@emotion/styled';
import Link from 'next/link';
import logo from './images/logo--black.svg';

const Logo = () => {
  return (
    <StyledLogo>
      <Link href='/'>
        <a>
          <img src={logo} alt="Site's logo" />
        </a>
      </Link>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  background: ${(props) => props.theme.colors.white};
  width: ${(98 / 375) * 100 + 'vw'};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%);

  img {
    width: ${(45 / 375) * 100 + 'vw'};
  }
`;

export default Logo;
