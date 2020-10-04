import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Contacts from '../Contacts/Contacts';

const NavigationDesktop = () => {
  const router = useRouter();

  const menuLinksData = [
    { title: 'Główna', href: '/', id: 1 },
    { title: 'O nas', href: '/#about-us', id: 2 },
    { title: 'Kontakt', href: '/#contact', id: 3 },
    { title: 'Prace', href: '/#works', id: 4 },
  ];

  return (
    <NavigationDesktopStyled>
      <ul className='navigationList'>
        {menuLinksData.map(({ title, href, id }) => (
          <li className={router.pathname === href ? 'selected' : null} key={id}>
            <Link href={href}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <Contacts iconsColor='white' textColor='white' />
    </NavigationDesktopStyled>
  );
};

const NavigationDesktopStyled = styled.div`
  ${({ theme }) => theme.mediaDesktop} {
    ${({ theme }) => theme.flex.between};
    height: 100%;
    flex-grow: 1;
    margin-left: ${({ theme }) => theme.vw1920(105)};

    .navigationList {
      ${({ theme }) => theme.flex.center}
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.vw1920(20)};
      line-height: ${({ theme }) => theme.vw1920(30)};
      margin-right: ${({ theme }) => theme.vw1920(90)};
      height: 100%;

      li {
        height: 100%;
        letter-spacing: ${({ theme }) => theme.vw1920(1.5)};
        display: flex;
        align-items: center;
        justify-content: center;
        :not(:last-child) {
          margin-right: ${({ theme }) => theme.vw1920(27)};
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
          height: ${({ theme }) => theme.vw1920(3)};
          background: ${({ theme }) => theme.colors.whiteGradient};
          border-radius: ${({ theme }) => theme.vw1920(10)}
            ${({ theme }) => theme.vw1920(10)} 0 0;
        }
      }
    }

    .Contact {
      margin-bottom: 0;

      li {
        :first-of-type {
          margin-bottom: ${({ theme }) => theme.vw1920(7)};
        }
        :last-child {
          display: none;
        }
      }

      a {
        font-size: ${({ theme }) => theme.vw1920(15)};
        line-height: ${({ theme }) => theme.vw1920(23)};

        svg {
          height: ${({ theme }) => theme.vw1920(15)};
          width: auto;
          margin-right: ${({ theme }) => theme.vw1920(10)};
        }
      }
    }
  }
`;

export default NavigationDesktop;
