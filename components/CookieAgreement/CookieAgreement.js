import CookieConsent from 'react-cookie-consent';
import styled from '@emotion/styled';
import cookieBg from './cookie-background.svg';

const CookieAgreement = () => {
  return (
    <CookieAgreementStyled>
      <CookieConsent
        cookie='user-has-accepted-cookies'
        disableStyles={true}
        location='bottom'
        acceptOnScrollPercentage={10}
        acceptOnScroll={true}
        buttonWrapperClasses='button-close__wrapper'
        buttonClasses='button-close'
        contentClasses='cookie-message'
        buttonText='Przewiń w dół, aby wyrazić zgodę'
      >
        W ramach naszej witryny stosujemy pliki cookies, które są niezbędne do
        poprawnego działania serwisu. Są one również wykorzystywane w celach
        reklamowych oraz aby zapewnić najwyższy poziom usług.
      </CookieConsent>
    </CookieAgreementStyled>
  );
};

const CookieAgreementStyled = styled.section`
  .CookieConsent {
    position: fixed;
    bottom: 0;
    flex-wrap: wrap;
    z-index: 10000;

    width: 100%;
    display: flex;

    font-size: ${({ theme }) => theme.vw(14)};
    line-height: 1.2;
    text-align: center;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grey4};

    background-color: ${({ theme }) => theme.colors.white};

    border: ${({ theme }) => `${theme.vw(2)} solid ${theme.colors.pink}`};

    box-sizing: border-box;

    ::after {
      content: '';

      position: absolute;
      top: 0;
      left: 0;
      background-image: url(${cookieBg});
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0.1;
      width: 100%;
      height: 100%;
    }

    .cookie-message {
      padding: ${({ theme }) => `${theme.vw(10)} ${theme.vw(20)}`};
      width: 100%;

      background: transparent;
    }

    .button-close {
      width: 100%;
      margin: 0;
      padding: ${({ theme }) => theme.vw(10)} 0;

      text-transform: uppercase;
      color: inherit;
      font-weight: 600;

      border-radius: 0;
      border: none;
      border-top: ${({ theme }) => `${theme.vw(2)} solid ${theme.colors.pink}`};
      background-color: transparent;
    }
    .button-close__wrapper {
      width: 100%;
    }
  }

  ${({ theme }) => theme.mediaDesktop} {
    .CookieConsent {
      font-size: ${({ theme }) => theme.vw1920(14)};

      border: ${({ theme }) => `${theme.vw1920(3)} solid ${theme.colors.pink}`};

      .cookie-message {
        padding: ${({ theme }) => `${theme.vw1920(10)} ${theme.vw1920(20)}`};
      }

      .button-close {
        padding: ${({ theme }) => theme.vw1920(10)} 0;

        border-top: ${({ theme }) =>
          `${theme.vw1920(2)} solid ${theme.colors.pink}`};
      }
    }
  }
`;

export default CookieAgreement;
