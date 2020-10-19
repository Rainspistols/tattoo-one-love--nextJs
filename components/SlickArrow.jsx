import styled from '@emotion/styled';

const SlickArrow = (props) => {
  const { className, onClick, next } = props;
  return (
    <SlickArrowStyled className={className} onClick={onClick} next={next}>
      <>
        <div className='slick-arrow--custom'>
          <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 970.504 970.503'>
            <path d='M120.027 962.802c26.6 0 53.5-8.801 75.7-27l288.1-234.7 290.899 237c22.301 18.1 49.101 27 75.7 27 34.8 0 69.4-15.101 93.101-44.2 41.899-51.4 34.1-127-17.2-168.8l-366.7-298.8c-44.1-36-107.5-36-151.6 0l-363.8 296.5c-51.4 41.8-59.1 117.399-17.3 168.8 23.8 29.1 58.3 44.2 93.1 44.2z' />
            <path d='M120.027 541.902c26.6 0 53.5-8.8 75.7-27l288.1-234.7 290.899 237c22.301 18.101 49.101 27 75.7 27 34.8 0 69.4-15.1 93.101-44.2 41.899-51.399 34.1-127-17.2-168.8l-366.7-298.8c-44.1-36-107.5-36-151.6 0l-363.8 296.4c-51.4 41.9-59.1 117.5-17.3 168.9 23.8 29.1 58.3 44.2 93.1 44.2z' />
          </svg>
        </div>
      </>
    </SlickArrowStyled>
  );
};

const SlickArrowStyled = styled.button`
  .slick-arrow--custom {
    position: relative;
    width: ${({ theme }) => theme.vw1920(50)};
    height: ${({ theme }) => theme.vw1920(200)};
    background-color: transparent;
    border: ${({ theme }) => theme.vw1920(5)} solid rgba(255, 255, 255, 0);
    z-index: 3;
    box-sizing: border-box;

    transition: all 1s ease;

    :hover,
    :focus {
      border: ${({ theme }) => theme.vw1920(5)} solid rgba(255, 255, 255, 0.4);
      transition: all 1s ease;
    }

    svg {
      position: absolute;
      width: 75%;
      left: 50%;
      top: 50%;
      transform: translateY(-50%) translateX(-50%) rotate(${(props) => (props.next ? '90deg' : '-90deg')});

      path {
        fill: rgba(255, 255, 255, 0.4);
      }
    }
  }
`;

export default SlickArrow;
