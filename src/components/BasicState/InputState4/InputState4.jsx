import { useState } from "react";

function InputState4() {
  const inputValueEmpty = {
    productName: "",
    price: "",
    quantity: "",
  };

  //상품들에 대한 상태 배열
  const [products, setProducts] = useState([]);
  //입력에 대한 상태 객체
  const [inputValue, setInputValue] = useState(inputValueEmpty);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const onClickHandler = () => {
    setProducts((prev) => {
      // push는 원본 배열을 수정하므로 상태 객체의 참조주소값은 동일하므로 변경을 감지하지 못할 가능성 존재(불변성 위배)
      // const newArray = prev;
      // newArray.push(inputValue);
      // return newArray
      return [...prev, inputValue]; //새로운 배열
    });
  };

  return (
    <div>
      {/* 입력 */}
      <div>
        <label htmlFor="productName">Product Name </label>
        <input
          type="text"
          id="productName"
          name="productName"
          value={inputValue.productName}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="price">Price </label>
        <input
          type="text"
          id="price"
          name="price"
          value={inputValue.price}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity </label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={inputValue.quantity}
          onChange={onChangeHandler}
        />
      </div>
      {/* 제출 */}
      <div>
        <button
          onClick={() => {
            onClickHandler();
            setInputValue(inputValueEmpty);
          }}
        >
          CONFIRM
        </button>
      </div>
      {/* 출력 */}
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {/* 배열을 순회하여 상품 테이블에 삽입하는 작업 */}
          {products.map((product, index) => (
            // 목록 렌더링 시 항목 구분을 위해 고유한 키 할당 필수
            // key는 리엑트에서 어떤 항목에 대한 변경, 추가, 삭제를 효율적으로 파악하는데 사용
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InputState4;
