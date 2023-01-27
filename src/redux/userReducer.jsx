import { LOGIN, LOGOUT } from "./type";

// store에 저장될 회원정보의 초기값
const initialState = {
  id: null,
  username: null,
  email: null,
  firstName: null,
  lastName: null,
  gender: null,
  image: null,
  token: null,
};

// dispatch의 인자에 맞게 실행하는 reducer 함수
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...action.payload };
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
}
