import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withLayout } from "@/layout/Layout"
import SpeakingClubPage from "@/page-components/SpeakingClubPage/SpeakingClubPage";

const SpeakingClub = () => {
  return (
    <>
      <SpeakingClubPage />
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

export default withLayout(SpeakingClub);