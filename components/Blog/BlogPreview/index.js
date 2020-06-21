import { useState, useEffect } from 'react';
import Mobile from './Mobile';
import Desktop from './Desktop';
import ShowMore from '../../../UI/ShowMore';
import Container from '../../../Layouts/Container/Container';
import useWindowDimensions from '../../../hooks/useWindowDimension';
import SectionTitle from '../../../Layouts/SectionTitle/SectionTitle';

const BlogPreview = ({ fiveLastPosts, API_URL }) => {
  const { width } = useWindowDimensions();
  const [stateWidth, setStateWidth] = useState(null);

  useEffect(() => {
    setStateWidth(width);
  }, [width]);

  return (
    <section className='BlogPreview'>
      <Container>
        <SectionTitle text='blog' />
      </Container>

      {stateWidth < 1280 ? (
        <Mobile fiveLastPosts={fiveLastPosts} API_URL={API_URL} />
      ) : (
        <Desktop fiveLastPosts={fiveLastPosts} API_URL={API_URL} />
      )}

      <Container>
        <ShowMore />
      </Container>
    </section>
  );
};

export default BlogPreview;
