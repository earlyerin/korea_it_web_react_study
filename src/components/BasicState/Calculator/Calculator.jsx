import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState(0);
  const [justCalculated, setJustCalculated] = useState(false);

  const handleOnClick = (clickedValue) => {
    console.log("state => ", justCalculated);
    //결과에 연결된 계산
    if (
      !(result === 0) &&
      (clickedValue === "+" ||
        clickedValue === "-" ||
        clickedValue === "/" ||
        clickedValue === "*") &&
      justCalculated === true
    ) {
      setInput(result + clickedValue);
      setJustCalculated(false);
      return;
    }
    //0으로 시작하는 숫자 입력 차단
    const lastChar = input.charAt(input.length - 1);
    if ((lastChar === "+" || lastChar === "-") && clickedValue === "0") {
      return;
    }

    //연속적인 기호 입력 차단
    if (
      (lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "/" ||
        lastChar === "*") &&
      (clickedValue === "+" ||
        clickedValue === "-" ||
        clickedValue === "/" ||
        clickedValue === "*")
    ) {
      return;
    }

    //마지막 입력 제거
    if (clickedValue === "r") {
      const backInput = input.slice(0, -1);
      setInput(backInput);
      return;
    }

    //입력 초기화
    if (clickedValue === "c") {
      setInput("0");
      setResult(0);
      setJustCalculated(false);
      return;
    }

    //계산 결과 삽입
    if (clickedValue === "=") {
      setResult(eval(input));
      setJustCalculated(true);
      return;
    }

    //입력 삽입
    if (input === "0") {
      //기호로 시작하는 입력 차단
      if (
        clickedValue === "+" ||
        clickedValue === "-" ||
        clickedValue === "/" ||
        clickedValue === "*"
      ) {
        return;
      } else {
        setInput(clickedValue);
      }
    } else {
      setInput(input + clickedValue);
    }
  };

  return (
    <div>
      <h1>INPUT ➜ {input}</h1>
      <h1>RESULT ➜ {result}</h1>
      <div>
        <button value="c" onClick={(e) => handleOnClick(e.target.value)}>
          C
        </button>
        <button value="r" onClick={(e) => handleOnClick(e.target.value)}>
          ⌫
        </button>
      </div>
      <div>
        <button value={7} onClick={(e) => handleOnClick(e.target.value)}>
          7
        </button>
        <button value={8} onClick={(e) => handleOnClick(e.target.value)}>
          8
        </button>
        <button value={9} onClick={(e) => handleOnClick(e.target.value)}>
          9
        </button>
        <button value="+" onClick={(e) => handleOnClick(e.target.value)}>
          +
        </button>
      </div>
      <div>
        <button value={4} onClick={(e) => handleOnClick(e.target.value)}>
          4
        </button>
        <button value={5} onClick={(e) => handleOnClick(e.target.value)}>
          5
        </button>
        <button value={6} onClick={(e) => handleOnClick(e.target.value)}>
          6
        </button>
        <button value="-" onClick={(e) => handleOnClick(e.target.value)}>
          -
        </button>
      </div>
      <div>
        <button value={1} onClick={(e) => handleOnClick(e.target.value)}>
          1
        </button>
        <button value={2} onClick={(e) => handleOnClick(e.target.value)}>
          2
        </button>
        <button value={3} onClick={(e) => handleOnClick(e.target.value)}>
          3
        </button>
        <button value="*" onClick={(e) => handleOnClick(e.target.value)}>
          ×
        </button>
      </div>
      <div>
        <button value={0} onClick={(e) => handleOnClick(e.target.value)}>
          0
        </button>
        <button value="." onClick={(e) => handleOnClick(e.target.value)}>
          .
        </button>
        <button value="=" onClick={(e) => handleOnClick(e.target.value)}>
          =
        </button>
        <button value="/" onClick={(e) => handleOnClick(e.target.value)}>
          ÷
        </button>
      </div>
    </div>
  );
}

export default Calculator;
