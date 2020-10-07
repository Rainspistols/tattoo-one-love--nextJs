import styled from '@emotion/styled';

import SectionTitle from '@/UI/SectionTitle';
import Container from '@/Layouts/Container/Container';

const AboutUsSection = () => {
  return (
    <AboutUsSectionStyled id='about-us'>
      <Container>
        <SectionTitle text='O nas' />
        <h3 className='title'>Wyjątkowe studio tatuażu na Woli</h3>
        <picture>
          <source
            media='(min-width: 1280px)'
            srcSet='/AboutUsSection/postImg--desktop.jpg'
          />
          <source
            media='(min-width: 768px)'
            srcSet='/AboutUsSection/postImg--tablet.jpg'
          />
          <img
            src='/AboutUsSection/postImg.jpg'
            alt='Tattoo one love interior'
          />
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
  padding: ${({ theme }) => theme.vw(50)} 0;

  .title {
    font-weight: 700;
    font-size: ${({ theme }) => theme.vw(20)};
    line-height: ${({ theme }) => theme.vw(20)};
    padding-right: 40%;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  img {
    width: 100%;
    margin-bottom: ${({ theme }) => theme.vw(25)};
  }

  .text {
    font-size: ${({ theme }) => theme.vw(13)};
    line-height: ${({ theme }) => theme.vw(20)};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkBlue};
    text-align: justify;
  }

  /* MEDIA */
  ${({ theme }) => theme.mediaDesktop} {
    font-size: ${({ theme }) => theme.vw1920(26)};
    line-height: ${({ theme }) => theme.vw1920(30)};
    padding: 0 ${({ theme }) => theme.vw1920(100)};
    margin-bottom: ${({ theme }) => theme.vw1920(100)};

    > .Container {
      padding-right: ${({ theme }) => theme.vw1920(650)};
      box-sizing: border-box;
      position: relative;
    }

    .title {
      font-size: ${({ theme }) => theme.vw1920(34)};
      line-height: ${({ theme }) => theme.vw1920(40)};
      margin-bottom: ${({ theme }) => theme.vw1920(20)};
      padding-right: 0;
    }

    img {
      width: ${({ theme }) => theme.vw1920(515)};
      margin-bottom: 0;
    }

    picture {
      position: absolute;
      right: 0;
      bottom: 0;
    }

    .text {
      font-size: ${({ theme }) => theme.vw1920(17)};
      line-height: ${({ theme }) => theme.vw1920(28)};
      order: 1;
      padding-right: ${({ theme }) => theme.vw1920(50)};
      box-sizing: border-box;
    }
  }
`;

export default AboutUsSection;