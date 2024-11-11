import { DialogTitle, DialogPanel, Description } from "@headlessui/react";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--color-background);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: var(--spacing-md) var(--spacing-xl);
  }
`;

export const Logo = styled.a`
  font-family: var(--font-heading);
  font-size: var(--text-base);
  color: var(--color-primary);
  font-weight: 600;
  margin: 0;
  margin-bottom: var(--spacing-sm);

  @media (min-width: 768px) {
    font-size: var(--text-lg);
    margin-bottom: 0;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    width: auto;
    gap: var(--spacing-md);
  }
`;

export const StyledLink = styled.a`
  font-family: var(--font-body);
  color: var(--color-text-primary);
  font-size: var(--text-sm);
  text-decoration: none;
  transition: color var(--transition-fast);
  padding: var(--spacing-xs) 0;

  &:hover {
    color: var(--color-primary);
  }

  @media (min-width: 768px) {
    font-size: var(--text-base);
  }
`;

export const MobileMenuButton = styled.button`
  display: block;
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-xs);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavContent = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: auto;
  }
`;

/* Delete after update component */

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
