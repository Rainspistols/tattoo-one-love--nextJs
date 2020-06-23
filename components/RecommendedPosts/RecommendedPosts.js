import styled from '@emotion/styled';
import Line from '../../UI/Line';
import BlogPostCard from '../Blog/BlogPostCard';
import useWindowDimensions from '../../hooks/useWindowDimension';
import { useState, useEffect } from 'react';

const RecommendedPosts = ({ posts, API_URL }) => {
  const { width } = useWindowDimensions();
  const [stateWidth, setStateWidth] = useState(null);

  useEffect(() => {
    setStateWidth(width);
  }, [width]);

  return (
    <RecommendedPostsStyled>
      <div className='recommended-arcticles__wrap'>
        {stateWidth < 1280 ? <h2>recommended articles</h2> : <h2>read also</h2>}
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {stateWidth < 1280 ? (
              <BlogPostCard post={post} key={post.id} API_URL={API_URL} />
            ) : (
              post.title
            )}
            <Line />
          </li>
        ))}
      </ul>
    </RecommendedPostsStyled>
  );
};

const RecommendedPostsStyled = styled.section`
  li {
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(16)};

    .BlogPostCard {
      .imgWrap {
        margin-bottom: ${(props) => props.theme.pixelToVieWidth(10)};
      }
      > .Container {
        padding: 0;
      }
    }
  }

  .recommended-arcticles__wrap {
    position: relative;

    &::before {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 50%;

      height: ${(props) => props.theme.pixelToVieWidth(1)};
      width: 100%;

      background: ${(props) => props.theme.colors.grey2};
      content: '';
    }

    h2 {
      position: relative;
      z-index: 2;

      padding: ${({ theme }) => theme.pixelToVieWidth(16)}
        ${({ theme }) => theme.pixelToVieWidth(24)};
      width: 60%;
      margin: auto;

      font-size: ${({ theme }) => theme.pixelToVieWidth(14)};
      line-height: ${({ theme }) => theme.pixelToVieWidth(21)};
      letter-spacing: ${({ theme }) => theme.pixelToVieWidth(2)};
      color: ${({ theme }) => theme.colors.grey4};
      font-weight: 300;
      text-transform: uppercase;
      text-align: center;

      background: ${({ theme }) => theme.colors.white};

      box-sizing: border-box;
    }
  }

  .imgWrap {
    height: ${({ theme }) => theme.pixelToVieWidth(210)};

    overflow: hidden;

    img {
      width: 100%;
    }
  }

  h3 {
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(16)};

    font-size: ${({ theme }) => theme.pixelToVieWidth(32)};
    line-height: ${({ theme }) => theme.pixelToVieWidth(48)};
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 600;
  }

  .BlogPostPreview {
    .imgWrap {
      margin-bottom: ${({ theme }) => theme.pixelToVieWidth(10)};
    }

    .Container {
      padding: 0;
    }
  }

  .Line {
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(16)};
  }

  ${({ theme }) => theme.mediaDesktop} {
    border-top: ${({ theme }) => theme.pixelToVieWidth1920(5)} solid
      ${({ theme }) => theme.colors.pink};
      border-bottom: ${({ theme }) => theme.pixelToVieWidth1920(1)} solid
      ${({ theme }) => theme.colors.grey2};
    padding: ${({ theme }) => theme.pixelToVieWidth1920(25)} 0;

    ul {
      display: inline-flex;
      flex-direction: column;
      padding-left: ${({ theme }) => theme.pixelToVieWidth1920(100)};
    }

    li {
      margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(10)};
      border-bottom: ${({ theme }) => theme.pixelToVieWidth1920(1)} solid
        ${({ theme }) => theme.colors.pink};
      width: auto;
    }

    .recommended-arcticles__wrap {
      &::before {
        display: none;
      }

      h2 {
        width: 100%;

        margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(25)};
        padding: 0 ${({ theme }) => theme.pixelToVieWidth1920(50)};

        font-size: ${({ theme }) => theme.pixelToVieWidth1920(30)};
        line-height: ${({ theme }) => theme.pixelToVieWidth1920(30)};
        letter-spacing: 0;
        font-weight: 700;
        text-align: left;

        background: ${({ theme }) => theme.colors.white};

        box-sizing: border-box;
      }
    }

    .imgWrap {
      height: ${({ theme }) => theme.pixelToVieWidth(210)};

      overflow: hidden;

      img {
        width: 100%;
      }
    }

    h3 {
      margin-bottom: ${({ theme }) => theme.pixelToVieWidth(16)};

      font-size: ${({ theme }) => theme.pixelToVieWidth(32)};
      line-height: ${({ theme }) => theme.pixelToVieWidth(48)};
      color: ${({ theme }) => theme.colors.darkBlue};
      font-weight: 600;
    }
  }
`;

export default RecommendedPosts;
