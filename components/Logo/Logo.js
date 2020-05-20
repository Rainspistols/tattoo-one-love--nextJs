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
  width: ${(props) => props.theme.pixelToVieWidth(98)};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%);
  height: ${(props) => props.theme.pixelToVieWidth(45)};

  img {
    width: ${(props) => props.theme.pixelToVieWidth(45)};
  }
`;

export default Logo;
