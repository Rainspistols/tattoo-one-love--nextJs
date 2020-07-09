import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
// Components
import Categories from './Categories';
import Filters from './Filters';
import Container from '../../Layouts/Container/Container';

const CategoriesAndFilters = ({ activeCategory, allCategories }) => {
  const [stateWidth, setStateWidth] = useState(null);
  const [isActiveCategoryVisible, setActiveCategoryVisible] = useState(false);

  if (process.browser) {
    useEffect(() => {
      setStateWidth(window.innerWidth);

      window.innerWidth < 1280 && activeCategory
        ? setActiveCategoryVisible(true)
        : setActiveCategoryVisible(false);
    }, [window.innerWidth, activeCategory]);
  }

  return (
    <CategoriesAndFiltersStyled className='CategoriesAndFilters'>
      <Container>
        {isActiveCategoryVisible && (
          <h2 className='activeCategory'>{activeCategory}</h2>
        )}

        {stateWidth >= 1280 && <Categories allCategories={allCategories} />}
        <Filters />
      </Container>
    </CategoriesAndFiltersStyled>
  );
};

const CategoriesAndFiltersStyled = styled.div`
  > .Container {
    display: flex;
    align-items: center;
  }

  .activeCategory {
    font-weight: 600;
    ${({ theme }) => theme.flexBetween};
    font-size: ${({ theme }) => theme.pixelToVieWidth(8)};
    line-height: ${({ theme }) => theme.pixelToVieWidth(12)};
    color: ${({ theme }) => theme.colors.grey3};
  }

  ${({ theme }) => theme.mediaDesktop} {

    border-bottom: ${({ theme }) => theme.pixelToVieWidth1920(1)} solid 
      ${({ theme }) => theme.colors.grey2}
    }
  }
`;

export default CategoriesAndFilters;
