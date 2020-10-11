import * as constans from "./constans";
import * as api from "../../../request/serviceList";
import http from "../../../request/http";
// import {
//   message
// } from "antd";

const setSaveList = (data, params) => {
  return {
    type: constans.SET_SAVE_LIST,
    saveList: data.data,
    totalCount: data.page.totalCount,
    name: params.name,
    idCard: params.idCard,
    linkPhone: params.linkPhone,
    current: params.currPage
  }
}

const setAuditList = (data, params) => {
  return {
    type: constans.SET_SAVE_LIST,
    saveList: data.data,
    totalCount: data.page.totalCount,
    name: params.name,
    idCard: params.idCard,
    linkPhone: params.linkPhone,
    current: params.currPage
  }
}

const setLevelList = (list) => {
  return {
    type: constans.SET_LEVEL_LIST,
    levelList: list
  }
}

const setProvinceList = (data) => {
  return {
    type: constans.SET_PROVINCE_LIST,
    provinceList: data
  }
}

const setCityList = (data) => {
  return {
    type: constans.SET_CITY_LIST,
    cityList: data
  }
}

const setAreaList = (data) => {
  return {
    type: constans.SET_AREA_LIST,
    areaList: data
  }
}

const setStreetList = (data) => {
  return {
    type: constans.SET_STREET_LIST,
    streetList: data
  }
}

const setCommunity = (data) => {
  return {
    type: constans.SET_COMMUNITY_LIST,
    communityList: data
  }
}

const setSmallCommunity = (data) => {
  return {
    type: constans.SET_SMALLCOMMUNITY_LIST,
    smallCommunityList: data
  }
}

const setSchoolList = (data) => {
  return {
    type: constans.SET_SCHOOLLIST_LIST,
    schoolList: data
  }
}


export const getSaveList = (params) => {
  return (dispatch) => {
    http.post(api.GETSTUDENTLISTPAGE, params).then((resp) => {
      if (resp.success) {
        resp.data.forEach((item) => {
          item.key = item.id
        })
        dispatch(setSaveList(resp, params))
      }
    })
  }
}

export const getAuditList = (params) => {
  return (dispatch) => {
    http.post(api.GETSTUDENTLISTPAGE, params).then((resp) => {
      if (resp.success) {
        resp.data.forEach((item) => {
          item.key = item.id
        })
        dispatch(setAuditList(resp, params))
      }
    })
  }
}

export const getProvinceArea = () => {
  return (dispatch) => {
    http.get(api.GETPROVINCEAREA, {}).then((resp) => {
      dispatch(setProvinceList(resp.data));
    })
  }
}

export const getCityList = (id) => {
  return (dispatch) => {
    http.get(api.GETCITYLIST, {
      parentID: id
    }).then((resp) => {
      dispatch(setCityList(resp.data));
    })
  }
}

export const getAreaList = (id) => {
  return (dispatch) => {
    http.get(api.GETCITYLIST, {
      parentID: id
    }).then((resp) => {
      dispatch(setAreaList(resp.data));
    })
  }
}

export const getStreetList = () => {
  return (dispatch) => {
    http.get(api.GETSTREETLIST, {}).then((resp) => {
      dispatch(setStreetList(resp.data));
    })
  }
}

export const getCommunity = (id) => {
  return (dispatch) => {
    http.get(api.GETCOMMUNITYLIST, {
      streetID: id
    }).then((resp) => {
      dispatch(setCommunity(resp.data));
    })
  }
}

export const getSmallCommunity = (id) => {
  return (dispatch) => {
    http.get(api.GETSMALLCOMMUNITYBYCOMMUNITYID, {
      communityID: id
    }).then((resp) => {
      dispatch(setSmallCommunity(resp.data));
    })
  }
}

export const getSchoolList = (id) => {
  return (dispatch) => {
    http.get(api.GETSCHOOLLIST, {}).then((resp) => {
      dispatch(setSchoolList(resp.data));
    })
  }
}

export const getLevelList = (schoolID) => {
  return (dispatch) => {
    http.get(api.GETLISTLEVEL, {
      schoolID: schoolID
    }).then((resp) => {
      dispatch(setLevelList(resp.data))
    })
  }
}

export const choseLevel = (index) => {
  return (dispatch) => {
    dispatch({
      type: constans.SET_LEVEL_INDEX,
      index,
    })
  }
}

export const choseCrossIndex = (index) => {
  return (dispatch) => {
    dispatch({
      type: constans.SET_CROSS_INDEX,
      index,
    })
  }
}

export const toggleLoading = (loading) => {
  return (dispatch) => {
    dispatch({
      type: constans.TOGGLE_LOADING,
      loading
    })
  }
}

export const setRouterIndex = (index) => {
  return (dispatch) => {
    dispatch({
      type: constans.SET_ROUTER_INDEX,
      index
    })
  }
}

export const setIsShowAudit = (isShow) => {
  return (dispatch) => {
    dispatch({
      type: constans.SET_ISSHOW_AUDIT,
      isShow
    })
  }
}