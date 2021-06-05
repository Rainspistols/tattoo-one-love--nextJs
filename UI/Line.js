import styled from '@emotion/styled';
import { useBreakpoint } from 'utils/breakpoint';

const Line = () => {
  const breakpoint = useBreakpoint();

  return breakpoint.mobile && <LineStyled className="Line" />;
};

const LineStyled = styled.div`
  height: ${({ theme }) => theme.vw(1)};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey1};
`;

export default Line;
