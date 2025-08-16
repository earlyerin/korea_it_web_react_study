import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";

function index() {
  const [todoList, setTodoList] = useState([]);

  return (
    <Layout>
      <Main todoList={todoList} setTodoList={setTodoList} />
    </Layout>
  );
}

export default index;
