import styled from '@emotion/styled';
import Container from '../../Layouts/Container/Container';
import Logo from '../Logo/Logo';
import closeIcon from './images/closeIcon.svg';
import Link from 'next/link';
import CategoryBtn from '../../UI/CategoryBtn';
import { vkIcon, facebookIcon, instagramIcon } from './images/';
import Contact from '../ContactsBlock/Contact';

const NavMenu = ({ categories, onCloseMenu, onMenuItem, onCategory }) => {
  const menuLinksData = [
    { title: 'Główna', href: '/' },
    { title: 'Blog', href: '/blog' },
    { title: 'O nac', href: '/#about-us' },
    { title: 'Prace', href: '/#works' },
  ];

  const socialsListData = [
    {
      title: 'Facebook',
      href: 'https://www.facebook.com/',
      icon: facebookIcon,
    },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: instagramIcon,
    },
    { title: 'Vkontakte', href: 'https://www.vk.com/', icon: vkIcon },
  ];

  return (
    <NavMenuStyled>
      <Container>
        <div className='logoAndBtn'>
          <Logo />
          <button>
            <img
              className='closeIcon'
              src={closeIcon}
              alt='close menu'
              onClick={onCloseMenu.bind(this)}
            />
          </button>
        </div>
      </Container>

      <nav>
        <ul className='menuLinks'>
          {menuLinksData.map(({ title, href, className }, index) => (
            <li
              onClick={onMenuItem.bind(this)}
              key={index}
              className={className}
              style={{
                backgroundImage: ` url('/images/NavMenu/${index + 1}.jpg') `,
              }}
            >
              <Link href={href}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Container>
        <section className='blogCategories'>
          <h3 className='menu-title'>Blog categories</h3>
          <ul className='categories'>
            {categories.map((category) => (
              <li key={category.id} onClick={onCategory.bind(this)}>
                <CategoryBtn text={category.name} slug={category.slug} />
              </li>
            ))}
          </ul>
        </section>

        <Contact iconsColor='#7393A7' textColor='#7393A7' />

        <section className='socialsList'>
          <h3 className='menu-title'>socials</h3>
          <ul>
            {socialsListData.map(({ title, href, icon }, index) => (
              <li key={index}>
                <a href={href} target='_blank' rel='nofollow noopener'>
                  <img src={icon} alt={title} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Container>
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
  border-bottom: ${(props) => props.theme.pixelToVieWidth(10)} solid
    ${(props) => props.theme.colors.grey3};

  .logoAndBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${(props) => props.theme.pixelToVieWidth(5)} 0;

    button {
      border: none;
      background: transparent;
      cursor: pointer;
    }

    .closeIcon {
      width: ${(props) => props.theme.pixelToVieWidth(40)};
      height: ${(props) => props.theme.pixelToVieWidth(40)};
      color: ${(props) => props.theme.colors.darkBlue};
    }
  }

  .menuLinks {
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(18)};
    li {
      background: ${(props) => props.theme.colors.darkBlue};
      color: ${(props) => props.theme.colors.white};
      font-size: ${(props) => props.theme.pixelToVieWidth(40)};
      line-height: ${(props) => props.theme.pixelToVieWidth(48)};
      cursor: pointer;
      text-align: center;
      font-weight: 700;
      text-transform: uppercase;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      a {
        padding: ${(props) => props.theme.pixelToVieWidth(10)} 0;
        display: block;
      }
    }
  }

  .blogCategories {
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(10)};
    .categories {
      display: flex;
      flex-wrap: wrap;

      li {
        margin: 0 ${({ theme }) => theme.pixelToVieWidth(5)}
          ${({ theme }) => theme.pixelToVieWidth(8)} 0;

        .CategoryBtn {
          font-size: ${(props) => props.theme.pixelToVieWidth(18)};
          line-height: ${(props) => props.theme.pixelToVieWidth(27)};
          border: ${(props) => props.theme.pixelToVieWidth(1)} solid
            ${(props) => props.theme.colors.grey3};
          color: ${(props) => props.theme.colors.grey3};
          padding: ${(props) => props.theme.pixelToVieWidth(10)};
        }
      }
    }
  }

  .menu-title {
    font-size: ${(props) => props.theme.pixelToVieWidth(12)};
    line-height: ${(props) => props.theme.pixelToVieWidth(18)};
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(10)};
    color: ${(props) => props.theme.colors.grey4};
  }

  .socialsList {
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(16)};

    ul {
      display: flex;
      align-items: center;
      li {
        :not(:last-child) {
          margin-right: ${(props) => props.theme.pixelToVieWidth(25)};
        }
        img {
          width: ${(props) => props.theme.pixelToVieWidth(35)};
        }
      }
    }
  }
`;

export default NavMenu;
