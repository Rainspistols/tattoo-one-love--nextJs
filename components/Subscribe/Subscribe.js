import styled from '@emotion/styled';
import { useState } from 'react';
import Container from '@/Layouts/Container/Container';

const Subscribe = () => {
  const { NEXT_PUBLIC_API_URL: API_URL } = process.env;

  const [inputValue, setInputValue] = useState('');
  const [isEmailEntered, setEmailEntered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(inputValue)) {
      await fetch(`${API_URL}/newsletter-emails`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: inputValue }),
      });
      setEmailEntered(true);
    }
  };

  const formElements = (
    <>
      <fieldset>
        <h2 className="title" htmlFor="email">
          Newsletter
        </h2>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="email"
          type="email"
          placeholder="Email"
          id="email"
          required
        />
      </fieldset>

      <input type="submit" value="Zapisz się" className="submit" />
    </>
  );

  const imgEmailEntered = (
    <fieldset>
      <label className="title" htmlFor="email">
        Well done !
      </label>
      <img className="like" src="/Subscribe/social-media.svg" alt="email accepted" />
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
  padding: ${({ theme }) => `${theme.vw(20)} ${theme.vw(28)}`};
  display: block;
  margin-bottom: ${({ theme }) => theme.vw(30)};

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
  }

  .title {
    font-size: ${({ theme }) => theme.vw(32)};
    line-height: ${({ theme }) => theme.vw(30)};
    margin-bottom: ${({ theme }) => theme.vw(27)};
    color: ${({ theme }) => theme.colors.grey3};
    text-transform: uppercase;
    text-align: center;
    display: block;
    width: 100%;
    font-weight: 400;
  }

  .email {
    height: ${({ theme }) => theme.vw(48)};
    border: ${({ theme }) => `${theme.vw(1)} solid ${theme.colors.grey2}`};
    margin-bottom: ${({ theme }) => theme.vw(27)};
    border-radius: ${({ theme }) => theme.vw(5)};
    padding: 0 ${({ theme }) => theme.vw(20)};
    display: block;
    width: 100%;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.grey3};
    &::placeholder {
      color: ${({ theme }) => theme.colors.grey2};
    }
    font-size: ${({ theme }) => theme.vw(14)};
    line-height: ${({ theme }) => theme.vw(21)};
  }

  .submit {
    font-size: ${({ theme }) => theme.vw(14)};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    border-radius: ${({ theme }) => theme.vw(5)};
    width: ${({ theme }) => theme.vw(116)};
    height: ${({ theme }) => theme.vw(36)};
    border: none;
    background: ${({ theme }) => theme.colors.pinkGradient};
    margin: 0 auto;
    cursor: pointer;
  }

  .like {
    height: ${({ theme }) => theme.vw(100)};
    margin: 0 auto;
  }

  ${({ theme }) => theme.mediaDesktop} {
    padding: 0;
    margin: 0;

    .title {
      color: ${({ theme }) => theme.colors.pink};
      font-size: ${({ theme }) => theme.vw1920(30)};
      line-height: ${({ theme }) => theme.vw1920(30)};
      margin-bottom: ${({ theme }) => theme.vw1920(10)};
      font-weight: 500;
    }

    .email {
      width: ${({ theme }) => theme.vw1920(300)};
      height: ${({ theme }) => theme.vw1920(50)};
      border-radius: ${({ theme }) => theme.vw1920(5)};
      border: ${({ theme }) => `${theme.vw1920(1)} solid ${theme.colors.grey2}`};
      margin-bottom: ${({ theme }) => theme.vw1920(10)};
      padding: ${({ theme }) => `${theme.vw1920(20)} ${theme.vw1920(14)}`};
      font-size: ${({ theme }) => theme.vw1920(14)};
      line-height: ${({ theme }) => theme.vw1920(21)};
    }

    .submit {
      width: ${({ theme }) => theme.vw1920(116)};
      height: ${({ theme }) => theme.vw1920(36)};
      font-size: ${({ theme }) => theme.vw1920(14)};
      line-height: ${({ theme }) => theme.vw1920(21)};
      border-radius: ${({ theme }) => theme.vw1920(5)};
      transition: all 1s ease-in-out;
    }

    .like {
      height: ${({ theme }) => theme.vw1920(100)};
    }
  }
`;

export default Subscribe;
