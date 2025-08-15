/**
 * Emotion CSS
 * 1. 라이브러리 설치 => npm i @emotion/react
 * 2. jsx 태그의 css 속성 활성화 => 주석 /** @jsxImportSource @react/emotion
 * 3. css 객체 import 후 `` 문자열로 작성
 */

import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
function Emotion1() {
  const box1 = css`
    width: 100px;
    height: 100px;
    background-color: black;
  `;

  const box2 = (color) => css`
    width: 100px;
    height: 100px;
    background-color: ${color};
  `;

  return (
    <div>
      <div css={box1}></div>
      <div css={box2("gray")}></div>
    </div>
  );
}

export default Emotion1;
