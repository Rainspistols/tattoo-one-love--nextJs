import React from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import Container from '@/Layouts/Container/Container';

const PoliticsExample = ({ data }) => {
  return (
    <PoliticsExampleStyled>
      <Container>
        <div className='markdown__wrap'>
          <ReactMarkdown source={data} />
        </div>
      </Container>
    </PoliticsExampleStyled>
  );
};

const PoliticsExampleStyled = styled.main`
  .markdown__wrap {
    color: ${({ theme }) => theme.colors.black};
    padding: ${({ theme }) => `${theme.vw(20)} 0`};
  }

  h1,
  h2 {
    margin-bottom: ${({ theme }) => theme.vw(15)};
  }

  p {
    margin-bottom: ${({ theme }) => theme.vw(10)};
  }

  ${({ theme }) => theme.mediaDeskto} {
    .markdown__wrap {
      padding: ${({ theme }) => `${theme.vw1920(40)} 0`};
    }

    h1,
    h2 {
      margin-bottom: ${({ theme }) => theme.vw1920(25)};
    }

    p {
      margin-bottom: ${({ theme }) => theme.vw1920(15)};
    }
  }
`;

export default PoliticsExample;
