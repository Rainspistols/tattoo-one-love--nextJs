import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

const Line = () => {
  const [stateWidth, setStateWidth] = useState(null);

  if (process.browser) {
    useEffect(() => {
      setStateWidth(window.innerWidth);
    }, [window.innerWidth]);
  }

  return stateWidth < 1280 && <LineStyled className='Line' />;
};

const LineStyled = styled.div`
  height: ${({ theme }) => theme.vw(1)};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey1};
`;

export default Line;
