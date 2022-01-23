import styled from '@emotion/styled';

const AnchorStyled = styled.a`
  position: relative;
  /* 5px extra gap */
  top: ${({ theme: { headerHeight } }) => `-${headerHeight.mobile}`};

  ${({ theme }) => theme.mediaDesktop} {
    /* 10px extra gap */
    top: ${({ theme: { headerHeight } }) => `-${headerHeight.desktop}`};
  }
`;

const Anchor = ({ id }) => <AnchorStyled id={id} />;

export default Anchor;
