import styled from '@emotion/styled';
import Container from '../../Layouts/Container/Container';
import Logo from '../Logo/Logo';
import closeIcon from './images/closeIcon.svg';
import Link from 'next/link';
import CategoryBtn from '../../UI/CategoryBtn';

const NavMenu = ({ categories }) => {
  const menuLinksData = [
    { title: 'home', href: '/' },
    { title: 'About us', href: '/about-us' },
    { title: 'Blog', href: '/blog' },
    { title: 'Works', href: '/works' },
  ];

  return (
    <NavMenuStyled>
      <Container>
        <div className='logoAndBtn'>
          <Logo />
          <img className='closeIcon' src={closeIcon} alt='close menu' />
        </div>
      </Container>

      <nav>
        <ul className='menuLinks'>
          {menuLinksData.map(({ title, href, className }, index) => (
            <li
              key={index}
              className={className}
              style={{
                backgroundImage: ` url('./images/NavMenu/${index + 1}.jpg') `,
              }}
            >
              <Link href={href}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <ul className='blogCategories'>
        {/* {categories.map((category) => (
          <li key={category.id}>
            <Link href={category.slug}>
              <a>
                <CategoryBtn category={category} />
              </a>
            </Link>
          </li>
        ))} */}
      </ul>
    </NavMenuStyled>
  );
};

const NavMenuStyled = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  background-clip: border-box;
  z-index: 10;
  display: none;

  .logoAndBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${(props) => props.theme.pixelToVieWidth(5)} 0;

    .closeIcon {
      width: 40px;
      height: 40px;
      color: ${(props) => props.theme.colors.darkBlue};
    }
  }

  .menuLinks {
    margin-bottom: 18px;
    li {
      background: black;
      color: white;
      font-size: 40px;
      line-height: 48px;
      cursor: pointer;
      text-align: center;
      font-weight: 700;
      text-transform: uppercase;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      a {
        padding: 10px 0;
        display: block;
      }
    }
  }

  .blogCategories {
  }
`;

export default NavMenu;
