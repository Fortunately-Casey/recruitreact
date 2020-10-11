import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreaters } from "../../store";
import { withRouter } from "react-router-dom";
import { Modal } from "antd";
import {
  ChildManageWrapper,
  Card,
  ApplyCode,
  ApplyInfo,
  Identity,
  Address,
  AddressItem,
  ApplySchool,
  AddCard,
} from "./style";
class ChildManage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.jumpToDetail = this.jumpToDetail.bind(this);
  }
  componentDidMount() {
    this.props.getChildList();
  }
  returnAuditStatus(status) {
    console.log(status);
    if (status === 0) {
      return "未审核";
    } else if (status === 1) {
      return "通过";
    } else if (status === 2) {
      return "未通过";
    }
  }
  addChild() {
    this.props.history.push({
      pathname: "/patriarch/addChild",
    });
  }
  jumpToDetail(id) {
    this.props.history.push({
      pathname: "/patriarch/addChild",
      query: {
        id: id,
      },
    });
  }
  returnChildList() {
    let { childrenList, showDeleteModal } = this.props;
    let childs = [];
    childrenList.map((item) => {
      return childs.push(
        <Card
          key={item}
          onClick={(e) => {
            this.jumpToDetail(item.get("id"));
          }}
        >
          <ApplyCode>
            <div className="name">预报名码</div>
            <div className="code">
              {item.get("forecastCode")}
              {!item.get("forecastCode") ? (
                <i
                  className="iconfont"
                  onClick={(e) => {
                    // e.nativeEvent.stopImmediatePropagation();
                    showDeleteModal(true, item.get("id"));
                  }}
                >
                  &#xe750;
                </i>
              ) : null}
            </div>
          </ApplyCode>
          <ApplyInfo>
            <Identity>
              <div className="left">
                <div className="left-logo1"></div>
              </div>
              <div className="right">
                <div className="name">
                  {item.get("name")}
                  <div className="audit-status">
                    {this.returnAuditStatus(item.get("auditStatus"))}
                  </div>
                </div>
                <div className="idCard">{item.get("idCard")}</div>
              </div>
            </Identity>
            <Address>
              <AddressItem>
                <div className="name">户口所在地：</div>
                <div className="value">
                  {item.get("provincesName") +
                    item.get("cityName") +
                    item.get("areaName")}
                </div>
              </AddressItem>
              <AddressItem>
                <div className="name">现居住地址：</div>
                <div className="value">{item.get("smallCommunityName")}</div>
              </AddressItem>
            </Address>
          </ApplyInfo>
          <ApplySchool>
            <div className="name">预报名学校：</div>
            <div className="value">{item.get("schoolName")}</div>
          </ApplySchool>
        </Card>
      );
    });
    return childs;
  }
  render() {
    let { deleteInfo, isShowDelete, showDeleteModal, deleteID } = this.props;
    return (
      <ChildManageWrapper>
        {this.returnChildList()}
        <AddCard onClick={this.addChild.bind(this)}>
          <div className="add-icon"></div>
          <div className="add-text">添加子女</div>
        </AddCard>
        <Modal
          title="提交"
          visible={isShowDelete}
          onOk={() => {
            deleteInfo(deleteID);
          }}
          onCancel={() => {
            showDeleteModal(false, "");
          }}
        >
          <p>确认要删除该学生的信息吗？</p>
        </Modal>
      </ChildManageWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  childrenList: state.getIn(["patriarch", "childrenList"]),
  isShowDelete: state.getIn(["patriarch", "isShowDelete"]),
  deleteID: state.getIn(["patriarch", "deleteID"]),
});

const mapDispatchToProps = (dispatch) => ({
  getChildList() {
    dispatch(actionCreaters.getChildList());
  },
  deleteInfo(id) {
    dispatch(actionCreaters.deleteInfo(id));
  },
  showDeleteModal(isShow, deleteID) {
    dispatch(actionCreaters.showDeleteModal(isShow, deleteID));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ChildManage));
