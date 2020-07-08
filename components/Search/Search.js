import styled from '@emotion/styled';
import search from './images/search.svg';
import close from './images/close.svg';
import { useRef } from 'react';
import Link from 'next/link';
import Router from 'next/router';

const Search = ({ onCloseSearch, onSearchToGo, onSubmitSearch }) => {
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    onSearchToGo(inputRef);
    onSubmitSearch();
    Router.push('/blog/search-results');
  };

  return (
    <SearchStyled className='Search'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Enter the search key-word'
          id='searchInput'
          ref={inputRef}
        />
        <button type='submit' className='visually-hidden' />

        <Link href='/blog/search-results'>
          <a
            className='btn-search btn'
            onClick={onSearchToGo.bind(this, inputRef)}
          >
            <img src={search} alt='search' />
          </a>
        </Link>

        <button className='btn-close btn' onClick={() => onCloseSearch()}>
          <img src={close} alt='close' />
        </button>
      </form>
    </SearchStyled>
  );
};

const SearchStyled = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  form {
    height: 100%;
  }

  input {
    display: block;
    height: 100%;
    box-sizing: border-box;
    width: calc(100% + ${({ theme }) => theme.pixelToVieWidth(20)});
    padding: ${({ theme }) => theme.pixelToVieWidth(17)}
      ${({ theme }) => theme.pixelToVieWidth(100)}
      ${({ theme }) => theme.pixelToVieWidth(17)}
      ${({ theme }) => theme.pixelToVieWidth(17)};
    font-size: ${({ theme }) => theme.pixelToVieWidth(14)};
    border: 0;
    border-bottom: ${({ theme }) => theme.pixelToVieWidth(1)} solid
      ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.grey4};
    ::placeholder {
      font-size: ${({ theme }) => theme.pixelToVieWidth(14)};
      color: ${({ theme }) => theme.colors.grey3};
    }
  }

  .btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: ${({ theme }) => theme.pixelToVieWidth(30)};
    height: ${({ theme }) => theme.pixelToVieWidth(30)};
    border-radius: ${({ theme }) => theme.pixelToVieWidth(3)};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .btn-close {
    background: ${({ theme }) => theme.colors.pink};
    right: 0;
  }

  .btn-search {
    background: ${({ theme }) => theme.colors.grey2};
    right: ${({ theme }) => theme.pixelToVieWidth(36)};
  }

  /* MEDIA */
  ${({ theme }) => theme.mediaDesktop} {
    input {
      padding: 0;
      border-bottom: ${({ theme }) => theme.pixelToVieWidth1920(2)} solid
        ${({ theme }) => theme.colors.pink};
      font-size: ${({ theme }) => theme.pixelToVieWidth1920(25)};
      line-height: ${({ theme }) => theme.pixelToVieWidth1920(30)};
      padding: ${({ theme }) => theme.pixelToVieWidth1920(35)}
        ${({ theme }) => theme.pixelToVieWidth1920(30)};
      width: 100%;
      ::placeholder {
        font-size: ${({ theme }) => theme.pixelToVieWidth1920(25)};
        line-height: ${({ theme }) => theme.pixelToVieWidth1920(30)};
      }
    }
    .btn {
      width: ${({ theme }) => theme.pixelToVieWidth1920(70)};
      height: ${({ theme }) => theme.pixelToVieWidth1920(70)};
    }

    .btn-close {
      right: ${({ theme }) => theme.pixelToVieWidth1920(10)};
    }

    .btn-search {
      right: ${({ theme }) => theme.pixelToVieWidth1920(90)};
    }
  }
`;

export default Search;
