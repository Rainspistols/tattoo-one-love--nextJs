import styled from '@emotion/styled';
import Container from '../../Layouts/Container/Container';
import Line from '../../UI/Line';
import { instagram, vk, facebook } from './images/';

const FollowUs = () => {
  const socialsData = [
    {
      link: 'https://www.facebook.com/Hannah.Evolve/',
      className: 'facebook',
      icon: facebook,
    },
    {
      link: 'https://www.instagram.com/hannah.evolution/',
      className: 'instagram',
      icon: instagram,
    },
    { link: 'https://vk.com/hannah.evolve', className: 'vk', icon: vk },
  ];

  return (
    <FollowUsStyled>
      <Container>
        <Line />
        <section>
          <h3>
            Follow us <span className='underline'>@tattoo</span>
          </h3>
          <ul>
            {socialsData.map(({ link, className, icon }, index) => (
              <li key={index}>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                  <img src={icon} alt='' className={className} />
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
  margin-bottom: ${(props) => props.theme.pixelToVieWidth(47)};

  section {
    padding-top: ${(props) => props.theme.pixelToVieWidth(20)};
    padding-bottom: ${(props) => props.theme.pixelToVieWidth(20)};
  }

  h3 {
    font-size: ${(props) => props.theme.pixelToVieWidth(18)};
    line-height: ${(props) => props.theme.pixelToVieWidth(27)};
    font-weight: 400;
    color: ${(props) => props.theme.colors.grey4};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(20)};
    text-align: center;

    .underline {
      border-bottom: ${(props) => props.theme.pixelToVieWidth(1)} solid
        ${(props) => props.theme.colors.pink};
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      &:not(:last-child) {
        margin-right: ${(props) => props.theme.pixelToVieWidth(50)};
      }
    }

    img {
      width: ${(props) => props.theme.pixelToVieWidth(35)};
    }
  }
`;

export default FollowUs;
