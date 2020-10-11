import React, { PureComponent } from "react";
import HeaderWapper from "../../common/header";
import UserInfo from "../../common/user-info";
import TabBar from "./components/tab-bar";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { AdminPageWrapper, Top, Content } from "./style";
import ArticleList from "./components/article-list";
import SchoolStatistic from "./components/school-statistic";
import AddArticle from "./components/add-article";
class AdminPage extends PureComponent {
  render() {
    return (
      <AdminPageWrapper>
        <Top>
          <HeaderWapper></HeaderWapper>
          <UserInfo></UserInfo>
        </Top>
        <Content>
          <BrowserRouter>
            <TabBar></TabBar>
            <Route
              exact
              path="/adminPage/articleList"
              component={ArticleList}
              key={1}
            ></Route>
            <Route
              path="/adminPage/schoolStatistics"
              exact
              component={SchoolStatistic}
              key={2}
            ></Route>
            <Route
              path="/adminPage/addArticle"
              exact
              component={AddArticle}
              key={3}
            ></Route>
          </BrowserRouter>
        </Content>
      </AdminPageWrapper>
    );
  }
}

export default withRouter(AdminPage);
