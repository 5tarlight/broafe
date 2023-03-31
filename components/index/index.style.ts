import { Theme } from "@/styles/theme";
import styled from "styled-components";

export const IndexMainContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`;

export const IndexMainTitleStyle = styled.h2`
  font-size: 3rem;
  color: ${({ theme }: { theme: Theme }) => theme.colors.pri0};
  font-weight: bolder;
`;

export const IndexPlatformLogoStyle = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5rem;
`;

export const IndexSubTitleStyle = styled.h3`
  margin-top: 3rem;
  font-size: 1.5rem;
`;
