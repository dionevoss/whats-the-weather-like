import { createGlobalStyle } from 'styled-components'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  body {
    @font-face {
      font-family: "Open Sans";
      src: url("/fonts/OpenSans-Regular.ttf");
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }

    padding: 0;
    margin: 0;
    background: rgb(105,252,254);
    background: linear-gradient(164deg, rgba(105,252,254,1) 0%, rgba(180,255,201,1) 49%, rgba(255,217,134,1) 100%);
    font-family: Open Sans;

  }
`
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>What's the weather like</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
