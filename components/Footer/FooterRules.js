import styled from '@emotion/styled';
import Link from 'next/link';
import FooterTitle from './FooterTitle';

const FooterRules = () => {
  const rulesListData = [
    { title: 'Regulamin', href: '/regulamin', id: 1 },
    { title: 'Polityka prywatności', href: '/polityka-prywatnosci', id: 2 },
    { title: 'Polityka Cookies', href: '/polityka-cookies', id: 3 },
  ];

  return (
    <FooterRulesStyled>
      <FooterTitle text='Polityki' />
      <ul>
        {rulesListData.map(({ title, href, id }) => (
          <li key={id}>
            <Link href={href}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </FooterRulesStyled>
  );
};

const FooterRulesStyled = styled.section`
  margin-bottom: ${({ theme }) => theme.vw(10)};

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      :not(:last-child) {
        margin-bottom: ${({ theme }) => theme.vw1920(10)};
      }
    }
  }

  a {
    font-size: ${({ theme }) => theme.vw(13)};
    line-height: ${({ theme }) => theme.vw(20)};
    margin-right: ${({ theme }) => theme.vw(30)};
    display: flex;
    color: ${({ theme }) => theme.colors.grey1};
    font-weight: 400;
  }

  img {
    padding-right: ${({ theme }) => theme.vw(10)};
  }
  /* MEDIA */
  ${({ theme }) => theme.mediaDesktop} {
    ul {
      flex-direction: column;
    }

    a {
      font-size: ${({ theme }) => theme.vw1920(15)};
      line-height: ${({ theme }) => theme.vw1920(23)};
      margin-right: 0;
    }
  }
`;

export default FooterRules;
