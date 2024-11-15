import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Home from "./pages/Home/Home";
import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";
import styled from "styled-components";
import localeDataES from "./intl/es.json";
import localeDataEN from "./intl/en.json";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const translations = {
  es: localeDataES,
  en: localeDataEN,
};

type SupportedLocales = "es" | "en";

const getLocaleFromUrl = (): SupportedLocales => {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  if (lang === "en" || lang === "es") {
    return lang;
  }
  return "es";
};

const App: React.FC = () => {
  const [locale, setLocale] = useState<SupportedLocales>(getLocaleFromUrl);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("lang", locale);
    window.history.replaceState(null, "", "?" + params.toString());
  }, [locale]);

  return (
    <IntlProvider
      locale={locale}
      defaultLocale="es"
      messages={translations[locale]}
    >
      <Router>
        <AppContainer>
          <Header locale={locale} onLanguageChange={setLocale} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer locale={locale} onLanguageChange={setLocale} />
        </AppContainer>
      </Router>
    </IntlProvider>
  );
};

export default App;
