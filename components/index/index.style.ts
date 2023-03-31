import { Theme } from "@/styles/theme";
import styled from "styled-components";

export const IndexMainContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  margin-top: 10rem;
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

export const IndexLetsGoContainerStyle = styled.div`
  width: 100%;
  margin-top: 10rem;
  display: flex;
  justify-content: center;
`;

export const IndexLetsGoButtonStyle = styled.button`
  border: 5px solid ${({ theme }: { theme: Theme }) => theme.colors.pri0};
  background-color: transparent;
  padding: 2rem 4rem;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }: { theme: Theme }) => theme.colors.pri0};
    color: ${({ theme }: { theme: Theme }) => theme.reverse(theme.colors.text)};
  }
`;
