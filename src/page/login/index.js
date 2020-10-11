import React, { PureComponent, Fragment } from "react";
import HeaderWapper from "../../common/header";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreaters } from "./store";
import * as api from "../../request/serviceList";
import http from "../../request/http";
import { message } from "antd";
import {
  LoginWapper,
  LoginContent,
  LoginLogo,
  LoginBox,
  LoginModule,
  RegisterModule,
  Switch,
  LoginButton,
} from "./style";
class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      phoneNumber: "",
      registerPW: "",
      confirmPW: "",
    };
  }
  componentDidMount() {
    let username = window.localStorage.getItem("username");
    let password = window.localStorage.getItem("password");
    if (username) {
      this.setState(() => ({
        username: username,
      }));
    }
    if (password) {
      this.setState(() => ({
        password: password,
      }));
    }
  }
  usernameChange(event) {
    event.persist();
    this.setState(() => ({
      username: event.target.value,
    }));
  }
  passwordChange(event) {
    event.persist();
    this.setState(() => ({
      password: event.target.value,
    }));
  }
  phoneNumberChange(event) {
    event.persist();
    this.setState(() => ({
      phoneNumber: event.target.value,
    }));
  }
  registerPWChange(event) {
    event.persist();
    this.setState(() => ({
      registerPW: event.target.value,
    }));
  }
  confirmPWChange(event) {
    event.persist();
    this.setState(() => ({
      confirmPW: event.target.value,
    }));
  }
  confirm() {
    if (this.props.isShowLogin) {
      if (!this.state.username || !this.state.password) {
        message.warning("账号密码不能为空!");
        return;
      }
      let params = {
        adminUserID: this.state.username,
        password: this.state.password,
        type: 2,
      };
      http.post(api.Login, params).then((resp) => {
        if (resp.success) {
          message.success("登录成功!");
          window.localStorage.setItem("token", resp.data.token);
          window.localStorage.setItem("schoolCode", resp.data.schoolCode);
          window.localStorage.setItem("username", this.state.username);
          window.localStorage.setItem("password", this.state.password);
          window.localStorage.setItem("userInfo", JSON.stringify(resp.data));
          const { history } = this.props;
          if (resp.data.identity === "01") {
            history.push({
              pathname: "/schoolConfig",
            });
          } else if (resp.data.identity === "00") {
            history.push({
              pathname: "/adminPage/articleList",
            });
          } else if (resp.data.identity === "02") {
            history.push({
              pathname: "/schoolManage",
            });
          } else if (resp.data.identity === "03") {
            history.push({
              pathname: "/schoolAudit",
            });
          } else if (resp.data.identity === "04") {
            history.push({
              pathname: "/patriarch",
            });
          }
        }
      });
    } else {
      if (
        !this.state.phoneNumber ||
        !this.state.registerPW ||
        !this.state.registerPW
      ) {
        message.warning("账号密码不能为空!");
        return;
      }
      let params = {
        adminUserID: this.state.phoneNumber,
        password: this.state.registerPW,
        confirmPassword: this.state.registerPW,
      };
      http.post(api.REGISTERED, params).then((resp) => {
        if (resp.success) {
          message.success("注册成功!");
          this.setState(() => ({
            phoneNumber: "",
            registerPW: "",
            confirmPW: "",
          }));
          this.props.changeLoginStatus(false);
        }
      });
    }
  }
  getLoginModule() {
    const { isShowLogin } = this.props;
    if (isShowLogin) {
      return (
        <LoginModule>
          <div className="user">
            <div className="name">账号：</div>
            <input
              type="text"
              value={this.state.username}
              onChange={this.usernameChange.bind(this)}
            />
          </div>
          <div className="password">
            <div className="name">密码：</div>
            <input
              type="text"
              value={this.state.password}
              onChange={this.passwordChange.bind(this)}
              style={{
                WebkitTextSecurity: "disc",
                textSecurity: "disc",
              }}
            />
          </div>
        </LoginModule>
      );
    } else {
      return (
        <RegisterModule>
          <div className="user">
            <div className="name">手机号码：</div>
            <input
              type="text"
              value={this.state.phoneNumber}
              onChange={this.phoneNumberChange.bind(this)}
            />
          </div>
          <div className="password">
            <div className="name">密码：</div>
            <input
              type="text"
              value={this.state.registerPW}
              onChange={this.registerPWChange.bind(this)}
              style={{
                WebkitTextSecurity: "disc",
                textSecurity: "disc",
              }}
            />
          </div>
          <div className="password">
            <div className="name">确认密码：</div>
            <input
              type="text"
              value={this.state.confirmPW}
              onChange={this.confirmPWChange.bind(this)}
              style={{
                WebkitTextSecurity: "disc",
                textSecurity: "disc",
              }}
            />
          </div>
        </RegisterModule>
      );
    }
  }
  render() {
    const { isShowLogin, changeLoginStatus } = this.props;
    const confirm = this.confirm.bind(this);
    return (
      <Fragment>
        <LoginWapper>
          <HeaderWapper></HeaderWapper>
          <LoginContent>
            <LoginLogo></LoginLogo>
            <LoginBox>
              <div className="title">
                {isShowLogin ? "您好，请登录" : "请填写注册信息"}
              </div>
              {this.getLoginModule()}
              <Switch>
                <span
                  onClick={() => {
                    changeLoginStatus(isShowLogin);
                  }}
                >
                  {isShowLogin ? "注册" : "登录"}
                </span>
              </Switch>
              <LoginButton onClick={confirm}>
                {isShowLogin ? "登录" : "注册"}
              </LoginButton>
            </LoginBox>
          </LoginContent>
        </LoginWapper>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  isShowLogin: state.getIn(["login", "isShowLogin"]),
});

const mapDispatchToProps = (dispatch) => ({
  changeLoginStatus(isShow) {
    dispatch(actionCreaters.changeLoginStatus(isShow));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
