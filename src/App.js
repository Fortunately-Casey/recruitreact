import React, { Component, Fragment } from "react";
import { GlobalStyle } from "./static/style/style.js";
import { Provider } from "react-redux";
import PageRouter from "./router";
import store from "./store";
import { Spin, ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

class App extends Component {
  state = {
    loading: false,
  };
  componentDidMount() {
    store.subscribe(() => {
      let storeState = store.getState();
      this.setState({
        loading: storeState.getIn(["news", "pageLoading"]),
      });
    });
  }
  render() {
    let { loading } = this.state;
    return (
      <Provider store={store}>
        <Fragment>
          <ConfigProvider locale={zhCN}>
            <GlobalStyle></GlobalStyle>
            <Spin spinning={loading}>
              <PageRouter></PageRouter>
            </Spin>
          </ConfigProvider>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
