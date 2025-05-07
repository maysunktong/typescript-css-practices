"use client";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 12px;
  background-color: #d7f75b;
`;

const StyledPageTitle = styled.h1`
  font-size: 4rem;
  color: #ef709d;
  text-align: center;
  margin: 24px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledPageTitle>Blog Header</StyledPageTitle>
    </StyledHeader>
  );
};
export default Header;
