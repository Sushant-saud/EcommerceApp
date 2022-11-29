import { useSelector } from "react-redux";
import { publicRequest } from "../Component/RequestMethod/requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./userReducer";
// import { logoutStart, logoutFailure, logoutSuccess } from "./userReducer";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }

}