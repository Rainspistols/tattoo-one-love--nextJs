import styled from '@emotion/styled';

const FooterTitle = ({ text }) => {
  return <FooterTitleStyled>{text}</FooterTitleStyled>;
};

const FooterTitleStyled = styled.h4`
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  text-decoration: underline;
  font-size: ${(props) => props.theme.pixelToVieWidth(14)};
  line-height: ${(props) => props.theme.pixelToVieWidth(21)};
  font-weight: 400;
`;

export default FooterTitle;
