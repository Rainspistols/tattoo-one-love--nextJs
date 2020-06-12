import styled from '@emotion/styled';
import Line from '../../UI/Line';
import BlogPostCard from '../BlogPostCard';

const RecommendedPosts = ({ posts, API_URL }) => {
  return (
    <RecommendedPostsStyled>
      <div className='recommended-arcticles__wrap'>
        <h2>recommended articles</h2>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <BlogPostCard post={post} key={post.id} API_URL={API_URL} />
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
  }

  .recommended-arcticles__wrap {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      height: ${(props) => props.theme.pixelToVieWidth(1)};
      width: 100%;
      background: ${(props) => props.theme.colors.grey2};
      left: 0;
      top: 50%;
      z-index: 1;
    }
    h2 {
      font-size: ${(props) => props.theme.pixelToVieWidth(14)};
      line-height: ${(props) => props.theme.pixelToVieWidth(21)};
      letter-spacing: ${(props) => props.theme.pixelToVieWidth(2)};
      color: ${(props) => props.theme.colors.grey4};
      background: ${(props) => props.theme.colors.white};
      padding: ${(props) => props.theme.pixelToVieWidth(16)}
        ${(props) => props.theme.pixelToVieWidth(24)};
      font-weight: 300;
      text-transform: uppercase;
      text-align: center;
      z-index: 10;
      width: 60%;
      margin: auto;
      position: relative;
      box-sizing: border-box;
    }
  }

  .imgWrap {
    height: ${(props) => props.theme.pixelToVieWidth(210)};
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  h3 {
    font-size: ${(props) => props.theme.pixelToVieWidth(32)};
    line-height: ${(props) => props.theme.pixelToVieWidth(48)};
    color: ${(props) => props.theme.colors.darkBlue};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(16)};
    font-weight: 600;
  }

  .BlogPostPreview {
    .imgWrap {
      margin-bottom: ${(props) => props.theme.pixelToVieWidth(10)};
    }

    .Container {
      padding: 0;
    }
  }

  .Line {
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(16)};
  }
`;

export default RecommendedPosts;
