import styled from "@emotion/styled";

const FAQSubListItem = ({ children }) => (
  <FAQSubListItemStyled>{children}</FAQSubListItemStyled>
);

const FAQSubListItemStyled = styled.li`
  position: relative;
  &:before {
    content: "-";
    position: absolute;
    left: -${({ theme }) => theme.vw(10)};

    ${({ theme }) => theme.mediaDesktop} {
      left: -${({ theme }) => theme.vw1920(20)};
    }
  }
`;

export default FAQSubListItem;
