import React, { createContext, useState, useEffect } from "react";

const LanguageContext = createContext("");

export const LanguageProvider = (props) => {
  const [language, setLanguage] = useState(localStorage.getItem("Language") || "fr");

  useEffect(() => localStorage.setItem("Language", language));

  const toggle = () =>
    language === "fr" ? setLanguage("en") : setLanguage("fr");

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggle,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
