import * as api from "../../../request/serviceList";
import http from "../../../request/http";
import * as constans from "./constans";
import {
  message
} from "antd";

const setChildList = (data) => {
  return {
    type: constans.SET_CHILD_LIST,
    list: data
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

/**
 * <-------------------------------- actions -------------------------------->
 */

export const getChildList = () => {
  return (dispatch) => {
    http.get(api.GETSTUDENTBYADMISSIONID, {}).then((resp) => {
      dispatch(setChildList(resp.data));
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

export const deleteInfo = (id) => {
  return (dispatch) => {
    http.delete(api.DELETESTUDENTBYID, {
      studentID: id
    }).then((resp) => {
      if (resp.success) {
        message.success("删除成功！");
        dispatch(getChildList())
        dispatch(showDeleteModal())
      }
    })
  }
}

export const showDeleteModal = (isShow, deleteID) => {
  return (dispatch) => {
    dispatch({
      type: constans.SET_ISSHOW_DELETE,
      isShowDelete: isShow,
      deleteID: deleteID
    })
  }
}