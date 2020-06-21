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
    color: ${(props) => props.theme.colors.grey4};
    background: ${(props) => props.theme.colors.white};
    border: ${(props) => props.theme.pixelToVieWidth(2)} solid
      ${(props) => props.theme.colors.pink};
    display: flex;
    flex-wrap: wrap;
    z-index: 10000;

    .cookie-message {
      font-size: ${(props) => props.theme.pixelToVieWidth(14)};
      line-height: ${(props) => props.theme.pixelToVieWidth(16)};
      font-weight: 400;
      padding: ${(props) => props.theme.pixelToVieWidth(10)}
        ${(props) => props.theme.pixelToVieWidth(20)};
      background: transparent;
    }

    .button-close {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      text-transform: uppercase;
      font-weight: 600;
      color: ${(props) => props.theme.colors.grey4};
      width: 100%;
      padding: ${(props) => props.theme.pixelToVieWidth(10)} 0;
      margin: 0;
      border-radius: 0;
      border: none;
      border-top: ${(props) => props.theme.pixelToVieWidth(2)} solid
        ${(props) => props.theme.colors.pink};
      background-color: ${(props) => props.theme.colors.white};
      cursor: pointer;
    }
    .button-close__wrapper {
      width: 100%;
    }
`;

export default CookieAgreement;
