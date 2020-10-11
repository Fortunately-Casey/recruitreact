import * as constans from "./constans";
import * as api from "../../../request/serviceList";
import http from "../../../request/http";
import {
  message
} from "antd";

const setConfirmLoading = (loading) => {
  return {
    type: constans.SET_ISSHOW_LOADING,
    loading,
  }
}

export const setRouterIndex = (index) => {
  return (dispatch) => {
    dispatch({
      type: constans.SET_ROUTER_INDEX,
      index: index
    })
  }
}

export const setIsShowAdd = (isShow) => {
  return (dispatch) => {
    dispatch({
      type: constans.SET_ISSHOW_ADD,
      isShow: isShow
    })
  }
}

export const setNewsList = (title, list, total, current) => {
  return (dispatch) => {
    dispatch({
      type: constans.SET_NEWS_LIST,
      newsList: list,
      total: total,
      title,
      current
    })
  }
}

export const getNewsList = (title, page, pageSize) => {
  return (dispatch) => {
    http.post(api.GETNEWSLIST, {
      currPage: page,
      pageSize: pageSize,
      title: title
    }).then((resp) => {
      if (resp.success) {
        resp.data.forEach((item) => {
          item.key = item.id
        })
        dispatch(setNewsList(
          title,
          resp.data,
          resp.page.totalCount,
          page
        ))
      }
    })
  }
}

export const showDelete = (deleteID, isShow) => {
  return (dispatch) => {
    dispatch({
      type: constans.SHOW_DELETE_MODAL,
      deleteID,
      isShow,
    })
  }
}

export const deleteNews = (deleteID, pageSize) => {
  return (dispatch) => {
    dispatch(setConfirmLoading(true));
    http.delete(api.DELETENEWSCONFIG, {
      ID: deleteID
    }).then((resp) => {
      dispatch(setConfirmLoading(false));
      if (resp.success) {
        message.success("删除成功!");
        dispatch(getNewsList("", 1, pageSize))
        dispatch(showDelete("", false))
      }
    })
  }
}

export const titleChange = (value) => {
  return (dispatch) => {
    dispatch({
      type: constans.SET_NEWS_TITLE,
      newsTitle: value
    })
  }
}

export const urlChange = (value) => {
  return (dispatch) => {
    dispatch({
      type: constans.SET_NEWS_URL,
      url: value
    })
  }
}

export const showError = (isShow) => {
  return (dispatch) => {
    dispatch({
      type: constans.IS_SHOW_ERROR,
      isShow
    })
  }
}

export const showSuccess = (isShow) => {
  return (dispatch) => {
    dispatch({
      type: constans.IS_SHOW_SUCCESS,
      isShow
    })
  }
}

export const showAddBox = (isShow) => {
  return (dispatch) => {
    dispatch({
      type: constans.IS_SHOW_ADDBOX,
      isShow
    })
  }
}

export const confirmNews = (params) => {
  return (dispatch) => {
    http.post(api.INSRERTNEWSCONFIG, params).then((resp) => {
      if (resp.success) {
        dispatch(showSuccess(true))
        dispatch(showAddBox(false))
      } else {
        dispatch(showError(true))
        dispatch(showAddBox(false))
      }
    })
  }
}

export const toggleModal = (isShow) => {
  return (dispatch) => {
    dispatch({
      type: constans.TOGGLE_ISSHOW_EDIT,
      isShow,
    })
  }
}

export const setEditID = (editID) => {
  return (dispatch) => {
    dispatch({
      type: constans.SET_EDIT_ID,
      editID,
    })
  }
}

export const confirmEdit = (params, pageSize) => {
  return (dispatch) => {
    dispatch(setConfirmLoading(true));
    http.post(api.UPDATENEWSCONFIG, params).then((resp) => {
      dispatch(setConfirmLoading(false));
      if (resp.success) {
        message.success("修改成功!");
        dispatch(toggleModal(false));
        dispatch(getNewsList("", 1, pageSize))
      }
    })
  }
}