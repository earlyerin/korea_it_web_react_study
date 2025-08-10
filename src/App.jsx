import './App.css'
import BaxisJsx from './components/BasicJsx/BaxisJsx'
import BasicProps from './components/BasicProps/BasicProps'
import BasicReact from './components/BasicReact/BasicReact'
import Calculator from './components/BasicState/Calculator/Calculator'
import CountState from './components/BasicState/CountState/CountState'

//초기 화면 구성
function App() {
  //JSX 컴포넌트 호출
  return (
    <>
      {/* <BasicReact /> */}
      {/* <BaxisJsx /> */}
      {/* <BasicProps /> */}
      {/* <CountState /> */}
      <Calculator />
    </>
  )
}

export default App
