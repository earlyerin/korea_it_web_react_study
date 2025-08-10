import { useState } from "react";
import CountHeader from "../CountHeader/CountHeader";
import CountButton from "../CountButton/CountButton";

function CountState() {
  console.log("CountState Randering...");
  const [count, setCount] = useState(0);

  const handleOnClick = (value) => {
    const num = Number(value);
    setCount((prev) => num + prev); //전 상태값을 인자로 받아 처리(fucntional update)
    // document.querySelector("h1").innerText = count;
    console.log("Count:", num + count);
  };

  //HTML요소 컴포넌트화
  return (
    <div>
      <CountHeader count={count} />
      <CountButton value={1} onClick={handleOnClick} text="+1" />
      <CountButton value={-1} onClick={handleOnClick} text="-1" />
    </div>
  );
}

export default CountState;
