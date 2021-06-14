import styled from "@emotion/styled";

const TextContainer = ({ type, children }) => (
  <TextContainerStyled type={type}>{children}</TextContainerStyled>
);

const TextContainerStyled = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.vw(13)};
  line-height: ${({ theme }) => theme.vw(20)};
  padding: ${({ theme }) => theme.vw(32)} ${({ theme }) => theme.vw(16)};

  ${({ theme }) => theme.mediaDesktop} {
    font-size: ${({ theme }) => theme.vw1920(29)};
    line-height: ${({ theme }) => theme.vw1920(43)};
    padding: ${({ theme }) => theme.vw1920(117)}
      ${({ theme }) => theme.vw1920(64)};
  }

  border-top: 1px solid ${({ theme }) => theme.colors.lightBlue};

  &:last-child {
    padding-bottom: 0;
  }
`;

export default TextContainer;
