import styled from '@emotion/styled';
import FooterTitle from './FooterTitle';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useWindowSize from '@/hooks/useWindowSize';

const FooterInformation = () => {
  const informationListData = [
    { title: 'Głowna', href: '/', id: 1 },
    { title: 'Kontakt', href: '#contact', id: 2 },
    { title: 'Sitemap', href: '/sitemap', id: 3 },
  ];

  const windowWidth = useWindowSize().width;

  const router = useRouter();

  return (
    <FooterInformationStyled>
      <FooterTitle text='Informacja' />
      <ul id={windowWidth < 1280 ? 'contact' : ''}>
        {informationListData.map(({ title, href, id }) => (
          <li key={id}>
            <Link href={href}>
              <a className={router.pathname == href ? 'inactive' : ''}>
                {title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </FooterInformationStyled>
  );
};

const FooterInformationStyled = styled.section`
  margin-bottom: ${({ theme }) => theme.pixelToVieWidth(10)};

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  a {
    font-size: ${({ theme }) => theme.pixelToVieWidth(13)};
    line-height: ${({ theme }) => theme.pixelToVieWidth(20)};
    margin-right: ${({ theme }) => theme.pixelToVieWidth(30)};
    display: flex;
    color: ${({ theme }) => theme.colors.grey1};
    font-weight: 400;
  }

  img {
    padding-right: ${({ theme }) => theme.pixelToVieWidth(10)};
  }

  ${({ theme }) => theme.mediaDesktop} {
    ul {
      flex-direction: column;

      li {
        :not(:last-child) {
          margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(10)};
        }
      }
    }

    a {
      font-size: ${({ theme }) => theme.pixelToVieWidth1920(15)};
      line-height: ${({ theme }) => theme.pixelToVieWidth1920(23)};
      margin-right: 0;
    }
  }
`;

export default FooterInformation;
