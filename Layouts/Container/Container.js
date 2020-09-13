import styled from '@emotion/styled';

const Container = ({ children, disable }) => {
  return disable ? (
    <>{children}</>
  ) : (
    <ContainerStyled className='Container'>{children}</ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  padding: 0 ${({ theme }) => theme.vw(20)};

  ${({ theme }) => theme.mediaDesktop} {
    padding: 0;
    max-width: ${({ theme }) => theme.vw1920(1280)};
  }
`;

export default Container;
