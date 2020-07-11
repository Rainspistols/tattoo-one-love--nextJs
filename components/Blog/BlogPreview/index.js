import { useState, useEffect } from 'react';
// Components
import Mobile from './Mobile';
import Desktop from './Desktop';
import ShowMore from '../../../UI/ShowMore';
import Container from '../../../Layouts/Container/Container';
import SectionTitle from '../../../UI/SectionTitle';

const BlogPreview = ({ postsData, API_URL }) => {
  const [stateWidth, setStateWidth] = useState(null);

  if (process.browser) {
    useEffect(() => {
      setStateWidth(window.innerWidth);
    }, [window.innerWidth]);
  }

  return (
    <section className='BlogPreview'>
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
    </section>
  );
};

export default BlogPreview;
