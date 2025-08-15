import { useEffect, useState } from "react";

function Effect1() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [h1Name, setH1Name] = useState("");
  const [h1Age, setH1Age] = useState("");

  const nameOnChangeHandler = (value) => {
    setName(value);
  };
  const ageOnChangeHandler = (value) => {
    setAge(value);
  };

  /**
   * 리엑트는 일괄처리 방식으로 렌더링하므로
   * Effect1 컴포넌트 내 요소의 상태가 변경되었을 때, 즉시 렌더링되지 않음
   * 따라서 함수 내부에 출력문을 명시해도 함수 실행 당시에는 상태 업데이트 전이기 때문에
   * 최초 상태 변경 시 상태의 기본값, 이후 변경 시 이전 상태값이 출력됨
   */
  const nameOnClickHandler = () => {
    setH1Name(name);
    // console.log(h1Name);
  };
  const ageOnClickHandler = () => {
    setH1Age(age);
    // console.log(h1Age);
  };

  /**
   * useEffect
   */
  useEffect(() => {
    console.log("MOUNT...");
    console.log(h1Name);
    console.log(h1Age);

    return () => {
      console.log("AMOUONT...");
    };
  }, [h1Name, h1Age]); //해당 변수의 상태에 의존(상태 변화 시 re-rendering-unmount-mount)

  return (
    <div>
      <h1>NAME:{h1Name}</h1>
      <h1>AGE:{h1Age}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => nameOnChangeHandler(e.target.value)}
      />
      <button onClick={nameOnClickHandler}>SUBMIT</button>
      <input
        type="text"
        value={age}
        onChange={(e) => ageOnChangeHandler(e.target.value)}
      />
      <button onClick={ageOnClickHandler}>SUBMIT</button>
    </div>
  );
}

export default Effect1;
