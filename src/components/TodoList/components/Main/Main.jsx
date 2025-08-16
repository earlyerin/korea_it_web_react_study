import { useState } from "react";
import * as s from "./styles";
import { TbTrashFilled } from "react-icons/tb";
/** @jsxImportSource @emotion/react */
function Main({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  const inputOnChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode !== 13) {
      return;
    }
    if (inputValue.trim().length === 0) {
      return;
    }

    setTodoList((prev) => {
      const lastId = prev.length === 0 ? 0 : prev[prev.length - 1].id;
      const newTodo = {
        id: lastId + 1,
        isComplete: false,
        content: inputValue,
      };
      return [...prev, newTodo];
    });
    setInputValue("");
  };
  return (
    <div css={s.container}>
      <div css={s.listContainer}>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" id={`todo${todo.id}`} />
              <label htmlFor={`todo${todo.id}`}></label>
              <label htmlFor={`todo${todo.id}`}>{todo.content}</label>
              <div css={s.hiddenTrashBox}>
                <div css={s.trashBox}>
                  <TbTrashFilled />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div css={s.todoInputContainer}>
        <input
          type="text"
          value={inputValue}
          placeholder="할 일을 입력하세요."
          onChange={inputOnChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
      </div>
    </div>
  );
}

export default Main;
