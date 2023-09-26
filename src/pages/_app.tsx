import { AppProps } from "../../node_modules/next/app";
import { appWithTranslation } from 'next-i18next';
import Head from '../../node_modules/next/head';
import "../styles/normalize.css";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
      <title>Welingua</title>
      </Head>
      <Component {...pageProps}/>
    </>
  )
}

export default appWithTranslation(MyApp);