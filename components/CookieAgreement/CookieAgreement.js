import CookieConsent from 'react-cookie-consent';
import styled from '@emotion/styled';

const CookieAgreement = () => {
  return (
    <CookieAgreementStyled>
      <CookieConsent
        cookie='user-has-accepted-cookies'
        disableStyles={true}
        location='bottom'
        acceptOnScrollPercentage={5}
        acceptOnScroll={true}
        buttonWrapperClasses='button-close__wrapper'
        buttonClasses='button-close'
        contentClasses='cookie-message'
        buttonText='click or scroll down to agree'
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </CookieAgreementStyled>
  );
};

const CookieAgreementStyled = styled.section`
  .CookieConsent {
    position: absolute;
    flex-wrap: wrap;
    z-index: 10000;

    width: 100%;
    display: flex;

    font-size: ${({ theme }) => theme.pixelToVieWidth(14)};
    line-height: 1.2;
    text-align: center;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grey4};

    background: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) =>
      `${theme.pixelToVieWidth(2)} solid ${theme.colors.pink}`};

    box-sizing: border-box;

    .cookie-message {
      padding: ${({ theme }) =>
        `${theme.pixelToVieWidth(10)} ${theme.pixelToVieWidth(20)}`};
      width: 100%;

      background: transparent;
    }

    .button-close {
      width: 100%;
      margin: 0;
      padding: ${({ theme }) => theme.pixelToVieWidth(10)} 0;

      text-transform: uppercase;
      color: inherit;
      font-weight: 600;

      border-radius: 0;
      border: none;
      border-top: ${({ theme }) =>
        `${theme.pixelToVieWidth(2)} solid ${theme.colors.pink}`};
      background-color: ${({ theme }) => theme.colors.white};
    }
    .button-close__wrapper {
      width: 100%;
    }
  }

  ${({ theme }) => theme.mediaDesktop} {
    .CookieConsent {
      font-size: ${({ theme }) => theme.pixelToVieWidth1920(14)};

      border: ${({ theme }) =>
        `${theme.pixelToVieWidth1920(3)} solid ${theme.colors.pink}`};

      .cookie-message {
        padding: ${({ theme }) =>
          `${theme.pixelToVieWidth1920(10)} ${theme.pixelToVieWidth1920(20)}`};
      }

      .button-close {
        padding: ${({ theme }) => theme.pixelToVieWidth1920(10)} 0;

        border-top: ${({ theme }) =>
          `${theme.pixelToVieWidth1920(2)} solid ${theme.colors.pink}`};
      }
    }
  }
`;

export default CookieAgreement;
