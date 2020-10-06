import styled from '@emotion/styled';
// Components
import Contacts from '../Contacts/Contacts';
import Container from '@/Layouts/Container/Container';
import Logo from '@/UI/Logo/Logo';
import Link from 'next/link';

const NavMenu = ({ onCloseMenu, onMenuItem, isMenuVisible }) => {
  const menuLinksData = [
    { title: 'Główna', href: '/', id: 1 },
    { title: 'O nac', href: '/#about-us', id: 2 },
    { title: 'Prace', href: '/#works', id: 3 },
  ];

  const socialsListData = [
    {
      title: 'Facebook',
      href: 'https://www.facebook.com/',
      icon: '/NavMenuMobile/facebook.svg',
      id: 1,
    },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: '/NavMenuMobile/instagram.svg',
      id: 2,
    },
    {
      title: 'Vkontakte',
      href: 'https://www.vk.com/',
      icon: '/NavMenuMobile/vk.svg',
      id: 3,
    },
  ];

  return (
    <NavMenuStyled isMenuVisible={isMenuVisible}>
      <Container>
        <div className='logoAndBtn'>
          <Logo />
          <button>
            <img
              className='closeIcon'
              src='/NavMenuMobile/closeIcon.svg'
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
                backgroundImage: `url('/Navigation/mobile/${id}.jpg')`,
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
        <Contacts iconsColor='#7393A7' textColor='#7393A7' />

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

  display: ${(props) => (props.isMenuVisible ? 'block' : 'none')};
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  background-clip: border-box;
  z-index: 10;
  border-bottom: ${({ theme }) => theme.vw(10)} solid
    ${({ theme }) => theme.colors.grey3};

  .logoAndBtn {
    ${({ theme }) => theme.flex.between};
    width: 100%;
    padding: ${({ theme }) => theme.vw(5)} 0;

    button {
      border: none;
      background: transparent;
      cursor: pointer;
    }

    .closeIcon {
      width: ${({ theme }) => theme.vw(40)};
      height: ${({ theme }) => theme.vw(40)};
      color: ${({ theme }) => theme.colors.darkBlue};
    }
  }

  .menuLinks {
    margin-bottom: ${({ theme }) => theme.vw(18)};
    li {
      background: ${({ theme }) => theme.colors.darkBlue};
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.vw(40)};
      line-height: ${({ theme }) => theme.vw(48)};
      cursor: pointer;
      text-align: center;
      font-weight: 700;
      text-transform: uppercase;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      a {
        padding: ${({ theme }) => theme.vw(10)} 0;
        display: block;
      }
    }
  }

  .menu-title {
    font-size: ${({ theme }) => theme.vw(12)};
    line-height: ${({ theme }) => theme.vw(18)};
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: ${({ theme }) => theme.vw(10)};
    color: ${({ theme }) => theme.colors.grey4};
  }

  .socialsList {
    margin-bottom: ${({ theme }) => theme.vw(16)};

    ul {
      display: flex;
      align-items: center;
      li {
        :not(:last-child) {
          margin-right: ${({ theme }) => theme.vw(25)};
        }
        img {
          width: ${({ theme }) => theme.vw(35)};
        }
      }
    }
  }
`;

export default NavMenu;
