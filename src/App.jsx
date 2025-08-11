import "./App.css";
import BaxisJsx from "./components/BasicJsx/BaxisJsx";
import BasicProps from "./components/BasicProps/BasicProps";
import BasicReact from "./components/BasicReact/BasicReact";
import Calculator from "./components/BasicState/Calculator/Calculator";
import CountState from "./components/BasicState/CountState/CountState";
import InputState1 from "./components/BasicState/InputState1/InputState1";
import InputState2 from "./components/BasicState/InputState2/InputState2";
import InputState3 from "./components/BasicState/InputState3/InputState3";
import InputState4 from "./components/BasicState/InputState4/InputState4";
import DomRef from "./components/DomRef/DomRef";

//초기 화면 구성
function App() {
  //JSX 컴포넌트 호출
  return (
    <>
      {/* <BasicReact /> */}
      {/* <BaxisJsx /> */}
      {/* <BasicProps /> */}
      {/* <CountState /> */}
      {/* <Calculator /> */}
      {/* <InputState1 /> */}
      {/* <InputState2 /> */}
      {/* <InputState3 /> */}
      {/* <InputState4 /> */}
      <DomRef />
    </>
  );
}

export default App;
