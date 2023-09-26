import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withLayout } from "@/layout/Layout"
import PrepareToTestPage from "@/page-components/PrepareToTestPage/PrepareToTestPage";

const PrepareToTest = () => {
  return (
    <>
      <PrepareToTestPage />
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale,
    },
  };
};

export default withLayout(PrepareToTest);