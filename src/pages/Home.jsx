import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const userInfo = useSelector(state => state);
  return (
    <main className="wrapper">
      <div className="container">
        {
          // token값이 존재여부에 따라 로그인했는지 안했는지를 판단하여 랜더링해주는 삼항문
          userInfo.token ? (
            <>
              {/* 사용자가 로그인했을 경우 */}
              <h2 className="title">환영합니다! {userInfo.username}님</h2>
              <Link to="/user" className="link-login">
                프로필 보기
              </Link>
            </>
          ) : (
            <>
              {/* 사용자가 로그인 하지 않은 상태일 경우 */}
              <h2 className="title">반갑습니다! 로그인 해주세요</h2>
              <Link to="/login" className="link-login">
                로그인 하기!
              </Link>
            </>
          )}
      </div>
    </main >
  );
}

export default Home;
