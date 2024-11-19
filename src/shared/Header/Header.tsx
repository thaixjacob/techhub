import React, { useState } from "react";
import Button from "../Button";
import { Dialog } from "@headlessui/react";
import {
  HeaderContainer,
  Logo,
  MobileMenuButton,
  NavContent,
  RightSection,
  StyledLink,
  Overlay,
  StyledDialogPanel,
  StyledDialogTitle,
  StyledDescription,
  ButtonContainer,
} from "./Header.styles";
import { useIntl } from "react-intl";
import LocaleButton from "../LocaleButton";

interface HeaderProps {
  locale: "en" | "es";
  onLanguageChange: (locale: "en" | "es") => void;
}

const Header: React.FC<Readonly<HeaderProps>> = ({
  locale,
  onLanguageChange,
}) => {
  const intl = useIntl();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const handleLanguageChange = () => {
    const newLocale = locale === "en" ? "es" : "en";
    onLanguageChange(newLocale);
  };

  return (
    <>
      <HeaderContainer>
        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </MobileMenuButton>
        <Logo href="/">{intl.formatMessage({ id: "global.logo" })}</Logo>
        <NavContent isOpen={isMenuOpen}>
          <RightSection>
            <StyledLink
              href="https://www.linkedin.com/in/thaisjacob/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {intl.formatMessage({ id: "header.madeByWho" })}
            </StyledLink>
            <LocaleButton
              onLanguageChange={handleLanguageChange}
              locale={locale}
            />
            <Button onClick={() => setIsOpenDialog(true)}>
              {intl.formatMessage({ id: "header.cta" })}
            </Button>
          </RightSection>
        </NavContent>
      </HeaderContainer>
      <Dialog
        as="form"
        open={isOpenDialog}
        onClose={() => setIsOpenDialog(false)}
        className="relative z-50"
      >
        <Overlay>
          <StyledDialogPanel>
            <StyledDialogTitle>Ops, something went wrong</StyledDialogTitle>
            <StyledDescription>
              This page is under construction, please check back later
            </StyledDescription>
            <ButtonContainer>
              <Button onClick={() => setIsOpenDialog(false)}>Thank you</Button>
            </ButtonContainer>
          </StyledDialogPanel>
        </Overlay>
      </Dialog>
    </>
  );
};

export default Header;
