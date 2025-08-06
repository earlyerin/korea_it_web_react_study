import './App.css'
import BaxisJsx from './components/BasicJsx/BaxisJsx'
import BasicProps from './components/BasicProps/BasicProps'
import BasicReact from './components/BasicReact/BasicReact'
import CountState from './components/BasicState/CountState/CountState'

//초기 화면 구성
function App() {
  //JSX 파일(모듈) 호출
  return (
    <>
      {/* <BasicReact /> */}
      {/* <BaxisJsx /> */}
      {/* <BasicProps /> */}
      <CountState />
    </>
  )
}

export default App
