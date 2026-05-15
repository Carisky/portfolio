import { createContext, useContext, useState } from "react";

const translations = {
  ru: {
    brand: {
      name: "Carisky",
      role: "Web developer",
      intro: "Собираю сайты, админки и веб-сервисы, которые можно запустить, поддерживать и развивать без хаоса в коде.",
      primaryCta: "Рассчитать проект",
      secondaryCta: "Посмотреть услуги",
    },
    nav: {
      home: "Главная",
      services: "Услуги",
      pricing: "Цены",
      contacts: "Контакты",
      portfolio: "Портфолио",
    },
    services: {
      title: "Услуги",
      subtitle: "Не просто верстка отдельных экранов: закрываю путь от идеи и структуры до деплоя, админки и дальнейшего развития.",
      learnMore: "Подробнее",
      calculate: "Рассчитать",
    },
    notFound: {
      title: "404 — Страница не найдена",
      backHome: "Проверьте адрес или вернитесь на <a href='/'>главную</a>",
    },
    aboutService: {
      notFound: "Услуга не найдена",
      included: "Что входит",
      result: "Результат",
      calculate: "Рассчитать стоимость",
    },
    pricing: {
      title: "Соберите проект",
      subtitle: "Отметьте нужные блоки, а справа появится короткая смета для обсуждения.",
      total: "Итого: ",
      checkoutTitle: "Мини-checkout",
      empty: "Выберите услуги слева, чтобы собрать предварительный список работ.",
      discuss: "Обсудить заказ",
      selected: "Выбрано",
    },
  },
  pl: {
    brand: {
      name: "Carisky",
      role: "Web developer",
      intro: "Tworzę strony, panele admina i usługi webowe, które da się uruchomić, utrzymywać i rozwijać bez chaosu w kodzie.",
      primaryCta: "Wyceń projekt",
      secondaryCta: "Zobacz usługi",
    },
    nav: {
      home: "Główna",
      services: "Usługi",
      pricing: "Cennik",
      contacts: "Kontakt",
      portfolio: "Portfolio",
    },
    services: {
      title: "Usługi",
      subtitle: "Nie tylko kodowanie ekranów: prowadzę projekt od struktury i interfejsu po wdrożenie, panel admina i rozwój.",
      learnMore: "Więcej",
      calculate: "Wyceń",
    },
    notFound: {
      title: "404 — Strona nie znaleziona",
      backHome: "Sprawdź adres lub wróć na <a href='/'>stronę główną</a>.",
    },
    aboutService: {
      notFound: "Usługa nie znaleziona",
      included: "Co zawiera",
      result: "Rezultat",
      calculate: "Wyceń usługę",
    },
    pricing: {
      title: "Skonfiguruj projekt",
      subtitle: "Zaznacz potrzebne elementy, a po prawej pojawi się krótka wycena do omówienia.",
      total: "Razem: ",
      checkoutTitle: "Mini-checkout",
      empty: "Wybierz usługi po lewej, aby złożyć wstępną listę prac.",
      discuss: "Omów zamówienie",
      selected: "Wybrano",
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
