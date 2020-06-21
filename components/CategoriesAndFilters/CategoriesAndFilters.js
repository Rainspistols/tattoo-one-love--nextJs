import styled from '@emotion/styled';
import CategoriesList from './CategoriesList';
import FiltersList from './FiltersList';
import useWindowDimensions from '../../hooks/useWindowDimension';
import { useState, useEffect } from 'react';

const CategoriesAndFilters = ({
  activeCategory = null,
  allCategories,
  onLastFilter,
}) => {
  const { width } = useWindowDimensions();
  const [stateWidth, setStateWidth] = useState(null);
  useEffect(() => {
    setStateWidth(width);
  }, [width]);

  return (
    <CategoriesAndFiltersStyled className='CategoriesAndFilters'>
      {stateWidth < 1280 && activeCategory && (
        <h2 className='activeCategory'>{activeCategory}</h2>
      )}
      <CategoriesList allCategories={allCategories} />
      <FiltersList onLastFilter={onLastFilter} />
    </CategoriesAndFiltersStyled>
  );
};

const CategoriesAndFiltersStyled = styled.div`
  display: flex;
  align-items: center;

  .activeCategory {
    font-weight: 600;
    ${(props) => props.theme.flexBetween};
    font-size: ${(props) => props.theme.pixelToVieWidth(8)};
    line-height: ${(props) => props.theme.pixelToVieWidth(12)};
    color: ${(props) => props.theme.colors.grey3};
  }
`;

export default CategoriesAndFilters;
