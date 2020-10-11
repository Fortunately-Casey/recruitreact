import styled from 'styled-components';
import userLogo from "../../static/image/user-logo.png";
import dropDown from "../../static/image/drop-down.png";

export const UserInfoWrapper = styled.div `
  width: 200px;
  height: 60px;
  position: absolute;
  z-index: 999;
  right: 0;
  top: 0;
`;

export const User = styled.div `
  width: 340px;
  height: 60px;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
`;

export const Info = styled.div `
  width: 240px;
  .name {
    width: 240px;
    padding-right: 10px;
    height: 30px;
    line-height: 30px;
    text-align: right;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
  }
  .type {
    width: 240px;
    padding-right: 10px;
    height: 30px;
    line-height: 30px;
    text-align: right;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
  }
`;

export const Logo = styled.div `
  width: 40px;
  height: 40px;
  background: url(${userLogo}) no-repeat;
  background-size: 100% 100%;
  border-radius: 50%;
  margin-top: 10px;
`;

export const DropDown = styled.div `
  width: 20px;
  height: 40px;
  background: url(${dropDown}) no-repeat;
  background-size: 12px 7px;
  background-position: center center;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const Logout = styled.div `
  width: 100px;
  height: 40px;
  line-height: 40px;
  transition: all 1s;
  text-align: center;
  position: absolute;
  z-index: 999;
  bottom: -49px;
  right: 0px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #e2e9f1;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;