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
        Yes, we use cookies. If you don't like it change website, we won't miss
        you!
      </CookieConsent>
    </CookieAgreementStyled>
  );
};

const CookieAgreementStyled = styled.section`
  .CookieConsent {
    position: absolute;
    text-align: center;
    color: ${({ theme }) => theme.colors.grey4};
    background: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => theme.pixelToVieWidth(2)} solid
      ${({ theme }) => theme.colors.pink};
    display: flex;
    flex-wrap: wrap;
    z-index: 10000;

    .cookie-message {
      font-size: ${({ theme }) => theme.pixelToVieWidth(14)};
      line-height: ${({ theme }) => theme.pixelToVieWidth(16)};
      font-weight: 400;
      padding: ${({ theme }) => theme.pixelToVieWidth(10)}
        ${({ theme }) => theme.pixelToVieWidth(20)};
      background: transparent;
    }

    .button-close {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      text-transform: uppercase;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.grey4};
      width: 100%;
      padding: ${({ theme }) => theme.pixelToVieWidth(10)} 0;
      margin: 0;
      border-radius: 0;
      border: none;
      border-top: ${({ theme }) => theme.pixelToVieWidth(2)} solid
        ${({ theme }) => theme.colors.pink};
      background-color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
    }
    .button-close__wrapper {
      width: 100%;
    }
`;

export default CookieAgreement;
