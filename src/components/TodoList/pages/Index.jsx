import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";

function Index() {
  //Todo 선언과 동시에 로컬 스토리지 데이터 불러오기
  const [todoList, setTodoList] = useState(
    //지연 초기화(직접적인 값이 아닌 함수를 useState 인자로 넘기는 것, 컴포넌트 성능 향상)
    //화면 렌더링 이후 실행, 최초 한번만 실행
    () => {
      const localStorageTodoList = localStorage.getItem("todoList");
      return localStorageTodoList ? JSON.parse(localStorageTodoList) : [];
    }
  );
  const [filter, setFilter] = useState("incomplete");
  const [searchText, setSearchText] = useState("");

  //로컬 스토리지 데이터 불러오기(화면 렌더링 이후 실행, 최초 한번만 실행)
  // useEffect(() => {
  //   let localStorageTodoList = localStorage.getItem("todoList");
  //   if (!localStorageTodoList) {
  //     localStorage.setItem("todoList", JSON.stringify([]));
  //     localStorageTodoList = [];
  //     setTodoList(localStorageTodoList);
  //   } else {
  //     setTodoList(JSON.parse(localStorageTodoList));
  //   }
  // }, []);

  //로컬 스토리지 업데이트
  useEffect(() => {
    let localStorageTodoList = localStorage.getItem("todoList");
    const todoListJson = JSON.stringify(todoList);
    if (localStorageTodoList !== todoListJson) {
      localStorage.setItem("todoList", todoListJson);
    }
  }, [todoList]);

  //TodoList 필터(전체,완료,미완료 중 하나) 상태에 해당하며, 검색창의 문자를 포함하는 Todo 저장
  const filterTodoList = todoList
    .filter((todo) => {
      if (filter === "all") {
        return true;
      } else if (filter === "complete") {
        return todo.isComplete;
      } else if (filter === "incomplete") {
        return !todo.isComplete;
      }
    })
    .filter((todo) => {
      if (searchText.trim().length === 0) {
        return true;
      }
      return todo.content.includes(searchText); //검색 문자를 포함하면 true 아니면 false
    });

  return (
    <Layout filter={filter} setFilter={setFilter} setSearchText={setSearchText}>
      <Main todoList={filterTodoList} setTodoList={setTodoList} />
    </Layout>
  );
}

export default Index;
