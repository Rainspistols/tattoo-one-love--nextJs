import styled from '@emotion/styled';
import useWindowDimensions from '../../hooks/useWindowDimension';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const CategoriesButtonsList = ({ allCategories }) => {
  const { width } = useWindowDimensions();
  const [stateWidth, setStateWidth] = useState(null);
  useEffect(() => {
    setStateWidth(width);
  }, [width]);

  const router = useRouter();

  return (
    stateWidth >= 1280 && (
      <CategoriesButtonsListStyled>
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
      </CategoriesButtonsListStyled>
    )
  );
};

const CategoriesButtonsListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: ${(props) => props.theme.pixelToVieWidth1920(18)};
  line-height: ${(props) => props.theme.pixelToVieWidth1920(27)};
  font-weight: 400;
  text-transform: uppercase;
  max-width: 70%;

  li {
    padding: ${(props) => props.theme.pixelToVieWidth1920(10)};
    border-radius: ${(props) => props.theme.pixelToVieWidth1920(5)};
    border: ${(props) => props.theme.pixelToVieWidth1920(1)} solid
      ${(props) => props.theme.colors.grey2};
    margin-right: ${(props) => props.theme.pixelToVieWidth1920(13)};
    transition: all 0.3s ease-out;

    :hover,
    :focus {
      background: ${(props) => props.theme.colors.pink};
      color: ${(props) => props.theme.colors.white};
      border: ${(props) => props.theme.pixelToVieWidth1920(1)} solid
        ${(props) => props.theme.colors.pink};
    }
  }

  .activeCategory {
    background: ${(props) => props.theme.colors.whiteGradient};
    border: none;
    a {
      mix-blend-mode: difference;
    }

    :hover,
    :focus {
      background: ${(props) => props.theme.colors.whiteGradient};
      border: none;
    }
  }
`;

export default CategoriesButtonsList;
