import { useEffect, useRef } from "react";

function DomRef() {
  const inputRef = useRef(); //특정 요소에 직접 접근할 때 사용하는 Hook

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus;
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default DomRef;
