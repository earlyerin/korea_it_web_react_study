import { useEffect } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

function Router3() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("이동 경로 ==> ", location.pathname);
    if (location.pathname === "/location/2") {
      navigate("/location/3", {
        state: {
          name: "name1",
          age: 21,
        },
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    console.log(location.state);
  }, [location.state]);

  useEffect(() => {
    console.log("쿼리파라미터 변경 ==> ", location.search);
  }, [location.search]);

  const backBtnHanlder = () => {
    navigate(-1); //이전 URL
  };
  return (
    <div>
      <Link to={"/location/1"}>location1</Link>
      <Link to={"/location/2"}>location2</Link>
      <Link to={"/location/3"}>location3-1</Link>
      <Link to={"/location/3?name=name1"}>location3-2</Link>
      <Link to={"/location/3?name=name2"}>location3-3</Link>
      <button onClick={backBtnHanlder}>BACK</button>
      <Routes>
        <Route path="/location/1" element={<h1>location1</h1>} />
        <Route path="/location/2" element={<h1>location2</h1>} />
        <Route path="/location/3" element={<h1>location3</h1>} />
      </Routes>
    </div>
  );
}

export default Router3;
