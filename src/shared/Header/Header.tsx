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

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let [isOpenDialog, setIsOpenDialog] = useState(false);

  return (
    <>
      <HeaderContainer>
        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </MobileMenuButton>
        <Logo href="/">TechHub Academy</Logo>
        <NavContent isOpen={isMenuOpen}>
          <RightSection>
            <StyledLink
              href="https://www.linkedin.com/in/thaisjacob/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Who made this?
            </StyledLink>
            <Button onClick={() => setIsOpenDialog(true)}>Find a course</Button>
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
}

export default Header;
