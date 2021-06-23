import styled from '@emotion/styled';
import Image from 'next/image';

const TopPageDescription = ({ imageUrl, textContent }) => (
  <ContainerStyled>
    <ImageWrapperStyled>
      <Image src={imageUrl} layout='fill' objectFit='contain' />
    </ImageWrapperStyled>
    <TextContentStyled>{textContent}</TextContentStyled>
  </ContainerStyled>
);

const ContainerStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mediaDesktop} {
    grid-template-columns: auto 1fr;
  }
`;

const ImageWrapperStyled = styled.div`
  position: relative;
  width: ${({ theme }) => theme.vw(375)};
  height: ${({ theme }) => theme.vw(375)};
  order: 2;

  ${({ theme }) => theme.mediaDesktop} {
    position: relative;
    width: ${({ theme }) => theme.vw1920(665)};
    height: ${({ theme }) => theme.vw1920(664)};
    order: 1;
  }
`;

const TextContentStyled = styled.p`
  font-size: ${({ theme }) => theme.vw(13)};
  line-height: ${({ theme }) => theme.vw(20)};
  padding: ${({ theme }) => theme.vw(32)} ${({ theme }) => theme.vw(60)};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  order: 1;

  ${({ theme }) => theme.mediaDesktop} {
    font-size: ${({ theme }) => theme.vw1920(29)};
    line-height: ${({ theme }) => theme.vw1920(43)};
    padding: ${({ theme }) => theme.vw1920(117)} ${({ theme }) => theme.vw1920(64)};
    order: 2;
  }
`;

export default TopPageDescription;
