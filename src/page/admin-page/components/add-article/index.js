import React, { PureComponent } from "react";
import { Input, message } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreaters } from "../../store";
import {
  AddArticleWrapper,
  AddBox,
  Header,
  Content,
  UrlInput,
  IconBox,
  UrlIcon,
  ConfirmButton,
  MessageBox,
  SuccessIcon,
  Title,
  Buttons,
  ErrorIcon,
} from "./style";
class AddArticle extends PureComponent {
  titleChange(event) {
    this.props.titleChange(event.target.value);
  }
  urlChange(event) {
    this.props.urlChange(event.target.value);
  }
  confirm() {
    if (!this.props.newsTitle || !this.props.url) {
      message.warning("新闻标题和新闻链接不能为空!");
      return;
    }
    this.props.confirmNews({
      title: this.props.newsTitle,
      titleUrl: this.props.url,
    });
  }
  goOnAdd() {
    this.props.titleChange("");
    this.props.urlChange("");
    this.props.showError(false);
    this.props.showSuccess(false);
    this.props.showAddBox(true);
  }
  goBack() {
    this.props.history.push({
      pathname: "/adminPage/articleList",
    });
  }
  render() {
    const {
      isShowSuccess,
      isShowError,
      isShowAddBox,
      newsTitle,
      url,
    } = this.props;
    return (
      <AddArticleWrapper>
        {isShowAddBox ? (
          <AddBox>
            <Header>新增文章及链接</Header>
            <Content>
              <div className="label">新闻标题</div>
              <Input
                style={{ width: "100%" }}
                value={newsTitle}
                onChange={this.titleChange.bind(this)}
              ></Input>
              <UrlInput>
                <IconBox>
                  <UrlIcon></UrlIcon>
                </IconBox>
                <Input
                  style={{ width: "100%", paddingLeft: "82px" }}
                  value={url}
                  onChange={this.urlChange.bind(this)}
                ></Input>
              </UrlInput>
            </Content>
            <ConfirmButton onClick={this.confirm.bind(this)}>
              提交
            </ConfirmButton>
          </AddBox>
        ) : null}
        {isShowSuccess ? (
          <MessageBox>
            <SuccessIcon></SuccessIcon>
            <Title>新增文章成功</Title>
            <Buttons>
              <div className="info" onClick={this.goOnAdd.bind(this)}>
                继续新增文章
              </div>
              <div className="back" onClick={this.goBack.bind(this)}>
                返回文章列表
              </div>
            </Buttons>
          </MessageBox>
        ) : null}
        {isShowError ? (
          <MessageBox>
            <ErrorIcon></ErrorIcon>
            <Title>添加文章失败</Title>
            <Buttons>
              <div className="info">重新加载</div>
              <div className="back" onClick={this.goBack.bind(this)}>
                返回文章列表
              </div>
            </Buttons>
          </MessageBox>
        ) : null}
      </AddArticleWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  isShowSuccess: state.getIn(["adminPage", "isShowSuccess"]),
  isShowError: state.getIn(["adminPage", "isShowError"]),
  isShowAddBox: state.getIn(["adminPage", "isShowAddBox"]),
  newsTitle: state.getIn(["adminPage", "newsTitle"]),
  url: state.getIn(["adminPage", "url"]),
});

const mapDispatchToProps = (dispatch) => ({
  titleChange(value) {
    dispatch(actionCreaters.titleChange(value));
  },
  urlChange(value) {
    dispatch(actionCreaters.urlChange(value));
  },
  confirmNews(params) {
    dispatch(actionCreaters.confirmNews(params));
  },
  showError(isShow) {
    dispatch(actionCreaters.showError(isShow));
  },
  showSuccess(isShow) {
    dispatch(actionCreaters.showSuccess(isShow));
  },
  showAddBox(isShow) {
    dispatch(actionCreaters.showAddBox(isShow));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddArticle));
