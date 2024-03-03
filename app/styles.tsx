"use client";

import { Nunito } from "next/font/google";
import styled from "styled-components";

const font = Nunito({
  subsets: ["latin"],
});

export const Container = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  @media (max-width: 1112px) {
    padding: 0px 40px;
  }
  @media (max-width: 730px) {
    padding: 0px 24px;
  }
`;

export const RowContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0px 12px;
  align-items: center;
  @media (max-width: 1112px) {
    flex-direction: column;
  }
  @media (max-width: 730px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const RowContainerEnd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 1112px) {
    justify-content: center;
    margin-bottom: 18px;
  }
  @media (max-width: 730px) {
    justify-content: flex-start;
  }
`;

export const CommonListContainer = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  @media (max-width: 1112px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 730px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const RowList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SocialMedia = styled.ul`
  list-style-type: none;
  width: 102px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1112px) {
    margin-left: 18px;
  }
`;

export const MainLinksContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  padding: 24px 0px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (min-width: 1112px) {
    width: 90%;
  }
  @media (max-width: 1112px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FooterInfoContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  padding: 24px 0px;
  display: flex;
  @media (min-width: 1112px) {
    width: 90%;
    border-top: 1px solid #ddd;
  }
  @media (max-width: 1112px) {
    flex-direction: column-reverse;
    padding: 0px;
  }
  @media (max-width: 730px) {
    padding-bottom: 24px;
  }
`;

export const ListItem = styled.li`
  margin-top: 16px;
  @media (max-width: 1112px) {
    margin-top: 8px;
  }
`;

export const Divider = styled.span`
  padding: 0px 10px;
`;

export const ListTitle = styled.h3`
  font-family: "Nunito";
  font-size: 14px;
  @media (max-width: 1112px) {
    margin: 7px 0px;
  }
`;

export const ListLink = styled.a`
  font-family: "Nunito";
  font-size: 14px;
  color: #222222;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  :hover {
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  margin-right: 18px;
`;

export const DecoratedText = styled.span`
  padding-left: 8px;
  text-decoration: underline;
`;

export const SimpleText = styled.span`
  font-family: "Nunito";
  font-size: 14px;
`;

export const ListSection = styled.section`
  padding: 0px 12px;
  @media (max-width: 1112px) {
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #ddd;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const SocialMediaItem = styled.li`
  cursor: pointer;
`;
