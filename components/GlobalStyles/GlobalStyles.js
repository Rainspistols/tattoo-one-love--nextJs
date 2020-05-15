import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

const GlobalStyles = () => (
  <Global
    styles={css`
      ${emotionNormalize}
      html,
      body {
        padding: 0;
        margin: 0;
        background: white;
        min-height: 100%;
        font-family: 'Poppins', sans-serif;
      }

      img {
        max-width: 100%;
      }
      footer,
      header,
      body {
        font-size: 14px;
        line-height: 1.4em;
      }

      a {
        text-decoration: none;
        color: inherit;
        margin: 0;
      }

      ul,
      li,
      ol {
        margin: 0;
        padding: 0;
        list-style-type: none;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
      }
      dl,
      dd {
        margin-bottom: 0;
      }

      figure {
        margin: 0;
      }

      button {
        padding: 0;
      }

      img {
        max-width: 100%;
        height: auto;
        display: block;
      }

      p {
        margin: 0;
      }

      .visually-hidden {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
    `}
  />
);
export default GlobalStyles;
