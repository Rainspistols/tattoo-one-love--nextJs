import styled from '@emotion/styled';
// Icons
import { MdMail } from 'react-icons/md';
import { RiMapPinLine } from 'react-icons/ri';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Contacts = ({ iconsColor, textColor }) => {
  const data = [
    {
      title: 'Gostyńska 41, 01-151, Warszawa (Wola)',
      href:
        'https://www.google.com/maps/place/Gosty%C5%84ska+41,+01-151+Warszawa/@52.243836,20.9636062,17z/data=!3m1!4b1!4m5!3m4!1s0x471ecb77869776ab:0x9adb88cc791e3c4a!8m2!3d52.243836!4d20.9657949',
      icon: <RiMapPinLine />,
    },
    {
      title: '+ 48 888 947 502',
      href: 'tel:+48888947502',
      icon: <FaPhoneSquareAlt />,
    },
    {
      title: 'tattooonelovewwa@gmail.com',
      href: 'mailto:tattooonelovewwa@gmail.com',
      icon: <MdMail />,
    },
  ];

  return (
    <ContactsStyled className='Contact'>
      <ul style={{ color: textColor }}>
        {data.map(({ title, href, icon }, index) => (
          <li key={index}>
            <a href={href}>
              <IconContext.Provider value={{ color: iconsColor }}>{icon}</IconContext.Provider>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </ContactsStyled>
  );
};

const ContactsStyled = styled.section`
  margin-bottom: ${({ theme }) => theme.vw(20)};

  a {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.vw(13)};
    line-height: ${({ theme }) => theme.vw(20)};
    white-space: nowrap;

    :hover,
    :focus {
      text-decoration: underline;
    }
  }

  svg {
    margin-right: ${({ theme }) => theme.vw(8)};
    width: auto;
    height: ${({ theme }) => theme.vw(16)};
  }
  /* MEDIA */
  ${({ theme }) => theme.mediaDesktop} {
    margin-bottom: 0;
    a {
      font-size: ${({ theme }) => theme.vw1920(20)};
      line-height: ${({ theme }) => theme.vw1920(30)};
    }

    svg {
      height: ${({ theme }) => theme.vw1920(20)};
      margin-right: ${({ theme }) => theme.vw1920(5)};
    }
  }
`;

export default Contacts;
