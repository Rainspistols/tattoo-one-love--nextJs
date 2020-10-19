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
    <ul className='socialsList'>
      <li>
        <FacebookShareButton url={postHref}>
          <img
            src={facebookIcon}
            alt='https://www.facebook.com/tattooonelovewwa/'
          />
        </FacebookShareButton>
      </li>
      <li>
        <VKShareButton url={postHref}>
          <img src={vkIcon} alt='https://vk.com/tattoo.onelove' />
        </VKShareButton>
      </li>
      <li>
        <PocketShareButton url={postHref}>
          <img src={pocketIcon} alt='' />
        </PocketShareButton>
      </li>
    </ul>
  );

  const onShareBtn = () => {
    setShareActive(!isShareActive);
  };

  return (
    <ShareBtnStyled onClick={() => onShareBtn()} className='ShareBtn'>
      {isShareActive ? shareActive : shareNotActive}
    </ShareBtnStyled>
  );
};

const ShareBtnStyled = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  display: inline-block;
  height: ${({ theme }) => theme.vw(28)};
  margin-bottom: ${({ theme }) => theme.vw(20)};
  padding: 0 ${({ theme }) => theme.vw(12)};

  border-radius: ${({ theme }) => theme.vw(5)};
  background: transparent;
  border: ${({ theme }) => theme.vw(1)} solid
    ${({ theme }) => theme.colors.grey2};

  .shareNotActive {
    ${(props) => props.theme.flex.center};
    height: 100%;

    img {
      width: ${({ theme }) => theme.vw(15)};
      height: auto;
      margin-right: ${({ theme }) => theme.vw(10)};
    }

    p {
      text-transform: uppercase;
      font-size: ${({ theme }) => theme.vw(20)};
      line-height: ${({ theme }) => theme.vw(40)};
      color: ${({ theme }) => theme.colors.pink};
      letter-spacing: ${({ theme }) => theme.vw(8)};
    }
  }

  .socialsList {
    ${({ theme }) => theme.flex.center};
    height: 100%;

    padding: 0;

    button {
      display: flex;
      align-items: center;
    }

    li {
      :not(:last-child) {
        margin-right: ${({ theme }) => theme.vw(25)};
      }
      img {
        width: ${({ theme }) => theme.vw(24)};
        height: auto;
      }
    }
  }

  ${({ theme }) => theme.mediaDesktop} {
    transform: translateX(0);
    left: 0;

    width: ${({ theme }) => theme.vw1920(200)};
    height: ${({ theme }) => theme.vw1920(50)};
    padding: 0;
    margin: 0;

    border-radius: ${({ theme }) => theme.vw1920(5)};
    border: ${({ theme }) => theme.vw1920(1)} solid
      ${({ theme }) => theme.colors.grey2};

    cursor: pointer;

    .shareNotActive {
      p {
        font-size: ${({ theme }) => theme.vw1920(30)};
        line-height: ${({ theme }) => theme.vw1920(40)};
        letter-spacing: ${({ theme }) => theme.vw1920(8)};
        font-weight: 400;
      }

      img {
        width: ${({ theme }) => theme.vw1920(21)};
        margin-right: ${({ theme }) => theme.vw1920(20)};
      }
    }

    .socialsList {
      li {
        :not(:last-child) {
          margin-right: ${({ theme }) => theme.vw1920(25)};
        }
        img {
          width: ${({ theme }) => theme.vw1920(35)};
        }
      }
    }
  }
`;

export default ShareBtn;
