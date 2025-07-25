import React from "react";
import PageWrapper from "./PageWrapper";
import { useLang } from "../contexts/LanguageContext";

export default function NotFound() {
  const { t } = useLang();
  return (
    <PageWrapper>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>{t('notFound.title')}</h1>
        <p dangerouslySetInnerHTML={{ __html: t('notFound.backHome') }} />
      </div>
    </PageWrapper>
  );
}
