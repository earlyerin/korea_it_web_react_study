import { useEffect, useState } from "react";

function Effect2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    {
      count === 0
        ? console.log("초기값 설정")
        : console.log("값 재할당, 재렌더링");
    }
  }, [count]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
    </>
  );
}

export default Effect2;
