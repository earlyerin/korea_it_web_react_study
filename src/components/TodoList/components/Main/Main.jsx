import { useState } from "react";
import * as s from "./styles";
import { TbTrashFilled } from "react-icons/tb";
/** @jsxImportSource @emotion/react */
function Main({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  //Todo 입력 저장
  const inputOnChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  //TodoList 저장
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

  //Todo isComplete 변경
  const checkBoxOnChangeHandler = (e) => {
    const todoId = parseInt(e.target.value);
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        }
        return todo;
      })
    );
  };

  //Todo 제거
  const deleteOnClickHandler = (todoId) => {
    //제거할 Todo의 아이디와 다르면 setTodo
    setTodoList((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  return (
    <div css={s.container}>
      <div css={s.listContainer}>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                id={`todo${todo.id}`}
                value={todo.id}
                checked={todo.isComplete}
                onChange={checkBoxOnChangeHandler}
              />
              <label htmlFor={`todo${todo.id}`}></label>
              <label htmlFor={`todo${todo.id}`}>{todo.content}</label>
              <div css={s.hiddenTrashBox}>
                <div
                  css={s.trashBox}
                  onClick={() => deleteOnClickHandler(todo.id)}
                >
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
