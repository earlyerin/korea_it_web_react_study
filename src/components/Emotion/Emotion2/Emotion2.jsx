import * as s from "./styles";
/** @jsxImportSource @emotion/react */
function Emotion2() {
  return (
    <div>
      <div css={s.box1}></div>
      <div css={s.box2("gray")}></div>
    </div>
  );
}

export default Emotion2;
