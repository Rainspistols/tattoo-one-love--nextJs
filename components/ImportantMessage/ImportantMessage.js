import styled from '@emotion/styled';
import Link from 'next/link';
import Container from '../../Layouts/Container/Container';
import { IoIosClose } from 'react-icons/io';
import { useState, useEffect } from 'react';
import MarkdownView from 'react-showdown';
import Cookies from 'js-cookie';

const ImportantMessage = ({ importantMessageJson }) => {
  const [imIsVisible, setImIsVisible] = useState(true);

  useEffect(() => {
    Cookies.get('isImportantMessageDisabled') ||
    importantMessageJson.text.length === 0
      ? setImIsVisible(false)
      : setImIsVisible(true);
  }, [importantMessageJson]);

  const onClose = () => {
    setClosedState(true);
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
          <Link href={importantMessageJson.link}>
            <a>
              <MarkdownView markdown={importantMessageJson.text} />
            </a>
          </Link>
          <button onClick={() => onClose()}>
            <IoIosClose />
          </button>
        </Container>
      </ImportantMessageStyled>
    )
  );
};

const ImportantMessageStyled = styled.section`
  background: ${(props) => props.theme.colors.darkBlue};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.pixelToVieWidth(10)} 0;

  .Container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
    padding-right: ${(props) => props.theme.pixelToVieWidth(24)};
    font-size: ${(props) => props.theme.pixelToVieWidth(10)};
    line-height: ${(props) => props.theme.pixelToVieWidth(15)};
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    svg {
      width: ${(props) => props.theme.pixelToVieWidth(30)};
      height: auto;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  ${(props) => props.theme.mediaDesktop} {
    padding: ${(props) => props.theme.pixelToVieWidth1920(7)} 0;

    a {
      font-size: ${(props) => props.theme.pixelToVieWidth1920(26)};
      line-height: ${(props) => props.theme.pixelToVieWidth1920(30)};
      text-align: center;
    }

    button {
      svg {
        width: ${(props) => props.theme.pixelToVieWidth1920(40)};
        height: auto;
      }
    }
  }
`;

export default ImportantMessage;
