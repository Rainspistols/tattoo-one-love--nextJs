import styled from '@emotion/styled';
import Container from '../../Layouts/Container/Container';
import { bgMobile, logo } from './images';

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <img className='logo' src={logo} alt='one love tattoo logo' />
        <p className='text1'>Bodies are not born. Bodies are made.</p>
        <p className='text2'>ECO FRIENDLY SALON IN THE HEART OF WARSAW</p>
      </Container>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: cover;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-weight: 500;

  .logo {
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(25)};
    width: ${(props) => props.theme.pixelToVieWidth(100)};
    height: ${(props) => props.theme.pixelToVieWidth(100)};
    margin-left: auto;
    margin-right: auto;
  }

  .Container {
    padding-bottom: ${(props) => props.theme.pixelToVieWidth(57)};
    padding-top: ${(props) => props.theme.pixelToVieWidth(35)};
  }

  .text1 {
    font-size: ${(props) => props.theme.pixelToVieWidth(38)};
    line-height: ${(props) => props.theme.pixelToVieWidth(50)};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(20)};

    text-transform: uppercase;
    padding-left: ${(props) => props.theme.pixelToVieWidth(10)};
    padding-right: ${(props) => props.theme.pixelToVieWidth(10)};
  }

  .text2 {
    font-size: ${(props) => props.theme.pixelToVieWidth(18)};
    line-height: ${(props) => props.theme.pixelToVieWidth(20)};
    text-transform: uppercase;
    padding-left: ${(props) => props.theme.pixelToVieWidth(50)};
    padding-right: ${(props) => props.theme.pixelToVieWidth(50)};
  }
`;

export default Hero;
