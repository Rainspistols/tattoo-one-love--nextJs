import styled from '@emotion/styled';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Navigation from '../Navigation/Navigation';
import Container from '../../UI/Container/Container';

const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <div className='logoBox'>
          <Logo />
        </div>

        <div className='searchBox'>
          <Search />
        </div>

        <div className='navigationBox'>
          <Navigation />
        </div>
      </Container>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background: ${(props) => props.theme.colors.pinkGradient};
  height: ${(45 / 375) * 100 + 'vw'};

  .container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .logoBox {
    height: 100%;
  }

  .navigationBox {
    margin-right: 0;
    margin-left: ${(25 / 375) * 100 + 'vw'};
  }
  .searchBox {
    margin-right: 0;
    margin-left: auto;
  }
`;

export default Header;
