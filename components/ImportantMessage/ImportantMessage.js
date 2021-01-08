import styled from '@emotion/styled';
import Link from 'next/link';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
// Components
import Container from '@/Layouts/Container/Container';
import { IoIosClose } from 'react-icons/io';
import useSWR from 'swr';
import StrapiService from '../StrapiService/StrapiService';

const ImportantMessage = ({ imIsVisible, setImIsVisible, headerHeight }) => {
  const strapiService = new StrapiService();

  const { data: importantMessageJson } = useSWR(`/important-message`, strapiService.getResource);

  useEffect(() => {
    if (importantMessageJson) {
      Cookies.get(updated_at) || text.length === 0 ? setImIsVisible(false) : setImIsVisible(true);
    }
  }, [importantMessageJson]);

  const countDateExpire = () => {
    return new Date(new Date().getTime() + 1000 * 60 * 60 * 24);
  };

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
      <ImportantMessageStyled
        id="important-message"
        imIsVisible={imIsVisible}
        headerHeight={headerHeight}
      >
        <h2 className="visually-hidden">important message</h2>
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
  margin-top: ${(props) => (props.imIsVisible ? props.headerHeight + 'px' : null)};

  .Container {
    width: 100%;
    ${({ theme }) => theme.flex.between}
    box-sizing: border-box;
    /* Animation */
    -webkit-animation: slide-in-blurred-tl 0.5s ease-out both;
    animation: slide-in-blurred-tl 0.5s ease-out both;
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
      min-width: auto;

      svg {
        width: ${({ theme }) => theme.vw1920(40)};
        height: auto;
      }
    }
  }

  /* Animation */

  @-webkit-keyframes tracking-in-contract-bck-top {
    0% {
      letter-spacing: 1em;
      -webkit-transform: translateZ(400px) translateY(-300px);
      transform: translateZ(400px) translateY(-300px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      -webkit-transform: translateZ(0) translateY(0);
      transform: translateZ(0) translateY(0);
      opacity: 1;
    }
  }

  /* Animation */
  @-webkit-keyframes slide-in-blurred-tl {
    0% {
      -webkit-transform: translate(-1000px, -1000px) skew(80deg, 10deg);
      transform: translate(-1000px, -1000px) skew(80deg, 10deg);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(0, 0) skew(0deg, 0deg);
      transform: translate(0, 0) skew(0deg, 0deg);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-blurred-tl {
    0% {
      -webkit-transform: translate(-1000px, -1000px) skew(80deg, 10deg);
      transform: translate(-1000px, -1000px) skew(80deg, 10deg);
      -webkit-transform-origin: 100% 0%;
      transform-origin: 100% 0%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translate(0, 0) skew(0deg, 0deg);
      transform: translate(0, 0) skew(0deg, 0deg);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
`;

export default ImportantMessage;
