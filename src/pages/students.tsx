import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withLayout } from "@/layout/Layout"
import StudentsPage from "@/page-components/StudentsPage/StudentsPage";

const Students = () => {
  return (
    <>
      <StudentsPage />
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

export default withLayout(Students);