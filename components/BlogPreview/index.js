import { useState, useEffect } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimension';
import Mobile from './Mobile';
import Desktop from './Desktop';
import Container from '../../Layouts/Container/Container';
import styled from '@emotion/styled';
import SectionTitle from '../../Layouts/SectionTitle/SectionTitle';
import ShowMore from '../../UI/ShowMore';

const BlogPreview = ({ postsData, API_URL }) => {
  const { width } = useWindowDimensions();
  const [stateWidth, setStateWidth] = useState(null);

  useEffect(() => {
    setStateWidth(width);
  }, [width]);

  return (
    <BlogPreviewStyled>
      <Container>
        <SectionTitle text='blog' />
      </Container>
      {stateWidth < 1280 ? (
        <Mobile postsData={postsData} API_URL={API_URL} />
      ) : (
        <Desktop postsData={postsData} API_URL={API_URL} />
      )}

      <Container>
        <ShowMore />
      </Container>
    </BlogPreviewStyled>
  );
};

const BlogPreviewStyled = styled.section``;

export default BlogPreview;
