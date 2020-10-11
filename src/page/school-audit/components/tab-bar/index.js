import React, { PureComponent } from "react";
import { TabBarWrapper, TabItem, AddItem } from "../../style";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreaters } from "../../store";
import { CloseOutlined } from "@ant-design/icons";
class TabBar extends PureComponent {
  componentDidMount() {
    let { history, setRouterIndex, setIsShowAudit } = this.props;
    history.listen((event) => {
      let text = event.pathname;
      if (text === "/schoolAudit/auditList") {
        setRouterIndex(1);
        setIsShowAudit(false);
      } else if (text === "/schoolAudit/savedList") {
        setRouterIndex(2);
        setIsShowAudit(false);
      } else if (text === "/schoolAudit/auditChild") {
        setRouterIndex(3);
        setIsShowAudit(true);
      }
    });
  }
  closeStudentInfo() {
    this.props.history.push({
      pathname: "/schoolAudit/auditList",
    });
  }
  toAuditList() {
    this.props.history.push({
      pathname: "/schoolAudit/auditList",
    });
  }
  toSavedList() {
    this.props.history.push({
      pathname: "/schoolAudit/savedList",
    });
  }
  render() {
    const { routerIndex, isShowAudit } = this.props;
    return (
      <TabBarWrapper>
        <TabItem
          className={routerIndex === 1 ? "chosed" : ""}
          onClick={this.toAuditList.bind(this)}
        >
          已审核
        </TabItem>
        <TabItem
          className={routerIndex === 2 ? "chosed" : ""}
          onClick={this.toSavedList.bind(this)}
        >
          未审核
        </TabItem>
        {isShowAudit ? (
          <AddItem>
            学生信息
            <CloseOutlined
              style={{ color: "red" }}
              onClick={this.closeStudentInfo.bind(this)}
            />
          </AddItem>
        ) : null}
      </TabBarWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  routerIndex: state.getIn(["schoolAudit", "routerIndex"]),
  isShowAudit: state.getIn(["schoolAudit", "isShowAudit"]),
});

const mapDispatchToProps = (dispatch) => ({
  setRouterIndex(index) {
    dispatch(actionCreaters.setRouterIndex(index));
  },
  setIsShowAudit(isShow) {
    dispatch(actionCreaters.setIsShowAudit(isShow));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TabBar));
