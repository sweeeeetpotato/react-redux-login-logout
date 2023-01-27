import { LOGIN, LOGOUT } from "./type";

// 로그인 액션 생성 함수
export function loginAction(userData) {
  return {
    type: LOGIN,
    payload: userData,
  };
}

// 로그아웃 액션 생성 함수
export function logoutAction() {
  return {
    type: LOGOUT,
  };
}

