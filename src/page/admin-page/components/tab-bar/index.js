import React, { PureComponent } from "react";
import { withRouter, Link } from "react-router-dom";
import { Tabbar, TabItem, AddButton } from "../../style";
import { connect } from "react-redux";
import { actionCreaters } from "../../store";

class TabBar extends PureComponent {
  componentDidMount() {
    let { history, setRouterIndex, setIsShowAdd } = this.props;
    history.listen((event) => {
      let text = event.pathname;
      if (text === "/adminPage/articleList") {
        setRouterIndex(1);
        setIsShowAdd(false);
      } else if (text === "/adminPage/schoolStatistics") {
        setRouterIndex(2);
        setIsShowAdd(false);
      } else if (text === "/adminPage/addArticle") {
        setRouterIndex(3);
        setIsShowAdd(true);
      }
    });
  }
  render() {
    const { routerIndex, isShowAdd } = this.props;
    return (
      <Tabbar>
        <Link to={"/adminPage/articleList"}>
          <TabItem className={routerIndex === 1 ? "chosed" : ""}>
            发文配置
          </TabItem>
        </Link>
        <Link to={"/adminPage/schoolStatistics"}>
          <TabItem className={routerIndex === 2 ? "chosed" : ""}>
            学校统计
          </TabItem>
        </Link>
        {isShowAdd ? (
          <TabItem className={routerIndex === 3 ? "chosed" : ""}>
            新增发文
          </TabItem>
        ) : null}
        {!isShowAdd ? (
          <Link to={"/adminPage/addArticle"}>
            <AddButton>新增发文</AddButton>
          </Link>
        ) : null}
      </Tabbar>
    );
  }
}

const mapStateToProps = (state) => ({
  routerIndex: state.getIn(["adminPage", "routerIndex"]),
  isShowAdd: state.getIn(["adminPage", "isShowAdd"]),
});

const mapDispatchToProps = (dispatch) => ({
  setRouterIndex(index) {
    dispatch(actionCreaters.setRouterIndex(index));
  },
  setIsShowAdd(isShow) {
    dispatch(actionCreaters.setIsShowAdd(isShow));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TabBar));
