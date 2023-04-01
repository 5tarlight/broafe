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
  user-select: none;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }: { theme: Theme }) => theme.colors.pri0};
    color: ${({ theme }: { theme: Theme }) => theme.reverse(theme.colors.text)};
  }
`;

export const IndexDescriptionContainerStyle = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;

export const IndexDescriptionItemStyle = styled.div`
  margin-bottom: 5rem;
  display: flex;

  & :first-child {
    margin-right: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`;

export const IndexDescriptionSmallStyle = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const IndexDescriptionLargeStyle = styled.div`
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const IndexTestBox = styled.div`
  width: 100%;
  padding-top: 56.25%; // 16 : 9
  border-radius: 12px;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.dark0};
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);
`;
