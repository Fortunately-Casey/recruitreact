import {
  fromJS
} from 'immutable';
import * as constans from './constans';
const defaultState = fromJS({
  saveList: [],
  totalCount: 0,
  pageSize: 1,
  current: 1,
  name: "",
  idCard: "",
  linkPhone: "",
  provinceList: [],
  cityList: [],
  areaList: [],
  streetList: [],
  communityList: [],
  smallCommunityList: [],
  schoolList: [],
  levelList: [],
  levelID: 0,
  crossIndex: 0,
  commitLoading: false,
  routerIndex: 2,
  isShowAudit: false
})

// 纯函数
export default (state = defaultState, action) => {
  switch (action.type) {
    case constans.SET_SAVE_LIST:
      return state.merge({
        "saveList": fromJS(action.saveList),
        "totalCount": fromJS(action.totalCount),
        "name": fromJS(action.name),
        "idCard": fromJS(action.idCard),
        "linkPhone": fromJS(action.linkPhone),
        "current": fromJS(action.current),
      })
    case constans.SET_PROVINCE_LIST:
      return state.set("provinceList", fromJS(action.provinceList));
    case constans.SET_CITY_LIST:
      return state.set("cityList", fromJS(action.cityList));
    case constans.SET_AREA_LIST:
      return state.set("areaList", fromJS(action.areaList));
    case constans.SET_STREET_LIST:
      return state.set("streetList", fromJS(action.streetList));
    case constans.SET_COMMUNITY_LIST:
      return state.set("communityList", fromJS(action.communityList));
    case constans.SET_SMALLCOMMUNITY_LIST:
      return state.set("smallCommunityList", fromJS(action.smallCommunityList));
    case constans.SET_SCHOOLLIST_LIST:
      return state.set("schoolList", fromJS(action.schoolList));
    case constans.SET_LEVEL_LIST:
      return state.set("levelList", fromJS(action.levelList));
    case constans.SET_LEVEL_INDEX:
      return state.set("levelID", fromJS(action.index));
    case constans.SET_CROSS_INDEX:
      return state.set("crossIndex", fromJS(action.index));
    case constans.TOGGLE_LOADING:
      return state.set("commitLoading", fromJS(action.loading));
    case constans.SET_ROUTER_INDEX:
      return state.set("routerIndex", fromJS(action.index));
    case constans.SET_ISSHOW_AUDIT:
      return state.set("isShowAudit", fromJS(action.isShow));
    default:
      return state;
  }
  // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
}