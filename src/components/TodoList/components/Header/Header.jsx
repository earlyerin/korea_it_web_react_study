import { RiMenuSearchLine } from "react-icons/ri";
import * as s from "./styles";
import { useState } from "react";

/** @jsxImportSource @emotion/react */
function Header({ filter, setFilter, setSearchText }) {
  const [searchInputValue, setSearchInputValue] = useState("");

  //TodoList 필터(전체,완료,미완료) 상태 저장
  const filterOnChangeHandler = (e) => {
    setFilter(e.target.id);
  };

  const searchInputOnChangeHandler = (e) => {
    setSearchInputValue(e.target.value);
  };

  //버튼 클릭 시 검색창의 입력 전달
  const searchButtonOnClickHandler = () => {
    setSearchText(searchInputValue);
  };

  return (
    <>
      <div css={s.container}>
        <input
          type="text"
          css={s.searchInput}
          onChange={searchInputOnChangeHandler}
        />
        <button css={s.searchButton} onClick={searchButtonOnClickHandler}>
          <RiMenuSearchLine css={s.searchIcon} />
        </button>
      </div>
      <div css={s.filterContainer}>
        <input
          type="radio"
          id="all"
          name="filter"
          checked={filter === "all"}
          onChange={filterOnChangeHandler}
        />
        <label htmlFor="all">전체</label>
        <input
          type="radio"
          id="complete"
          name="filter"
          checked={filter === "complete"}
          onChange={filterOnChangeHandler}
        />
        <label htmlFor="complete">완료</label>
        <input
          type="radio"
          id="incomplete"
          name="filter"
          checked={filter === "incomplete"}
          onChange={filterOnChangeHandler}
        />
        <label htmlFor="incomplete">미완료</label>
      </div>
    </>
  );
}

export default Header;
