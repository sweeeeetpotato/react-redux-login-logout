import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../redux/useActions";
import { useDispatch } from "react-redux";
import axios from "axios";

function Login() {
  const LOGIN_API_URL = "https://dummyjson.com/auth/login";
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 아이디를 입력받아 변수 userId에 저장하는 함수
  const handleId = (e) => {
    setUserId(e.target.value);
  };

  // 비빌번호를 입력받아 변수 password에 저장하는 함수
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // 로그인 버튼을 눌렀을 시 해당 user의 정보를 받아오는 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(LOGIN_API_URL, {
        headers: {
          "Content-type": "application/json",
        },
        username: userId,
        password: password,
      });
      // 정상적으로 로그인이 된다면 로컬스토리지에 사용자의 인증토큰 값을 저장
      localStorage.setItem("testToken", res.data.token);
      // user의 정보를 store에 저장하기위해 로그인관련 액션생성함수를 reducer에 dispatch
      dispatch(loginAction(res.data));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="wrapper">
      <form className="container" onSubmit={handleSubmit}>
        <h1 className="title login">로그인 하기</h1>
        <input
          type="text"
          id="account"
          className="input-login"
          placeholder="아이디를 입력해주세요"
          value={userId}
          onChange={handleId}
        />
        <input
          type="password"
          id="password"
          className="input-login"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={handlePassword}
        />
        <button type="submit" className="btn login">
          로그인
        </button>
      </form>
    </main>
  );
}

export default Login;
