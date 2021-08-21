import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from "../src/lib/AlurakutCommons" 

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  background-image: linear-gradient(to right bottom, #e7c6c6, #f3a29f, #f87b74, #f55246, #eb0f0f);
  font-family: sans-serif;

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AlurakutStyles}


  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
