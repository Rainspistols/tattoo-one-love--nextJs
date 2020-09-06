import styled from '@emotion/styled';
// Components
import Contact from '../ContactsBlock/Contact';
import Container from '../../Layouts/Container/Container';
import Logo from '../../UI/Logo/Logo';
import Link from 'next/link';
import CategoryBtn from '../../UI/CategoryBtn';
// Icons
import { vkIcon, facebookIcon, instagramIcon } from './images/';
import closeIcon from './images/closeIcon.svg';

const NavMenu = ({ categories, onCloseMenu, onMenuItem, onCategory }) => {
  const menuLinksData = [
    { title: 'Główna', href: '/', id: 1 },
    { title: 'Blog', href: '/blog', id: 2 },
    { title: 'O nac', href: '/#about-us', id: 3 },
    { title: 'Prace', href: '/#works', id: 4 },
  ];

  const socialsListData = [
    {
      title: 'Facebook',
      href: 'https://www.facebook.com/',
      icon: facebookIcon,
      id: 1,
    },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: instagramIcon,
      id: 2,
    },
    { title: 'Vkontakte', href: 'https://www.vk.com/', icon: vkIcon, id: 3 },
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
          {menuLinksData.map(({ title, href, className, id }) => (
            <li
              onClick={onMenuItem.bind(this)}
              key={id}
              className={className}
              style={{
                backgroundImage: ` url('/images/NavMenu/${id}.jpg') `,
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
              <li key={category.id}>
                <CategoryBtn
                  text={category.name}
                  slug={category.slug}
                  onClick={onCategory.bind(this)}
                  isLink={true}
                />
              </li>
            ))}
          </ul>
        </section>

        <Contact iconsColor='#7393A7' textColor='#7393A7' />

        <section className='socialsList'>
          <h3 className='menu-title'>socials</h3>
          <ul>
            {socialsListData.map(({ title, href, icon, id }) => (
              <li key={id}>
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
  background: ${({ theme }) => theme.colors.white};
  background-clip: border-box;
  z-index: 10;
  border-bottom: ${({ theme }) => theme.pixelToVieWidth(10)} solid
    ${({ theme }) => theme.colors.grey3};

  .logoAndBtn {
    ${({ theme }) => theme.flexBetween};
    width: 100%;
    padding: ${({ theme }) => theme.pixelToVieWidth(5)} 0;

    button {
      border: none;
      background: transparent;
      cursor: pointer;
    }

    .closeIcon {
      width: ${({ theme }) => theme.pixelToVieWidth(40)};
      height: ${({ theme }) => theme.pixelToVieWidth(40)};
      color: ${({ theme }) => theme.colors.darkBlue};
    }
  }

  .menuLinks {
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(18)};
    li {
      background: ${({ theme }) => theme.colors.darkBlue};
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.pixelToVieWidth(40)};
      line-height: ${({ theme }) => theme.pixelToVieWidth(48)};
      cursor: pointer;
      text-align: center;
      font-weight: 700;
      text-transform: uppercase;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      a {
        padding: ${({ theme }) => theme.pixelToVieWidth(10)} 0;
        display: block;
      }
    }
  }

  .blogCategories {
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(10)};
    .categories {
      display: flex;
      flex-wrap: wrap;

      li {
        margin: 0 ${({ theme }) => theme.pixelToVieWidth(5)}
          ${({ theme }) => theme.pixelToVieWidth(8)} 0;

        .CategoryBtn {
          font-size: ${({ theme }) => theme.pixelToVieWidth(18)};
          line-height: ${({ theme }) => theme.pixelToVieWidth(27)};
          border: ${({ theme }) => theme.pixelToVieWidth(1)} solid
            ${({ theme }) => theme.colors.grey3};
          color: ${({ theme }) => theme.colors.grey3};
          padding: ${({ theme }) => theme.pixelToVieWidth(10)};
        }
      }
    }
  }

  .menu-title {
    font-size: ${({ theme }) => theme.pixelToVieWidth(12)};
    line-height: ${({ theme }) => theme.pixelToVieWidth(18)};
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(10)};
    color: ${({ theme }) => theme.colors.grey4};
  }

  .socialsList {
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(16)};

    ul {
      display: flex;
      align-items: center;
      li {
        :not(:last-child) {
          margin-right: ${({ theme }) => theme.pixelToVieWidth(25)};
        }
        img {
          width: ${({ theme }) => theme.pixelToVieWidth(35)};
        }
      }
    }
  }
`;

export default NavMenu;
