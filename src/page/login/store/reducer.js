import {
  fromJS
} from 'immutable';
import * as constans from './constans';
const defaultState = fromJS({
  isShowLogin: true
})

// 纯函数
export default (state = defaultState, action) => {
  switch (action.type) {
    case constans.CHANGE_LOGIN_STATUS:
      return state.set("isShowLogin", fromJS(action.isShowLogin));
    // case constans.CHANGE_INDEX_TAB:
    //   return state.set("chosedTab", fromJS(action.tabIndex));
    // case constans.CHANGE_PAGE_LOADING:
    //   return state.set("pageLoading", fromJS(action.loading));
    default:
      return state;
  }
  // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
}