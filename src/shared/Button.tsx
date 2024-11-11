import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--color-primary);
  border: none;
  border-radius: var(--border-radius-lg);
  color: white;
  font-family: var(--font-heading);
  font-size: var(--text-base);
  font-weight: 600;
  margin: var(--spacing-md) var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-xl);
  height: 48px;
  cursor: pointer;
  user-select: none;
  transition: all var(--transition-normal);
  box-shadow: 0 2px 4px var(--color-shadow);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px var(--color-shadow);
    filter: brightness(110%);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 2px var(--color-shadow);
  }

  &:focus {
    outline: none;
    box-shadow:
      0 0 0 3px var(--color-shadow),
      0 2px 4px var(--color-shadow);
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;
