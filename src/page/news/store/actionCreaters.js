import * as api from "../../../request/serviceList";
import http from "../../../request/http";
import * as constans from "./constans";

const setNewsList = (data) => {
  return {
    type: constans.SET_NEWS_LIST,
    list: data
  }
}

export const getNews = () => {
  return (dispatch) => {
    http.post(api.GETNEWSLIST, {
      currPage: 1,
      pageSize: 100,
      title: ""
    }).then((resp) => {
      dispatch(setNewsList(resp.data));
    })
  }
}

export const changeIndexTab = (index) => {
  return (dispatch) => {
    dispatch({
      type:constans.CHANGE_INDEX_TAB,
      tabIndex:index
    })
  }
}

export const changePageLoading = (loading) => {
  return (dispatch) => {
    dispatch({
      type:constans.CHANGE_PAGE_LOADING,
      loading: loading
    })
  }
}