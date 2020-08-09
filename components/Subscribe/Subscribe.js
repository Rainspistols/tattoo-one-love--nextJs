import styled from '@emotion/styled';
import { useState } from 'react';
import Container from '../../Layouts/Container/Container';
import likeImg from './images/social-media.svg';

const Subscribe = ({ API_URL }) => {
  const [inputValue, setInputValue] = useState('');
  const [isEmailEntered, setEmailEntered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(inputValue)) {
      const rawResponse = await fetch(`${API_URL}/newsletter-emails`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: inputValue }),
      });
      setEmailEntered(true);
    }
  };

  const formElements = (
    <>
      <fieldset>
        <label className='title' htmlFor='email'>
          Newsletter
        </label>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className='email'
          type='email'
          placeholder='Email'
          id='email'
          required
        />
      </fieldset>

      <input type='submit' value='Zapisz się' className='submit' />
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
        <form onSubmit={(e) => handleSubmit(e)}>{renderFormElements}</form>
      </SubscribeStyled>
    </Container>
  );
};

const SubscribeStyled = styled.div`
  background: ${({ theme }) => theme.colors.grey1};
  padding: ${({ theme }) =>
    `${theme.pixelToVieWidth(20)} ${theme.pixelToVieWidth(28)}`};
  display: block;
  margin-bottom: ${({ theme }) => theme.pixelToVieWidth(30)};

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  .title {
    font-size: ${({ theme }) => theme.pixelToVieWidth(32)};
    line-height: ${({ theme }) => theme.pixelToVieWidth(30)};
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(27)};
    color: ${({ theme }) => theme.colors.grey3};
    text-transform: uppercase;
    text-align: center;
    display: block;
    width: 100%;
  }

  .email {
    height: ${({ theme }) => theme.pixelToVieWidth(48)};
    border: ${({ theme }) =>
      `${theme.pixelToVieWidth(1)} solid ${theme.colors.grey2}`};
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(27)};
    border-radius: ${({ theme }) => theme.pixelToVieWidth(5)};
    padding: 0 ${({ theme }) => theme.pixelToVieWidth(20)};
    display: block;
    width: 100%;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.grey3};
    &::placeholder {
      color: ${({ theme }) => theme.colors.grey2};
    }
    font-size: ${({ theme }) => theme.pixelToVieWidth(14)};
    line-height: ${({ theme }) => theme.pixelToVieWidth(21)};
  }

  .submit {
    font-size: ${({ theme }) => theme.pixelToVieWidth(14)};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    border-radius: ${({ theme }) => theme.pixelToVieWidth(5)};
    width: ${({ theme }) => theme.pixelToVieWidth(116)};
    height: ${({ theme }) => theme.pixelToVieWidth(36)};
    border: none;
    background: ${({ theme }) => theme.colors.pinkGradient};
    margin: 0 auto;
    cursor: pointer;
  }

  .like {
    height: ${({ theme }) => theme.pixelToVieWidth(111)};
    margin: 0 auto;
  }

  ${({ theme }) => theme.mediaDesktop} {
    padding: 0;
    margin: 0;

    .title {
      color: ${({ theme }) => theme.colors.pink};
      font-size: ${({ theme }) => theme.pixelToVieWidth1920(30)};
      line-height: ${({ theme }) => theme.pixelToVieWidth1920(30)};
      margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(10)};
      font-weight: 500;
    }

    .email {
      width: ${({ theme }) => theme.pixelToVieWidth1920(300)};
      height: ${({ theme }) => theme.pixelToVieWidth1920(50)};
      border-radius: ${({ theme }) => theme.pixelToVieWidth1920(5)};
      border: ${({ theme }) =>
        `${theme.pixelToVieWidth1920(1)} solid ${theme.colors.grey2}`};
      margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(10)};
      padding: ${({ theme }) =>
        `${theme.pixelToVieWidth1920(20)} ${theme.pixelToVieWidth1920(14)}`};
      font-size: ${({ theme }) => theme.pixelToVieWidth1920(14)};
      line-height: ${({ theme }) => theme.pixelToVieWidth1920(21)};
    }

    .submit {
      width: ${({ theme }) => theme.pixelToVieWidth1920(116)};
      height: ${({ theme }) => theme.pixelToVieWidth1920(36)};
      font-size: ${({ theme }) => theme.pixelToVieWidth1920(14)};
      line-height: ${({ theme }) => theme.pixelToVieWidth1920(21)};
      border-radius: ${({ theme }) => theme.pixelToVieWidth1920(5)};
    }

    .like {
      height: ${({ theme }) => theme.pixelToVieWidth1920(100)};
    }
  }
`;

export default Subscribe;
