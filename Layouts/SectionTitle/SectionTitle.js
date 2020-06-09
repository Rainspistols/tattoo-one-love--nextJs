import styled from '@emotion/styled';
import Container from '../Container/Container';

const SectionTitle = ({ text }) => {
  return <SectionTitleStyled>{text}</SectionTitleStyled>;
};

const SectionTitleStyled = styled.h2`
  font-weight: 500;
  color: ${(props) => props.theme.colors.pink};
  text-transform: uppercase;

  font-size: ${(props) => props.theme.pixelToVieWidth(18)};
  line-height: ${(props) => props.theme.pixelToVieWidth(20)};
  margin-bottom: ${(props) => props.theme.pixelToVieWidth(10)};
  /* MEDIA */
  ${(props) => props.theme.mediaDesktop} {
    font-size:  ${(props) => props.theme.pixelToVieWidth1920(30)};
    line-height: ${(props) => props.theme.pixelToVieWidth1920(30)};
`;

export default SectionTitle;
