//컴포넌트 생성 단축키 => rfce
import React from 'react' //생략 가능

function BaxisJsx() {
    /**
     * 문법
     * - 두개 이상의 태그를 변수에 담을 경우, 하나의 태그로 감싸야함(그룹을 위해 존재하는 비어있는 태그 사용 => <></>)
     * - 변수, 상수, 리스트, 값 등울 표현하려면 {} 로 감싸야함
     *   단, {} 내부에 자바스크립트 표현식만 사용 가능 => if,for,while(X) / map, filter, 삼항연산자(O)
     */
    const jsx1 = (
        <div>
            <p>JSX의 특징</p>
            <input type="text" />
        </div>
    )

    const jsx2 = (
        <div>
            <div></div>
            <div></div>
        </div>
        // <div></div> 불가능
    )
    const name = "rin"
    const age = 21;
    const jsx3 = (
        <div>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{age>20?"성인":"미성년자"}</h3>
        </div>
    )

    const jsx4 = (
        <>
            <h3>감싸기 위한 태그 사용</h3>
            <div></div>
        </>
    )

    const jsx5 = (
        <>
            <div>컴포넌트 내부에 컴포넌트 삽입</div>
            <div></div>
        </>
    )

    const jsx6 = (
        <div>
            {jsx4}
            {jsx5}
        </div>
    )

    //배열 내부에 요소 삽입
    const itemList1 = [
        <div>item1</div>,
        <div>item2</div>,
        <div>item3</div>,
        <div>item4</div>,
    ]

    const itemList2 = ["item1", "item2", "item3", "item4"]

  return (
    <div>
        {jsx1}
        {jsx2}
        {jsx3}
        {jsx4}
        {itemList1}
        {itemList2}
        {jsx6}
    </div>
  )
}

export default BaxisJsx