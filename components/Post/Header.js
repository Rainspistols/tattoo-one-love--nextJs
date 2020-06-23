import styled from '@emotion/styled';
import Container from '../../Layouts/Container/Container';
import CategoryAndDateRow from './CategoryAndDateRow';
import useWindowDimensions from '../../hooks/useWindowDimension';
import { useState, useEffect } from 'react';

const Header = ({ postBySlug }) => {
  const { width } = useWindowDimensions();
  const [stateWidth, setStateWidth] = useState(null);
  useEffect(() => {
    setStateWidth(width);
  }, [width]);

  const headerMobile = (
    <>
      <Container>
        <CategoryAndDateRow post={postBySlug} />

        <h1 className='title'>{postBySlug.title}</h1>
      </Container>
      <div className='imgWrap'>
        <img src={postBySlug.href} alt='' />
      </div>
    </>
  );

  const headerDesktop = (
    <Container>
      <div className='dateAndTitleWrap'>
        <CategoryAndDateRow post={postBySlug} />
        <h1 className='title'>{postBySlug.title}</h1>
      </div>

      <div className='imgWrap'>
        <img src={postBySlug.href} alt='' />
      </div>
    </Container>
  );

  return (
    <HeaderStyled>
      {stateWidth < 1280 ? headerMobile : headerDesktop}
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  .title {
    margin: 0;

    font-size: ${(props) => props.theme.pixelToVieWidth(32)};
    line-height: ${(props) => props.theme.pixelToVieWidth(48)};
    color: ${(props) => props.theme.colors.darkBlue};
    font-weight: 600;
  }

  .imgWrap {
    height: ${(props) => props.theme.pixelToVieWidth(210)};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(20)};

    overflow: hidden;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  ${({ theme }) => theme.mediaDesktop} {
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(51)};

    > .Container {
      ${({ theme }) => theme.flexBetween};
      align-items: center;
    }

    .dateAndTitleWrap {
      display: flex;
      flex-direction: column;
      max-width: ${({ theme }) => theme.pixelToVieWidth1920(530)};

      .title {
        font-size: ${({ theme }) => theme.pixelToVieWidth1920(48)};
        line-height: ${({ theme }) => theme.pixelToVieWidth1920(72)};
        font-weight: 500;
      }
    }

    .imgWrap {
      margin: 0;
      width: ${({ theme }) => theme.pixelToVieWidth1920(640)};
      height: ${({ theme }) => theme.pixelToVieWidth1920(500)};
    }
  }
`;

export default Header;
