import Header from "../Header/Header";
import * as s from "./styles";
/** @jsxImportSource @emotion/react */
function Layout({ children }) {
  return (
    <div css={s.layout}>
      <div css={s.container}>
        <Header />
        {children}
      </div>
    </div>
  );
}

export default Layout;
