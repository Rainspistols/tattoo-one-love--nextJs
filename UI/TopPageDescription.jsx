import styled from '@emotion/styled';
import Image from 'next/image';

const TopPageDescription = ({ imageUrl, imageDescription, textContent }) => (
  <TopPageDescriptionStyled>
    <ImageWrapperStyled>
      <Image src={imageUrl} alt={imageDescription} layout='fill' objectFit='contain' />
    </ImageWrapperStyled>
    <TextContentStyled>{textContent}</TextContentStyled>
  </TopPageDescriptionStyled>
);

const TopPageDescriptionStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  ${({ theme }) => theme.mediaDesktop} {
    grid-template-columns: auto 1fr;
  }
`;

const ImageWrapperStyled = styled.div`
  position: relative;
  height: ${({ theme }) => theme.vw(375)};
  order: 2;

  ${({ theme }) => theme.mediaDesktop} {
    width: ${({ theme }) => theme.vw1920(665)};
    height: ${({ theme }) => theme.vw1920(664)};
    order: 1;
  }
`;

const TextContentStyled = styled.p`
  font-size: ${({ theme }) => theme.vw(13)};
  line-height: ${({ theme }) => theme.vw(20)};
  padding: ${({ theme }) => `${theme.vw(32)} ${theme.vw(60)}`};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  order: 1;

  ${({ theme }) => theme.mediaDesktop} {
    font-size: ${({ theme }) => theme.vw1920(29)};
    line-height: ${({ theme }) => theme.vw1920(43)};
    padding: ${({ theme }) => `${theme.vw1920(117)} ${theme.vw1920(64)}`};
    order: 2;
  }
`;

export default TopPageDescription;
