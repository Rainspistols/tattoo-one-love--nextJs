import styled from '@emotion/styled';
import Link from 'next/link';
import MarkdownView from 'react-showdown';
import Container from '../../Layouts/Container/Container';
import closeIcon from './images/closeIcon.svg';
import { useState } from 'react';

const ImportantMessage = ({ text, link }) => {
  const [isClosedState, setClosedState] = useState(false);

  const onClose = () => {
    setClosedState(true);

    document.cookie = `im-stop-download=true; expires=${countDateExpire()}; path=/`;
    console.log(document.cookie);
  };

  const countDateExpire = () => {
    return new Date(new Date().getTime() + 1000 * 60 * 60 * 24);
  };

  return (
    <>
      {!isClosedState && (
        <ImportantMessageStyled>
          <Container>
            <Link href={link}>
              <a>
                <MarkdownView markdown={text} />
              </a>
            </Link>
            <button onClick={() => onClose()}>
              <img src={closeIcon} alt='close message' />
            </button>
          </Container>
        </ImportantMessageStyled>
      )}
    </>
  );
};

const ImportantMessageStyled = styled.div`
  background: ${(props) => props.theme.colors.darkBlue};
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.pixelToVieWidth(6)} 0;

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
    img {
      width: ${(props) => props.theme.pixelToVieWidth(20)};
      height: ${(props) => props.theme.pixelToVieWidth(20)};
    }
  }

  .hidden {
    display: block;
  }
`;

export default ImportantMessage;