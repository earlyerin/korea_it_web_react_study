import { useState } from "react";

function Render() {
  console.log("RenderComponent Rendering...");
  const [count, setCount] = useState(0);
  const onClickHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>현재 숫자 : {count}</h1>
      <button onClick={onClickHandler}>숫자 증가</button>
    </div>
  );
}

export default Render;
