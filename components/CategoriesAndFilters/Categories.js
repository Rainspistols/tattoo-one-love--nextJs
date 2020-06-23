import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Categories = ({ allCategories }) => {
  const router = useRouter();

  return (
    <CategoriesStyled>
      {allCategories.map((item, index) => (
        <li
          key={index}
          className={
            router.query.category == item.slug ? 'activeCategory' : null
          }
        >
          <Link href={'/blog/' + item.slug}>
            <a>{item.name}</a>
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
    margin: auto ${(props) => props.theme.pixelToVieWidth1920(13)} auto 0;

    a {
      padding: ${(props) => props.theme.pixelToVieWidth1920(10)};
      transition: all 0.3s ease-out;
      font-size: ${(props) => props.theme.pixelToVieWidth1920(18)};
      line-height: ${(props) => props.theme.pixelToVieWidth1920(27)};
      font-weight: 400;
      text-transform: uppercase;
      border-radius: ${(props) => props.theme.pixelToVieWidth1920(5)};
      border: ${(props) => props.theme.pixelToVieWidth1920(1)} solid
        ${(props) => props.theme.colors.grey2};
      border-radius: ${(props) => props.theme.pixelToVieWidth1920(5)};

      :hover,
      :focus {
        background: ${(props) => props.theme.colors.pink};
        color: ${(props) => props.theme.colors.white};
        border: ${(props) => props.theme.pixelToVieWidth1920(1)} solid
          ${(props) => props.theme.colors.pink};
      }
    }
  }

  .activeCategory {
    background: ${(props) => props.theme.colors.whiteGradient};
    border-radius: ${(props) => props.theme.pixelToVieWidth1920(5)};

    a {
      mix-blend-mode: difference;
      pointer-events: none;
      border: none;
    }
  }
`;

export default Categories;
