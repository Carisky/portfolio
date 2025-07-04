import React from 'react'
import PageWrapper from '../PageWrapper';
import { Box } from '@mui/material';
import PreviewCard from '../../components/PreviewCard';

const services = [
  {
    title: "Сайты под ключ",
    description:
      "Создаю лендинги, корпоративные сайты, интернет-магазины и веб‑приложения. Верстка по Figma, адаптивность и кроссбраузерность. Подключаю формы, каталоги, корзины, личные кабинеты.",
    imgSrc: "/assets/web-development.jpg",
    altTxt: "Сайты под ключ",
    anchorId: "websites",
  },
  {
    title: "Backend & API",
    description:
      "Node.js (Express) или PHP‑сервер: проектирование БД (MySQL), REST API, авторизация, email‑уведомления, логика заказов и интеграции с внешними сервисами.",
    imgSrc: "/assets/backend.jpg",
    altTxt: "Backend и API",
    anchorId: "backend",
  },
  {
    title: "Админка на Payload CMS",
    description:
      "Настраиваю удобную CMS: CRUD‑операции, кастомные блоки, мультиязычный контент и уровни доступа (редактор, админ). Управление сайтом без программиста.",
    imgSrc: "/assets/admin-panel.jpg",
    altTxt: "CMS",
    anchorId: "cms",
  },
  {
    title: "Локализация & мультиязык",
    description:
      "Поддержка нескольких языков: интерфейс, контент, SEO‑URL. Перевод форм, меню, блоков. Удобная работа с языками через админку.",
    imgSrc: "/assets/multilang.jpg",
    altTxt: "Мультиязычный сайт",
    anchorId: "i18n",
  },
  {
    title: "Pixel‑perfect верстка",
    description:
      "Pixel‑perfect HTML/CSS/SCSS или Tailwind по Figma‑макетам. Адаптив на все устройства, плавные эффекты, кроссбраузерность.",
    imgSrc: "/assets/figma-layout.jpg",
    altTxt: "Верстка по макету",
    anchorId: "markup",
  },
  {
    title: "Деплой и сопровождение",
    description:
      "Разворачивание на хосте или VPS, настройка Docker/PM2/Nginx, SSL, домен. Мониторинг, бэкапы, обновления и правки после запуска.",
    imgSrc: "/assets/deploy.jpg",
    altTxt: "Деплой и поддержка",
    anchorId: "deploy",
    learnMore: "deploy"
  },
];

export default function Services() {
  return (
    <PageWrapper>
      <Box sx={{
        display:"flex",
        flexWrap:"wrap",
        gap:"10%",
        justifyContent:"center"
      }}>
        {services.map((service, index) => (
          <PreviewCard
            title={service.title}
            description={service.description}
            imgSrc={service.imgSrc}
            altTxt={service.altTxt}
            options={"/pricing#"+service.anchorId}
            learnMore={"/about/"+service.learnMore}
          />
        ))}
      </Box>
    </PageWrapper>
  );
}
