import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: var(--color-background);
  padding: var(--spacing-lg) var(--spacing-xl);
  border-top: 1px solid var(--color-border);
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  font-family: var(--font-body);
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

const FooterLink = styled.a`
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

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>© 2024 TechHub Academy. All rights reserved.</Copyright>
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
