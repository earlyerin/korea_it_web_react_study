import { useState } from "react";
import LifeCycle from "./LifeCycle";

function LifeCycleApp() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Parent Component</h1>
      {/* 버튼을 누를 때 마다 show 상태 변화(true or false) */}
      <button onClick={() => setShow((prev) => !prev)}>
        {show
          ? "Hide Children Component(UMOUNT...)"
          : "Show Children Component(MOUNT...)"}
      </button>
      {/* 자식 컴포넌트에 전달할 count 상태 변화 */}
      <button onClick={() => setCount((prev) => prev + 1)}>
        Transmit Up-Count To Children Component(RE-REDERING...)
      </button>
      {/* show의 상태에 따라 자식 컴포넌트 Mount&Unmount 결정 */}
      {show && <LifeCycle count={count} />}
    </div>
  );
}

export default LifeCycleApp;
