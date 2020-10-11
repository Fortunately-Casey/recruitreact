import React, { PureComponent } from "react";
import { Form, Button, Input, Table, Space, Modal } from "antd";
import { ArticleListWrapper, SearchTab, List } from "./style";
import { connect } from "react-redux";
import { actionCreaters } from "../../store";
class ArticleList extends PureComponent {
  formRef = React.createRef();
  formRef2 = React.createRef();
  componentDidMount() {
    const { pageSize } = this.props;
    this.props.getNewsList("", 1, pageSize);
  }
  //查询
  onFinish(value) {
    const { pageSize } = this.props;
    if (value.title) {
      this.props.getNewsList(value.title, 1, pageSize);
    }
  }
  //重置
  reset() {
    const { pageSize } = this.props;
    if (this.formRef.current) {
      this.formRef.current.resetFields();
      this.props.getNewsList("", 1, pageSize);
    }
  }
  //分页变化
  tableChange(page) {
    const { pageSize, searchTitle } = this.props;
    this.props.getNewsList(searchTitle, page.current, pageSize);
  }
  //修改
  onFinish1(value) {
    const { pageSize } = this.props;
    this.props.confirmEdit(
      {
        id: this.props.editID,
        title: value.title,
        titleUrl: value.url,
      },
      pageSize
    );
  }
  closeModal() {
    this.props.toggleModal(false);
  }
  editNews(editID, props, formRef2) {
    if (formRef2.current) {
      formRef2.current.resetFields();
    }
    props.setEditID(editID);
    props.toggleModal(true);
  }
  render() {
    const {
      current,
      pageSize,
      total,
      newsList,
      showDelete,
      isShowDeleteModal,
      confirmLoading,
      deleteNews,
      deleteID,
      isShowEditInfo,
    } = this.props;
    const columns = [
      {
        title: "序号",
        dataIndex: "rowNumber",
        key: "rowNumber",
        align: "center",
      },
      {
        title: "文章标题",
        dataIndex: "title",
        key: "title",
        align: "center",
      },
      {
        title: "文章链接",
        dataIndex: "titleUrl",
        key: "titleUrl",
        align: "center",
      },
      {
        title: "发布时间",
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
                this.editNews(record.id, this.props, this.formRef2);
              }}
            >
              编辑
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => {
                showDelete(record.id, true);
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
      <ArticleListWrapper>
        <SearchTab>
          <Form
            layout="inline"
            ref={this.formRef}
            onFinish={this.onFinish.bind(this)}
          >
            <Form.Item label="标题" name="title">
              <Input placeholder="输入标题" allowClear></Input>
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
            dataSource={newsList.toJS()}
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
          title="删除新闻"
          visible={isShowDeleteModal}
          onOk={() => {
            deleteNews(deleteID, pageSize);
          }}
          confirmLoading={confirmLoading}
          onCancel={() => {
            showDelete("", false);
          }}
        >
          <p>确认要删除该条新闻数据吗</p>
        </Modal>
        <Modal
          title="新闻信息修改"
          visible={isShowEditInfo}
          footer={null}
          onCancel={this.closeModal.bind(this)}
        >
          <Form
            {...layout}
            ref={this.formRef2}
            onFinish={this.onFinish1.bind(this)}
          >
            <Form.Item
              label="新闻标题"
              name="title"
              rules={[
                {
                  required: true,
                  message: "请输入要修改的新闻标题",
                },
              ]}
            >
              <Input placeholder="输入标题" allowClear></Input>
            </Form.Item>
            <Form.Item
              label="新闻链接"
              name="url"
              rules={[
                {
                  required: true,
                  message: "请输入要修改的新闻链接",
                },
              ]}
            >
              <Input placeholder="输入链接" allowClear></Input>
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
      </ArticleListWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  current: state.getIn(["adminPage", "current"]),
  pageSize: state.getIn(["adminPage", "pageSize"]),
  total: state.getIn(["adminPage", "total"]),
  newsList: state.getIn(["adminPage", "newsList"]),
  searchTitle: state.getIn(["adminPage", "searchTitle"]),
  isShowDeleteModal: state.getIn(["adminPage", "isShowDeleteModal"]),
  deleteID: state.getIn(["adminPage", "deleteID"]),
  confirmLoading: state.getIn(["adminPage", "confirmLoading"]),
  isShowEditInfo: state.getIn(["adminPage", "isShowEditInfo"]),
  editID: state.getIn(["adminPage", "editID"]),
});
const mapDispatchToProps = (dispatch) => ({
  getNewsList(title, page, pageSize) {
    dispatch(actionCreaters.getNewsList(title, page, pageSize));
  },
  showDelete(deleteID, isShow) {
    dispatch(actionCreaters.showDelete(deleteID, isShow));
  },
  deleteNews(deleteID, pageSize) {
    dispatch(actionCreaters.deleteNews(deleteID, pageSize));
  },
  toggleModal(isShow) {
    dispatch(actionCreaters.toggleModal(isShow));
  },
  setEditID(id) {
    dispatch(actionCreaters.setEditID(id));
  },
  confirmEdit(params, pageSize) {
    dispatch(actionCreaters.confirmEdit(params, pageSize));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
