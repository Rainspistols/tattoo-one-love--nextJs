import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Categories = ({ allCategories }) => {
  const router = useRouter();

  return (
    <CategoriesStyled>
      {allCategories.map((category) => (
        <li
          key={category.id}
          className={
            router.query.category == category.slug ? 'activeCategory' : null
          }
        >
          <Link href='/blog/[category]' as={`/blog/${category.slug}`}>
            <a>{category.name}</a>
          </Link>
        </li>
      ))}
    </CategoriesStyled>
  );
};

const CategoriesStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;

  li {
    margin: auto ${({ theme }) => theme.pixelToVieWidth1920(13)} auto 0;

    a {
      padding: ${({ theme }) => theme.pixelToVieWidth1920(10)};
      transition: all 0.3s ease-out;
      font-size: ${({ theme }) => theme.pixelToVieWidth1920(18)};
      line-height: ${({ theme }) => theme.pixelToVieWidth1920(27)};
      font-weight: 400;
      text-transform: uppercase;
      border-radius: ${({ theme }) => theme.pixelToVieWidth1920(5)};
      border: ${({ theme }) => theme.pixelToVieWidth1920(1)} solid
        ${({ theme }) => theme.colors.grey2};
      border-radius: ${({ theme }) => theme.pixelToVieWidth1920(5)};

      :hover {
        background: ${({ theme }) => theme.colors.pink};
        color: ${({ theme }) => theme.colors.white};
        border: ${({ theme }) => theme.pixelToVieWidth1920(1)} solid
          ${({ theme }) => theme.colors.pink};
      }
    }
  }

  .activeCategory {
    background: ${({ theme }) => theme.colors.whiteGradient};
    border-radius: ${({ theme }) => theme.pixelToVieWidth1920(5)};

    a {
      pointer-events: none;
    }
  }
`;

export default Categories;
