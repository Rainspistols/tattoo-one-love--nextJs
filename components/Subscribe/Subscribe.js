import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import Container from '../../Layouts/Container/Container';
import likeImg from './images/social-media.svg';

const Subscribe = ({ API_URL }) => {
  const [isEmailEntered, setEmailEntered] = useState(false);
  const inputMail = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmail = inputMail.current.value;

    const rawResponse = await fetch(`${API_URL}/newsletter-emails`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: newEmail }),
    });
    const content = await rawResponse.json();
    console.log(content);

    setEmailEntered(true);
  };

  const formElements = (
    <>
      <fieldset>
        <label className='title' htmlFor='email'>
          Subscribe
        </label>
        <input
          className='email'
          type='email'
          placeholder='Email'
          required
          id='email'
          ref={inputMail}
        />
      </fieldset>

      <input type='submit' value='subscribe' className='submit' />
    </>
  );

  const imgEmailEntered = (
    <fieldset>
      <label className='title' htmlFor='email'>
        Well done !
      </label>
      <img className='like' src={likeImg} alt='email accepted' />
    </fieldset>
  );

  const renderFormElements = isEmailEntered ? imgEmailEntered : formElements;

  return (
    <Container>
      <SubscribeStyled>
        <form action='' onSubmit={(e) => handleSubmit(e)}>
          {renderFormElements}
        </form>
      </SubscribeStyled>
    </Container>
  );
};

const SubscribeStyled = styled.div`
  background: ${(props) => props.theme.colors.grey1};
  padding: ${(props) => props.theme.pixelToVieWidth(20)} ${(props) => props.theme.pixelToVieWidth(28)};
  display: block;
  margin-bottom: ${(props) => props.theme.pixelToVieWidth(30)};

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  .title {
    font-size: ${(props) => props.theme.pixelToVieWidth(32)};
    line-height: ${(props) => props.theme.pixelToVieWidth(30)};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(27)};
    color: ${(props) => props.theme.colors.grey3};
    text-transform: uppercase;
    text-align: center;
    display: block;
    width: 100%;
  }

  .email {
    height: ${(props) => props.theme.pixelToVieWidth(48)};
    border: ${(props) => props.theme.pixelToVieWidth(1)} solid
      ${(props) => props.theme.colors.grey2};
    margin-bottom: ${(props) => props.theme.pixelToVieWidth(27)};
    border-radius: ${(props) => props.theme.pixelToVieWidth(5)};
    padding: 0 ${(props) => props.theme.pixelToVieWidth(20)};
    display: block;
    width: 100%;
    box-sizing: border-box;
    color: ${(props) => props.theme.colors.grey3};
    &::placeholder {
      color: ${(props) => props.theme.colors.grey2};
    }
  }

  .submit {
    font-size: ${(props) => props.theme.pixelToVieWidth(14)};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
    border-radius: ${(props) => props.theme.pixelToVieWidth(5)};
    width: ${(props) => props.theme.pixelToVieWidth(116)};
    height: ${(props) => props.theme.pixelToVieWidth(36)};
    border: none;
    background: ${(props) => props.theme.colors.pinkGradient};
    margin: 0 auto;
    cursor: pointer;
  }

  .like {
    height: ${(props) => props.theme.pixelToVieWidth(111)};
    margin: 0 auto;
  }
`;

export default Subscribe;
