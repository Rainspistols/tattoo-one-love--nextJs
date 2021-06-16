import styled from "@emotion/styled";

const StatementsListItem = ({ step, title, children }) => (
  <StatementsListItemStyled step={step}>{children}</StatementsListItemStyled>
);

const StatementsListItemStyled = styled.li`
  padding-top: ${({ theme }) => theme.vw(46)};
  font-size: ${({ theme }) => theme.vw(20)};
  line-height: ${({ theme }) => theme.vw(30)};
  border-top: 2px solid ${({ theme }) => theme.colors.grey6};
  position: relative;

  ${({ theme }) => theme.mediaDesktop} {
    padding-top: ${({ theme }) => theme.vw1920(92)};
    font-size: ${({ theme }) => theme.vw1920(20)};
    line-height: ${({ theme }) => theme.vw1920(30)};
  }

  &:before {
    content: "${({ step }) => step}";
    position: absolute;
    border-radius: 50%;
    ${({ theme }) => theme.flex.center}
    width: ${({ theme }) => theme.vw(40)};
    height: ${({ theme }) => theme.vw(40)};
    background: ${({ theme }) => theme.colors.grey6};
    top: -${({ theme }) => theme.vw(20)};
    font-size: ${({ theme }) => theme.vw(21)};
    line-height: ${({ theme }) => theme.vw(32)};

    ${({ theme }) => theme.mediaDesktop} {
      width: ${({ theme }) => theme.vw1920(80)};
      height: ${({ theme }) => theme.vw1920(80)};
      top: -${({ theme }) => theme.vw1920(40)};
      font-size: ${({ theme }) => theme.vw1920(42)};
      line-height: ${({ theme }) => theme.vw1920(63)};
    }
  }
`;

export default StatementsListItem;
