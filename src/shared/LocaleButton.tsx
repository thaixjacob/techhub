import React from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";

export const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  background-color: var(--color-surface);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  cursor: pointer;
  transition: var(--transition-fast);

  &:hover {
    background-color: var(--color-primary);
    color: var(--color-background);
  }
`;

export const TranslationIconImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: var(--spacing-sm);
`;

interface LanguageButtonProps {
  onLanguageChange: () => void;
  locale: "en" | "es";
}

const LocaleButton: React.FC<LanguageButtonProps> = ({
  onLanguageChange,
  locale,
}) => {
  const intl = useIntl();

  return (
    <LanguageButton onClick={onLanguageChange}>
      <TranslationIconImage
        src="/assets/translate-icon.svg"
        alt="Translation Icon"
      />
      {locale === "en"
        ? intl.formatMessage({ id: "header.languages.spanish" })
        : intl.formatMessage({ id: "header.languages.english" })}
    </LanguageButton>
  );
};

export default LocaleButton;
