import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  ${styledNormalize}

  @import url("https://fonts.googleapis.com/css?family=Roboto");

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    position: relative;
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
  }
`;
