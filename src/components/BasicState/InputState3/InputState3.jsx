import { useState } from "react";

function InputState2() {
  const inputValueEmpty = {
    name: "",
    age: "",
    address: "",
  };

  const [inputValue, setInputValue] = useState(inputValueEmpty);

  const onChangeHandler = (e) => {
    const { name, value } = e.target; //이벤트 속성 구조분해
    console.log(name, value);

    //함수형 업데이트 : 해당 함수를 실행하는 시점에서 가장 최신 상태를 가진 prev(불변성) 사용
    setInputValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div>
      <h1>NAME: {inputValue.name}</h1>
      <h1>AGE: {inputValue.age}</h1>
      <h1>ADDRESS: {inputValue.address}</h1>
      <input
        name="name"
        type="text"
        value={inputValue.name}
        onChange={onChangeHandler}
      />
      <input
        name="age"
        type="text"
        value={inputValue.age}
        onChange={onChangeHandler}
      />
      <input
        name="address"
        type="text"
        value={inputValue.address}
        onChange={onChangeHandler}
      />
      <button onClick={() => setInputValue(inputValueEmpty)}>RESET</button>
    </div>
  );
}

export default InputState2;
