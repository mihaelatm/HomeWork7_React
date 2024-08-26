import React from "react";
import { useContext } from "react";
import styles from "./styles.module.css";
import { languageContext } from "../../LanguageContext";

function TextDisplay() {
  const { language } = useContext(languageContext);

  const texts = {
    en: "Hello, welcome to our application!",
    ru: "Привет, добро пожаловать в нашу приложение!",
  };

  return (
    <>
      <h1 className={styles.text_display}>{texts[language]}</h1>
    </>
  );
}
export default TextDisplay;
