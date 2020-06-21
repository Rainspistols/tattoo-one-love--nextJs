import styled from '@emotion/styled';
import Link from 'next/link';
import Container from '../../../Layouts/Container/Container';
import BlogPostCard from '../BlogPostCard';

const Desktop = ({ fiveLastPosts, API_URL }) => {
  return (
    <DesktopStyled>
      <Container>
        <ul className='posts__list'>
          {fiveLastPosts.map((item, index) => {
            if (index < 3) {
              return (
                <React.Fragment key={index}>
                  <BlogPostCard post={item} API_URL={API_URL} />
                </React.Fragment>
              );
            }
          })}
        </ul>
      </Container>
    </DesktopStyled>
  );
};

const DesktopStyled = styled.div`
  margin-bottom: 30px;

  .posts__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export default Desktop;
