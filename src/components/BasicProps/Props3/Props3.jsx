/**
 * 자식 요소 전달 방법
 * 1. props 속성을 사용
 * 2. props에 내장된 children 속성 사용
 */
function Props3({ch1, children}) { //ch1: 인수로 받은 자식요소, children: 함수 호출 내부에 작성한 자식요소
  return (
    <div>
        {ch1}
        {children}    
    </div>
  )
}

export default Props3