import styled from '@emotion/styled';

const Container = ({ children }) => {
  return <ContainerStyled className='container'>{children}</ContainerStyled>;
};

const ContainerStyled = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  width: '100%';
  padding: 0 20px;
`;

export default Container;
