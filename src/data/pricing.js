export const pricing = {
  ru: [
    {
      id: "websites",
      title: "Сайты под ключ",
      options: [
        {
          id: "landing",
          label: "Лендинг",
          price: 400,
          description:
            "Небольшой сайт-визитка для презентации услуги или продукта. Обычно состоит из одной страницы с секциями.",
        },
        {
          id: "corp",
          label: "Корпоративный сайт",
          price: 800,
          description:
            "Сайт компании с разделами об услугах, команде, контактах. Позволяет управлять контентом через админку.",
        },
        {
          id: "shop",
          label: "Интернет-магазин",
          price: 1200,
          description:
            "Каталог товаров, корзина, оформление заказов, фильтры и админка для управления ассортиментом.",
        },
      ],
    },
    {
      id: "backend",
      title: "Backend & API",
      options: [
        {
          id: "auth",
          label: "Авторизация",
          price: 200,
          description:
            "Регистрация, вход, восстановление пароля, права доступа. Реализовано через JWT или сессии.",
        },
        {
          id: "orders",
          label: "Обработка заказов",
          price: 300,
          description:
            "Создание и хранение заказов в базе, email-уведомления клиенту и администратору.",
        },
        {
          id: "api",
          label: "REST API",
          price: 250,
          description:
            "Серверный API для связи с фронтом, админкой или внешними сервисами. Стандарты REST, JSON.",
        },
      ],
    },
    {
      id: "cms",
      title: "Админка на Payload CMS",
      options: [
        {
          id: "pages",
          label: "Управление страницами",
          price: 200,
          description:
            "Возможность добавлять и редактировать страницы через админку без программиста.",
        },
        {
          id: "collections",
          label: "Списки и блоки",
          price: 250,
          description:
            "Динамические списки (товары, новости, услуги) с кастомной структурой и блоками контента.",
        },
        {
          id: "roles",
          label: "Разделение доступа",
          price: 150,
          description:
            "Ограничение доступа к админке — редактор, администратор, клиент и т.д.",
        },
      ],
    },
    {
      id: "i18n",
      title: "Локализация & мультиязык",
      options: [
        {
          id: "frontend",
          label: "Перевод интерфейса",
          price: 150,
          description:
            "Мультиязычные кнопки, меню, формы и структура сайта на разных языках.",
        },
        {
          id: "content",
          label: "Перевод контента",
          price: 200,
          description:
            "Поддержка перевода текста, блоков, названий и ссылок через CMS или вручную.",
        },
        {
          id: "seo",
          label: "Мультиязычный SEO",
          price: 100,
          description:
            "URL‑структура, мета-теги и hreflang для поисковой оптимизации на всех языках.",
        },
      ],
    },
    {
      id: "markup",
      title: "Pixel‑perfect верстка",
      options: [
        {
          id: "figma",
          label: "Верстка по Figma",
          price: 300,
          description:
            "Точная адаптация дизайна в HTML/CSS. Внимание к мелочам, пиксель-в-пиксель.",
        },
        {
          id: "responsive",
          label: "Адаптивная верстка",
          price: 200,
          description:
            "Поддержка всех экранов: мобильные, планшеты, десктопы. Медиа-запросы, flex/grid.",
        },
        {
          id: "animation",
          label: "Мини-анимации",
          price: 100,
          description:
            "Плавные появления, ховеры, переходы. CSS/JS-анимации без перегрузки.",
        },
      ],
    },
    {
      id: "deploy",
      title: "Деплой и сопровождение",
      options: [
        {
          id: "hosting",
          label: "Заливка на хостинг/VPS",
          price: 100,
          description: "Размещение проекта на хостинге клиента или настройка VPS.",
        },
        {
          id: "ssl",
          label: "Настройка домена и SSL",
          price: 100,
          description:
            "Привязка домена, установка HTTPS (Let's Encrypt), базовая защита.",
        },
        {
          id: "support",
          label: "Поддержка после запуска",
          price: 150,
          description:
            "Исправления, обновления, консультации в течение 1 месяца после релиза.",
        },
      ],
    },
  ],
  pl: [
    {
      id: "websites",
      title: "Strony pod klucz",
      options: [
        {
          id: "landing",
          label: "Landing page",
          price: 400,
          description:
            "Niewielka strona-wizytówka do prezentacji usługi lub produktu. Zwykle jedna strona z sekcjami.",
        },
        {
          id: "corp",
          label: "Strona firmowa",
          price: 800,
          description:
            "Strona firmy z działami o usługach, zespole, kontaktach. Umożliwia zarządzanie treścią przez panel.",
        },
        {
          id: "shop",
          label: "Sklep internetowy",
          price: 1200,
          description:
            "Katalog produktów, koszyk, składanie zamówień, filtry i panel do zarządzania asortymentem.",
        },
      ],
    },
    {
      id: "backend",
      title: "Backend i API",
      options: [
        {
          id: "auth",
          label: "Autoryzacja",
          price: 200,
          description:
            "Rejestracja, logowanie, reset hasła, prawa dostępu. Implementacja na JWT lub sesjach.",
        },
        {
          id: "orders",
          label: "Obsługa zamówień",
          price: 300,
          description:
            "Tworzenie i przechowywanie zamówień w bazie, powiadomienia email do klienta i administratora.",
        },
        {
          id: "api",
          label: "REST API",
          price: 250,
          description:
            "Serwerowe API do komunikacji z frontendem, panelem lub usługami zewnętrznymi. Standardy REST, JSON.",
        },
      ],
    },
    {
      id: "cms",
      title: "Panel admina w Payload CMS",
      options: [
        {
          id: "pages",
          label: "Zarządzanie stronami",
          price: 200,
          description:
            "Możliwość dodawania i edytowania stron przez panel bez udziału programisty.",
        },
        {
          id: "collections",
          label: "Listy i bloki",
          price: 250,
          description:
            "Dynamiczne listy (produkty, newsy, usługi) z niestandardową strukturą i blokami treści.",
        },
        {
          id: "roles",
          label: "Podział dostępu",
          price: 150,
          description:
            "Ograniczenie dostępu do panelu — redaktor, administrator, klient itd.",
        },
      ],
    },
    {
      id: "i18n",
      title: "Lokalizacja i wielojęzyczność",
      options: [
        {
          id: "frontend",
          label: "Tłumaczenie interfejsu",
          price: 150,
          description:
            "Wielojęzyczne przyciski, menu, formularze i struktura strony w różnych językach.",
        },
        {
          id: "content",
          label: "Tłumaczenie treści",
          price: 200,
          description:
            "Wsparcie tłumaczenia tekstów, bloków, nazw i linków przez CMS lub ręcznie.",
        },
        {
          id: "seo",
          label: "Wielojęzyczne SEO",
          price: 100,
          description:
            "Struktura URL, meta tagi i hreflang dla optymalizacji w wyszukiwarkach na wszystkie języki.",
        },
      ],
    },
    {
      id: "markup",
      title: "Pixel-perfect kodowanie",
      options: [
        {
          id: "figma",
          label: "Kodowanie z Figma",
          price: 300,
          description:
            "Dokładne odwzorowanie projektu w HTML/CSS. Dbałość o detale, piksel w piksel.",
        },
        {
          id: "responsive",
          label: "Responsywne kodowanie",
          price: 200,
          description:
            "Wsparcie wszystkich ekranów: telefony, tablety, desktopy. Media queries, flex/grid.",
        },
        {
          id: "animation",
          label: "Mini animacje",
          price: 100,
          description:
            "Płynne pojawianie się, hovery, przejścia. Animacje CSS/JS bez obciążenia.",
        },
      ],
    },
    {
      id: "deploy",
      title: "Wdrożenie i utrzymanie",
      options: [
        {
          id: "hosting",
          label: "Wgranie na hosting/VPS",
          price: 100,
          description:
            "Umieszczenie projektu na hostingu klienta lub konfiguracja VPS.",
        },
        {
          id: "ssl",
          label: "Konfiguracja domeny i SSL",
          price: 100,
          description:
            "Podpięcie domeny, instalacja HTTPS (Let's Encrypt), podstawowe zabezpieczenia.",
        },
        {
          id: "support",
          label: "Wsparcie po starcie",
          price: 150,
          description:
            "Poprawki, aktualizacje, konsultacje przez 1 miesiąc po premierze.",
        },
      ],
    },
  ],
};

export default pricing;
