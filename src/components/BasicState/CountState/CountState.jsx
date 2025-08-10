import { useState } from "react"

function CountState() {
  const [count, setCount] = useState(0); 

    const handleOnClick = (value) => {
      const num = parseInt(value);
      setCount(num + count);
      // document.querySelector("h1").innerText = count;
      console.log("Count:", num + count);
    }

  return (
    <div>
        <h1>Count ➜ {count}</h1>
        <button value={1} onClick={(e) => handleOnClick(e.target.value)}>+1</button>
        <button value={-1} onClick={(e) => handleOnClick(e.target.value)}>-1</button>
    </div>
  )
}

export default CountState