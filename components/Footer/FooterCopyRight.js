import styled from '@emotion/styled';
import copyrightIcon from './images/copyright.svg';

const FooterCopyRight = () => {
  return (
    <FooterCopyRightStyled>
      <div className='row'>
        <img src={copyrightIcon} alt='copyright' />
        <p>2020 tattoo one love</p>
      </div>

      <p className='smallText'>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et
      </p>
    </FooterCopyRightStyled>
  );
};

const FooterCopyRightStyled = styled.div`
  padding: ${(props) => props.theme.pixelToVieWidth(7)} 0 0;

  .row {
    display: flex;
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
    font-size: ${(props) => props.theme.pixelToVieWidth(16)};
    line-height: ${(props) => props.theme.pixelToVieWidth(25)};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(8)};
    font-weight: 400;
  }

  .smallText {
    font-size: ${(props) => props.theme.pixelToVieWidth(10)};
    line-height: ${(props) => props.theme.pixelToVieWidth(10)};
    color: ${(props) => props.theme.colors.grey2};
    font-weight: 400;
  }
`;

export default FooterCopyRight;
