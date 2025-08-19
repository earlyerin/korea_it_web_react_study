import { useState } from "react";
import { css } from "@emotion/react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Main from "../../components/TodoList/components/Main/Main";
/** @jsxImportSource @emotion/react */

function Router1() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const layout = css`
    width: 100vx;
    height: 100vh;
    display: flex;
    flex-direction: column;
  `;

  const header = css`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    background-color: blanchedalmond;
  `;

  const main = (color) => css`
    width: 100%;
    height: 800px;
    background-color: ${color};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  `;

  const countBox = css`
    display: flex;
  `;

  const footer = css`
    width: 100%;
    height: 100px;
    background-color: green;
  `;

  return (
    <div css={layout}>
      <header css={header}>
        {/* a 태그 사용 시 클릭할 때마다 새로고침(Re-rendering) */}
        <a href="/color/red">RED</a>
        <a href="/color/blue">BLUE</a>
        <a href="/color/orange">ORANGE</a>
        {/* Link 태그 사용 시 새로고침(Re-rendering) 없이 URL 교체 */}
        <Link to={"/color/red"}>RED-LINK</Link>
        <Link to={"/color/blue"}>BLUE-LINK</Link>
        <Link to={"/color/orange"}>ORANGE-LINK</Link>
        <button onClick={() => navigate("/color/red")}>RED</button>
        <button onClick={() => navigate("/color/blue")}>BLUE</button>
        <button onClick={() => navigate("/color/orange")}>ORANGE</button>
        <div css={countBox}>
          <h1>{count}</h1>
          <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
        </div>
      </header>
      <Routes>
        <Route
          path="/"
          element={<main css={main("white")}>메인 홈화면</main>}
        />
        <Route
          path="/color/red"
          element={<main css={main("red")}>RED 화면</main>}
        />
        <Route
          path="/color/blue"
          element={<main css={main("blue")}>BLUE 화면</main>}
        />
        <Route
          path="/color/orange"
          element={<main css={main("orange")}>ORANGE 화면</main>}
        />
      </Routes>
      <footer css={footer}></footer>
    </div>
  );
}

export default Router1;
