import styled from '@emotion/styled';
import MarkdownView from 'react-showdown';

const Content = ({ postBySlug }) => {
  return (
    <ContentStyled>
      <MarkdownView markdown={postBySlug.content} />
    </ContentStyled>
  );
};
const ContentStyled = styled.div`
  padding-bottom: ${({ theme }) => theme.pixelToVieWidth(35)};

  .short-description {
    padding: ${({ theme }) => theme.pixelToVieWidth(15)};
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(20)};

    font-size: ${({ theme }) => theme.pixelToVieWidth(12)};
    line-height: ${({ theme }) => theme.pixelToVieWidth(18)};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grey3};

    background: ${({ theme }) => theme.colors.grey1};
  }

  .normal-text,
  .normal-text .pink-link {
    font-size: ${({ theme }) => theme.pixelToVieWidth(16)};
    line-height: ${({ theme }) => theme.pixelToVieWidth(25)};
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  .normal-text {
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(10)};
  }

  .normal-text .pink-link {
    display: inline;
  }

  .pink-link {
    display: inline-block;

    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(10)};

    border-bottom: ${({ theme }) => theme.pixelToVieWidth(1)} solid
      ${({ theme }) => theme.colors.pink};
  }

  .person-comment {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    padding: ${({ theme }) => theme.pixelToVieWidth(20)};
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(20)};

    border: ${({ theme }) => theme.pixelToVieWidth(1)} solid
      ${({ theme }) => theme.colors.grey1};

    .photo-and-name {
      ${({ theme }) => theme.flexBetween};
      margin-bottom: ${({ theme }) => theme.pixelToVieWidth(10)};

      img {
        width: ${({ theme }) => theme.pixelToVieWidth(90)};
        margin-right: ${({ theme }) => theme.pixelToVieWidth(30)};

        border-radius: 50%;
      }

      .name-and-profession {
        display: flex;
        flex-direction: column;
        b {
          font-size: ${({ theme }) => theme.pixelToVieWidth(18)};
          line-height: ${({ theme }) => theme.pixelToVieWidth(27)};
          font-weight: 600;
          color: ${({ theme }) => theme.colors.darkBlue};
        }

        span {
          font-size: ${({ theme }) => theme.pixelToVieWidth(12)};
          line-height: ${({ theme }) => theme.pixelToVieWidth(18)};
          font-weight: 400;
          color: ${({ theme }) => theme.colors.grey4};
        }
      }
    }

    .comment-text {
      font-size: ${({ theme }) => theme.pixelToVieWidth(12)};
      line-height: ${({ theme }) => theme.pixelToVieWidth(18)};
      font-weight: 400;
      color: ${({ theme }) => theme.colors.darkBlue};
    }
  }

  h2,
  h3 {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkBlue};
    line-height: ${({ theme }) => theme.pixelToVieWidth(30)};
  }

  h2 {
    font-size: ${({ theme }) => theme.pixelToVieWidth(26)};
  }

  h3 {
    font-size: ${({ theme }) => theme.pixelToVieWidth(22)};
  }

  blockquote {
    margin: 0 0 ${({ theme }) => theme.pixelToVieWidth(10)};
    padding-left: ${({ theme }) => theme.pixelToVieWidth(10)};
    border-left: ${({ theme }) => theme.pixelToVieWidth(2)} solid
      ${({ theme }) => theme.colors.grey4};
    font-style: italic;
    font-weight: 300;
    font-size: ${({ theme }) => theme.pixelToVieWidth(17)};
    line-height: ${({ theme }) => theme.pixelToVieWidth(26)};
  }

  ${({ theme }) => theme.mediaDesktop} {
    width: ${({ theme }) => theme.pixelToVieWidth1920(1000)};
    
    padding-bottom: ${({ theme }) => theme.pixelToVieWidth1920(100)};


    .short-description {
      position: relative;

      padding: ${({ theme }) => theme.pixelToVieWidth1920(50)};
      margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(75)};

      font-size: ${({ theme }) => theme.pixelToVieWidth1920(16)};
      line-height: ${({ theme }) => theme.pixelToVieWidth1920(25)};

      :after {
        position: absolute;
        bottom: ${({ theme }) => theme.pixelToVieWidth1920(-54)};
        left: 50%;
        transform: translateX(-50%);

        width: ${({ theme }) => theme.pixelToVieWidth1920(120)};
        height: ${({ theme }) => theme.pixelToVieWidth1920(27)};

        background-image: url('/images/Post/tilda.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;

        content: '';
      }
    }

    .normal-text,
    .normal-text .pink-link {
      font-size: ${({ theme }) => theme.pixelToVieWidth1920(18)};
      line-height: ${({ theme }) => theme.pixelToVieWidth1920(27)};
    }

    .normal-text {
      margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(45)};
    }

    .pink-link {
      margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(25)};

      border-bottom: ${({ theme }) => theme.pixelToVieWidth1920(1)} solid
        ${({ theme }) => theme.colors.pink};
    }

    .person-comment {
      width: ${({ theme }) => theme.pixelToVieWidth1920(800)};

      padding: ${({ theme }) => theme.pixelToVieWidth1920(58)};
      margin: 0 auto ${({ theme }) => theme.pixelToVieWidth1920(25)};

      border: ${({ theme }) => theme.pixelToVieWidth1920(1)} solid
        ${({ theme }) => theme.colors.grey4};

      .photo-and-name {
        margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(30)};

        img {
          width: ${({ theme }) => theme.pixelToVieWidth1920(150)};
          margin-right: ${({ theme }) => theme.pixelToVieWidth1920(46)};
        }

        .name-and-profession {
          b {
            font-size: ${({ theme }) => theme.pixelToVieWidth1920(18)};
            line-height: ${({ theme }) => theme.pixelToVieWidth1920(27)};
            font-weight: 500;
          }

          span {
            font-size: ${({ theme }) => theme.pixelToVieWidth1920(16)};
            line-height: ${({ theme }) => theme.pixelToVieWidth1920(25)};
          }
        }
      }

      .comment-text {
        font-size: ${({ theme }) => theme.pixelToVieWidth1920(16)};
        line-height: ${({ theme }) => theme.pixelToVieWidth1920(25)};
      }
    }

    h2,
    h3 {
      margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(10)};
    }

    h2 {
      line-height: ${({ theme }) => theme.pixelToVieWidth1920(36)};
      font-size: ${({ theme }) => theme.pixelToVieWidth1920(42)};
    }

    h3 {
      line-height: ${({ theme }) => theme.pixelToVieWidth1920(28)};
      font-size: ${({ theme }) => theme.pixelToVieWidth1920(30)};
    }

    blockquote {
      margin: 0 0 ${({ theme }) => theme.pixelToVieWidth1920(10)};
      padding-left: ${({ theme }) => theme.pixelToVieWidth1920(50)};
      border-left: ${({ theme }) => theme.pixelToVieWidth1920(2)} solid
        ${({ theme }) => theme.colors.grey4};
      font-size: ${({ theme }) => theme.pixelToVieWidth1920(18)};
      line-height: ${({ theme }) => theme.pixelToVieWidth1920(27)};
    }
  }
`;

export default Content;
