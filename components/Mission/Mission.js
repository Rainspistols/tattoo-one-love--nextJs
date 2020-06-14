import styled from '@emotion/styled';
import SectionTitle from '../../Layouts/SectionTitle/SectionTitle';
import Container from '../../Layouts/Container/Container';

const Mission = () => {
  return (
    <MissionStyled>
      <Container>
        <SectionTitle text='mission' />
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </Container>
    </MissionStyled>
  );
};

const MissionStyled = styled.section`
  margin-bottom: ${(props) => props.theme.pixelToVieWidth(50)};

  p {
    font-size: ${(props) => props.theme.pixelToVieWidth(16)};
    line-height: ${(props) => props.theme.pixelToVieWidth(27)};
    font-weight: 400;
    color: ${(props) => props.theme.colors.darkBlue};
  }

  ${(props) => props.theme.mediaDesktop} {
    margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(100)};
    p {
      font-size: ${(props) => props.theme.pixelToVieWidth1920(17)};
      line-height: ${(props) => props.theme.pixelToVieWidth1920(28)};
    }
  }
`;

export default Mission;
