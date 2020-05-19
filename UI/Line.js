import styled from '@emotion/styled';

const Line = () => {
  return <LineStyled className='Line' />;
};

const LineStyled = styled.div`
  height: ${(props) => props.theme.pixelToVieWidth(1)};
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey1};
`;

export default Line;
