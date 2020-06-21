import styled from '@emotion/styled';
import Moment from 'react-moment';
import CategoryBtn from '../../UI/CategoryBtn';
import useWindowDimensions from '../../hooks/useWindowDimension';

const PostCategoryAndDateRow = ({ posts }) => {
  const { width } = useWindowDimensions();

  return (
    <PostCategoryAndDateRowStyled className='PostCategoryAndDateRow'>
      {width < 1280 ? (
        <ul className='categories'>
          {posts.post_categories.map(({ name, slug, id }) => (
            <li key={id}>
              <CategoryBtn text={name} slug={slug} />
            </li>
          ))}
        </ul>
      ) : null}

      <Moment className='date' format='MMMM DD, YYYY'>
        {posts.updated_at}
      </Moment>
    </PostCategoryAndDateRowStyled>
  );
};

const PostCategoryAndDateRowStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .categories {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 80%;
    padding: ${({ theme }) => theme.pixelToVieWidth(20)} 0
      ${({ theme }) => theme.pixelToVieWidth(8)};

    li {
      margin: 0 ${({ theme }) => theme.pixelToVieWidth(12)}
        ${({ theme }) => theme.pixelToVieWidth(12)} 0;
    }

    .CategoryBtn {
      font-size: ${(props) => props.theme.pixelToVieWidth(10)};
      line-height: ${(props) => props.theme.pixelToVieWidth(12)};
    }
  }

  .date {
    font-size: ${(props) => props.theme.pixelToVieWidth(10)};
    line-height: ${(props) => props.theme.pixelToVieWidth(12)};
    font-weight: 400;
    color: ${(props) => props.theme.colors.grey2};
    margin: auto 0;
  }
`;

export default PostCategoryAndDateRow;
