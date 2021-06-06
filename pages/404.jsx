import styled from '@emotion/styled';
import Image from 'next/image';

const Custom404 = () => (
  <Custom404MainContainer>
    <Image src="/404.jpg" layout="fill" objectFit="contain" />
  </Custom404MainContainer>
);

const Custom404MainContainer = styled.div`
  position: relative;
  width: 90%;
  height: ${({ theme }) => theme.vw(300)};
  margin: ${({ theme }) => theme.vw(50)} auto;

  ${({ theme }) => theme.mediaDesktop} {
    height: ${({ theme }) => theme.vw1920(400)};
    margin: ${({ theme }) => theme.vw1920(100)} auto;
  }
`;

export default Custom404;
