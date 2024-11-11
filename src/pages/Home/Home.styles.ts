import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";
import { Description } from "@headlessui/react";
import { DialogPanel, DialogTitle } from "@headlessui/react";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-family: var(--font-body);
  background-color: var(--color-background);
`;

export const SchoolName = styled.h1`
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
  text-align: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  padding: var(--spacing-lg);
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--color-border);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-lg);
  width: 100%;
  box-shadow: var(--box-shadow);
`;

export const SearchIconImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: var(--spacing-sm);
`;

export const AnimatedText = styled(TypeAnimation)`
  color: var(--color-text-secondary);
  font-size: var(--text-base);
  font-family: var(--font-body);
  font-weight: 400;
  outline: none;
  border: none;
  background: transparent;
  width: 100%;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledDialogPanel = styled(DialogPanel)`
  max-width: 600px;
  border: none;
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledDialogTitle = styled(DialogTitle)`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const StyledDescription = styled(Description)`
  margin-bottom: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;
