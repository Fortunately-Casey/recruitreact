import React, { PureComponent, Fragment } from "react";
import HeaderWapper from "../../common/header";
import { connect } from "react-redux";
import { actionCreaters } from "./store";
import { withRouter } from "react-router-dom";
import {
  IndexWrapper,
  Content,
  ContentLeft,
  Reminder,
  ReminderTitle,
  SchoolTitle,
  MessageList,
  Message,
  SchoolList,
  ListHeader,
  List,
  ContentRight,
  RightItem,
} from "./style";

class News extends PureComponent {
  componentDidMount() {
    this.props.getNews();
  }
  getNewsList() {
    const { newslist } = this.props;
    let news = [];
    newslist.map((item) => {
      return news.push(
        <Message
          key={item.get("rowNumber")}
          onClick={() => {
            this.toNews(item.get("titleUrl"));
          }}
        >
          <div className="voice"></div>
          {item.get("title")}
        </Message>
      );
    });
    return news;
  }
  SchoolList() {
    const pageList = [];
    for (let i = 0; i <= 6; i++) {
      pageList.push(
        <div className={i % 2 === 0 ? "item" : "highlight item"} key={i}>
          <div className="school-name">南通市竹行中学</div>
          <div className="school-address">南通市开发区新开南路188号</div>
          <div className="school-phone">81581585</div>
          <div className="school-service">周一至周五 8:00 - 18:00</div>
        </div>
      );
    }
    return pageList;
  }
  goToLogin() {
    window.open(`${window.location.origin}/login`);
  }
  toUserManual() {
    window.open(`${window.location.origin}/userManual`);
  }
  getTabModule() {
    const { chosedTab } = this.props;
    if (chosedTab === 0) {
      return (
        <Fragment>
          <ReminderTitle></ReminderTitle>
          <MessageList>{this.getNewsList()}</MessageList>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <SchoolTitle></SchoolTitle>
          <SchoolList>
            <ListHeader>
              <div className="school-name">学校名称</div>
              <div className="school-address">学校地址</div>
              <div className="school-phone">咨询电话</div>
              <div className="school-service">服务时间</div>
            </ListHeader>
            <List>{this.SchoolList()}</List>
          </SchoolList>
        </Fragment>
      );
    }
  }
  toNews(url) {
    window.open(url);
  }
  render() {
    return (
      <IndexWrapper>
        <HeaderWapper></HeaderWapper>
        <Content>
          <ContentLeft>
            <Reminder>{this.getTabModule()}</Reminder>
          </ContentLeft>
          <ContentRight>
            <RightItem
              index={0}
              chosedIndex={this.props.chosedTab}
              onClick={() => {
                this.props.choseTab(0);
              }}
            >
              <div className="title1"></div>
              <div className="logo5"></div>
            </RightItem>
            <RightItem
              index={2}
              chosedIndex={this.props.chosedTab}
              onClick={this.goToLogin.bind(this)}
            >
              <div className="title3"></div>
              <div className="logo2"></div>
            </RightItem>
            <RightItem
              index={1}
              chosedIndex={this.props.chosedTab}
              onClick={() => {
                this.props.choseTab(1);
              }}
            >
              <div className="title4"></div>
              <div className="logo3"></div>
            </RightItem>
            <RightItem
              index={3}
              chosedIndex={this.props.chosedTab}
              onClick={this.toUserManual.bind(this)}
            >
              <div className="title5"></div>
              <div className="logo4"></div>
            </RightItem>
          </ContentRight>
        </Content>
      </IndexWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  chosedTab: state.getIn(["news", "chosedTab"]),
  newslist: state.getIn(["news", "newsList"]),
});

const mapDispatchToProps = (dispatch) => ({
  getNews() {
    dispatch(actionCreaters.getNews());
  },
  choseTab(index) {
    dispatch(actionCreaters.changeIndexTab(index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(News));
