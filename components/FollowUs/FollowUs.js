import styled from '@emotion/styled';
import Container from '@/Layouts/Container/Container';
import Line from '@/UI/Line';



const FollowUs = () => {
  const socialsData = [
    {
      link: 'https://www.facebook.com/Hannah.Evolve/',
      className: 'facebook',
      icon: '/FollowUs/facebook.svg',
      id: 1,
    },
    {
      link: 'https://www.instagram.com/hannah.evolution/',
      className: 'instagram',
      icon: '/FollowUs/instagram.svg',
      id: 2,
    },
    { link: 'https://vk.com/hannah.evolve', className: 'vk', icon: '/FollowUs/vk.svg', id: 3 },
  ];

  return (
    <FollowUsStyled className='FollowUs'>
      <Container>
        <Line />
        <section>
          <h3>Dołącz do nas</h3>
          <ul>
            {socialsData.map(({ link, className, icon, id }) => (
              <li key={id}>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                  <img src={icon} alt={className} className={className} />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <Line />
      </Container>
    </FollowUsStyled>
  );
};

const FollowUsStyled = styled.div`
  margin-bottom: ${(props) => props.theme.vw(47)};

  section {
    padding-top: ${(props) => props.theme.vw(20)};
    padding-bottom: ${(props) => props.theme.vw(20)};
  }

  h3 {
    font-size: ${(props) => props.theme.vw(18)};
    line-height: ${(props) => props.theme.vw(27)};
    font-weight: 400;
    color: ${(props) => props.theme.colors.grey4};
    margin-bottom: ${(props) => props.theme.vw(20)};
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      &:not(:last-child) {
        margin-right: ${(props) => props.theme.vw(50)};
      }
    }

    img {
      width: ${(props) => props.theme.vw(35)};
    }
  }
  /* MEDIA */
  ${(props) => props.theme.mediaDesktop} {
    margin: 0 4vw 0 0;

    section {
      padding: 0;
    }

    h3 {
      color: ${(props) => props.theme.colors.pink};
      font-size: ${(props) => props.theme.vw1920(30)};
      line-height: ${(props) => props.theme.vw1920(30)};
      margin-bottom: ${(props) => props.theme.vw1920(42)};
      text-transform: uppercase;
      font-weight: 500;
    }

    ul {
      justify-content: center;

      li {
        :not(:last-child) {
          margin-right: ${(props) => props.theme.vw1920(62)};
        }
      }

      img {
        width: ${(props) => props.theme.vw1920(30)};
      }
    }

    .Line {
      display: none;
    }
  }
`;

export default FollowUs;
