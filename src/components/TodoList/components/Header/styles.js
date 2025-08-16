import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 40px;
  display: flex;
  border: 2px solid #dbdbdb;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
`;

export const searchInput = css`
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 5px 15px;
`;

export const searchButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  padding: 5px;
  cursor: pointer;
`;

export const searchIcon = css`
  transition: all 0.2s ease;
  border-radius: 8px;
  padding: 5px;
  &:hover {
    background-color: #dbdbdb;
  }
`;

export const filterContainer = css`
  padding: 10px 0px;
  > label {
    font-size: 14px;
  }
`;
