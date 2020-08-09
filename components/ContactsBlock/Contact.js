import styled from '@emotion/styled';
// Icons
import { MdMail } from 'react-icons/md';
import { RiMapPinLine } from 'react-icons/ri';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';


const Contact = ({ iconsColor, textColor }) => {
  const data = [
    {
      title: 'Gostyńska 41, 01-151, Warszawa (Wola)',
      href:
        'https://www.google.com/maps/place/Gosty%C5%84ska+41,+01-151+Warszawa/@52.243836,20.9636062,17z/data=!3m1!4b1!4m5!3m4!1s0x471ecb77869776ab:0x9adb88cc791e3c4a!8m2!3d52.243836!4d20.9657949',
      icon: <RiMapPinLine />,
    },
    {
      title: '+ 48 79 590 38 21 ',
      href: 'tel:+48795903821',
      icon: <FaPhoneSquareAlt />,
    },
    {
      title: 'tattooonelove@gmail.com',
      href: 'mailto:tattooonelove@gmail.com',
      icon: <MdMail />,
    },
  ];


  return (
    <ContactStyled className='Contact'>
      <ul style={{ color: textColor }} >
        {data.map(({ title, href, icon }, index) => (
          <li key={index}>
            <a href={href}>
              <IconContext.Provider value={{ color: iconsColor }}>
                {icon}
              </IconContext.Provider>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </ContactStyled>
  );
};

const ContactStyled = styled.section`
  margin-bottom: ${({ theme }) => theme.pixelToVieWidth(20)};

  a {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.pixelToVieWidth(13)};
    line-height: ${({ theme }) => theme.pixelToVieWidth(20)};
    white-space: nowrap;
  }

  svg {
    margin-right: ${({ theme }) => theme.pixelToVieWidth(8)};
    width: auto;
    height: ${({ theme }) => theme.pixelToVieWidth(16)};
  }
  /* MEDIA */
  ${({ theme }) => theme.mediaDesktop} {
    margin-bottom: 0;
    a {
      font-size: ${({ theme }) => theme.pixelToVieWidth1920(20)};
      line-height: ${({ theme }) => theme.pixelToVieWidth1920(30)};
    }

    svg {
      height: ${({ theme }) => theme.pixelToVieWidth1920(20)};
      margin-right: ${({ theme }) => theme.pixelToVieWidth1920(5)};
    }
  }
`;

export default Contact;
