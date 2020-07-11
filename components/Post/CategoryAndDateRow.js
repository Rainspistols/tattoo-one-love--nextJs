import styled from '@emotion/styled';
import Moment from 'react-moment';
import CategoryBtn from '../../UI/CategoryBtn';
import { useState, useEffect } from 'react';

const CategoryAndDateRow = ({ post }) => {
  const [stateWidth, setStateWidth] = useState(null);

  // useEffect(() => {
  //   setStateWidth(width);
  // }, [width]);

  return (
    <CategoryAndDateRowStyled className='CategoryAndDateRow'>
      {stateWidth < 1280 && (
        <ul className='categories'>
          {post.post_categories.map(({ name, slug, id }) => (
            <li key={id}>
              <CategoryBtn text={name} slug={slug} />
            </li>
          ))}
        </ul>
      )}

      <Moment className='date' format='MMMM DD, YYYY'>
        {post.updated_at}
      </Moment>
    </CategoryAndDateRowStyled>
  );
};

const CategoryAndDateRowStyled = styled.div`
  ${({ theme }) => theme.flexBetween};
  padding-top: ${({ theme }) => theme.pixelToVieWidth(20)};

  .categories {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 80%;

    li {
      margin: 0 ${({ theme }) => theme.pixelToVieWidth(12)}
        ${({ theme }) => theme.pixelToVieWidth(12)} 0;
    }
  }

  .date {
    font-size: ${(props) => props.theme.pixelToVieWidth(10)};
    line-height: ${(props) => props.theme.pixelToVieWidth(12)};
    font-weight: 400;
    color: ${(props) => props.theme.colors.grey2};
    margin: 0 0 auto 0;
  }

  ${({ theme }) => theme.mediaDesktop} {
    padding: 0;

    .date {
      font-size: ${({ theme }) => theme.pixelToVieWidth1920(22)};
      line-height: ${({ theme }) => theme.pixelToVieWidth1920(24)};
      margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(35)};
  }
`;

export default CategoryAndDateRow;
