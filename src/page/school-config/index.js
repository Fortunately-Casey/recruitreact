import React, { PureComponent } from "react";
import HeaderWapper from "../../common/header";
import UserInfo from "../../common/user-info";
import ConfigModule from "./components/config-module";
import AccountConfig from "./components/account-number";
import TabBar from "./components/tab-bar";
import {
  BrowserRouter,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import {
  SchoolConfigWrapper,
  SchoolConfigTop,
  SchoolConfigContent,
} from "./style";

class SchoolConfig extends PureComponent {
  render() {
    return (
      <SchoolConfigWrapper>
        <SchoolConfigTop>
          <HeaderWapper></HeaderWapper>
          <UserInfo></UserInfo>
        </SchoolConfigTop>
        <SchoolConfigContent>
          <BrowserRouter>
            <TabBar></TabBar>
            <Route
              exact
              path="/schoolConfig/configModule"
              component={ConfigModule}
              key={1}
            ></Route>
            <Route
              path="/schoolConfig/accountConfig"
              exact
              component={AccountConfig}
              key={2}
            ></Route>
            <Redirect to="/schoolConfig/configModule" />
          </BrowserRouter>
        </SchoolConfigContent>
      </SchoolConfigWrapper>
    );
  }
}
export default withRouter(SchoolConfig);
