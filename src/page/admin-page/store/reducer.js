import {
  fromJS
} from 'immutable';
import * as constans from './constans';
const defaultState = fromJS({
  routerIndex: 1,
  isShowAdd: false,
  current: 1,
  pageSize: 2,
  total: 0,
  newsList: [],
  searchTitle: "",
  isShowDeleteModal: false,
  deleteID: "",
  confirmLoading: false,
  isShowSuccess: false,
  isShowError: false,
  isShowAddBox: true,
  newsTitle: "",
  url: "",
  isShowEditInfo: false,
  editID: ""
})

// 纯函数
export default (state = defaultState, action) => {
  switch (action.type) {
    case constans.SET_ROUTER_INDEX:
      return state.set("routerIndex", fromJS(action.index));
    case constans.SET_ISSHOW_ADD:
      return state.set("isShowAdd", fromJS(action.isShow));
    case constans.SET_NEWS_LIST:
      return state.merge({
        "newsList": fromJS(action.newsList),
        "total": fromJS(action.total),
        "searchTitle": fromJS(action.title),
        "current": fromJS(action.current)
      })
    case constans.SHOW_DELETE_MODAL:
      return state.merge({
        "isShowDeleteModal": fromJS(action.isShow),
        "deleteID": fromJS(action.deleteID)
      })
    case constans.SET_ISSHOW_LOADING:
      return state.set("confirmLoading", fromJS(action.loading));
    case constans.SET_NEWS_TITLE:
      return state.set("newsTitle", fromJS(action.newsTitle));
    case constans.SET_NEWS_URL:
      return state.set("url", fromJS(action.url));
    case constans.IS_SHOW_SUCCESS:
      return state.set("isShowSuccess", fromJS(action.isShow));
    case constans.IS_SHOW_ERROR:
      return state.set("isShowError", fromJS(action.isShow));
    case constans.IS_SHOW_ADDBOX:
      return state.set("isShowAddBox", fromJS(action.isShow));
    case constans.TOGGLE_ISSHOW_EDIT:
      return state.set("isShowEditInfo", fromJS(action.isShow));
    case constans.SET_EDIT_ID:
      return state.set("editID", fromJS(action.editID));
    default:
      return state;
  }
  // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
}