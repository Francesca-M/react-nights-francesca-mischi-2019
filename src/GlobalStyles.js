import { createGlobalStyle } from 'styled-components'
import normalizeCss from 'normalize.css'
import theme from './global/theme'

const GlobalStyles = createGlobalStyle`
  ${normalizeCss}

  @font-face {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    src:
      url(../font/Montserrat-Regular.woff2) format('woff2'),
      url(../font/Montserrat-Regular.woff) format('woff'),
      url(../font/Montserrat-Regular.ttf) format('truetype');
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    line-height: 1.6;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    background-color: ${theme.color.softGray};
  }
  `

export default GlobalStyles
