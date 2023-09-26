import cn from 'classnames';
import styles from './SentFormNotification.module.scss';
import { useTranslation } from "next-i18next";

const SentFormNotification = () => {
  const {t} = useTranslation();
  return (
    <div className={cn(styles["notification"])}>
      <div className={cn(styles["notification__content"])}>
        <p className={cn(styles["notification__title"])}>{t("form.success_notification_title")}</p>
        <p className={cn(styles["notification__text"])}>{t("form.success_notification_text")}</p>
      </div>
    </div>
  )
}

export default SentFormNotification;