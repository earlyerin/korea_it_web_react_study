import { Link, Route, Routes } from "react-router-dom";

function Page1() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/page1" element={<h1>페이지1입니다.</h1>} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </>
  );
}

function Page2() {
  return (
    <>
      <div>
        <h1>페이지2입니다.</h1>
      </div>
    </>
  );
}

/**
 * 하위 라우터(서브 라우터)
 * - 특정 경로의 페이지의 하위라우터(하위경로)에 따라 특정 컴포넌트를 렌더링
 * - 상위 경로의 컴포넌트와 하위 경로의 컴포넌트 모두에 라우터를 작성(중첩)
 * - 와일드 카드 (경로에 *) 사용 시 해당 경로로 시작하는 모든 하위 경로를 의미
 */
function Router2() {
  return (
    <div>
      <header>
        <Link to={"/page/page1"}>page1</Link>
        <Link to={"/page/page2"}>page2</Link>
        <Link to={"/name/name1"}>name1</Link>
        <Link to={"/name/name2"}>name2</Link>
      </header>
      <h1>Router2</h1>
      <Routes>
        <Route path="/page/*" element={<Page1 />} />
        <Route
          path="/name/*"
          element={
            <Routes>
              <Route path="/name1" element={<h1>이름1입니다.</h1>}></Route>
              <Route path="/name2" element={<h1>이름2입니다.</h1>}></Route>
            </Routes>
          }
        />
      </Routes>
    </div>
  );
}

export default Router2;
