import { useEffect, useState } from "react";

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Orange",
  "Strawberry",
  "Watermelon",
];
function FruitsFilter() {
  const [input, setInputValue] = useState("");
  const [list, setList] = useState(fruits);

  useEffect(() => {
    const newList = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(input.toLowerCase())
    );
    setList(newList);
    console.log("MOUNT...");
    return () => {
      console.log("UNMOUNT");
    };
  }, [input]);
  return (
    <div>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <ul>
        {list.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitsFilter;
