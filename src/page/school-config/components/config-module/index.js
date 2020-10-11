import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import {
  DatePicker,
  Button,
  InputNumber,
  Input,
  Table,
  Space,
  message,
  Modal,
  Form,
  Select,
} from "antd";
import { ConfigModuleWrapper, Main, Left, Right, Bottom } from "./style";
import { actionCreaters } from "../../store";
import moment from "moment";
class ConfigModule extends PureComponent {
  formRef = React.createRef();
  componentDidMount() {
    //获取所有配置
    this.props.getConfig();
    //获取街道信息
    this.props.getStreetList();
    // 获取界限信息
    this.props.getBoundaryList();
  }
  //出生日期范围
  birthdayChange(moment, dateStrings) {
    this.props.setBirthday(dateStrings);
  }
  //报名开始结束日期
  schoolTimeChange(moment, dateStrings) {
    this.props.setSchoolTime(dateStrings);
  }
  //提交日期配置
  commitDateConfig() {
    if (!this.props.birthdayLimitStartDate) {
      message.warning("请选择出生年月日");
      return;
    }
    if (!this.props.enterSchoolBeginDate) {
      message.warning("请选择报名时间");
      return;
    }
    let params = {
      birthdayLimitStartDate: this.props.birthdayLimitStartDate,
      birthdayLimitEndDate: this.props.birthdayLimitEndDate,
      enterSchoolBeginDate: this.props.enterSchoolBeginDate,
      enterSchoolEndDate: this.props.enterSchoolEndDate,
    };
    this.props.commitDate(params);
  }
  //排序
  sortChange(e) {
    this.props.setSort(e);
  }
  //等级
  levelChange(e) {
    this.props.setLevel(e.target.value);
  }
  //新增等级
  addLevel() {
    if (!this.props.sort || !this.props.level) {
      message.warning("请输入等级名称以及对应的等级！");
      return;
    }
    this.props.addLevel({
      level: this.props.level,
      sort: Number(this.props.sort),
    });
  }
  //删除等级
  deleteLevel(id) {
    this.props.deleteLevel(id);
  }
  //新增小区
  addRelation() {
    this.props.toggleIsShow(true);
    if (this.formRef.current) {
      this.formRef.current.resetFields();
    }
  }
  streetChange(id) {
    this.props.getCommunityList(id);
  }
  onFinish(value) {
    this.props.commitAdd({
      boundaryID: value.boundaryID,
      communityID: value.communityID,
      smallCommunityName: value.smallCommunityName,
    });
  }
  //等级列表
  returnLevels(list) {
    let levels = [];
    list.map((item) => {
      return levels.push(
        <div className="level-item" key={item.get("id")}>
          {item.get("level")}
          <CloseOutlined
            className="delete-icon"
            onClick={() => {
              this.deleteLevel(item.get("id"));
            }}
          />
        </div>
      );
    });
    return levels;
  }
  //街道下拉项
  returnStreetList(list) {
    const { Option } = Select;
    let options = [];
    list.map((item) => {
      return options.push(
        <Option value={item.get("streetID")} key={item.get("streetName")}>
          {item.get("streetName")}
        </Option>
      );
    });
    return options;
  }
  //街道下拉项
  returnBoundaryList(list) {
    const { Option } = Select;
    let options = [];
    list.map((item) => {
      return options.push(
        <Option value={item.get("id")} key={item.get("id")}>
          {item.get("name")}
        </Option>
      );
    });
    return options;
  }
  //街道下拉项
  returnCommunityList(list) {
    const { Option } = Select;
    let options = [];
    list.map((item) => {
      return options.push(
        <Option value={item.get("id")} key={item.get("id")}>
          {item.get("name")}
        </Option>
      );
    });
    return options;
  }
  render() {
    const { RangePicker } = DatePicker;
    const {
      birthdayLimitStartDate,
      birthdayLimitEndDate,
      enterSchoolBeginDate,
      enterSchoolEndDate,
      levelConfigs,
      communityInformation,
      sort,
      level,
      isShowAdd,
      toggleIsShow,
      streetList,
      boundaryList,
      communityList,
      toggleDelete,
      isShowDelete,
      deleteID,
      deleteCommunity,
    } = this.props;
    const dateFormat = "YYYY-MM-DD";
    const columns = [
      {
        title: "街道",
        dataIndex: "streetName",
        key: "streetName",
        align: "center",
      },
      {
        title: "社区",
        dataIndex: "communityName",
        key: "communityName",
        align: "center",
      },
      {
        title: "学区",
        dataIndex: "boundaryName",
        key: "boundaryName",
        align: "center",
      },
      {
        title: "小区",
        dataIndex: "smallCommunityName",
        key: "smallCommunityName",
        align: "center",
      },
      {
        title: "操作",
        key: "option",
        align: "center",
        render: (text, record) => (
          <Space size="middle">
            <Button
              type="primary"
              danger
              onClick={() => {
                toggleDelete(true, record.smallCommunityID);
              }}
            >
              删除
            </Button>
          </Space>
        ),
      },
    ];
    const layout = {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    return (
      <ConfigModuleWrapper>
        <Main>
          <Left>
            <div className="birthday-config">
              <div className="header">报名出生年月配置</div>
              <div className="date">
                <div className="label">选择时间段</div>
                <RangePicker
                  value={[
                    birthdayLimitStartDate
                      ? moment(birthdayLimitStartDate, dateFormat)
                      : null,
                    birthdayLimitEndDate
                      ? moment(birthdayLimitEndDate, dateFormat)
                      : null,
                  ]}
                  onChange={this.birthdayChange.bind(this)}
                />
                <Button
                  type="primary"
                  style={{ marginLeft: "20px" }}
                  onClick={this.commitDateConfig.bind(this)}
                >
                  提交
                </Button>
              </div>
            </div>
            <div className="start-time">
              <div className="header">报名开始时间配置</div>
              <div className="date">
                <div className="label">选择时间段</div>
                <RangePicker
                  value={[
                    enterSchoolBeginDate
                      ? moment(enterSchoolBeginDate, dateFormat)
                      : null,
                    enterSchoolEndDate
                      ? moment(enterSchoolEndDate, dateFormat)
                      : null,
                  ]}
                  onChange={this.schoolTimeChange.bind(this)}
                />
                <Button
                  type="primary"
                  style={{ marginLeft: "20px" }}
                  onClick={this.commitDateConfig.bind(this)}
                >
                  提交
                </Button>
              </div>
            </div>
            <div className="level-config">
              <div className="header">面谈等级配置</div>
              <div className="levels">
                <div className="label">输入等级</div>
                <InputNumber
                  min={1}
                  max={100000}
                  placeholder="排序"
                  value={sort}
                  onChange={this.sortChange.bind(this)}
                />
                <div className="add-input">
                  <Input
                    placeholder="等级名称"
                    value={level}
                    onChange={this.levelChange.bind(this)}
                  />
                  <div className="add" onClick={this.addLevel.bind(this)}>
                    添加
                  </div>
                </div>
                <div className="level-list">
                  {this.returnLevels(levelConfigs)}
                </div>
              </div>
            </div>
          </Left>
          <Right>
            <div className="relation-config">
              <div className="header">小区学校对应关系配置</div>
              <div className="relation">
                <div className="add">
                  <Button type="primary" onClick={this.addRelation.bind(this)}>
                    新增
                  </Button>
                </div>
                <div className="list">
                  <Table
                    columns={columns}
                    dataSource={communityInformation.toJS()}
                    pagination={false}
                  ></Table>
                </div>
              </div>
            </div>
          </Right>
        </Main>
        <Bottom></Bottom>
        <Modal
          title="新增小区"
          visible={isShowAdd}
          footer={null}
          onCancel={() => {
            toggleIsShow(false);
          }}
        >
          <Form
            {...layout}
            ref={this.formRef}
            onFinish={this.onFinish.bind(this)}
          >
            <Form.Item
              label="学区"
              name="boundaryID"
              rules={[
                {
                  required: true,
                  message: "请选择学区",
                },
              ]}
            >
              <Select placeholder="选择学区" allowClear>
                {this.returnBoundaryList(boundaryList)}
              </Select>
            </Form.Item>
            <Form.Item
              label="街道"
              name="streetID"
              rules={[
                {
                  required: true,
                  message: "请选择街道",
                },
              ]}
            >
              <Select
                placeholder="选择街道"
                onChange={this.streetChange.bind(this)}
                allowClear
              >
                {this.returnStreetList(streetList)}
              </Select>
            </Form.Item>
            <Form.Item
              label="社区"
              name="communityID"
              rules={[
                {
                  required: true,
                  message: "请选择社区",
                },
              ]}
            >
              <Select placeholder="选择社区" allowClear>
                {this.returnCommunityList(communityList)}
              </Select>
            </Form.Item>
            <Form.Item
              label="小区"
              name="smallCommunityName"
              rules={[
                {
                  required: true,
                  message: "请输入小区",
                },
              ]}
            >
              <Input placeholder="输入小区" allowClear></Input>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button
                style={{ marginRight: "10px" }}
                onClick={() => {
                  toggleIsShow(false);
                }}
              >
                取消
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: "10px" }}
              >
                提交
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Modal
          title="删除小区"
          visible={isShowDelete}
          onOk={() => {
            deleteCommunity(deleteID);
          }}
          onCancel={() => {
            toggleDelete(false, "");
          }}
        >
          <p>确认要删除当前小区配置吗？</p>
        </Modal>
      </ConfigModuleWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  birthdayLimitStartDate: state.getIn([
    "schoolConfig",
    "birthdayLimitStartDate",
  ]),
  birthdayLimitEndDate: state.getIn(["schoolConfig", "birthdayLimitEndDate"]),
  enterSchoolBeginDate: state.getIn(["schoolConfig", "enterSchoolBeginDate"]),
  enterSchoolEndDate: state.getIn(["schoolConfig", "enterSchoolEndDate"]),
  levelConfigs: state.getIn(["schoolConfig", "levelConfigs"]),
  communityInformation: state.getIn(["schoolConfig", "communityInformation"]),
  sort: state.getIn(["schoolConfig", "sort"]),
  level: state.getIn(["schoolConfig", "level"]),
  isShowAdd: state.getIn(["schoolConfig", "isShowAdd"]),
  streetList: state.getIn(["schoolConfig", "streetList"]),
  boundaryList: state.getIn(["schoolConfig", "boundaryList"]),
  communityList: state.getIn(["schoolConfig", "communityList"]),
  isShowDelete: state.getIn(["schoolConfig", "isShowDelete"]),
  deleteID: state.getIn(["schoolConfig", "deleteID"]),
});

