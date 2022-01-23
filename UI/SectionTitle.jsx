import styled from '@emotion/styled';

const SectionTitle = ({ text }) => (
  <SectionTitleStyled className="SectionTitle">{text}</SectionTitleStyled>
);

const SectionTitleStyled = styled.h2`
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.pink};
  font-size: ${({ theme }) => theme.vw(18)};
  line-height: ${({ theme }) => theme.vw(20)};
  margin-bottom: ${({ theme }) => theme.vw(10)};

  ${({ theme }) => theme.mediaDesktop} {
    font-size: ${({ theme }) => theme.vw1920(30)};
    line-height: ${({ theme }) => theme.vw1920(36)};
    margin-bottom: ${({ theme }) => theme.vw1920(10)};
  }
`;

export default SectionTitle;
