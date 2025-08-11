import { useState } from "react";

function InputState2() {
  const [inputValue, setInputValue] = useState({
    t1: "",
    t2: "",
    t3: "",
  });

  const OnChangeHandler = (e) => {
    console.log("name => ", e.target.name);
    console.log("value => ", e.target.value);
    const targetName = e.target.name;
    const targetValue = e.target.value;

    //입력을 객체 형태로 저장
    const newInputValue = {
      ...inputValue,
      [targetName]: targetValue, //키로 변수값을 사용하고 싶을 때 => [변수명]: 값
    };

    //객체를 전달하여 입력 변경
    setInputValue(newInputValue);
  };

  return (
    <div>
      <input type="text" name="t1" onChange={OnChangeHandler} />
      <input type="text" name="t2" onChange={OnChangeHandler} />
      <input type="text" name="t3" onChange={OnChangeHandler} />
    </div>
  );
}

export default InputState2;
