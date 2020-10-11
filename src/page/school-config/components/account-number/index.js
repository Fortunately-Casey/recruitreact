import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Table, Space, Modal } from "antd";
import { AccountNumberWrapper, SearchTab, List } from "./style";
import { connect } from "react-redux";
import { actionCreaters } from "../../store";

class AccountNumber extends PureComponent {
  formRef = React.createRef();
  formRef2 = React.createRef();
  componentDidMount() {
    const { pageSize } = this.props;
    this.props.getUserList("", 1, pageSize);
  }
  //查询
  onFinish(value) {
    console.log(value);
    const { pageSize } = this.props;
    let adminUser = value.adminUser ? value.adminUser : "";
    this.props.getUserList(adminUser, 1, pageSize);
  }
  //重置
  reset() {
    if (this.formRef.current) {
      this.formRef.current.resetFields();
      const { pageSize } = this.props;
      this.props.getUserList("", 1, pageSize);
    }
  }
  //分页事件
  tableChange(page) {
    const { adminUser, pageSize } = this.props;
    this.props.getUserList(adminUser, page.current, pageSize);
  }
  //修改密码
  onFinish1(value) {
    this.props.commitEditPassword(
      {
        adminUserID: this.props.editID,
        password: value.password,
        confirmPassword: value.confirmPassword,
      },
      this.props.pageSize
    );
    if (this.formRef2.current) {
      this.formRef2.current.resetFields();
    }
  }
  //关闭弹窗清空密码
  closeModal() {
    if (this.formRef2.current) {
      this.formRef2.current.resetFields();
    }
    this.props.showPassword("", false);
  }
  render() {
    const {
      userList,
      pageSize,
      total,
      isShowPassword,
      showPassword,
      current,
      confirmLoading,
    } = this.props;
    const columns = [
      {
        title: "序号",
        dataIndex: "rowNumber",
        key: "rowNumber",
        align: "center",
      },
      {
        title: "用户名",
        dataIndex: "adminUserID",
        key: "adminUserID",
        align: "center",
      },
      {
        title: "创建时间",
        dataIndex: "createTime",
        key: "createTime",
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
              onClick={() => {
                showPassword(record.adminUserID, true);
              }}
            >
              修改密码
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
      <AccountNumberWrapper>
        <SearchTab>
          <Form
            layout="inline"
            ref={this.formRef}
            onFinish={this.onFinish.bind(this)}
          >
            <Form.Item label="小区" name="adminUser">
              <Input placeholder="输入用户名" allowClear></Input>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
            </Form.Item>
            <Form.Item>
              <Button onClick={this.reset.bind(this)}>重置</Button>
            </Form.Item>
          </Form>
        </SearchTab>
        <List>
          <Table
            columns={columns}
            dataSource={userList.toJS()}
            pagination={{
              position: ["bottomCenter"],
              pageSize: pageSize,
              total: total,
              current: current,
            }}
            onChange={this.tableChange.bind(this)}
          ></Table>
        </List>
        <Modal
          title="修改密码"
          visible={isShowPassword}
          footer={null}
          onCancel={this.closeModal.bind(this)}
        >
          <Form
            {...layout}
            ref={this.formRef2}
            onFinish={this.onFinish1.bind(this)}
          >
            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入要修改的密码",
                },
              ]}
            >
              <Input placeholder="输入密码" allowClear></Input>
            </Form.Item>
            <Form.Item
              label="确认"
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "请确认密码",
                },
              ]}
            >
              <Input placeholder="确认密码" allowClear></Input>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button
                style={{ marginRight: "10px" }}
                onClick={this.closeModal.bind(this)}
              >
                取消
              </Button>
              <Button
                loading={confirmLoading}
                type="primary"
                htmlType="submit"
                style={{ marginRight: "10px" }}
              >
                提交
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </AccountNumberWrapper>
    );
  }
}

const mapStateToProp = (state) => ({
  userList: state.getIn(["schoolConfig", "userList"]),
  adminUser: state.getIn(["schoolConfig", "adminUser"]),
  total: state.getIn(["schoolConfig", "total"]),
  pageSize: state.getIn(["schoolConfig", "pageSize"]),
  isShowPassword: state.getIn(["schoolConfig", "isShowPassword"]),
  editID: state.getIn(["schoolConfig", "editID"]),
  current: state.getIn(["schoolConfig", "current"]),
  confirmLoading: state.getIn(["schoolConfig", "confirmLoading"]),
});

const mapDispatchToProps = (dispatch) => ({
  getUserList(name, page, pageSize) {
    dispatch(actionCreaters.getUserList(name, page, pageSize));
  },
  showPassword(id, isShow) {
    dispatch(actionCreaters.showPassword(id, isShow));
  },
  commitEditPassword(params, pageSize) {
    dispatch(actionCreaters.commitEditPassword(params, pageSize));
  },
});

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(withRouter(AccountNumber));
