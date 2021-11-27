import styled from '@emotion/styled';

const AnchorStyled = styled.a`
  position: relative;
  /* 5px extra gap */
  top: ${({ theme: { headerHeight, vw } }) => `calc(-${headerHeight.mobile} - ${vw(5)})`};

  ${({ theme }) => theme.mediaDesktop} {
    /* 10px extra gap */
    top: ${({ theme: { headerHeight, vw1920 } }) => `calc(-${headerHeight.desktop} - ${vw1920(10)})`};
  }
`;

const Anchor = ({ id }) => <AnchorStyled id={id} />;

export default Anchor;
