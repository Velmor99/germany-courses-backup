import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withLayout } from "@/layout/Layout"
import DocumentsPage from "@/page-components/DocumentsPage/DocumentsPage";

const Documents = () => {
  return (
    <>
      <DocumentsPage />
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

export default withLayout(Documents);