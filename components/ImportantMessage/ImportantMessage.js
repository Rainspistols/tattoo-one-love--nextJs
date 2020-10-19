import styled from '@emotion/styled';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
// Components
import Container from '@/Layouts/Container/Container';

import { IoIosClose } from 'react-icons/io';
import useSWR from 'swr';

import StrapiService from '../StrapiService/StrapiService';
import { keyframes } from '@emotion/core';

const bounce = keyframes`
  from {
    transform: translate3d(0,-100%,0)
  }

  60%, 85%, to {
    transform: translate3d(0,0,0)
  }

  75% {
    transform: translate3d(0,-20%,0)
  }

  95% {
    transform: translate3d(0,-5%,0)
  }
`;

const ImportantMessage = ({ setImHeight, imIsVisible, setImIsVisible }) => {
  const strapiService = new StrapiService();

  const { data: importantMessageJson } = useSWR(`/important-message`, strapiService.getResource);

  useEffect(() => {
    if (importantMessageJson) {
      Cookies.get(updated_at) || text.length === 0 ? setImIsVisible(false) : setImIsVisible(true);
      if (document.querySelector('#important-message')) {
        setImHeight(document.querySelector('#important-message').offsetHeight);
      }
    }
  }, [importantMessageJson]);

  const countDateExpire = () => {
    return new Date(new Date().getTime() + 1000 * 60 * 60 * 24);
  };

  const onClose = () => {
    setImIsVisible(false);
    setImHeight(0);

    document.cookie = `${updated_at}=true; expires=${countDateExpire()};SameSite=Strict`;
  };

  if (!importantMessageJson) {
    return null;
  }

  const { text, link, updated_at } = importantMessageJson;

  return (
    imIsVisible &&
    text && (
      <ImportantMessageStyled id='important-message'>
        <h2 className='visually-hidden'>important message</h2>
        <Container>
          {link ? (
            <Link href={link}>
              <a>{text}</a>
            </Link>
          ) : (
            text
          )}
          <button onClick={onClose}>
            <IoIosClose />
          </button>
        </Container>
      </ImportantMessageStyled>
    )
  );
};

const ImportantMessageStyled = styled.section`
  background: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.vw(5)} 0;

  .Container {
    width: 100%;
    ${({ theme }) => theme.flex.between}
    box-sizing: border-box;
    animation: ${bounce} 0.5s linear forwards;
  }

  a {
    cursor: pointer;
    padding-right: ${({ theme }) => theme.vw(24)};
    font-size: ${({ theme }) => theme.vw(10)};
    line-height: ${({ theme }) => theme.vw(15)};
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    width: ${({ theme }) => theme.vw(30)};
    min-width: ${({ theme }) => theme.vw(30)};

    svg {
      width: 100%;
      height: auto;
      color: ${({ theme }) => theme.colors.white};
      display: block;
    }
  }

  ${({ theme }) => theme.mediaDesktop} {
    padding: ${({ theme }) => theme.vw1920(7)} 0;

    a {
      font-size: ${({ theme }) => theme.vw1920(26)};
      line-height: ${({ theme }) => theme.vw1920(30)};
      text-align: center;
    }

    button {
      width: 2vw;

      svg {
        width: ${({ theme }) => theme.vw1920(40)};
        height: auto;
      }
    }
  }
`;

export default ImportantMessage;
