import { LOGIN, LOGOUT } from "./type";

// 액션생성함수
export function loginAction(userData) {
  return {
    type: LOGIN,
    payload: userData,
  };
}

export function logoutAction() {
  return {
    type: LOGOUT,
  };
}

