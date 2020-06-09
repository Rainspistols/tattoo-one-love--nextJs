import styled from '@emotion/styled';

const Container = ({ children }) => {
  return <ContainerStyled className='Container'>{children}</ContainerStyled>;
};

const ContainerStyled = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  padding: 0 ${(props) => props.theme.pixelToVieWidth(20)};

  ${(props) => props.theme.mediaDesktop} {
    padding: 0;
    max-width: ${(props) => props.theme.pixelToVieWidth1920(1280)};
  }
`;

export default Container;
