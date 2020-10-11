import React, { PureComponent } from "react";
import { Form, Button, Input, Table, Space } from "antd";
import { AuditListWrapper, SearchTab, List } from "./style";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreaters } from "../../store";
class SavedList extends PureComponent {
  formRef = React.createRef();
  componentDidMount() {
    const { pageSize } = this.props;
    this.props.getAuditList({
      name: "",
      idCard: "",
      linkPhone: "",
      commitStatus: 1,
      auditStatus: 1,
      currPage: 1,
      pageSize: pageSize,
    });
  }
  onFinish(value) {
    const { pageSize } = this.props;
    this.props.getAuditList({
      name: value.name,
      idCard: value.idCard,
      linkPhone: value.linkPhone,
      commitStatus: 1,
      auditStatus: 1,
      currPage: 1,
      pageSize: pageSize,
    });
  }
  tableChange(page) {
    const { name, idCard, linkPhone, pageSize } = this.props;
    this.props.getAuditList({
      name: name,
      idCard: idCard,
      linkPhone: linkPhone,
      commitStatus: 1,
      auditStatus: 1,
      currPage: page.current,
      pageSize: pageSize,
    });
  }
  reset() {
    const { pageSize } = this.props;
    if (this.formRef.current) {
      this.formRef.current.resetFields();
      this.props.getAuditList({
        name: "",
        idCard: "",
        linkPhone: "",
        commitStatus: 1,
        auditStatus: 1,
        currPage: 1,
        pageSize: pageSize,
      });
    }
  }
  jumpToDetail(id, props) {
    props.history.push({
      pathname: "/schoolAudit/auditChild",
      query: {
        id,
      },
    });
  }
  render() {
    const { saveList, totalCount, pageSize, current } = this.props;
    const columns = [
      {
        title: "序号",
        dataIndex: "rowNumber",
        key: "rowNumber",
        align: "center",
      },
      {
        title: "学生姓名",
        dataIndex: "name",
        key: "name",
        align: "center",
      },
      {
        title: "出生年月",
        dataIndex: "birthday",
        key: "birthday",
        align: "center",
      },
      {
        title: "身份证号",
        dataIndex: "idCard",
        key: "idCard",
        align: "center",
      },
      {
        title: "户口所在地",
        dataIndex: "permanentAddress",
        key: "permanentAddress",
        align: "center",
        render: (text, record) => (
          <div>{record.provincesName + record.cityName + record.areaName}</div>
        ),
      },
      {
        title: "现居住小区",
        dataIndex: "smallCommunityName",
        key: "smallCommunityName",
        align: "center",
      },
      {
        title: "预报名学校",
        dataIndex: "schoolName",
        key: "schoolName",
        align: "center",
      },
      {
        title: "是否有房产",
        dataIndex: "hasHouse",
        key: "hasHouse",
        align: "center",
        render: (text, record) => <div>{record.property ? "是" : "否"}</div>,
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
                this.jumpToDetail(record.id, this.props);
              }}
            >
              详情
            </Button>
          </Space>
        ),
      },
    ];
    return (
      <AuditListWrapper>
        <SearchTab>
          <Form
            layout="inline"
            ref={this.formRef}
            onFinish={this.onFinish.bind(this)}
          >
            <Form.Item name="name">
              <Input placeholder="学生姓名" allowClear></Input>
            </Form.Item>
            <Form.Item name="idCard">
              <Input placeholder="身份证号" allowClear></Input>
            </Form.Item>
            <Form.Item name="linkPhone">
              <Input placeholder="联系电话" allowClear></Input>
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
            dataSource={saveList.toJS()}
            pagination={{
              position: ["bottomCenter"],
              pageSize: pageSize,
              total: totalCount,
              current: current,
            }}
            onChange={this.tableChange.bind(this)}
          ></Table>
        </List>
      </AuditListWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  saveList: state.getIn(["schoolAudit", "saveList"]),
  totalCount: state.getIn(["schoolAudit", "totalCount"]),
  pageSize: state.getIn(["schoolAudit", "pageSize"]),
  current: state.getIn(["schoolAudit", "current"]),
  name: state.getIn(["schoolAudit", "name"]),
  idCard: state.getIn(["schoolAudit", "idCard"]),
  linkPhone: state.getIn(["schoolAudit", "linkPhone"]),
});

const mapDispatchToProps = (dispatch) => ({
  getAuditList(params) {
    dispatch(actionCreaters.getAuditList(params));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SavedList));
