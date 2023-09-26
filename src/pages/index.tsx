import { withLayout } from "@/layout/Layout";
import MainPageComponent from "@/page-components/MainPage/MainPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const MainPage = () => {
  return (
  <>
    <MainPageComponent />
  </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale,
    },
  };
};

export default withLayout(MainPage);
