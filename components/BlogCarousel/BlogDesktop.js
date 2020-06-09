import styled from '@emotion/styled';
import Link from 'next/link';
import Container from '../../Layouts/Container/Container';

const BlogDesktop = ({ postsData, API_URL }) => {
  return (
    <BlogDesktopStyled>
      <Container>
        <ul>
          {postsData.map(({ img, post_categories, title, slug }, index) => {
            if (index < 3) {
              return (
                <li key={index}>
                  <Link href={`/blog/${post_categories[0].slug}/${slug}`}>
                    <a>
                      <div className='imgWrap'>
                        <img src={`${API_URL}${img.url}`} alt='' />
                      </div>

                      <p className='category'>{post_categories[0].name}</p>
                      <p className='shortText'>{title}</p>
                    </a>
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </Container>
    </BlogDesktopStyled>
  );
};

const BlogDesktopStyled = styled.section`
  display: none;

  ${(props) => props.theme.mediaDesktop} {
    display: block;
    margin-bottom: 30px;

    ul {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    li {
      padding-bottom: 20px;
      transition: box-shadow 0.3s ease-out;

      :not(:last-child) {
        margin-right: ${(props) => props.theme.pixelToVieWidth1920(40)};
      }
      background: ${(props) => props.theme.colors.grey1};

      :hover,
      :focus {
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086);
      }

      .imgWrap {
        width: ${(props) => props.theme.pixelToVieWidth1920(400)};
        height: ${(props) => props.theme.pixelToVieWidth1920(300)};
        margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(38)};

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .category {
        text-align: center;
        color: ${(props) => props.theme.colors.grey4};
        text-transform: uppercase;
        font-size: 12px;
        line-height: 12px;
        margin-bottom: 7px;
      }

      .shortText {
        font-size: 17px;
        line-height: 31px;
        font-weight: 500;
        text-align: center;
        color: ${(props) => props.theme.colors.darkBlue};
      }
    }
  }
`;

export default BlogDesktop;
