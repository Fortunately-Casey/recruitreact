import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import HeaderWapper from "../../common/header";
import UserInfo from "../../common/user-info";
import ChildManage from "./components/child-manage";
import AddChild from "./components/add-child";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { PatriarchWrapper, PatriarchTop, PatriarchContent } from "./style";

class Patriarch extends PureComponent {
  render() {
    return (
      <PatriarchWrapper>
        <PatriarchTop>
          <HeaderWapper></HeaderWapper>
          <UserInfo></UserInfo>
        </PatriarchTop>
        <PatriarchContent>
          <BrowserRouter>
            <Route
              exact
              path="/patriarch/childManage"
              component={ChildManage}
            ></Route>
            <Route
              path="/patriarch/addChild"
              exact
              component={AddChild}
            ></Route>
            <Redirect to="/patriarch/childManage" />
          </BrowserRouter>
        </PatriarchContent>
      </PatriarchWrapper>
    );
  }
}
export default withRouter(Patriarch);
