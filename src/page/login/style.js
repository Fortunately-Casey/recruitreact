import styled from 'styled-components';
import loginBG from '../../static/image/login-bg.png';
import loginLogo from '../../static/image/login-logo.png';
let fontColor = "#64b3ed";
export const LoginWapper = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const LoginContent = styled.div `
  background: url(${loginBG}) no-repeat;
  background-size: 100% 100%;
  flex: 1;
  position: relative;
`;

export const LoginLogo = styled.div `
  width: 569px;
  height: 344px;
  background: url(${loginLogo}) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  left: 300px;
  top: 40%;
  transform: translateY(-50%);
`;

export const LoginBox = styled.div `
  width: 325px;
  position: absolute;
  right: 15%;
  top: 42%;
  transform: translateY(-50%);
  padding-left: 20px;
  .title {
    font-size: 20px;
    font-weight: bold;
    padding-left: 30px;
    color: #4299e1;
    margin-bottom: 35px;
  }
`;

export const LoginModule = styled.div `
  .user,
  .password {
    height: 40px;
    margin-top: 15px;
    display: flex;
    .name {
      height: 40px;
      line-height: 40px;
      width: 90px;
      color: #a0aec0;
    }
    input {
      border-radius: 5px;
      width: 200px;
      height: 40px;
      border: none;
      background-color: #edf2f7;
      padding-left: 10px;
      color: #a0aec0;
    }
    input[type="text"]:focus {
      outline: none;
    }
    input[type="password"]:focus {
      outline: none;
    }
  }
`;

export const RegisterModule = styled.div `
  .user,
  .password {
    height: 40px;
    margin-top: 15px;
    display: flex;
    .name {
      height: 40px;
      line-height: 40px;
      width: 90px;
      color: #a0aec0;
    }
    input {
      border-radius: 5px;
      width: 200px;
      height: 40px;
      border: none;
      border: 1px solid #a0aec0;
      padding-left: 10px;
      color: #a0aec0;
    }
    input[type="text"]:focus {
      outline: none;
    }
    input[type="password"]:focus {
      outline: none;
    }
  }
`;

export const Switch = styled.div `
  text-align: right;
  margin: 10px 0;
  padding-right: 30px;
  span {
    cursor: pointer;
    color: ${fontColor};
  }
`;

export const LoginButton = styled.div `
  border-radius: 5px;
  width: 265px;
  height: 40px;
  background-color: ${fontColor};
  margin: 0 auto;
  color: #fff;
  text-align: center;
  line-height: 40px;
  margin-top: 40px;
  letter-spacing: 18px;
  text-indent: 15px; 
  cursor: pointer;
`;