import React, { PureComponent } from "react";
import HeaderWapper from "../../common/header";
import { Carousel } from "antd";
import {
  UserManualWrapper,
  Content,
  TeacherPic,
  Phone,
  ParentPC,
} from "./style";
class UserManual extends PureComponent {
  render() {
    return (
      <UserManualWrapper>
        <HeaderWapper></HeaderWapper>
        <Content>
          <Carousel>
            <div>
            <TeacherPic></TeacherPic>
            </div>
            <div>
            <Phone></Phone>
            </div>
            <div>
              <ParentPC>建议使用谷歌浏览器</ParentPC>
            </div>
          </Carousel>
        </Content>
      </UserManualWrapper>
    );
  }
}

export default UserManual;
