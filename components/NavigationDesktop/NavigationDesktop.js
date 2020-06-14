import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Contact from '../ContactsBlock/Contact';
import useWindowDimensions from '../../hooks/useWindowDimension';
import { useState, useEffect } from 'react';

const NavigationDesktop = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [stateWidth, setStateWidth] = useState(null);

  useEffect(() => {
    setStateWidth(width);
  }, []);

  const menuLinksData = [
    { title: 'Home', href: '/' },
    { title: 'Blog', href: '/blog' },
    { title: 'About us', href: '/#about-us' },
    { title: 'Contact', href: '/contact' },
    { title: 'Works', href: '/#works' },
  ];

  return (
    stateWidth >= 1280 && (
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

        <Contact iconsColor='white' textColor='white' />
      </NavigationDesktopStyled>
    )
  );
};

const NavigationDesktopStyled = styled.nav`
  ${(props) => props.theme.mediaDesktop} {
    ${(props) => props.theme.flexBetween}
    height: 100%;

    .navigationList {
      ${(props) => props.theme.flexCenter}
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

    .Contact {
      margin-bottom: 0;

      li {
        :first-of-type {
          margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(7)};
        }
        :last-child {
          display: none;
        }
      }

      a {
        font-size: ${(props) => props.theme.pixelToVieWidth1920(15)};
        line-height: ${(props) => props.theme.pixelToVieWidth1920(23)};

        svg {
          height: ${(props) => props.theme.pixelToVieWidth1920(15)};
          width: auto;
          margin-right: ${(props) => props.theme.pixelToVieWidth1920(10)};
        }
      }
    }
  }
`;

export default NavigationDesktop;
