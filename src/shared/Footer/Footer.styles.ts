import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--color-background);
  padding: var(--spacing-lg) var(--spacing-xl);
  border-top: 1px solid var(--color-border);
  margin-top: auto;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LocaleContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-md);

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const LocaleInfo = styled.div`
  font-family: var(--font-body);
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  text-align: center;
`;

export const Copyright = styled.p`
  font-family: var(--font-body);
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  text-align: center;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

export const FooterLink = styled.a`
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
