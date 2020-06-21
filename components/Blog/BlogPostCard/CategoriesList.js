import styled from '@emotion/styled';
import CategoryBtn from '../../../UI/CategoryBtn';

const CategoriesList = ({ post }) => {
  return (
    <CategoriesListStyled>
      {post.post_categories.map((category) => (
        <li key={category.id}>
          <CategoryBtn text={category.name} slug={category.slug} />
        </li>
      ))}
    </CategoriesListStyled>
  );
};

const CategoriesListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;

  li {
    :not(:last-of-type) {
      margin-right: ${({ theme }) => theme.pixelToVieWidth(5)};
    }
  }

  ${({ theme }) => theme.mediaDesktop} {
    justify-content: center;
  }
`;

export default CategoriesList;
