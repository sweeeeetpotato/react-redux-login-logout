import { useNavigate } from "react-router-dom";
import { logoutAction } from "../redux/useActions";
import { useDispatch } from "react-redux";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logOut() {
    // 로그아웃시 로컬스토리지에서 사용자의 인증토큰 값을 삭제
    localStorage.removeItem("testToken");
    dispatch(logoutAction());
    navigate("/");
  }

  return (
    <main className="wrapper">
      <div className="container">
        <h1 className="title login">로그아웃 하실래요?</h1>
        <button className="btn logout" onClick={logOut}>
          로그아웃
        </button>
      </div>
    </main>
  );
}

export default Logout;
