import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import styles from "./LocalizationMenu.module.scss";
import cn from "classnames";
import { routes } from "../../../routes";
import { LocalizationProps } from "./LocalizationMenu.props";
import LanguageIcon from "../../../public/common/language.svg";
import ArrowIcon from "../../../public/common/localization_arrow.svg";
// import { motion } from "framer-motion";

// const list = { hidden: { opacity: 0 } }

const LocalizationMenu = ({
  classname,
  isInBurger,
}: LocalizationProps): JSX.Element => {
  const [isOpenLocalizationMenu, openLocalizationMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const changeLocalizationMenu = (value: boolean) => {
    openLocalizationMenu(value);
  };

  const transformLocaleToText = () => {
    switch (router.locale) {
      // case routes.localization.en.route:
      //   return routes.localization.en.title;

      case routes.localization.de.route:
        return routes.localization.de.title;

      // case routes.localization.ua.route:
      //   return routes.localization.ua.title;

      case routes.localization.ru.route:
        return routes.localization.ru.title;

      default:
        break;
    }
  };

  return (
    <div
      className={cn(styles["localization"], classname)}
      // onMouseEnter={() => changeLocalizationMenu(true)}
      onClick={() => changeLocalizationMenu(!isOpenLocalizationMenu)}
    >
      <div className={cn(styles["localization__current-block"])}>
        <div className={cn(styles["localization__current-language-icon"])}>
          <LanguageIcon />
        </div>
        <span className={cn(styles["localization__current"])}>
          {transformLocaleToText()}
        </span>
        <div className={cn(styles["localization__current-arrow-icon"])}>
          <ArrowIcon />
        </div>
      </div>
      <ul
        onMouseLeave={() => changeLocalizationMenu(false)}
        className={cn(styles["localization__list"], {
          [styles["localization__list-burger"]]: isInBurger === true,
          [styles["localization__list-open"]]: isOpenLocalizationMenu,
        })}
      >
        {/* <li onClick={() => changeLocalizationMenu(false)} className={cn(styles["localization__list-item"])}>
            <Link
              replace={true}
              href={pathname}
              locale="en"
              className={cn(styles["localization__link"], {
                [styles["localization__link-active"]]: router.locale === "en"
              })}
            >
              {routes.localization.en.title}
            </Link>
          </li> */}
        <li
          onClick={() => changeLocalizationMenu(false)}
          className={cn(styles["localization__list-item"])}
        >
          <Link
            className={cn(styles["localization__link"], {
              [styles["localization__link-open-active"]]: router.locale === "de" && isOpenLocalizationMenu,
              [styles["localization__link-open"]]: isOpenLocalizationMenu
            })}
            replace={true}
            href={pathname}
            locale="de"
          >
            {routes.localization.de.title}
          </Link>
        </li>
        {/* <li onClick={() => changeLocalizationMenu(false)} className={cn(styles["localization__list-item"])}>
            <Link
              className={cn(styles["localization__link"], {
                [styles["localization__link-active"]]: router.locale === "ua"
              })}
              replace={true}
              href={pathname}
              locale="ua"
            >
              {routes.localization.ua.title}
            </Link>
          </li> */}
        <li
          onClick={() => changeLocalizationMenu(false)}
          className={cn(styles["localization__list-item"])}
        >
          <Link
            className={cn(styles["localization__link"], {
              [styles["localization__link-open-active"]]: router.locale === "ru" && isOpenLocalizationMenu,
            [styles["localization__link-open"]]: isOpenLocalizationMenu
            })}
            replace={true}
            href={pathname}
            locale="ru"
          >
            {routes.localization.ru.title}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LocalizationMenu;
