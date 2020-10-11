import styled from 'styled-components';
import LeftLogo1 from "../../../../static/image/apply-logo1.png"
import LeftLogo2 from "../../../../static/image/apply-logo2.png"
import AddIcon from "../../../../static/image/add-icon.png"
let fontColor = "#64b3ed";
export const ChildManageWrapper = styled.div `
  height: 100%;
  display: flex;
  padding-top: 30px;
  flex-wrap: wrap;
`;

export const Card = styled.div `
  background: #ffffff;
  border: 1px solid ${fontColor};
  border-radius: 8px;
  width: 375px;
  height: 286px;
  margin-left: 30px;
  padding: 0 15px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const ApplyCode = styled.div `
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #ddd;
    display: flex;
    .name {
      flex: 1;
      color: #000;
      font-size: 16px;
      font-weight: 500;
    }
    .code {
      flex: 1;
      font-size: 16px;
      color: ${fontColor};
      text-align: right;
        i {
        color: red;
        font-weight: bold;
        font-size: 20px;
      }
    }
`;
export const ApplyInfo = styled.div `
  height: 195px;
`;

export const Identity = styled.div `
  height: 100px;
  display: flex;
  .left {
    display: flex;
    align-items: center;
    width: 100px;
    .left-logo1 {
      width: 96px;
      height: 74px;
      background: url(${LeftLogo1}) no-repeat;
      background-size: 100% 100%;
    }
    .left-logo2 {
      width: 96px;
      height: 74px;
      background: url(${LeftLogo2}) no-repeat;
      background-size: 100% 100%;
    }
  }
  .right {
    flex: 1;
    .name {
      margin-top: 10px;
      height: 50px;
      line-height: 50px;
      padding-left: 10px;
      font-size: 18px;
      font-weight: bold;
      .audit-status {
        float: right;
        font-size: 14px;
      }
    }
    .idCard {
      padding-left: 10px;
      font-size: 16px;
    }
  }
`;
export const Address = styled.div `
  height: 95px;
`;

export const AddressItem = styled.div `
  height: 45px;
  line-height: 45px;
  display: flex;
  .name {
    width: 100px;
    color: #a0aec0;
    font-size: 16px;
    font-weight: 500;
  }
  .value {
    flex: 1;
    font-size: 16px;
    color: #2d3748;
  }
`;

export const ApplySchool = styled.div `
  height: 45px;
  line-height: 45px;
  border-top: 1px solid #ddd;
  display: flex;
  .name {
    width: 100px;
    color: #a0aec0;
    font-size: 16px;
    font-weight: 500;
  }
  .value {
    flex: 1;
    font-size: 16px;
    color: #2d3748;
  }
`;

export const AddCard = styled.div `
    cursor: pointer;
    width: 375px;
    height: 286px;
    border: 2px dashed ${fontColor};
    border-radius: 8px;
    font-size: 24px;
    color: ${fontColor};
    letter-spacing: 0;
    margin-left: 30px;
    .add-icon {
      width: 36px;
      height: 36px;
      background: url(${AddIcon}) no-repeat;
      background-size: 100% 100%;
      margin: 0 auto;
      margin-top: 100px;
    }
    .add-text {
      font-size: 22px;
      margin-top: 10px;
      text-align: center;
      font-weight: bold;
    }
`;