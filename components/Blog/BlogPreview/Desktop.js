import styled from '@emotion/styled';
import Container from '../../../Layouts/Container/Container';
import BlogPostCard from '../BlogPostCard';

const Desktop = ({ fiveLastPosts, API_URL }) => {
  return (
    <DesktopStyled>
      <Container>
        <ul className='posts__list'>
          {fiveLastPosts.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <BlogPostCard post={item} API_URL={API_URL} />
              </React.Fragment>
            );
          })}
        </ul>
      </Container>
    </DesktopStyled>
  );
};

const DesktopStyled = styled.div`
  margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(30)};

  .posts__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export default Desktop;
