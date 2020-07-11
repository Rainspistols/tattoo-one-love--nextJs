import styled from '@emotion/styled';

const SectionTitle = ({ text }) => {
  return (
    <SectionTitleStyled className='SectionTitle'>{text}</SectionTitleStyled>
  );
};

const SectionTitleStyled = styled.h2`
  font-weight: 500;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.pink};
  font-size: ${({ theme }) => theme.pixelToVieWidth(18)};
  line-height: ${({ theme }) => theme.pixelToVieWidth(20)};
  margin-bottom: ${({ theme }) => theme.pixelToVieWidth(10)};

  /* MEDIA */
  ${({ theme }) => theme.mediaDesktop} {
    font-size: ${({ theme }) => theme.pixelToVieWidth1920(30)};
    line-height: ${({ theme }) => theme.pixelToVieWidth1920(36)};
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(10)};
  }
`;

export default SectionTitle;
