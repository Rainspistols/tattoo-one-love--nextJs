import styled from '@emotion/styled';
import SectionTitle from '@/UI/SectionTitle';
import Container from '@/Layouts/Container/Container';

const Mission = () => {
  return (
    <MissionStyled>
      <Container>
        <SectionTitle text='Nasza misja' />
        <p>
          Wpisując do wyszukiwarki „<strong>studio tatuażu Warszawa</strong>”
          ciężko od razu znaleźć miejsce, w którym ci zrobią twoją wymarzoną
          dziarę. Ale nasz
          <strong>salon tatuażu</strong> jest dokładnie tym miejscem, ponieważ
          bardzo poważnie traktujemy wybór miejsca, wzoru, wielkości oraz{' '}
          <strong>gojenie tatuażu</strong>. Co więcej, zawsze doradzamy{' '}
          <strong>jak przygotować się do tatuażu</strong> i co zrobić, żeby
          zmniejszyć ból podczas sesji. Mając <strong>świeży tatuaż</strong> od
          Tattoo One Love dostaniesz instrukcje o tym{' '}
          <strong>jak dbać o tatuaż</strong> od razu po sesji i po wygojeniu,
          ale zawsze też możesz skontaktować z nami i otrzymać odpowiedzi na
          wszystkie pytania. Nie mamy na stronie sekcji{' '}
          <strong>tatuaż cennik</strong>, dlatego że podanie ceny bez niezbędnej
          informacji o kształcie wzoru, wielkości i miejsca jest niemożliwe. Ale
          wystarczy napisać do nas na Facebook, Instagram lub na mail
          (ewentualnie zadzwonić), i jak najszybciej wycenimy twoją dziarę.
          Naszą specjalnością są <strong>tatuaże kolorowe</strong>,{' '}
          <strong>tatuaże damskie</strong>, <strong>tatuaże męskie</strong>,
          <strong> małe tatuaże</strong>, <strong>tatuaże dla par</strong> oraz{' '}
          <strong>tatuaż rękaw</strong>. Szukasz inspiracji na temat{' '}
          <strong>tatuaż kwiaty</strong> lub <strong>mały tatuaż</strong>?
          Wystarczy przeglądać nasze pracy, żeby zrozumieć, że na pewno
          stworzymy dla ciebie taki wzór, który chcesz i dopasujemy do twojego
          ciała. Jeśli podoba ci się <strong>tatuaż na nadgarstku</strong>, z
          przyjemnością dobierzemy odpowiednie <strong>wzory tatuaży</strong>,
          ale najpierw poinformujemy o ryzykach tatuowania w takim miejscu, bo
          to jest naszym obowiązkiem. Nie wykonujemy bezmyślnie pracy wzięte z
          Pinterestu - tworzymy unikalne tatuaże w miejscach na ciele, gdzie oni
          będą wyglądać jak najlepiej i chronić jasność jak najdłużej. Nie każde{' '}
          <strong>studio tatuażu</strong> się przyjmuje takimi rzeczami, więc
          wpisując „<strong>salon tatuażu Warszawa</strong>”, „
          <strong>tatuaż Warszawa</strong>” bądź „
          <strong>tattoo Warszawa</strong>”, i wybierając Tattoo One Love wśród
          innych, podejmujesz właściwą decyzję.
        </p>
      </Container>
    </MissionStyled>
  );
};

const MissionStyled = styled.section`
  margin-bottom: ${(props) => props.theme.vw(50)};

  p {
    font-size: ${(props) => props.theme.vw(16)};
    line-height: ${(props) => props.theme.vw(27)};
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
