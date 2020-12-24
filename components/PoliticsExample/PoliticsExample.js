import React from "react";
import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";
import Container from "@/Layouts/Container/Container";
import { NextSeo } from "next-seo";

const PoliticsExample = ({ data, title }) => {
  return (
    <>
      <NextSeo title={title} />
      <PoliticsExampleStyled>
        <Container>
          <div className="markdown__wrap">
            <ReactMarkdown source={data} />
          </div>
        </Container>
      </PoliticsExampleStyled>
    </>
  );
};

const PoliticsExampleStyled = styled.div`
  *:not(.Container) {
    margin: revert;
    padding: revert;
  }

  .markdown__wrap {
    color: ${({ theme }) => theme.colors.black};
    padding: ${({ theme }) => `${theme.vw(20)} 0`};
  }

  code {
    white-space: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul {
    line-height: 1.2;
  }

  ul,
  ol,
  li {
    list-style: revert;
    list-style-type: revert;
  }
  
  ul,ol {
    padding-left: 20px;
  }

  h1 {
    font-size: ${({ theme }) => `${theme.vw(32)}`};
  }

  h2 {
    font-size: ${({ theme }) => `${theme.vw(26)}`};
  }
  h3 {
    font-size: ${({ theme }) => `${theme.vw(22)}`};
  }

  h4 {
    font-size: ${({ theme }) => `${theme.vw(18)}`};
  }
  h5 {
    font-size: ${({ theme }) => `${theme.vw(16)}`};
  }
  h6 {
    font-size: ${({ theme }) => `${theme.vw(14)}`};
  }

  a {
    font-size: ${({ theme }) => `${theme.vw(16)}`};
    line-height: ${({ theme }) => `${theme.vw(25)}`};
    color: ${({ theme }) => theme.colors.pink};

    :hover,
    :focus {
      text-decoration: underline;
    }
  }

  p,
  ul,
  ol {
    font-size: ${({ theme }) => `${theme.vw(16)}`};
    line-height: ${({ theme }) => `${theme.vw(25)}`};
  }


  ${({ theme }) => theme.mediaDesktop} {
    .markdown__wrap {
      padding: ${({ theme }) => `${theme.vw1920(40)} 0`};
    }

    h1 {
      font-size: ${({ theme }) => `${theme.vw1920(48)}`};
    }

    h2 {
      font-size: ${({ theme }) => `${theme.vw1920(36)}`};
    }
    h3 {
      font-size: ${({ theme }) => `${theme.vw1920(28)}`};
    }
    h4 {
      font-size: ${({ theme }) => `${theme.vw1920(18)}`};
    }
    h5 {
      font-size: ${({ theme }) => `${theme.vw1920(16)}`};
    }
    h6 {
      font-size: ${({ theme }) => `${theme.vw1920(14)}`};
    }

    a {
      font-size: ${({ theme }) => `${theme.vw1920(16)}`};
      line-height: ${({ theme }) => `${theme.vw1920(25)}`};
    }

    p,
    ul,
    ol,
    code {
      font-size: ${({ theme }) => `${theme.vw1920(18)}`};
      line-height: ${({ theme }) => `${theme.vw1920(27)}`};
    }

  }
`;

export default PoliticsExample;
