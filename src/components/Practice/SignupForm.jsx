import { useEffect, useState } from "react";

function SignupForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  const inputOnChangeHandler = (target) => {
    const { name, value } = target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const signupClickHandler = () => {
    alert("회원가입이 완료되었습니다.");
  };

  useEffect(() => {
    setIsDisabled(true);
    const newErrors = {};
    if (
      formValues.email.length > 0 &&
      (!formValues.email.includes("@") || !formValues.email.includes("."))
    ) {
      newErrors.email = "이메일 형식에 맞게 입력해주세요";
    }
    if (formValues.password.length > 0 && formValues.password.length < 8) {
      newErrors.password = "비밀번호는 8자 이상이어야합니다.";
    }
    setError(newErrors);

    if (
      Object.keys(newErrors).length === 0 &&
      formValues.email &&
      formValues.password
    ) {
      setIsDisabled(false);
    }
  }, [formValues]);

  return (
    <div>
      <h2>회원가입</h2>
      <div>
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={formValues.email}
          onChange={(e) => inputOnChangeHandler(e.target)}
        />
        {error.email && <p>{error.email}</p>}
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={formValues.password}
          onChange={(e) => inputOnChangeHandler(e.target)}
        />
        {error.password && <p>{error.password}</p>}
      </div>
      <button disabled={isDisabled} onClick={signupClickHandler}>
        가입하기
      </button>
    </div>
  );
}

export default SignupForm;
