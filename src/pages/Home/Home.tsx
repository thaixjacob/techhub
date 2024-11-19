import React, { useState } from "react";
import { useAnimationSequences } from "./constants";
import {
  HomePageContainer,
  SchoolName,
  SearchContainer,
  SearchBar,
  SearchIconImage,
  AnimatedText,
  Overlay,
  StyledDialogPanel,
  StyledDialogTitle,
  StyledDescription,
  ButtonContainer,
} from "./Home.styles";
import Button from "../../shared/Button";
import { Dialog } from "@headlessui/react";
import { useIntl } from "react-intl";

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);
  const intl = useIntl();

  return (
    <HomePageContainer>
      <SchoolName>{intl.formatMessage({ id: "global.logo" })}</SchoolName>
      <SearchContainer>
        <SearchBar>
          <SearchIconImage src="/assets/search-icon.svg" alt="Search Icon" />
          <AnimatedText
            sequence={useAnimationSequences()}
            speed={50}
            repeat={Infinity}
          />
        </SearchBar>
      </SearchContainer>
      <Button onClick={() => setIsOpen(true)}>
        {intl.formatMessage({ id: "page.home.cta" })}
      </Button>
      <Dialog
        as="form"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <Overlay>
          <StyledDialogPanel>
            <StyledDialogTitle>Ops, something went wrong</StyledDialogTitle>
            <StyledDescription>
              This page is under construction, please check back later
            </StyledDescription>
            <ButtonContainer>
              <Button onClick={() => setIsOpen(false)}>Thank you</Button>
            </ButtonContainer>
          </StyledDialogPanel>
        </Overlay>
      </Dialog>
    </HomePageContainer>
  );
}
