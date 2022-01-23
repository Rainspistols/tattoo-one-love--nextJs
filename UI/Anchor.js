import styled from '@emotion/styled';

const Anchor = ({ id, headerHeight }) => {
  return <AnchorStyled id={id} headerHeight={headerHeight} />;
};

const AnchorStyled = styled.a`
  position: relative;
  top: ${({ theme: { headerHeight } }) => '-' + headerHeight.mobile};

  ${({ theme: { mediaDesktop } }) => mediaDesktop} {
    top: ${({ theme: { headerHeight } }) => '-' + headerHeight.desktop};
  }
`;

export default Anchor;
