import styled from '@emotion/styled';

const Contacts = (data) => {
  return (
    <ContactacsStyled>
      <h3 className='menu-title'>contacts</h3>
      <ul>
        {data.map(({ title, href, icon }, index) => (
          <li key={index}>
            <a href={href}>
              <img src={icon} alt='' />
              {title}
            </a>
          </li>
        ))}
      </ul>
    </ContactacsStyled>
  );
};

const ContactacsStyled = styled.section``;

export default Contacts;
