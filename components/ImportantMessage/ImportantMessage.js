import styled from '@emotion/styled';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
// Components
import Container from '../../Layouts/Container/Container';

import { IoIosClose } from 'react-icons/io';

const ImportantMessage = ({ importantMessageJson }) => {
  const [imIsVisible, setImIsVisible] = useState(true);
  const { text, link } = importantMessageJson;

  useEffect(() => {
    Cookies.get('isImportantMessageDisabled') || text.length === 0
      ? setImIsVisible(false)
      : setImIsVisible(true);
  }, [importantMessageJson]);

  const onClose = () => {
    setImIsVisible(false);
    document.cookie = `isImportantMessageDisabled=true; expires=${countDateExpire()}`;
  };

  const countDateExpire = () => {
    return new Date(new Date().getTime() + 1000 * 60 * 60 * 24);
  };

  return (
    imIsVisible && (
      <ImportantMessageStyled>
        <h2 className='visually-hidden'>important message</h2>
        <Container>
          <Link href={link}>
            <a>{text}</a>
          </Link>
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
  padding: ${({ theme }) => theme.pixelToVieWidth(5)} 0;

  .Container {
    width: 100%;
    ${({ theme }) => theme.flexBetween}
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
    padding-right: ${({ theme }) => theme.pixelToVieWidth(24)};
    font-size: ${({ theme }) => theme.pixelToVieWidth(10)};
    line-height: ${({ theme }) => theme.pixelToVieWidth(15)};
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    width: ${({ theme }) => theme.pixelToVieWidth(30)};

    svg {
      width: 100%;
      height: auto;
      color: ${({ theme }) => theme.colors.white};
      display: block;
    }
  }

  ${({ theme }) => theme.mediaDesktop} {
    padding: ${({ theme }) => theme.pixelToVieWidth1920(7)} 0;

    a {
      font-size: ${({ theme }) => theme.pixelToVieWidth1920(26)};
      line-height: ${({ theme }) => theme.pixelToVieWidth1920(30)};
      text-align: center;
    }

    button {
      width: 2vw;
      
      svg {
        width: ${({ theme }) => theme.pixelToVieWidth1920(40)};
        height: auto;
      }
    }
  }
`;

export default ImportantMessage;
