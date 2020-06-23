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
    font-size: ${(props) => props.theme.pixelToVieWidth(14)};
    line-height: ${(props) => props.theme.pixelToVieWidth(21)};
    padding: ${(props) => props.theme.pixelToVieWidth(10)};
    text-transform: uppercase;
    background: transparent;
    border-right: ${(props) => props.theme.pixelToVieWidth(1)} solid
      ${(props) => props.theme.colors.grey1};
    border-left: ${(props) => props.theme.pixelToVieWidth(1)} solid
      ${(props) => props.theme.colors.grey1};
    color: ${(props) => props.theme.colors.grey3};
    border-bottom: 0;
    border-top: 0;
    &:not(:first-of-type) {
      border-left: none;
    }
  }

  ${(props) => props.theme.mediaDesktop} {
    button {
      font-size: ${(props) => props.theme.pixelToVieWidth1920(18)};
      line-height: ${(props) => props.theme.pixelToVieWidth1920(27)};
      padding: ${(props) => props.theme.pixelToVieWidth1920(25)}
        ${(props) => props.theme.pixelToVieWidth1920(20)};

      border-right: ${(props) => props.theme.pixelToVieWidth1920(1)} solid
        ${(props) => props.theme.colors.grey2};
      border-left: ${(props) => props.theme.pixelToVieWidth1920(1)} solid
        ${(props) => props.theme.colors.grey2};
    }
  }
`;

export default Filters;
