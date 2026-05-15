export const services = {
  ru: [
    {
      id: "websites",
      title: "Сайты под ключ",
      tagline: "От лендинга до небольшого интернет-магазина",
      description:
        "Проектирую структуру, собираю адаптивный интерфейс, подключаю формы, каталоги, корзину и базовую аналитику. Сайт не выглядит как набор случайных блоков: у него есть понятная логика, цель и путь пользователя.",
      imgSrc: "/assets/web-development.jpg",
      altTxt: "Сайт под ключ",
      priceFrom: "от 400 €",
      features: ["структура и секции", "адаптивная верстка", "формы и каталог", "подготовка к SEO"],
      details: [
        "Подходит, когда нужен новый сайт для услуги, компании, портфолио или продажи продукта. Я помогаю определить состав страниц, собираю интерфейс и довожу его до состояния, которое можно показывать клиентам.",
        "В проект можно добавить каталог, карточки товаров, корзину, форму заявки, мультиязычность и админку. Основа остается расширяемой, чтобы позже не переписывать все заново.",
      ],
      outcome: "Готовый сайт, который корректно работает на телефонах, планшетах и десктопах.",
    },
    {
      id: "backend",
      title: "Backend & API",
      tagline: "Серверная логика для форм, заказов и кабинетов",
      description:
        "Разрабатываю REST API на Node.js или PHP, проектирую базу данных, авторизацию, обработку заказов и интеграции с внешними сервисами. Фронтенд получает стабильную серверную основу, а не временные заглушки.",
      imgSrc: "/assets/backend.jpg",
      altTxt: "Backend и API",
      priceFrom: "от 200 €",
      features: ["REST API", "MySQL-схемы", "авторизация", "email-уведомления"],
      details: [
        "Backend нужен для проектов, где есть пользователи, заказы, формы, личные кабинеты или данные, которые нельзя хранить только на клиенте.",
        "Я закладываю понятную структуру API, правила доступа, хранение данных и обработку ошибок, чтобы проект можно было поддерживать после запуска.",
      ],
      outcome: "Рабочая серверная часть, готовая к подключению фронтенда, админки и интеграций.",
    },
    {
      id: "cms",
      title: "Админка на Payload CMS",
      tagline: "Контент можно менять без правок в коде",
      description:
        "Настраиваю Payload CMS под реальные сущности проекта: страницы, услуги, товары, новости, заявки и пользователей. Добавляю роли, кастомные поля, блоки и мультиязычный контент.",
      imgSrc: "/assets/admin-panel.jpg",
      altTxt: "Админ-панель",
      priceFrom: "от 200 €",
      features: ["CRUD-разделы", "кастомные блоки", "роли доступа", "мультиязычность"],
      details: [
        "Админка полезна, если контент должен обновляться без разработчика: менять тексты, картинки, товары, цены или статусы заявок.",
        "Структуру CMS проектирую под конкретный проект, чтобы редактор видел понятные поля, а не технический набор таблиц.",
      ],
      outcome: "Удобная панель управления сайтом, контентом и базовыми бизнес-сущностями.",
    },
    {
      id: "i18n",
      title: "Локализация и мультиязык",
      tagline: "RU/PL и другие языки без дублирования проекта",
      description:
        "Добавляю языковые версии интерфейса, контента, URL и SEO-метаданных. Тексты можно хранить в коде или вынести в CMS, если их нужно часто менять.",
      imgSrc: "/assets/multilang.jpg",
      altTxt: "Мультиязычный сайт",
      priceFrom: "от 150 €",
      features: ["перевод интерфейса", "SEO URL", "hreflang", "контент в CMS"],
      details: [
        "Подходит для проектов, которым нужно работать на нескольких рынках или вести коммуникацию с клиентами на разных языках.",
        "Я настраиваю переключение языка, структуру переводов и поведение страниц так, чтобы новая локаль не ломала навигацию и SEO.",
      ],
      outcome: "Сайт с понятной языковой структурой и готовностью добавлять новые локали.",
    },
    {
      id: "markup",
      title: "Pixel-perfect верстка",
      tagline: "Аккуратный перенос дизайна из Figma в код",
      description:
        "Верстаю макеты с вниманием к сетке, отступам, типографике, состояниям и адаптиву. Добавляю плавные состояния, hover-эффекты и компонентную структуру без лишней сложности.",
      imgSrc: "/assets/figma-layout.jpg",
      altTxt: "Верстка по макету",
      priceFrom: "от 300 €",
      features: ["Figma в React", "адаптив", "состояния UI", "анимации"],
      details: [
        "Подходит, когда дизайн уже есть и его нужно перенести в рабочий интерфейс без заметной потери качества.",
        "Я слежу не только за десктопом, но и за мобильными состояниями, длинными текстами, переполнениями и интерактивными элементами.",
      ],
      outcome: "Чистая адаптивная верстка, которую можно подключать к данным и развивать дальше.",
    },
    {
      id: "deploy",
      title: "Деплой и сопровождение",
      tagline: "Проект должен не только собраться, но и жить на сервере",
      description:
        "Разворачиваю проект на хостинге или VPS, настраиваю домен, SSL, Nginx, PM2 или Docker. После запуска помогаю с обновлениями, мониторингом и мелкими правками.",
      imgSrc: "/assets/deploy.jpg",
      altTxt: "Деплой проекта",
      priceFrom: "от 100 €",
      features: ["VPS/hosting", "SSL и домен", "PM2/Docker", "поддержка после релиза"],
      details: [
        "Деплой закрывает финальный шаг: проект должен стабильно открываться по домену, переживать перезапуски и иметь понятный процесс обновления.",
        "Могу подключить базовый мониторинг, резервные копии, переменные окружения и инструкции, чтобы поддержка не зависела от памяти одного человека.",
      ],
      outcome: "Опубликованный проект с рабочим доменом, HTTPS и понятным процессом обновлений.",
    },
  ],
  pl: [
    {
      id: "websites",
      title: "Strony pod klucz",
      tagline: "Od landing page do małego sklepu",
      description:
        "Projektuję strukturę, tworzę responsywny interfejs, podłączam formularze, katalogi, koszyk i podstawową analitykę. Strona ma jasną logikę, cel i ścieżkę użytkownika.",
      imgSrc: "/assets/web-development.jpg",
      altTxt: "Strona pod klucz",
      priceFrom: "od 400 €",
      features: ["struktura sekcji", "responsywny layout", "formularze i katalog", "podstawy SEO"],
      details: [
        "Dobre rozwiązanie dla nowej usługi, firmy, portfolio albo sprzedaży produktu. Pomagam dobrać skład stron, buduję interfejs i doprowadzam go do wersji gotowej dla klientów.",
        "Projekt można rozszerzyć o katalog, karty produktów, koszyk, formularz zgłoszeniowy, wiele języków i panel admina.",
      ],
      outcome: "Gotowa strona działająca poprawnie na telefonach, tabletach i desktopach.",
    },
    {
      id: "backend",
      title: "Backend i API",
      tagline: "Logika serwerowa dla formularzy, zamówień i kont",
      description:
        "Tworzę REST API w Node.js lub PHP, projektuję bazę danych, autoryzację, obsługę zamówień i integracje z usługami zewnętrznymi. Frontend dostaje stabilną podstawę serwerową.",
      imgSrc: "/assets/backend.jpg",
      altTxt: "Backend i API",
      priceFrom: "od 200 €",
      features: ["REST API", "schematy MySQL", "autoryzacja", "powiadomienia email"],
      details: [
        "Backend jest potrzebny tam, gdzie są użytkownicy, zamówienia, formularze, konta albo dane, których nie powinno się trzymać tylko po stronie klienta.",
        "Projektuję strukturę API, zasady dostępu, przechowywanie danych i obsługę błędów tak, aby projekt dało się utrzymywać po starcie.",
      ],
      outcome: "Działająca część serwerowa gotowa do połączenia z frontendem, panelem i integracjami.",
    },
    {
      id: "cms",
      title: "Panel admina w Payload CMS",
      tagline: "Treść można zmieniać bez edycji kodu",
      description:
        "Konfiguruję Payload CMS pod realne elementy projektu: strony, usługi, produkty, aktualności, zgłoszenia i użytkowników. Dodaję role, pola, bloki i treści wielojęzyczne.",
      imgSrc: "/assets/admin-panel.jpg",
      altTxt: "Panel admina",
      priceFrom: "od 200 €",
      features: ["sekcje CRUD", "własne bloki", "role dostępu", "wiele języków"],
      details: [
        "Panel przydaje się, gdy treść ma być aktualizowana bez programisty: teksty, zdjęcia, produkty, ceny albo statusy zgłoszeń.",
        "Strukturę CMS dopasowuję do projektu, żeby redaktor widział zrozumiałe pola zamiast technicznego zestawu tabel.",
      ],
      outcome: "Wygodny panel do zarządzania stroną, treścią i podstawowymi danymi biznesowymi.",
    },
    {
      id: "i18n",
      title: "Lokalizacja i wielojęzyczność",
      tagline: "RU/PL i kolejne języki bez duplikowania projektu",
      description:
        "Dodaję wersje językowe interfejsu, treści, URL i metadanych SEO. Teksty mogą zostać w kodzie albo trafić do CMS, jeśli mają być często edytowane.",
      imgSrc: "/assets/multilang.jpg",
      altTxt: "Strona wielojęzyczna",
      priceFrom: "od 150 €",
      features: ["tłumaczenie UI", "SEO URL", "hreflang", "treść w CMS"],
      details: [
        "Dobre dla projektów, które działają na kilku rynkach albo komunikują się z klientami w różnych językach.",
        "Ustawiam przełączanie języka, strukturę tłumaczeń i zachowanie stron tak, żeby nowa lokalizacja nie psuła nawigacji i SEO.",
      ],
      outcome: "Strona z jasną strukturą językową i możliwością dodawania nowych lokalizacji.",
    },
    {
      id: "markup",
      title: "Pixel-perfect kodowanie",
      tagline: "Dokładne przeniesienie projektu z Figma do kodu",
      description:
        "Koduję makiety z dbałością o siatkę, odstępy, typografię, stany i responsywność. Dodaję płynne interakcje i komponentową strukturę bez zbędnej komplikacji.",
      imgSrc: "/assets/figma-layout.jpg",
      altTxt: "Kodowanie z makiety",
      priceFrom: "od 300 €",
      features: ["Figma do React", "responsywność", "stany UI", "animacje"],
      details: [
        "Dobre, gdy projekt graficzny już istnieje i trzeba go przenieść do działającego interfejsu bez widocznej utraty jakości.",
        "Sprawdzam nie tylko desktop, ale też mobile, długie teksty, przepełnienia i elementy interaktywne.",
      ],
      outcome: "Czysty responsywny layout, który można podłączyć do danych i dalej rozwijać.",
    },
    {
      id: "deploy",
      title: "Wdrożenie i utrzymanie",
      tagline: "Projekt ma nie tylko się budować, ale też działać na serwerze",
      description:
        "Wdrażam projekt na hostingu lub VPS, konfiguruję domenę, SSL, Nginx, PM2 albo Docker. Po starcie pomagam z aktualizacjami, monitoringiem i drobnymi poprawkami.",
      imgSrc: "/assets/deploy.jpg",
      altTxt: "Wdrożenie projektu",
      priceFrom: "od 100 €",
      features: ["VPS/hosting", "SSL i domena", "PM2/Docker", "wsparcie po starcie"],
      details: [
        "Wdrożenie zamyka ostatni etap: projekt powinien stabilnie działać pod domeną, przetrwać restart i mieć jasny proces aktualizacji.",
        "Mogę dodać podstawowy monitoring, kopie zapasowe, zmienne środowiskowe i instrukcje utrzymania.",
      ],
      outcome: "Opublikowany projekt z działającą domeną, HTTPS i jasnym procesem aktualizacji.",
    },
  ],
};

export default services;
