import { FormComponent } from "@/components/Form/Form";
import styles from "./MainPage.module.scss";
import DeutchEducation from "@/components/DeutchEducation/DeutchEducation";
import IndividualBanner from "@/components/IndividualBanner/IndividualBanner";
import AdvantagesSpeakingClub from "@/components/AdvantagesSpeakingClub/AdvantagesSpeakingClub";
import AdditionalServices from "@/components/AdditionalServices/AdditionalServices";
import MainPricing from "@/components/MainPricing/MainPricing";
import GreenContentBlock from "@/components/GreenContentBlock/GreenContentBlock";
import MainAdditionalServices from "@/components/MainAdditionalServices/MainAdditionalServices";

const MainPageComponent = () => {
  return (
    <>
      <section className={styles["main-page__banner-section"]}>
        <IndividualBanner
          title="main_banner_title"
          text="main_banner_text"
          buttonText="main_banner_button"
          where="main"
        />
      </section>
      <section className={styles["main-page__advantages-section"]}>
        <AdvantagesSpeakingClub where="main" />
      </section>
      <section className={styles["main-page__additional-services-section"]}>
        <AdditionalServices />
      </section>
      <section className={styles["main-page__green-content-section"]}>
        <GreenContentBlock revers={true} content={"main_green_content"} optionsForTextWithPhoto={{
          targets: ["Welingua"],
          fontWeight: 700,
          colorText: "green"
        }} optionsForTextBelowPhoto={{
          targets: ["не ограничиваются", "учебниками"],
          fontWeight: 700,
          colorText: "white"
        }} />
      </section>
      <section className={styles["main-page__deutch-education-section"]}>
        <DeutchEducation />
      </section>
      <section className={styles["main-page__pricing-section"]}>
        <MainPricing />
      </section>
      <section className={styles["main-page__form-section"]}>
        <FormComponent title={"form.title_for_main"} styleType="green" />
      </section>
      <section className={styles["main-page__additional-section"]}>
        <MainAdditionalServices />
      </section>
    </>
  );
};

export default MainPageComponent;
