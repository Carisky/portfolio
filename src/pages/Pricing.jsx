import { Box, Typography, Divider } from "@mui/material";
import PageWrapper from "./PageWrapper";
import { useState } from "react";
import PricingOptionGroup from "../components/PricingOptionGroup";

const services = [
  {
    id: "websites",
    title: "Сайты под ключ",
    options: [
      {
        id: "landing",
        label: "Лендинг",
        price: 400,
        description: "Небольшой сайт-визитка для презентации услуги или продукта. Обычно состоит из одной страницы с секциями."
      },
      {
        id: "corp",
        label: "Корпоративный сайт",
        price: 800,
        description: "Сайт компании с разделами об услугах, команде, контактах. Позволяет управлять контентом через админку."
      },
      {
        id: "shop",
        label: "Интернет-магазин",
        price: 1200,
        description: "Каталог товаров, корзина, оформление заказов, фильтры и админка для управления ассортиментом."
      }
    ]
  },
  {
    id: "backend",
    title: "Backend & API",
    options: [
      {
        id: "auth",
        label: "Авторизация",
        price: 200,
        description: "Регистрация, вход, восстановление пароля, права доступа. Реализовано через JWT или сессии."
      },
      {
        id: "orders",
        label: "Обработка заказов",
        price: 300,
        description: "Создание и хранение заказов в базе, email-уведомления клиенту и администратору."
      },
      {
        id: "api",
        label: "REST API",
        price: 250,
        description: "Серверный API для связи с фронтом, админкой или внешними сервисами. Стандарты REST, JSON."
      }
    ]
  },
  {
    id: "cms",
    title: "Админка на Payload CMS",
    options: [
      {
        id: "pages",
        label: "Управление страницами",
        price: 200,
        description: "Возможность добавлять и редактировать страницы через админку без программиста."
      },
      {
        id: "collections",
        label: "Списки и блоки",
        price: 250,
        description: "Динамические списки (товары, новости, услуги) с кастомной структурой и блоками контента."
      },
      {
        id: "roles",
        label: "Разделение доступа",
        price: 150,
        description: "Ограничение доступа к админке — редактор, администратор, клиент и т.д."
      }
    ]
  },
  {
    id: "i18n",
    title: "Локализация & мультиязык",
    options: [
      {
        id: "frontend",
        label: "Перевод интерфейса",
        price: 150,
        description: "Мультиязычные кнопки, меню, формы и структура сайта на разных языках."
      },
      {
        id: "content",
        label: "Перевод контента",
        price: 200,
        description: "Поддержка перевода текста, блоков, названий и ссылок через CMS или вручную."
      },
      {
        id: "seo",
        label: "Мультиязычный SEO",
        price: 100,
        description: "URL‑структура, мета-теги и hreflang для поисковой оптимизации на всех языках."
      }
    ]
  },
  {
    id: "markup",
    title: "Pixel‑perfect верстка",
    options: [
      {
        id: "figma",
        label: "Верстка по Figma",
        price: 300,
        description: "Точная адаптация дизайна в HTML/CSS. Внимание к мелочам, пиксель-в-пиксель."
      },
      {
        id: "responsive",
        label: "Адаптивная верстка",
        price: 200,
        description: "Поддержка всех экранов: мобильные, планшеты, десктопы. Медиа-запросы, flex/grid."
      },
      {
        id: "animation",
        label: "Мини-анимации",
        price: 100,
        description: "Плавные появления, ховеры, переходы. CSS/JS-анимации без перегрузки."
      }
    ]
  },
  {
    id: "deploy",
    title: "Деплой и сопровождение",
    options: [
      {
        id: "hosting",
        label: "Заливка на хостинг/VPS",
        price: 100,
        description: "Размещение проекта на хостинге клиента или настройка VPS."
      },
      {
        id: "ssl",
        label: "Настройка домена и SSL",
        price: 100,
        description: "Привязка домена, установка HTTPS (Let's Encrypt), базовая защита."
      },
      {
        id: "support",
        label: "Поддержка после запуска",
        price: 150,
        description: "Исправления, обновления, консультации в течение 1 месяца после релиза."
      }
    ]
  }
];



export default function Pricing() {
  const [selected, setSelected] = useState({});

  const handleToggle = (groupId, optionId) => {
    setSelected(prev => {
      const current = prev[groupId] || [];
      const next = current.includes(optionId)
        ? current.filter(id => id !== optionId)
        : [...current, optionId];
      return { ...prev, [groupId]: next };
    });
  };

  const total = services.reduce((sum, group) => {
    const selectedIds = selected[group.id] || [];
    const groupTotal = group.options
      .filter(opt => selectedIds.includes(opt.id))
      .reduce((s, o) => s + o.price, 0);
    return sum + groupTotal;
  }, 0);

  return (
    <PageWrapper>
      <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
        <Typography variant="h4" gutterBottom>Расчёт стоимости</Typography>
        {services.map(group => (
          <PricingOptionGroup
            key={group.id}
            title={group.title}
            options={group.options}
            selected={selected[group.id] || []}
            onChange={optionId => handleToggle(group.id, optionId)}
          />
        ))}
        <Divider sx={{ my: 4 }} />
        <Typography variant="h5">Итого: {total} €</Typography>
      </Box>
    </PageWrapper>
  );
}
