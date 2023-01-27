import { LOGIN, LOGOUT } from "./type";

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

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.payload };
    case LOGOUT:
      return { ...state, token: null };
    default:
      return state;
  }
}
