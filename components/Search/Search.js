import styled from '@emotion/styled';
import searchIcon from './images/searchIcon.svg';

const Search = () => {
  return (
    <SearchStyled className='Search'>
      <img src={searchIcon} alt='search' />
    </SearchStyled>
  );
};

const SearchStyled = styled.div`
  img {
    width: ${(24 / 375) * 100 + 'vw'};
  }
`;

export default Search;
