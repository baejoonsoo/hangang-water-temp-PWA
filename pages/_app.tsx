import '../styles/globals.css';
import '../styles/font.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>지금 한강은</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
