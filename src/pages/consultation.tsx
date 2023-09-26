import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withLayout } from "@/layout/Layout"
import ConsultationPage from "@/page-components/ConsultationPage/ConsultationPage";

const Consultation = () => {
  return (
    <>
      <ConsultationPage />
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

export default withLayout(Consultation);