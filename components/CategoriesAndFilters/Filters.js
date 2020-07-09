import styled from '@emotion/styled';

const Filters = () => {
  return (
    <FiltersStyled>
      <button>Last</button>
      <button>Popular</button>
    </FiltersStyled>
  );
};

const FiltersStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 0 0 0 auto;

  button {
    font-size: ${({ theme }) => theme.pixelToVieWidth(14)};
    line-height: ${({ theme }) => theme.pixelToVieWidth(21)};
    padding: ${({ theme }) => theme.pixelToVieWidth(10)};
    text-transform: uppercase;
    background: transparent;
    border-right: ${({ theme }) => theme.pixelToVieWidth(1)} solid
      ${({ theme }) => theme.colors.grey1};
    border-left: ${({ theme }) => theme.pixelToVieWidth(1)} solid
      ${({ theme }) => theme.colors.grey1};
    color: ${({ theme }) => theme.colors.grey3};
    border-bottom: 0;
    border-top: 0;
    &:not(:first-of-type) {
      border-left: none;
    }
  }

  ${({ theme }) => theme.mediaDesktop} {
    button {
      font-size: ${({ theme }) => theme.pixelToVieWidth1920(18)};
      line-height: ${({ theme }) => theme.pixelToVieWidth1920(27)};
      padding: ${({ theme }) => theme.pixelToVieWidth1920(25)}
        ${({ theme }) => theme.pixelToVieWidth1920(20)};

      border-right: ${({ theme }) => theme.pixelToVieWidth1920(1)} solid
        ${({ theme }) => theme.colors.grey2};
      border-left: ${({ theme }) => theme.pixelToVieWidth1920(1)} solid
        ${({ theme }) => theme.colors.grey2};
    }
  }
`;

export default Filters;
