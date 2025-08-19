import { useEffect } from "react";
import { Route, Routes, useParams, useSearchParams } from "react-router-dom";

function Component1() {
  const { name } = useParams();
  return <h1>path parameter는 {name}입니다.</h1>;
}

function Component2() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const entries = searchParams.entries();
    let searchParamObj = {};
    for (const [key, value] of entries) {
      searchParamObj[key] = value;
    }
    console.log("useSearchParams ==> ", searchParamObj);

    const nameParam = searchParams.get("name");
    console.log("name => ", nameParam);
    console.log("address => ", searchParams.getAll("address"));
  }, [searchParams]);

  const onClickHandler = () => {
    setSearchParams((prev) => {
      prev.set("address", "busan");
      return prev;
    });
  };
  return (
    <>
      <div>
        <button onClick={onClickHandler}>
          URL에 'address=busan' 추가/변경
        </button>
      </div>
    </>
  );
}

function Router4() {
  return (
    <div>
      <Routes>
        <Route path="/param1/:name" element={<Component1 />} />
        <Route path="/param2" element={<Component2 />} />
      </Routes>
    </div>
  );
}

export default Router4;
