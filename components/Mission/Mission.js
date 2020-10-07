import styled from '@emotion/styled';
import SectionTitle from '@/UI/SectionTitle';
import Container from '@/Layouts/Container/Container';
import ReactMarkdown from 'react-markdown';

const Mission = ({ ourMissionText }) => {
  return (
    <MissionStyled>
      <Container>
        <SectionTitle text='Nasza misja' />
        <ReactMarkdown source={ourMissionText} escapeHtml={false} />
      </Container>
    </MissionStyled>
  );
};

const MissionStyled = styled.section`
  margin-bottom: ${(props) => props.theme.vw(50)};

  p {
    font-size: ${(props) => props.theme.vw(16)};
    line-height: ${(props) => props.theme.vw(25)};
    font-weight: 400;
    color: ${(props) => props.theme.colors.darkBlue};
    text-align: justify;
  }

  ${(props) => props.theme.mediaDesktop} {
    margin-bottom: ${(props) => props.theme.vw1920(100)};
    p {
      font-size: ${(props) => props.theme.vw1920(17)};
      line-height: ${(props) => props.theme.vw1920(28)};
    }
  }
`;

export default Mission;
