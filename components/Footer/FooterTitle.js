import styled from '@emotion/styled';

const FooterTitle = ({ text }) => {
  return <FooterTitleStyled className='FooterTitle'>{text}</FooterTitleStyled>;
};

const FooterTitleStyled = styled.h4`
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  text-decoration: underline;
  font-size: ${(props) => props.theme.pixelToVieWidth(14)};
  line-height: ${(props) => props.theme.pixelToVieWidth(21)};
  font-weight: 400;

  ${(props) => props.theme.mediaDesktop} {
    font-size: ${(props) => props.theme.pixelToVieWidth1920(15)};
    line-height: ${(props) => props.theme.pixelToVieWidth1920(23)};
    text-decoration: none;
    font-weight: 700;
    color: ${(props) => props.theme.colors.grey2};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(10)};
  }
`;

export default FooterTitle;
