import Props1 from "./Props1/Props1"
import Props2 from "./Props2/Props2"
import Props3 from "./Props3/Props3"

function BasicProps() {
    //키,값 형태로 인수 전달
  return (
    <div>
        <Props1 data1={"data1"} data2={"data2"}/>
        <Props2 data3={"data3"} data4={"data4"}/>

        {/* 자식요소를 매개변수로 전달 */}
        <Props3 ch1={<div>자식요소1</div>}>
            {/* 호출 태그 내부에 작성한 요소 => 해당 함수의 자식요소*/}
            <div>자식요소2</div>
        </Props3>
    </div>
  )
}

export default BasicProps