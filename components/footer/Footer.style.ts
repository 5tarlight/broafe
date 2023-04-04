import styled from "styled-components";

export const FooterStyle = styled.footer`
  max-width: 1024px;
  height: 10rem;
  margin: 0 auto;
  margin-top: 5rem;
  padding: 3rem 1rem 1rem 1rem;
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.colors.dark2};
`;

export const FooterCopyrightStyle = styled.span`
  color: ${({ theme }) => theme.colors.dark5};
  font-size: 0.87rem;
`;
