import StatementsListItem from "./StatementsListItem";
import styled from "@emotion/styled";

const StatementsList = ({ data }) => (
  <StatementsListStyled>
    {data.map(({ id, step, title, textContent }) => (
      <StatementsListItem key={id} step={step} title={title}>
        {textContent}
      </StatementsListItem>
    ))}
  </StatementsListStyled>
);

const StatementsListStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.vw(56)};
  margin-top: ${({ theme }) => theme.vw(60)};

  ${({ theme }) => theme.mediaDesktop} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${({ theme }) => theme.vw1920(56)};
    margin-top: ${({ theme }) => theme.vw1920(125)};
  }
`;

export default StatementsList;
