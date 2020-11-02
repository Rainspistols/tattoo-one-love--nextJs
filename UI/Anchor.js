import styled from "@emotion/styled";

const Anchor = ({ id, headerHeight }) => {
  return <AnchorStyled id={id} headerHeight={headerHeight} />;
};

const AnchorStyled = styled.a`
  position: relative;
  top: ${(props) => "-" + props.headerHeight + "px"};
`;

export default Anchor;
