import { useContext } from "react";
import { createContext, useState } from "react";
import messagesEnglish from "../lang/en-US.json";
import messagesSpanish from "../lang/es-ES.json";

export const langContext = createContext();

export const useLang = () => {
  const context = useContext(langContext);
  return context;
};

export const LangProvider = ({ children }) => {
  let localeDefault;
  let messagesDefault;
  const lang = localStorage.getItem("lang");

  if (lang) {
    localeDefault = lang;
    if (lang === "es-ES") {
      messagesDefault = messagesSpanish;
    } else if (lang === "en-US") {
      messagesDefault = messagesEnglish;
    } else {
      localeDefault = "en-US";
      messagesDefault = messagesEnglish;
    }
  }

  const [messages, setMessages] = useState(messagesDefault);
  const [locale, setLocale] = useState(localeDefault);

  const changeLang = (lang) => {
    switch (lang) {
      case "es-ES":
        setMessages(messagesSpanish);
        setLocale(lang);
        localStorage.setItem("lang", lang);
        break;
      case "en-US":
        setMessages(messagesEnglish);
        setLocale(lang);
        localStorage.setItem("lang", lang);
        break;
      default:
        setMessages(messagesEnglish);
        setLocale(lang);
        localStorage.setItem("lang", lang);
    }
  };

  return (
    <langContext.Provider value={{ changeLang, messages, locale }}>
      {children}
    </langContext.Provider>
  );
};
