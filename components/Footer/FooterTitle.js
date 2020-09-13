import styled from '@emotion/styled';

const FooterTitle = ({ text }) => {
  return <FooterTitleStyled className='FooterTitle'>{text}</FooterTitleStyled>;
};

const FooterTitleStyled = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  text-decoration: underline;
  font-size: ${({ theme }) => theme.vw(14)};
  line-height: ${({ theme }) => theme.vw(21)};
  font-weight: 400;

  ${({ theme }) => theme.mediaDesktop} {
    font-size: ${({ theme }) => theme.vw1920(15)};
    line-height: ${({ theme }) => theme.vw1920(23)};
    text-decoration: none;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.grey2};
    margin-bottom: ${({ theme }) => theme.vw1920(10)};
  }
`;

export default FooterTitle;
