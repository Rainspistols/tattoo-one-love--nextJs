import styled from '@emotion/styled';
import useWindowDimensions from '../hooks/useWindowDimension';
import { useState, useEffect } from 'react';

const Line = () => {
  const { width } = useWindowDimensions();
  const [stateWidth, setStateWidth] = useState(null);

  useEffect(() => {
    setStateWidth(width);
  }, [width]);
  return stateWidth < 1280 && <LineStyled className='Line' />;
};

const LineStyled = styled.div`
  height: ${(props) => props.theme.pixelToVieWidth(1)};
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey1};
`;

export default Line;
