import {
  VKShareButton,
  PocketShareButton,
  FacebookShareButton,
} from 'react-share';
import styled from '@emotion/styled';
import { facebookIcon, vkIcon, pocketIcon, shareIcon } from './images';
import { useState } from 'react';

const ShareBtn = ({ postHref }) => {
  const [isShareActive, setShareActive] = useState(false);
  const shareNotActive = (
    <div className='shareNotActive'>
      <img src={shareIcon} alt='share' />
      <p>Share</p>
    </div>
  );

  const shareActive = (
    <ul className='socials-list'>
      <li>
        <FacebookShareButton url={postHref}>
          <img src={facebookIcon} alt='facebook' />
        </FacebookShareButton>
      </li>
      <li>
        <VKShareButton url={postHref}>
          <img src={vkIcon} alt='facebook' />
        </VKShareButton>
      </li>
      <li>
        <PocketShareButton url={postHref}>
          <img src={pocketIcon} alt='facebook' />
        </PocketShareButton>
      </li>
    </ul>
  );

  const onShareBtn = () => {
    setShareActive(!isShareActive);
  };

  return (
    <ShareBtnStyled onClick={() => onShareBtn()}>
      {isShareActive ? shareActive : shareNotActive}
    </ShareBtnStyled>
  );
};

const ShareBtnStyled = styled.div`
  cursor: pointer;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.pink};
  text-transform: uppercase;
  font-size: 20px;
  line-height: 40px;
  align-items: center;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.grey2};
  letter-spacing: 8px;
  display: inline-block;
  .shareNotActive {
    padding: 0 12px;
    display: flex;
  }

  img {
    margin-right: 10px;
  }

  .socials-list {
    display: flex;
    padding: 8px 23px;
    display: flex;
    align-items: center;

    button {
      display: flex;
      align-items: center;
    }

    li {
      :not(:last-child) {
        margin-right: 25px;
      }
      svg {
        path {
          fill: ${(props) => props.theme.colors.grey2};
          transform: scale(1.3);
        }
        rect {
          display: none;
        }
      }
    }
    li:active {
    }
  }
`;

export default ShareBtn;
