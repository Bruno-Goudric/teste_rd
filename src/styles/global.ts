import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font-family: 'Open Sans', Helvetica, sans-serif, arial
  }

  #root {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;
