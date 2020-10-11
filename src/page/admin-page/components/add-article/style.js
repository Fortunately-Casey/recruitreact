import styled from 'styled-components';
import urlIcon from "../../../../static/image/url-icon.png";
import successIcon from "../../../../static/image/success-icon.png";
import errorIcon from "../../../../static/image/error-icon.png";
const fontColor = "#64b3ed";
export const AddArticleWrapper = styled.div `
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`

export const AddBox = styled.div `
  margin-top: 40px;
  width: 790px;
  height: 250px;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`

export const Header = styled.div `
  font-size: 16px;
  font-weight: bold;
  height: 24px;
  border-left: 4px solid ${fontColor};
  padding-left: 15px;
  margin-top: 20px;
`

export const Content = styled.div `
  padding: 0 25px;
  .label {
    margin: 20px 0 10px 0;
  }
`

export const UrlInput = styled.div `
  width: 100%;
  margin-top: 10px;
  position: relative;
`

export const IconBox = styled.div `
  width: 80px;
  height: 30px;
  background: #e2e8f0;
  border: 1px solid #dcdee2;
  border-radius: 3px 0 0 3px;
  position: absolute;
  left: 1px;
  top: 1px;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UrlIcon = styled.div `
  width: 17px;
  height: 17px;
  background: url(${urlIcon}) no-repeat;
  background-size: 100% 100%;
`

export const ConfirmButton = styled.div `
  background: ${fontColor};
  border-radius: 21px;
  width: 110px;
  height: 40px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  margin: 20px auto;
  font-size: 16px;
  cursor: pointer;
  letter-spacing: 10px;
  text-indent: 10px;
`

export const MessageBox = styled.div `
  width: 790px;
  height: 210px;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const SuccessIcon = styled.div `
  width: 72px;
  height: 72px;
  background: url(${successIcon}) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  margin-top: 15px;
`

export const ErrorIcon = styled.div `
  width: 72px;
  height: 72px;
  background: url(${errorIcon}) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  margin-top: 15px;
`

export const Title = styled.div `
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`

export const Buttons = styled.div `
  display: flex;
  justify-content: center;
  margin-top: 10px;
  .info {
    padding: 3px 10px;
    cursor: pointer;
    background: #64b3ed;
    border-radius: 2px;
    font-size: 14px;
    color: #ffffff;
    text-align: left;
    line-height: 22px;
  }
  .back {
    padding: 3px 10px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    opacity: 0.65;
    font-size: 14px;
    color: #000000;
    line-height: 22px;
    cursor: pointer;
    margin-left: 10px;
  }
`