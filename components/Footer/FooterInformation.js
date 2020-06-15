import styled from '@emotion/styled';
import FooterTitle from './FooterTitle';
import Link from 'next/link';

const FooterInformation = () => {
  const informationListData = [
    { title: 'Home', href: '/' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact', href: '/contact' },
    { title: 'Sitemap', href: '/sitemap' },
  ];

  return (
    <FooterInformationStyled>
      <FooterTitle text='Information' />
      <ul>
        {informationListData.map(({ title, href }, index) => (
          <li key={index}>
            <Link href={href}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </FooterInformationStyled>
  );
};

const FooterInformationStyled = styled.section`
  margin-bottom: ${(props) => props.theme.pixelToVieWidth(10)};

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  a {
    font-size: ${(props) => props.theme.pixelToVieWidth(13)};
    line-height: ${(props) => props.theme.pixelToVieWidth(20)};
    margin-right: ${(props) => props.theme.pixelToVieWidth(30)};
    display: flex;
    color: ${(props) => props.theme.colors.grey1};
    font-weight: 400;
  }

  img {
    padding-right: ${(props) => props.theme.pixelToVieWidth(10)};
  }

  ${(props) => props.theme.mediaDesktop} {
    ul {
      flex-direction: column;

      li {
        :not(:last-child) {
          margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(10)};
        }
      }
    }

    a {
      font-size: ${(props) => props.theme.pixelToVieWidth1920(15)};
      line-height: ${(props) => props.theme.pixelToVieWidth1920(23)};
      margin-right: 0;
    }
  }
`;

export default FooterInformation;
