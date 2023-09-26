import { AppProps } from "next/app";
import { appWithTranslation } from 'next-i18next';
import { useEffect } from "react";
import {useRouter} from 'next/router';

const UnknownPage = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter()
  useEffect(() => {
    router.replace("/")
  })
  return (
    <>
    </>
  )
}

export default appWithTranslation(UnknownPage);