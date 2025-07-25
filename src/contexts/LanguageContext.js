import { createContext, useContext, useState } from "react";

const translations = {
  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      pricing: "Цены",
      contacts: "Контакты",
      portfolio: "Портфолио",
    },
    notFound: {
      title: "404 — Страница не найдена",
      backHome: "Проверьте адрес или вернитесь на <a href='/'">главную</a>.",
    },
    aboutService: {
      notFound: "Услуга не найдена",
    },
    pricing: {
      title: "Расчёт стоимости",
      total: "Итого: ",
    },
  },
  pl: {
    nav: {
      home: "Strona główna",
      services: "Usługi",
      pricing: "Cennik",
      contacts: "Kontakt",
      portfolio: "Portfolio",
    },
    notFound: {
      title: "404 — Strona nie znaleziona",
      backHome: "Sprawdź adres lub wróć na <a href='/'">stronę główną</a>.",
    },
    aboutService: {
      notFound: "Usługa nie znaleziona",
    },
    pricing: {
      title: "Kalkulacja kosztów",
      total: "Razem: ",
    },
  },
};

const LanguageContext = createContext({
  lang: "ru",
  setLang: () => {},
  toggleLang: () => {},
  t: () => "",
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("ru");
  const toggleLang = () => setLang((prev) => (prev === "ru" ? "pl" : "ru"));
  const t = (path) => {
    const keys = path.split(".");
    let value = translations[lang];
    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) return path;
    }
    return value;
  };
  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
