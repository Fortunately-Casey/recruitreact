import {
  fromJS
} from 'immutable';
import * as constans from './constans';
const defaultState = fromJS({
  childrenList: [],
  provinceList: [],
  cityList: [],
  areaList: [],
  streetList: [],
  communityList: [],
  smallCommunityList: [],
  schoolList: [],
  isShowDelete: false,
  deleteID: ""
})

// 纯函数
export default (state = defaultState, action) => {
  switch (action.type) {
    case constans.SET_CHILD_LIST:
      return state.set("childrenList", fromJS(action.list));
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
    case constans.SET_ISSHOW_DELETE:
      return state.merge({
        "isShowDelete": fromJS(action.isShowDelete),
        "deleteID": fromJS(action.deleteID)
      })
    default:
      return state;
  }
  // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
}