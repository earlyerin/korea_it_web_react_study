function Props1(props) {
    console.log("param props:",props);
    const {data1, data2} = props; //매개변수 비구조 할당 
  return (
    <div>
        <p>Data1 : {data1}</p>
        <p>Data2 : {data2}</p>
    </div>
  )
}

export default Props1