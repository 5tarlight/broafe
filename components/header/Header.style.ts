import { Theme } from "@/styles/theme";
import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  display: flex;
  box-shadow: 0px 0.6px 2.2px rgba(0, 0, 0, 0.02),
    0px 1.4px 5.3px rgba(0, 0, 0, 0.028), 0px 2.6px 10px rgba(0, 0, 0, 0.035),
    0px 4.7px 17.9px rgba(0, 0, 0, 0.042), 0px 8.8px 33.4px rgba(0, 0, 0, 0.05),
    0px 21px 80px rgba(0, 0, 0, 0.07);
  justify-content: space-between;

  height: 4rem;
  line-height: calc(4rem / 2);
  padding: 1rem;
  @media (max-width: 1024px) {
  }
`;

export const HeaderLogoStyle = styled.h1`
  display: block;
  font-size: 1.5rem;
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.pri0};
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;

export const HeaderMenuStyle = styled.div`
  display: flex;
  justify-content: right;
  column-gap: 1rem;
  padding-right: 1rem;
`;

export const HeaderInputContainerStyle = styled.div`
  display: flex;

  @media (max-width: 512px) {
    display: none;
  }
`;

export const HeaderInputStyle = styled.input`
  border: none;
  outline: none;
  width: 12rem;
  height: 100%;
  padding: 1rem;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.dark0};
  border-radius: 0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const HeaderSearchSplitter = styled.div`
  border: 0.5px solid ${({ theme }: { theme: Theme }) => theme.colors.base};
`;

export const HeaderSearchBtnStyle = styled.button`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.dark1};
  border: none;
  border-radius: none;
  padding: 0 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
