import Header from "../Header/Header";
import * as s from "./styles";
/** @jsxImportSource @emotion/react */
function Layout({ children, filter, setFilter, setSearchText }) {
  return (
    <div css={s.layout}>
      <div css={s.container}>
        <Header filter={filter} setFilter={setFilter} setSearchText={setSearchText}/>
        {children}
      </div>
    </div>
  );
}

export default Layout;
