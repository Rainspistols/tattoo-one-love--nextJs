import CoverupsHeader from "~/components/Coverups/CoverupsHeader";
import CoverupsDescription from "~/components/Coverups/CoverupsDescription";
import CoverupsFAQ from "~/components/Coverups/CoverupsFAQ";
import CoverupsGoal from "~/components/Coverups/CoverupsGoal";
import Container from "~/Layouts/Container/Container";
import styled from "@emotion/styled";

const Coverups = () => {
  return (
    <>
      <CoverupsHeader />
      <Container>
        <CoverupsDescription />
        <CoverupsGoal />
        <CoverupsFAQ />
      </Container>
    </>
  );
};

export const TextWrapper = styled.div`
  padding: ${({ theme }) => theme.vw(32)} ${({ theme }) => theme.vw(16)};

  ${({ theme }) => theme.mediaDesktop} {
    padding: ${({ theme }) => theme.vw1920(117)}
      ${({ theme }) => theme.vw1920(64)};
  }

  ${({ withBorder, borderPos }) => {
    return withBorder && `border-${borderPos}: 1px solid #D8E2EB`;
  }}

  ${({ withBg }) => {
    return withBg && "background-color: #f4f4f4";
  }};

  ${({ setPadding, pos, value }) => {
    return setPadding && `padding-${pos}: ${value}px !important`;
  }};
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.vw(13)};
  line-height: ${({ theme }) => theme.vw(20)};

  ${({ theme }) => theme.mediaDesktop} {
    font-size: ${({ theme }) => theme.vw1920(29)};
    line-height: ${({ theme }) => theme.vw1920(43)};
  }
`;

export default Coverups;
