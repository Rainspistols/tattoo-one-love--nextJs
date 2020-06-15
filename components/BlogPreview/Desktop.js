import styled from '@emotion/styled';
import Link from 'next/link';
import Container from '../../Layouts/Container/Container';
import BlogPostCard from '../BlogPostCard/BlogPostCard';

const Desktop = ({ postsData, API_URL }) => {
  return (
    <DesktopStyled>
      <Container>
        <ul>
          {postsData.map((item, index) => {
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
  ${(props) => props.theme.mediaDesktop} {
    display: block;
    margin-bottom: 30px;

    ul {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
`;

export default Desktop;
