import {
  fromJS
} from 'immutable';
import * as constans from './constans';
const defaultState = fromJS({
  communityInformation: [],
  levelConfigs: [],
  birthdayLimitStartDate: "",
  birthdayLimitEndDate: "",
  enterSchoolBeginDate: "",
  enterSchoolEndDate: "",
  sort: 1,
  level: "",
  isShowAdd: false,
  streetList: [],
  boundaryList: [],
  communityList: [],
  isShowDelete: false,
  deleteID: "",
  userList: [],
  adminUser: "",
  total: 0,
  pageSize: 1,
  isShowPassword: false,
  editID: "",
  current: 1,
  confirmLoading: false,
  routerIndex: 1,
  isShowConfig: false
})

// 纯函数
export default (state = defaultState, action) => {
  switch (action.type) {
    case constans.SET_ALL_CONFIGS:
      return state.merge({
        "communityInformation": fromJS(action.configs.communityInformation),
        "levelConfigs": fromJS(action.configs.levelConfigs),
        "birthdayLimitStartDate": fromJS(action.configs.school.birthdayLimitStartDate),
        "birthdayLimitEndDate": fromJS(action.configs.school.birthdayLimitEndDate),
        "enterSchoolBeginDate": fromJS(action.configs.school.enterSchoolBeginDate),
        "enterSchoolEndDate": fromJS(action.configs.school.enterSchoolEndDate),
      })
    case constans.SET_BIRTHDAY:
      return state.merge({
        "birthdayLimitStartDate": fromJS(action.birthday[0]),
        "birthdayLimitEndDate": fromJS(action.birthday[1]),
      })
    case constans.SET_SCHOOLTIME:
      return state.merge({
        "enterSchoolBeginDate": fromJS(action.schoolTime[0]),
        "enterSchoolEndDate": fromJS(action.schoolTime[1]),
      })
    case constans.SET_SORT:
      return state.set("sort", fromJS(action.sort));
    case constans.SET_LEVEL:
      return state.set("level", fromJS(action.level));
    case constans.SET_ISSHOW_ADD:
      return state.set("isShowAdd", fromJS(action.isShow));
    case constans.SET_STREETLIST:
      return state.set("streetList", fromJS(action.streetList));
    case constans.SET_BOUNDARYLIST:
      return state.set("boundaryList", fromJS(action.boundaryList));
    case constans.SET_COMMUNITYLIST:
      return state.set("communityList", fromJS(action.communityList));
    case constans.TOGGLE_ISSHOW_DELETE:
      return state.merge({
        "isShowDelete": fromJS(action.isShowDelete),
        "deleteID": fromJS(action.deleteID),
      })
    case constans.SET_USERLIST:
      return state.merge({
        "userList": fromJS(action.userList),
        "adminUser": fromJS(action.adminUser),
        "total": fromJS(action.total),
        "current": fromJS(action.current)
      })
    case constans.SHOW_EDIT_PASSWORD:
      return state.merge({
        "isShowPassword": fromJS(action.isShowPassword),
        "editID": fromJS(action.editID),
      })
    case constans.SET_LOADING:
      return state.set("confirmLoading", fromJS(action.confirmLoading));
    case constans.SET_ROUTER_INDEX:
      return state.set("routerIndex", fromJS(action.index));
    case constans.SET_ISSHOW_CONFIG:
      return state.set("isShowConfig", fromJS(action.isShow));
    default:
      return state;
  }
  // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
}