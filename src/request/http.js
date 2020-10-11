import axios from 'axios'
import {
  message
} from 'antd';
import {
  actionCreaters
} from "../page/news/store";
import store from '../store';
// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/education'
} else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = ''
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = ''
}
axios.defaults.timeout = 10000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data'

/* 添加一个计数器 */
let needLoadingRequestCount = 0

function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    store.dispatch(actionCreaters.changePageLoading(true))
  }
  needLoadingRequestCount++
}

function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    store.dispatch(actionCreaters.changePageLoading(false))
  }
}

// 请求拦截器
axios.interceptors.request.use(
  config => {
    showFullScreenLoading()
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = window.localStorage.getItem("token");
    token && (config.headers.token = token)
    return config
  },
  error => {
    tryHideFullScreenLoading()
    return Promise.error(error)
  })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.errorCode === "03009") {
      // message.warning('身份验证过期!', 3, () => {
        
      // });
      window.location.href = `${window.location.origin}/login`
      return;
    }
    if (!response.data.success) {
      message.warning(response.data.message)
    }
    tryHideFullScreenLoading()
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是200的情况
  error => {
    tryHideFullScreenLoading()
    // if (error.response.status) { 
    //   switch (error.response.status) {
    //     // 401: 未登录
    //     // 未登录则跳转登录页面，并携带当前页面的路径
    //     // 在登录成功后返回当前页面，这一步需要在登录页操作。
    //     case 401:
    //       router.replace({
    //         path: '/login',
    //         query: { redirect: router.currentRoute.fullPath }
    //       })
    //       break
    //     // 403 token过期
    //     // 登录过期对用户进行提示
    //     // 清除本地token和清空vuex中token对象
    //     // 跳转登录页面
    //     case 403:
    //       Toast({
    //         message: '登录过期，请重新登录',
    //         duration: 1000,
    //         forbidClick: true
    //       })
    //       // 清除token
    //       localStorage.removeItem('token')
    //       store.commit('loginSuccess', null)
    //       // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
    //       setTimeout(() => {
    //         router.replace({
    //           path: '/login',
    //           query: {
    //             redirect: router.currentRoute.fullPath
    //           }
    //         })
    //       }, 1000)
    //       break
    //     // 404请求不存在
    //     case 404:
    //       Toast({
    //         message: '网络请求不存在',
    //         duration: 1500,
    //         forbidClick: true
    //       })
    //       break
    //     // 其他错误，直接抛出错误提示
    //     default:
    //       Toast({
    //         message: error.response.data.message,
    //         duration: 1500,
    //         forbidClick: true
    //       })
    //   }
    //   return Promise.reject(error.response)
    // }
  }
)

let http = {}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
http.get = function (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
http.post = function (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

/**
 * delete方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
http.delete = function (url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

export default http;

