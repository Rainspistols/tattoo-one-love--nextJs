import styled from '@emotion/styled';
import SectionTitle from '../../Layouts/SectionTitle/SectionTitle';
import { img, imgTablet, imgDesktop } from './images/';
import Container from '../../Layouts/Container/Container';

const AboutUsSection = () => {
  return (
    <AboutUsSectionStyled id='about-us'>
      <Container>
        <SectionTitle text='O nas' />
        <h3 className='title'>Wyjątkowe studio tatuażu na Woli</h3>
        <picture>
          <source media='(min-width: 1280px)' srcSet={imgDesktop} />
          <source media='(min-width: 768px)' srcSet={imgTablet} />
          <img src={img} alt='' />
        </picture>
        <p className='text'>
          Mocno wierzymy, że tatuaż jest jedną z najlepszych rzeczy, jaka
          kiedykolwiek nas spotkała. Dlatego, kiedy wybierasz nasze studio
          tatuażu, jesteśmy z tobą od etapu pomysłu do momentu pełnego wygojenia
          tatuażu. W Tattoo One Love przechodzimy przez cały proces razem, żeby
          stworzyć idealne warunki dla tatuażu twoich marzeń. Dlatego też
          korzystamy z{' '}
          <strong>najlepszego hipoalergicznego tuszu na rynku</strong> (World
          Famous, Eternal Ink) i <strong>igieł najwyższej jakości</strong>{' '}
          (Cheyenne, Kwadron). Co więcej,{' '}
          <strong>
            indywidualnie dobieramy sposób gojenia tatuażu pod każdego klienta
          </strong>{' '}
          (zależnie od typu skóry, warunków w pracy i w domu). Wysokie standardy
          higieny i sterylności są zawsze na pierwszym miejscu. Przyjdź do
          naszego studia i się o tym przekonaj.
        </p>
      </Container>
    </AboutUsSectionStyled>
  );
};

const AboutUsSectionStyled = styled.section`
  padding: ${(props) => props.theme.pixelToVieWidth(50)} 0;

  .title {
    font-weight: 700;
    font-size: ${(props) => props.theme.pixelToVieWidth(20)};
    line-height: ${(props) => props.theme.pixelToVieWidth(20)};
    padding-right: 40%;
    color: ${(props) => props.theme.colors.darkBlue};
  }

  img {
    width: 100%;
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(25)};
  }

  .text {
    font-size: ${(props) => props.theme.pixelToVieWidth(13)};
    line-height: ${(props) => props.theme.pixelToVieWidth(20)};
    font-weight: 400;
    color: ${(props) => props.theme.colors.darkBlue};
    text-align: justify;
  }

  /* MEDIA */
  ${(props) => props.theme.mediaDesktop} {
    font-size: ${(props) => props.theme.pixelToVieWidth1920(26)};
    line-height: ${(props) => props.theme.pixelToVieWidth1920(30)};
    padding: 0 ${(props) => props.theme.pixelToVieWidth1920(100)};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(100)};

    > .Container {
      padding-right: ${(props) => props.theme.pixelToVieWidth1920(650)};
      box-sizing: border-box;
      position: relative;
    }

    .title {
      font-size: ${(props) => props.theme.pixelToVieWidth1920(34)};
      line-height: ${(props) => props.theme.pixelToVieWidth1920(40)};
      margin-bottom: ${(props) => props.theme.pixelToVieWidth1920(20)};
      padding-right: 0;
    }

    img {
      width: ${(props) => props.theme.pixelToVieWidth1920(515)};
      margin-bottom: 0;
    }

    picture {
      position: absolute;
      right: 0;
      bottom: 0;
    }

    .text {
      font-size: ${(props) => props.theme.pixelToVieWidth1920(17)};
      line-height: ${(props) => props.theme.pixelToVieWidth1920(28)};
      order: 1;
      padding-right: ${(props) => props.theme.pixelToVieWidth1920(50)};
      box-sizing: border-box;
    }
  }
`;

export default AboutUsSection;
