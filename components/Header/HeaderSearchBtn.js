import styled from '@emotion/styled';
import searchIcon from './images/searchIcon.svg';

const HeaderSearchBtn = ({ setSearchActive }) => {
  return (
    <HeaderSearchBtnStyled className='searchBox'>
      <img
        src={searchIcon}
        alt='search'
        onClick={setSearchActive.bind(this, true)}
      />
    </HeaderSearchBtnStyled>
  );
};

const HeaderSearchBtnStyled = styled.button`
  border: none;
  background-color: transparent;
  margin-right: 0;
  margin-left: auto;

  img {
    width: ${({ theme }) => theme.pixelToVieWidth(24)};
    cursor: pointer;
  }
  /* MEDIA */
  ${({ theme }) => theme.mediaDesktop} {
    img {
      width: ${({ theme }) => theme.pixelToVieWidth1920(20)};
    }
  }
`;

export default HeaderSearchBtn;
