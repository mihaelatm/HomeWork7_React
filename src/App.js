import { useState } from "react";
import "./App.css";
import { languageContext } from "./LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";
import DisplayText from "./components/DisplayText";

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      <div className="content">
        <DisplayText />
        <LanguageSwitcher />
      </div>
    </languageContext.Provider>
  );
}

export default App;
