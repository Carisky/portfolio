import React from "react";
import PageWrapper from "./PageWrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>404 — Страница не найдена</h1>
        <p>
          Проверьте адрес или вернитесь на <a href="/">главную</a>.
        </p>
      </div>
    </PageWrapper>
  );
}
