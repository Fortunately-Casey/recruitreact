import React, { PureComponent, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Tabbar, TabItem, OutputButton } from "../../style";
import { connect } from "react-redux";
import { actionCreaters } from "../../store";

class TabBar extends PureComponent {
  componentDidMount() {
    let { history, setRouterIndex, setIsShowConfig } = this.props;
    let schoolCode = window.localStorage.getItem("schoolCode");
    if (schoolCode === "04") {
      setIsShowConfig(false);
    } else {
      setIsShowConfig(true);
    }
    history.listen((event) => {
      let text = event.pathname;
      if (text === "/schoolConfig/configModule") {
        setRouterIndex(1);
      } else {
        setRouterIndex(2);
      }
    });
  }
  toConfigModule() {
    this.props.history.push({
      pathname: "/schoolConfig/configModule",
    });
  }
  toAccountConfig() {
    this.props.history.push({
      pathname: "/schoolConfig/accountConfig",
    });
  }
  render() {
    const { routerIndex, isShowConfig, exportExcel } = this.props;
    return (
      <Tabbar>
        <TabItem
          className={routerIndex === 1 ? "chosed" : ""}
          onClick={this.toConfigModule.bind(this)}
        >
          学校配置
        </TabItem>
        {isShowConfig ? (
          <Fragment>
            <TabItem
              className={routerIndex === 2 ? "chosed" : ""}
              onClick={this.toAccountConfig.bind(this)}
            >
              账号管理
            </TabItem>
            <OutputButton onClick={exportExcel}>导出摸底情况</OutputButton>
          </Fragment>
        ) : null}
      </Tabbar>
    );
  }
}
const mapStateToProps = (state) => ({
  routerIndex: state.getIn(["schoolConfig", "routerIndex"]),
  isShowConfig: state.getIn(["schoolConfig", "isShowConfig"]),
});

const mapDispatchToProps = (dispatch) => ({
  setRouterIndex(index) {
    dispatch(actionCreaters.setRouterIndex(index));
  },
  setIsShowConfig(isShow) {
    dispatch(actionCreaters.setIsShowConfig(isShow));
  },
  exportExcel() {
    dispatch(actionCreaters.exportExcel());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TabBar));
