function CountButton({ value, onClick, text }) {
  console.log("CountButton Randering...");
  return (
    <button value={value} onClick={(e) => onClick(e.target.value)}>
      {text}
    </button>
  );
}

export default CountButton;
