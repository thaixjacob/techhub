import React from "react";
import { useIntl } from "react-intl";
import LocaleButton from "../LocaleButton";
import {
  FooterContainer,
  FooterContent,
  LocaleContent,
  LocaleInfo,
  Copyright,
  FooterLinks,
  FooterLink,
} from "./Footer.styles";

interface FooterProps {
  locale: "en" | "es";
  onLanguageChange: (locale: "en" | "es") => void;
}

function Footer({ locale, onLanguageChange }: FooterProps) {
  const intl = useIntl();

  const handleLanguageChange = () => {
    const newLocale = locale === "en" ? "es" : "en";
    onLanguageChange(newLocale);
  };

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>{intl.formatMessage({ id: "global.rights" })}</Copyright>
        <LocaleContent>
          <LocaleInfo>{intl.formatMessage({ id: "global.locale" })}</LocaleInfo>
          <LocaleButton
            onLanguageChange={handleLanguageChange}
            locale={locale}
          />
        </LocaleContent>
        <FooterLinks>
          <FooterLink
            href="https://www.linkedin.com/in/thaisjacob/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </FooterLink>
          <FooterLink
            href="https://github.com/thaixjacob"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </FooterLink>
          <FooterLink
            href="mailto:tjlannes@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
