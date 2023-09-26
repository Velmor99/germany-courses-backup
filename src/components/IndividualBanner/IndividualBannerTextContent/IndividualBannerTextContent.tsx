import cn from "classnames";
import styles from "./IndividualBannerTextContent.module.scss";
import { useTranslation } from "next-i18next";
import { IndividualBannerTextContentProps } from "./IndividualBannerTextContent.props";
import ButtonComponent from "@/components/Button/Button";

const IndividualBannerTextContent = ({
  title,
  text,
  buttonText,
}: IndividualBannerTextContentProps) => {
  const scrollToForm = () => {
    const form = document.getElementById("form");
    form?.scrollIntoView({ behavior: "smooth" });
  };
  const { t } = useTranslation();
  return (
    <div className={cn(styles["banner-content"])}>
      <div className={cn(styles["banner-content__container"])}>
        <h2 className={cn(styles["banner-content__title"])}>{t(title)}</h2>
        <p className={cn(styles["banner-content__text"])}>{t(text)}</p>
        <ButtonComponent
          onClick={() => scrollToForm()}
          className={cn(styles["banner-content__button"])}
          buttonType="green"
        >
          <span>{t(buttonText)}</span>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default IndividualBannerTextContent;
