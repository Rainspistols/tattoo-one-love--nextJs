import styled from '@emotion/styled';
import { useBreakpoint } from '../../utils/breakpoint';
// Components
import Container from '~/Layouts/Container/Container';
import Line from '~/UI/Line';
import FooterCopyRight from './FooterCopyRight';
import Contacts from '../Contacts/Contacts';
import FooterInformation from './FooterInformation';
import FooterSubscripion from './FooterSubscripion';
import FooterRules from './FooterRules';
import FooterTitle from './FooterTitle';

const Footer = () => {
  const breakpoint = useBreakpoint();

  return (
    <FooterStyled>
      <Container>
        <FooterInformation />
        <FooterSubscripion />
        <FooterRules />

        <div className="contact_wrap">
          <FooterTitle text="Kontakt" />
          <Contacts iconsColor="white" textColor="#E8ECF1" />
        </div>

        {breakpoint.mobile && <Line />}

        <FooterCopyRight />
      </Container>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  background: ${({ theme }) => theme.colors.grey4};
  padding: ${({ theme }) => theme.vw(20)} 0;
  position: relative;

  .contact_wrap {
    margin-bottom: ${({ theme }) => theme.vw(20)};
  }

  ${({ theme }) => theme.mediaDesktop} {
    padding: ${({ theme }) => theme.vw1920(50)} 0;

    > .Container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .contact_wrap {
      margin-bottom: ${({ theme }) => theme.vw1920(40)};

      .Contact {
        li {
          :not(:last-child) {
            margin-bottom: ${({ theme }) => theme.vw1920(10)};
          }
        }
      }

      .Contact a {
        font-size: ${({ theme }) => theme.vw1920(15)};
        line-height: ${({ theme }) => theme.vw1920(23)};
      }
    }

    .FooterSubscripion {
      order: 5;
    }
  }
`;

export default Footer;
