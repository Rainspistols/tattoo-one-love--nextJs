import styled from '@emotion/styled';
import Link from 'next/link';
import { mapIcon, phoneIcon } from './images/';
import { useRouter } from 'next/router';

const NavigationDesktop = () => {
  const router = useRouter();

  const menuLinksData = [
    { title: 'Home', href: '/' },
    { title: 'Blog', href: '/blog' },
    { title: 'About us', href: '/#about-us' },
    { title: 'Contact', href: '/contact' },
    { title: 'Works', href: '/#works' },
  ];

  const contactsListData = [
    {
      title: 'Gostyńska 41, 01-151, Warszawa (Wola)',
      href:
        'https://www.google.com/maps/place/Gosty%C5%84ska+41,+01-151+Warszawa/@52.243836,20.9636062,17z/data=!3m1!4b1!4m5!3m4!1s0x471ecb77869776ab:0x9adb88cc791e3c4a!8m2!3d52.243836!4d20.9657949',
      icon: mapIcon,
    },
    { title: '+ 48 79 590 38 21 ', href: 'tel:+48795903821', icon: phoneIcon },
  ];
  
  return (
    <NavigationDesktopStyled>
      <ul className='navigationList'>
        {menuLinksData.map(({ title, href }, index) => (
          <li
            className={router.pathname === href ? 'selected' : null}
            key={index}
          >
            <Link href={href}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <ul className='contactsList'>
        {contactsListData.map(({ title, href, icon }, index) => (
          <li key={index}>
            <a href={href}>
              <img src={icon} alt='' />
              {title}
            </a>
          </li>
        ))}
      </ul>
    </NavigationDesktopStyled>
  );
};

const NavigationDesktopStyled = styled.nav`
  display: none;
  height: 100%;

  ${(props) => props.theme.mediaDesktop} {
    display: flex;

    .navigationList {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colors.white};
      font-size: ${(props) => props.theme.pixelToVieWidth1920(20)};
      line-height: ${(props) => props.theme.pixelToVieWidth1920(30)};
      margin-right: ${(props) => props.theme.pixelToVieWidth1920(90)};
      height: 100%;

      li {
        height: 100%;
        letter-spacing: ${(props) => props.theme.pixelToVieWidth1920(1.5)};
        display: flex;
        align-items: center;
        justify-content: center;
        :not(:last-child) {
          margin-right: ${(props) => props.theme.pixelToVieWidth1920(27)};
        }
        a {
          white-space: nowrap;
        }
      }
      .selected {
        font-weight: 700;
        position: relative;
        :after {
          position: absolute;
          content: '';
          bottom: 0;
          left: 0;
          width: 100%;
          height: ${(props) => props.theme.pixelToVieWidth1920(3)};
          background: ${(props) => props.theme.colors.whiteGradient};
          border-radius: ${(props) => props.theme.pixelToVieWidth1920(10)}
            ${(props) => props.theme.pixelToVieWidth1920(10)} 0 0;
        }
      }
    }

    .contactsList {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      font-size: ${(props) => props.theme.pixelToVieWidth1920(15)};
      line-height: ${(props) => props.theme.pixelToVieWidth1920(23)};
      margin: auto;
      color: ${(props) => props.theme.colors.white};

      li {
        width: 100%;
        letter-spacing: ${(props) => props.theme.pixelToVieWidth1920(1)};
        :not(:last-child) {
          margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(7)};
        }
      }

      a {
        display: flex;
        align-items: center;
        img {
          margin-right: ${(props) => props.theme.pixelToVieWidth1920(5)};
        }
      }
    }
  }
`;

export default NavigationDesktop;