const mapDispatchToProps = (dispatch) => ({
  getConfig() {
    dispatch(actionCreaters.getConfig());
  },
  setBirthday(value) {
    dispatch(actionCreaters.setBirthday(value));
  },
  setSchoolTime(value) {
    dispatch(actionCreaters.setSchoolTime(value));
  },
  commitDate(params) {
    dispatch(actionCreaters.commitDate(params));
  },
  setSort(value) {
    dispatch(actionCreaters.setSort(value));
  },
  setLevel(value) {
    dispatch(actionCreaters.setLevel(value));
  },
  addLevel(params) {
    dispatch(actionCreaters.addLevel(params));
  },
  deleteLevel(id) {
    dispatch(actionCreaters.deleteLevel(id));
  },
  toggleIsShow(isShow) {
    dispatch(actionCreaters.toggleIsShow(isShow));
  },
  getStreetList() {
    dispatch(actionCreaters.getStreetList());
  },
  getBoundaryList() {
    dispatch(actionCreaters.getBoundaryList());
  },
  getCommunityList(id) {
    dispatch(actionCreaters.getCommunityList(id));
  },
  commitAdd(params) {
    dispatch(actionCreaters.commitAdd(params));
  },
  toggleDelete(isShow, deleteID) {
    dispatch(actionCreaters.toggleDelete(isShow, deleteID));
  },
  deleteCommunity(id) {
    dispatch(actionCreaters.deleteCommunity(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ConfigModule));
