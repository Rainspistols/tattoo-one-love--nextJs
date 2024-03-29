import Cookies from 'js-cookie';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useEffect } from 'react';
import useSWR from 'swr';
import { IoIosClose } from 'react-icons/io';
// Components
import Container from '~/Layouts/Container/Container';
import StrapiService from '../StrapiService/StrapiService';

const ImportantMessage = ({ imIsVisible, setImIsVisible }) => {
  const strapiService = new StrapiService();

  const { data: importantMessageJson } = useSWR('/important-message', strapiService.getResource);

  useEffect(() => {
    if (importantMessageJson) {
      Cookies.get(updated_at) || text.length === 0 ? setImIsVisible(false) : setImIsVisible(true);
    }
  }, [importantMessageJson]);

  const countDateExpire = () => new Date(new Date().getTime() + 1000 * 60 * 60 * 24);

  const onClose = () => {
    setImIsVisible(false);

    document.cookie = `${updated_at}=true; expires=${countDateExpire()};SameSite=Strict`;
  };

  if (!importantMessageJson) {
    return null;
  }

  const { text, link, updated_at } = importantMessageJson;

  return (
    imIsVisible &&
    text && (
      <ImportantMessageStyled id='important-message' imIsVisible={imIsVisible}>
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
  top: ${({ theme: { headerHeight } }) => headerHeight.mobile};
  z-index: 2;
  left: 0;
  right: 0;
  position: absolute;
  overflow: hidden;

  .Container {
    width: 100%;
    ${({ theme }) => theme.flex.between}
    box-sizing: border-box;
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
    top: ${({ theme: { headerHeight } }) => headerHeight.desktop};

    a {
      font-size: ${({ theme }) => theme.vw1920(26)};
      line-height: ${({ theme }) => theme.vw1920(30)};
      text-align: center;
    }

    button {
      width: 2vw;
      min-width: auto;

      svg {
        width: ${({ theme }) => theme.vw1920(40)};
        height: auto;
      }
    }
  }

  /* Animation */

  @keyframes scroll-down {
    0% {
      max-height: 0px;
    }
    100% {
      max-height: 400px;
    }
  }
`;

export default ImportantMessage;
