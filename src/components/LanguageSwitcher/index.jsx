import { useContext } from "react";
import { languageContext } from "../../LanguageContext";
import styles from "./styles.module.css";

function LanguageSwitcher() {
  const { language, setLanguage } = useContext(languageContext);

  const changeLanguage = () => setLanguage(language === "en" ? "ru" : "en");

  return (
    <>
      <button onClick={changeLanguage} className={styles.button}>
        Switch Language
      </button>
    </>
  );
}
export default LanguageSwitcher;
