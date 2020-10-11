import * as constans from "./constans";

export const changeLoginStatus = (isShow) => {
  return (dispatch) => {
    dispatch({
      type:constans.CHANGE_LOGIN_STATUS,
      isShowLogin:!isShow
    })
  }
}