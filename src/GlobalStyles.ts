import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700;900&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Code Pro', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border: 2px solid #000;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border: 2px solid #000;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
