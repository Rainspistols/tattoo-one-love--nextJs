import styled from '@emotion/styled';
import Link from 'next/link';
import Container from '../../Layouts/Container/Container';
import closeIcon from './images/closeIcon.svg';
import { useState } from 'react';
import MarkdownView from 'react-showdown';

const ImportantMessage = ({ text, link }) => {
  const [isClosedState, setClosedState] = useState(false);

  const onClose = () => {
    setClosedState(true);

    document.cookie = `im-stop-download=true; expires=${countDateExpire()}; path=/`;
  };

  const countDateExpire = () => {
    return new Date(new Date().getTime() + 1000 * 60 * 60 * 24);
  };

  return (
    <>
      {!isClosedState && (
        <ImportantMessageStyled>
          <h2 className='visually-hidden'>important message</h2>
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
    img {
      width: ${(props) => props.theme.pixelToVieWidth(20)};
      height: ${(props) => props.theme.pixelToVieWidth(20)};
    }
  }
`;

export default ImportantMessage;
