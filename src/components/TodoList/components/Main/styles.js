import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const listContainer = css`
  flex-grow: 1;
  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 424px;
    overflow-y: auto;

    > li {
      position: relative;
      overflow: hidden;
      display: flex;
      gap: 10px;
      margin: 5px;
      padding: 10px 15px;
      border-radius: 8px;
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;

      > input[type="checkbox"] {
        display: none;

        & + label {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          border: 1px solid #dbdbdb;
          box-sizing: border-box;
        }

        &:checked + label::after {
          display: block;
          content: "";
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: #154d71;
        }
      }
    }
  }
`;

export const hiddenTrashBox = css`
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  overflow: hidden;
  cursor: pointer;

  &:hover > div {
    right: 0;
  }
`;

export const trashBox = css`
  position: absolute;
  top: 0;
  right: -45px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #33a1e0;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;
`;

export const todoInputContainer = css`
  margin-top: 10px;
  border: 2px solid #dbdbdb;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
  height: 40px;

  > input {
    border: none;
    outline: none;
    box-sizing: border-box;
    padding: 5px 15px;
    width: 100%;
    height: 100%;
  }
`;
