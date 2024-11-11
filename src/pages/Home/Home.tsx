import React, { useState } from "react";
import { animationSequences } from "./constants";
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

export default function Home() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HomePageContainer>
        <SchoolName>TechHub Academy</SchoolName>
        <SearchContainer>
          <SearchBar>
            <SearchIconImage src="/assets/search-icon.svg" alt="Search Icon" />
            <AnimatedText
              sequence={animationSequences}
              speed={50}
              repeat={Infinity}
            />
          </SearchBar>
        </SearchContainer>
        <Button onClick={() => setIsOpen(true)}>Search</Button>
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
    </>
  );
}
