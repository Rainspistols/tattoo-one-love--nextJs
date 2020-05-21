import styled from '@emotion/styled';
import search from './images/search.svg';
import close from './images/close.svg';

const Search = ({ onCloseSearch }) => {
  return (
    <SearchStyled className='Search'>
      <input type='text' placeholder='Tattoo healing' />
      <button className='btn-search btn'>
        <img src={search} alt='search' />
      </button>

      <button className='btn-close btn' onClick={() => onCloseSearch()}>
        <img src={close} alt='close' />
      </button>
    </SearchStyled>
  );
};

const SearchStyled = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  input {
    display: block;
    height: 100%;
    box-sizing: border-box;
    width: calc(100% + ${(props) => props.theme.pixelToVieWidth(20)});
    padding: ${(props) => props.theme.pixelToVieWidth(17)}
      ${(props) => props.theme.pixelToVieWidth(100)}
      ${(props) => props.theme.pixelToVieWidth(17)}
      ${(props) => props.theme.pixelToVieWidth(17)};
    font-size: ${(props) => props.theme.pixelToVieWidth(14)};
    border: 0;
    border-bottom: ${(props) => props.theme.pixelToVieWidth(1)} solid
      ${(props) => props.theme.colors.pink};
    color: ${(props) => props.theme.colors.grey4};
    ::placeholder {
      font-size: ${(props) => props.theme.pixelToVieWidth(14)};
      color: ${(props) => props.theme.colors.grey3};
    }
  }

  .btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: ${(props) => props.theme.pixelToVieWidth(30)};
    height: ${(props) => props.theme.pixelToVieWidth(30)};
    border-radius: ${(props) => props.theme.pixelToVieWidth(3)};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn-close {
    background: ${(props) => props.theme.colors.pink};
    right: 0;
  }

  .btn-search {
    background: ${(props) => props.theme.colors.grey2};
    right: ${(props) => props.theme.pixelToVieWidth(36)};
  }
`;

export default Search;
