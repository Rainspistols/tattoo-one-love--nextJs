import styled from '@emotion/styled';
import Categories from './Categories';
import Filters from './Filters';
import useWindowDimensions from '../../hooks/useWindowDimension';
import { useState, useEffect } from 'react';
import Container from '../../Layouts/Container/Container';

const CategoriesAndFilters = ({ activeCategory, allCategories }) => {
  const { width } = useWindowDimensions();
  const [stateWidth, setStateWidth] = useState(null);
  const [isActiveCategoryVisible, setActiveCategoryVisible] = useState(false);

  useEffect(() => {
    setStateWidth(width);

    if (width < 1280 && activeCategory) {
      setActiveCategoryVisible(true);
    }
  }, [width, activeCategory]);

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
    ${(props) => props.theme.flexBetween};
    font-size: ${(props) => props.theme.pixelToVieWidth(8)};
    line-height: ${(props) => props.theme.pixelToVieWidth(12)};
    color: ${(props) => props.theme.colors.grey3};
  }



`;

export default CategoriesAndFilters;
