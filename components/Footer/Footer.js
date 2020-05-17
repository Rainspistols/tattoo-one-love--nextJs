import styled from '@emotion/styled';
import Container from '../../Layouts/Container/Container';
import FooterTitle from './FooterTitle';
import Link from 'next/link';
import { mailIcon, mapIcon, phoneIcon } from './images/';
import Line from '../../UI/Line';
import FooterCopyRight from './FooterCopyRight';

const Footer = () => {
  const informationListData = [
    { title: 'Home', href: '/' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact', href: '/contact' },
    { title: 'Sitemap', href: '/sitemap' },
  ];

  const subscriptionListData = [
    { title: 'Facebook', href: 'https://www.facebook.com/' },
    { title: 'Vkontakte', href: 'https://www.vk.com/' },
    { title: 'Instagram', href: 'https://www.instagram.com/' },
  ];

  const rulesListData = [
    { title: 'Politics', href: '/politics' },
    { title: 'Politics', href: '/politics' },
    { title: 'User agreement', href: '/user-agreement' },
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

  return (
    <FooterStyled>
      <Container>
        <section>
          <FooterTitle text='Information ' />
          <ul>
            {informationListData.map(({ title, href }, index) => (
              <li>
                <Link href={href} key={index}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <FooterTitle text='Subscription ' />
          <ul>
            {subscriptionListData.map(({ title, href }, index) => (
              <li index={index}>
                <a href={href} target='_blank' rel='nofollow noopener'>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <FooterTitle text='Rules ' />
          <ul>
            {rulesListData.map(({ title, href }, index) => (
              <li>
                <Link href={href} key={index}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <FooterTitle text='Contacts ' />
          <ul>
            {contactsListData.map(({ title, href, icon }, index) => (
              <li index={index}>
                <a href={href}>
                  <img src={icon} alt='' />
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <Line />

        <FooterCopyRight />
      </Container>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  background: ${(props) => props.theme.colors.grey4};
  padding: ${(props) => props.theme.pixelToVieWidth(20)} 0;

  section {
    &:not(:last-child) {
      margin-bottom: ${(props) => props.theme.pixelToVieWidth(10)};
    }
    &:last-child {
      margin-bottom: ${(props) => props.theme.pixelToVieWidth(20)};
    }
  }

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
`;

export default Footer;
