import Banner from "@/components/Banner/Banner";
import FAQ from "@/components/FAQ/Faq";
import { FormComponent } from "@/components/Form/Form";
import GreenContentBlock from "@/components/GreenContentBlock/GreenContentBlock";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import OurAdvantages from "@/components/OurAdvantages/OurAdvantages";
import Pricing from "@/components/Pricing/Pricing";
import styles from './DocumentsPage.module.scss';
import prices from '../../../public/prices.json';

const DocumentsPage = () => {
  return (
    <>
      <section className={styles["documents__banner-section"]}>
        <Banner greenContent={false} bannerName="documents_banner" />
      </section>
      <section className={styles["documents__green-content-section"]}>
        <GreenContentBlock content={"documents_green_content"} revers={true} optionsForTextWithPhoto={{
          targets: ["Не переживайте,"],
          fontWeight: 700,
          colorText: "green"
        }} optionsForTextBelowPhoto={{
          targets: ["без", "лишних", "хлопот!"],
          fontWeight: 700,
          colorText: "white"
        }} />
      </section>
      <section className={styles["documents__advantages-section"]}>
        <OurAdvantages imageType={"documents"} />
      </section>
      <section className={styles["documents__how-it-works-section"]}>
        <HowItWorks title="how_it_works" dataString="documents_how_it_works" textOptions={{
          targets: [],
          fontWeight: 0,
          colorText: "green"
        }} />
      </section>
      <section className={styles["documents__pricing-section"]}>
        <Pricing price={prices.documents} perLesson={false} />
      </section>
      <section className={styles["documents__form-section"]}>
        <FormComponent styleType="white" title="form.title_for_documents" />
      </section>
      <section className={styles["documents__faq-section"]}>
        <FAQ faqType={"FAQ_documents"} />
      </section>
    </>
  );
};

export default DocumentsPage;
