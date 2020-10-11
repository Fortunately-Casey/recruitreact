import React, { PureComponent } from "react";
import { UserInfoWrapper, User, Info, Logo, DropDown, Logout } from "./style";
import { withRouter } from "react-router-dom";
class UserInfo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShowLogout: false,
      userName: "",
      userType: "",
    };
  }
  componentDidMount() {
    this.getUserInfo();
  }
  getUserInfo() {
    let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
    if (!userInfo) {
      return;
    }
    this.setState(() => ({
      userName: userInfo.adminUserID,
    }));
    let userType = "";
    if (userInfo.identity === "01") {
      userType = userInfo.schoolName;
    } else if (userInfo.identity === "02") {
      userType = `${userInfo.schoolName}打印老师`;
    } else if (userInfo.identity === "03") {
      userType = `${userInfo.schoolName}审核老师`;
    } else if (userInfo.identity === "04") {
      userType = "学生家长";
    } else if (userInfo.identity === "00") {
      userType = "社会事业局";
    }
    this.setState(() => ({
      userType: userType,
    }));
  }
  dropdown() {
    this.setState((state) => ({
      isShowLogout: !state.isShowLogout,
    }));
  }
  logout() {
    this.props.history.push({
      pathname: "/login",
    });
  }
  render() {
    return (
      <UserInfoWrapper>
        <User>
          <Info>
            <div className="name">{this.state.userName}</div>
            <div className="type">{this.state.userType}</div>
          </Info>
          <Logo></Logo>
          <DropDown onClick={this.dropdown.bind(this)}></DropDown>
          {this.state.isShowLogout ? (
            <Logout onClick={this.logout.bind(this)}>退出</Logout>
          ) : null}
        </User>
      </UserInfoWrapper>
    );
  }
}

export default withRouter(UserInfo);
