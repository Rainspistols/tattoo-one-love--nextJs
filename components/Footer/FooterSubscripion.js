import styled from '@emotion/styled';
import FooterTitle from './FooterTitle';
import useWindowDimensions from '../../hooks/useWindowDimension';
import { useState, useEffect } from 'react';

const FooterSubscripion = () => {
  const { width } = useWindowDimensions();
  const [stateWidth, setStateWidth] = useState(null);

  useEffect(() => {
    setStateWidth(width);
  }, []);

  const subscriptionListData = [
    {
      title: 'Facebook',
      href: 'https://www.facebook.com/',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='35'
          height='34.788'
          viewBox='0 0 35 34.788'
        >
          <path
            d='M35.625,18.125A17.5,17.5,0,1,0,15.391,35.413V23.184H10.945V18.125h4.446V14.269C15.391,9.884,18,7.461,22,7.461a26.932,26.932,0,0,1,3.918.342v4.3H23.711a2.529,2.529,0,0,0-2.852,2.733v3.285h4.853l-.776,5.059H20.859v12.23A17.506,17.506,0,0,0,35.625,18.125Z'
            transform='translate(-0.625 -0.625)'
            fill='#fff'
          />
        </svg>
      ),
    },
    {
      title: 'Vkontakte',
      href: 'https://www.vk.com/',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='35'
          height='20.792'
          viewBox='0 0 35 20.792'
        >
          <path
            d='M35.655,8.91c.24-.812,0-1.41-1.157-1.41H30.672a1.643,1.643,0,0,0-1.663,1.085,32.066,32.066,0,0,1-4.7,7.829c-.89.89-1.3,1.176-1.787,1.176-.24,0-.611-.286-.611-1.1V8.91c0-.975-.273-1.41-1.079-1.41H14.812a.923.923,0,0,0-.975.877c0,.923,1.377,1.137,1.52,3.736v5.64c0,1.235-.221,1.462-.708,1.462-1.3,0-4.457-4.769-6.328-10.227C7.944,7.929,7.574,7.5,6.593,7.5H2.766c-1.092,0-1.312.513-1.312,1.085,0,1.014,1.3,6.049,6.049,12.7,3.164,4.542,7.621,7,11.676,7,2.437,0,2.735-.546,2.735-1.488,0-4.34-.221-4.75,1-4.75.565,0,1.54.286,3.814,2.476,2.6,2.6,3.028,3.762,4.483,3.762h3.827c1.092,0,1.644-.546,1.325-1.624-.728-2.268-5.646-6.933-5.867-7.245-.565-.728-.4-1.053,0-1.7C30.5,17.714,35.175,11.139,35.655,8.91Z'
            transform='translate(-1.453 -7.5)'
            fill='#fff'
          />
        </svg>
      ),
    },
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='35'
          height='35'
          viewBox='0 0 35 35'
        >
          <path
            d='M3.151,35.011a4.161,4.161,0,0,1-1.915-1.087A3.851,3.851,0,0,1,.176,32.1c-.123-.486-.13-.944-.13-14.451C.04,2.472.019,3.306.416,2.451A4.082,4.082,0,0,1,2.406.475c.882-.39.021-.369,15.312-.349L31.806.139l.438.15A4.148,4.148,0,0,1,34.87,2.916l.15.438.014,14.088c.021,15.647.055,14.478-.445,15.49a4.063,4.063,0,0,1-1.73,1.73c-1,.492.137.458-15.346.451C5.675,35.107,3.5,35.093,3.151,35.011Zm27.26-4.165c.561-.4.574-.438.595-3.043.021-2.537.007-2.667-.41-3.071-.376-.369-.554-.39-3.03-.383l-2.257.007L25,24.52A1.682,1.682,0,0,0,24.5,25l-.205.3-.007,2.264c-.007,1.238.021,2.366.055,2.5a1.277,1.277,0,0,0,.7.862l.342.171,2.373-.021,2.366-.021Zm-11.5-6.641a6.788,6.788,0,0,0,5.239-5.266,8.354,8.354,0,0,0,.075-2.223,6.888,6.888,0,0,0-3.508-5.033,7.339,7.339,0,0,0-1.805-.67c-.13-.014-.4-.055-.609-.089a6.756,6.756,0,0,0-6.1,2.612,6.691,6.691,0,0,0,.13,8.309A6.819,6.819,0,0,0,16.843,24.3,7.137,7.137,0,0,0,18.908,24.205ZM7,19.767a10.853,10.853,0,0,1,.9-6.941,10.06,10.06,0,0,1,2.045-2.811,10.666,10.666,0,0,1,9.308-3.036,10.834,10.834,0,0,1,8.713,7.933,10.621,10.621,0,0,1,.28,3.83,7.53,7.53,0,0,1-.28,1.477c-.021.034-.014.062.021.068.26.027,2.92.021,2.968-.014s.055-3.057.048-7.632l-.021-7.6-.205-.294a1.709,1.709,0,0,0-.513-.451L29.96,4.14l-12.488.021L4.991,4.174l-.28.185a1.8,1.8,0,0,0-.438.445l-.164.26L4.088,12.62c-.007,4.158-.007,7.584.014,7.625a7.359,7.359,0,0,0,1.525.068h1.5Z'
            transform='translate(-0.044 -0.117)'
            fill='#fff'
          />
        </svg>
      ),
    },
  ];

  return (
    <FooterSubscripionStyled className='FooterSubscripion'>
      <FooterTitle text='Subscription ' />
      <ul>
        {subscriptionListData.map(({ title, href, icon }, index) => (
          <li key={index}>
            <a href={href} target='_blank' rel='nofollow noopener'>
              {stateWidth < 1280 ? title : icon}
            </a>
          </li>
        ))}
      </ul>
    </FooterSubscripionStyled>
  );
};
const FooterSubscripionStyled = styled.section`
  margin-bottom: ${(props) => props.theme.pixelToVieWidth(10)};
  
  ul {
    display: flex;
    flex-wrap: wrap;
  }

  a {
    font-size: ${(props) => props.theme.pixelToVieWidth(13)};
    line-height: ${(props) => props.theme.pixelToVieWidth(20)};
    margin-right: ${(props) => props.theme.pixelToVieWidth(30)};
    display: flex;
    color: ${(props) => props.theme.colors.grey1};
    font-weight: 400;
  }

  img {
    padding-right: ${(props) => props.theme.pixelToVieWidth(10)};
  }

  /* MEDIA */
  ${(props) => props.theme.mediaDesktop} {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0;

    .FooterTitle {
      margin: 0 ${(props) => props.theme.pixelToVieWidth1920(26)} 0 0;
    }

    a {
      width: ${(props) => props.theme.pixelToVieWidth1920(35)};
      height: ${(props) => props.theme.pixelToVieWidth1920(35)};
      margin-right: ${(props) => props.theme.pixelToVieWidth1920(44)};
      ${(props) => props.theme.flexCenter}

      svg path {
        transition: all 0.3s ease-out;
      }

      :hover,
      :focus {
        svg path {
          fill: ${(props) => props.theme.colors.pink};
        }
      }
    }
  }
`;

export default FooterSubscripion;
