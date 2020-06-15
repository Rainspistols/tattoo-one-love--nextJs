import styled from '@emotion/styled';
import Link from 'next/link';
import FooterTitle from './FooterTitle';

const FooterRules = () => {
  const rulesListData = [
    { title: 'Politics', href: '/politics' },
    { title: 'Politics', href: '/politics' },
    { title: 'User agreement', href: '/user-agreement' },
  ];

  return (
    <FooterRulesStyled>
      <FooterTitle text='Rules ' />
      <ul>
        {rulesListData.map(({ title, href }, index) => (
          <li key={index}>
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
  margin-bottom: ${(props) => props.theme.pixelToVieWidth(10)};

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      :not(:last-child) {
        margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(10)};
      }
    }
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
  /* MEDIA */
  ${(props) => props.theme.mediaDesktop} {
    ul {
      flex-direction: column;
    }

    a {
      font-size: ${(props) => props.theme.pixelToVieWidth1920(15)};
      line-height: ${(props) => props.theme.pixelToVieWidth1920(23)};
      margin-right: 0;
    }
  }
`;

export default FooterRules;
