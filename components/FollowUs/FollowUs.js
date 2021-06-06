import styled from '@emotion/styled';
import Container from '~/Layouts/Container/Container';
import Line from '~/UI/Line';

const FollowUs = () => {
  const socialsData = [
    {
      link: 'https://www.facebook.com/tattooonelovewwa/',
      className: 'facebook',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34.788" viewBox="0 0 35 34.788">
          <path
            data-name="Icon awesome-facebook"
            d="M35 17.5a17.5 17.5 0 10-20.234 17.288V22.559H10.32V17.5h4.446v-3.856c0-4.385 2.609-6.808 6.609-6.808a26.932 26.932 0 013.918.342v4.3h-2.207a2.529 2.529 0 00-2.852 2.733v3.285h4.853l-.776 5.059h-4.077v12.23A17.506 17.506 0 0035 17.5z"
            fill="#7393a7"
          />
        </svg>
      ),
      id: 1,
    },
    {
      link: 'https://www.instagram.com/tattoo.onelove/',
      className: 'instagram',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 34.788">
          <path
            data-name="Icon zocial-instagram"
            d="M3.107 34.894a4.161 4.161 0 01-1.915-1.087 3.851 3.851 0 01-1.06-1.824c-.123-.486-.13-.944-.13-14.451C-.004 2.355-.025 3.189.372 2.334A4.082 4.082 0 012.362.358c.882-.39.021-.369 15.312-.349l14.088.013.438.15a4.148 4.148 0 012.626 2.627l.15.438.014 14.088c.021 15.647.055 14.478-.445 15.49a4.063 4.063 0 01-1.73 1.73c-1 .492.137.458-15.346.451-11.838-.006-14.013-.02-14.362-.102zm27.26-4.165c.561-.4.574-.438.595-3.043.021-2.537.007-2.667-.41-3.071-.376-.369-.554-.39-3.03-.383l-2.257.007-.309.164a1.682 1.682 0 00-.5.48l-.205.3-.007 2.264c-.007 1.238.021 2.366.055 2.5a1.277 1.277 0 00.7.862l.342.171 2.373-.021 2.366-.021zm-11.5-6.641a6.788 6.788 0 005.239-5.266 8.354 8.354 0 00.075-2.223 6.888 6.888 0 00-3.508-5.033 7.339 7.339 0 00-1.805-.67c-.13-.014-.4-.055-.609-.089a6.756 6.756 0 00-6.1 2.612 6.691 6.691 0 00.13 8.309 6.819 6.819 0 004.51 2.455 7.137 7.137 0 002.065-.095zM6.956 19.65a10.853 10.853 0 01.9-6.941 10.06 10.06 0 012.045-2.811 10.666 10.666 0 019.308-3.036 10.834 10.834 0 018.713 7.933 10.621 10.621 0 01.28 3.83 7.53 7.53 0 01-.28 1.477c-.021.034-.014.062.021.068.26.027 2.92.021 2.968-.014s.055-3.057.048-7.632l-.021-7.6-.205-.294a1.709 1.709 0 00-.513-.451l-.304-.156-12.488.021-12.481.013-.28.185a1.8 1.8 0 00-.438.445l-.164.26-.021 7.556c-.007 4.158-.007 7.584.014 7.625a7.359 7.359 0 001.525.068h1.5z"
            fill="#7393a7"
          />
        </svg>
      ),
      id: 2,
    },
    {
      link: 'https://vk.com/tattoo.onelove',
      className: 'vk',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="20.792" viewBox="0 0 35 20.792">
          <path
            data-name="Icon awesome-vk"
            d="M34.202 1.41c.24-.812 0-1.41-1.157-1.41h-3.826a1.643 1.643 0 00-1.663 1.085 32.066 32.066 0 01-4.7 7.829c-.89.89-1.3 1.176-1.787 1.176-.24 0-.611-.286-.611-1.1V1.41c0-.975-.273-1.41-1.079-1.41h-6.02a.923.923 0 00-.975.877c0 .923 1.377 1.137 1.52 3.736v5.64c0 1.235-.221 1.462-.708 1.462-1.3 0-4.457-4.769-6.328-10.227C6.491.429 6.121 0 5.14 0H1.313C.221 0 .001.513.001 1.085c0 1.014 1.3 6.049 6.049 12.7 3.164 4.542 7.621 7 11.676 7 2.437 0 2.735-.546 2.735-1.488 0-4.34-.221-4.75 1-4.75.565 0 1.54.286 3.814 2.476 2.6 2.6 3.028 3.762 4.483 3.762h3.827c1.092 0 1.644-.546 1.325-1.624-.728-2.268-5.646-6.933-5.867-7.245-.565-.728-.4-1.053 0-1.7.004-.002 4.679-6.577 5.159-8.806z"
            fill="#7393a7"
          />
        </svg>
      ),
      id: 3,
    },
  ];

  return (
    <FollowUsStyled className="FollowUs">
      <Container>
        <Line />
        <section>
          <h2>Dołącz do nas</h2>
          <ul>
            {socialsData.map(({ link, className, icon, id }) => (
              <li key={id}>
                <a href={link} target="_blank" rel="noopener noreferrer" className={className}>
                  {icon}
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

  h2 {
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

    h2 {
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
        transition: all 0.3s ease;

        :not(:last-child) {
          margin-right: ${(props) => props.theme.vw1920(62)};
        }

        :hover,
        :focus {
          transform: scale(1.5);
          transition: all 0.3s ease;
        }

        :hover svg path,
        :focus svg path {
          fill: ${({ theme }) => theme.colors.pink};
          transition: all 0.3s ease;
        }

        a {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      svg {
        /* width: 100%;
        height: auto; */
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${({ theme }) => theme.vw1920(35)};
        height: ${({ theme }) => theme.vw1920(35)};

        path {
          transition: all 0.3s ease;
        }
      }
    }

    .Line {
      display: none;
    }
  }
`;

export default FollowUs;
