import React from 'react';
import styled from '@emotion/styled';
import MarkdownView from 'react-showdown';
import Container from '@/Layouts/Container/Container';
import Main from '@/Layouts/Main/Main';

const PoliticsExample = ({ data, headTitle }) => {
  return (
    <PoliticsExampleStyled>
      <Main headTitle={headTitle}>
        <Container>
          <div className='markdown__wrap'>
            <MarkdownView markdown={data} />
          </div>
        </Container>
      </Main>
    </PoliticsExampleStyled>
  );
};

const PoliticsExampleStyled = styled.section`
  .markdown__wrap {
    color: ${({ theme }) => theme.colors.black};
    padding: ${({ theme }) => `${theme.pixelToVieWidth(20)} 0`};
  }

  h1,
  h2 {
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(15)};
  }

  p {
    margin-bottom: ${({ theme }) => theme.pixelToVieWidth(10)};
  }

  ${({ theme }) => theme.mediaDeskto} {
    .markdown__wrap {
      padding: ${({ theme }) => `${theme.pixelToVieWidth1920(40)} 0`};
    }

    h1,
    h2 {
      margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(25)};
    }

    p {
      margin-bottom: ${({ theme }) => theme.pixelToVieWidth1920(15)};
    }
  }
`;

export default PoliticsExample;
