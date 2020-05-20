import styled from '@emotion/styled';
import Container from '../../Layouts/Container/Container';
import Logo from '../Logo/Logo';
import closeIcon from './images/closeIcon.svg';
import Link from 'next/link';
import CategoryBtn from '../../UI/CategoryBtn';
import {
  mailIcon,
  mapIcon,
  phoneIcon,
  vkIcon,
  facebookIcon,
  instagramIcon,
} from './images/';

const NavMenu = ({ categories, onClose }) => {
  const menuLinksData = [
    { title: 'home', href: '/' },
    { title: 'About us', href: '/about-us' },
    { title: 'Blog', href: '/blog' },
    { title: 'Works', href: '/works' },
  ];
  const contactsListData = [
    {
      title: 'Gostyńska 41, 01-151, Warszawa (Wola)',
      href:
        'https://www.google.com/maps/place/Gosty%C5%84ska+41,+01-151+Warszawa/@52.243836,20.9636062,17z/data=!3m1!4b1!4m5!3m4!1s0x471ecb77869776ab:0x9adb88cc791e3c4a!8m2!3d52.243836!4d20.9657949',
      icon: mapIcon,
    },
    { title: '+ 48 79 590 38 21 ', href: '"tel:+48795903821', icon: phoneIcon },
    {
      title: 'tattooonelove@gmail.com',
      href: 'mailto:tattooonelove@gmail.com',
      icon: mailIcon,
    },
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
              onClick={() => onClose()}
            />
          </button>
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

      <Container>
        <section className='blogCategories'>
          <h3 className='menu-title'>Blog categories</h3>
          <ul className='categories'>
            {categories.map((category) => (
              <li key={category.id}>
                <CategoryBtn text={category.category} slug={category.slug} />
              </li>
            ))}
          </ul>
        </section>

        <section className='contactList'>
          <h3 className='menu-title'>contacts</h3>
          <ul>
            {contactsListData.map(({ title, href, icon }, index) => (
              <li key={index}>
                <a href={href}>
                  <img src={icon} alt='' />
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </section>

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
        margin-bottom: ${(props) => props.theme.pixelToVieWidth(8)};
        margin-right: ${(props) => props.theme.pixelToVieWidth(5)};

        .CategoryBtn {
          font-size: ${(props) => props.theme.pixelToVieWidth(18)};
          line-height: ${(props) => props.theme.pixelToVieWidth(27)};
          padding: ${(props) => props.theme.pixelToVieWidth(10)};
          border: ${(props) => props.theme.pixelToVieWidth(1)} solid
            ${(props) => props.theme.colors.grey3};
          color: ${(props) => props.theme.colors.grey3};
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

  .contactList {
    font-size: ${(props) => props.theme.pixelToVieWidth(13)};
    line-height: ${(props) => props.theme.pixelToVieWidth(20)};
    color: ${(props) => props.theme.colors.grey3};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(20)};

    a {
      display: flex;
      color: ${(props) => props.theme.colors.grey3};

      img {
        margin-right: ${(props) => props.theme.pixelToVieWidth(10)};
      }
    }
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
