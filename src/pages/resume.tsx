import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withLayout } from "@/layout/Layout"
import ResumePageComponent from "@/page-components/ResumePage/ResumePage";

const Resume = () => {
  return (
    <>
      <ResumePageComponent />
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

export default withLayout(Resume);