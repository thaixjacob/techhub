import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import Home from "./pages/Home/Home";
import Header from "./shared/Header/Header";
import Footer from "./shared/Footer";
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

const getLocale = (): SupportedLocales => {
  const language = navigator.language.split("-")[0];
  return language === "en" ? "en" : "es";
};

const App: React.FC = () => {
  const locale = getLocale();

  return (
    <IntlProvider
      locale={locale}
      defaultLocale="es"
      messages={translations[locale]}
    >
      <Router>
        <AppContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </AppContainer>
      </Router>
    </IntlProvider>
  );
};

export default App;
