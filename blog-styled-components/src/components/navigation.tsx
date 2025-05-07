"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

type LinkType = {
  href: string;
  label: string;
};

const links: LinkType[] = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const StyledNav = styled.nav`
  padding: 12px;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const StyledAnchor = styled.a<{ $active?: boolean }>`
  text-decoration: none;
  color: ${(props) => (props.$active ? "red" : "#0070f3")};
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Navigation = () => {
  const pathname = usePathname();

  return (
    <StyledNav>
      {links.map((link) => (
        <Link key={link.href} href={link.href} passHref>
          <StyledAnchor $active={pathname === link.href}>
            {link.label}
          </StyledAnchor>
        </Link>
      ))}
    </StyledNav>
  );
};

export default Navigation;
