import styled from 'styled-components';
import reminderTitle from "../../static/image/reminder-title.png";
import schoolPhone from "../../static/image/school-phone.png";
import voice from "../../static/image/voice.png";
import entryBg from "../../static/image/entry-bg.png";
import entryTitle1 from "../../static/image/entry-title1.png";
import entryTitle2 from "../../static/image/entry-title2.png";
import entryTitle3 from "../../static/image/entry-title3.png";
import entryTitle4 from "../../static/image/entry-title4.png";
import entryTitle5 from "../../static/image/entry-title5.png";
import entryLogo1 from "../../static/image/entry-logo1.png";
import entryLogo2 from "../../static/image/entry-logo2.png";
import entryLogo3 from "../../static/image/entry-logo3.png";
import entryLogo4 from "../../static/image/entry-logo4.png";
import entryLogo5 from "../../static/image/entry-logo5.png";
import entryBgChosed from "../../static/image/entry-bg-chosed.png";
let fontColor = "#64b3ed";
export const IndexWrapper = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div `
  background-color: #ecf1f6;
  flex: 1;
  display: flex;
`;

export const ContentLeft = styled.div `
    flex: 1;
    display: flex;
`;
export const Reminder = styled.div `
    flex: 1;
    margin: 30px 70px 30px 40px;
    background-color: #fff;
    background: #ffffff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

export const ReminderTitle = styled.div `
    width: 163px;
    height: 37px;
    background: url(${reminderTitle}) no-repeat;
    background-size: 100% 100%;
    margin-left: 40px;
    margin-top: 50px;
`;

export const SchoolTitle = styled.div `
    width: 260px;
    height: 38px;
    background: url(${schoolPhone}) no-repeat;
    background-size: 100% 100%;
    margin-left: 40px;
    margin-top: 50px;
`;

export const MessageList = styled.div `
    margin-top: 20px;
    max-height: 600px;
    overflow-y: auto;
`;

export const Message = styled.div `
    height: 28px;
    padding-left: 90px;
    line-height: 28px;
    font-size: 16px;
    position: relative;
    cursor: pointer;
    margin: 20px 0;
    .voice {
      width: 16px;
      height: 14px;
      background: url(${voice}) no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: 68px;
      top: 50%;
      transform: translateY(-50%);
    }
`;

export const SchoolList = styled.div `
    padding: 30px 40px;
`;

export const ListHeader = styled.div `
    height: 70px;
    background-color: ${fontColor};
    display: flex;
    .school-name,
    .school-address,
    .school-phone,
    .school-service {
      flex: 1;
      text-align: center;
      line-height: 70px;
      color: #fff;
      font-size: 18px;
    }
`;

export const List = styled.div `
    .item {
      height: 70px;
      display: flex;
      .school-name,
      .school-address,
      .school-phone,
      .school-service {
        flex: 1;
        text-align: center;
        line-height: 70px;
        font-size: 18px;
      }
    }
    .highlight {
      background-color: #edf2f7;
    }
`;

export const ContentRight = styled.div `
    width: 400px;
    display: flex;
    flex-direction: column;
    .chosed-item {
      background: url(${entryBgChosed}) no-repeat;
      background-size: 100% 100%;
    }
`;

export const RightItem = styled.div `
    flex: 1;
    margin-bottom: 20px;
    background: url(${(props) => {return props.index === props.chosedIndex?entryBgChosed:entryBg}}) no-repeat;
    background-size: 100% 100%;
    position: relative;
    cursor: pointer;
    .title1,
    .title2,
    .title3,
    .title4,
    .title5 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
    }
    .title1 {
      width: 78px;
      height: 27px;
      background: url(${entryTitle1}) no-repeat;
      background-size: 100% 100%;
    }
    .title2 {
      width: 207px;
      height: 27px;
      background: url(${entryTitle2}) no-repeat;
      background-size: 100% 100%;
    }
    .title3 {
      width: 146px;
      height: 27px;
      background: url(${entryTitle3}) no-repeat;
      background-size: 100% 100%;
    }
    .title4 {
      width: 207px;
      height: 27px;
      background: url(${entryTitle4}) no-repeat;
      background-size: 100% 100%;
    }
    .title5 {
      width: 208px;
      height: 27px;
      background: url(${entryTitle5}) no-repeat;
      background-size: 100% 100%;
    }
    .logo1,
    .logo2,
    .logo3,
    .logo4,
    .logo5 {
      position: absolute;
      right: 0;
      bottom: 0;
    }
    .logo1 {
      width: 96px;
      height: 106px;
      background: url(${entryLogo1}) no-repeat;
      background-size: 100% 100%;
    }
    .logo5 {
      width: 104px;
      height: 104px;
      background: url(${entryLogo5}) no-repeat;
      background-size: 100% 100%;
    }
    .logo2 {
      width: 105px;
      height: 98px;
      background: url(${entryLogo2}) no-repeat;
      background-size: 100% 100%;
    }
    .logo3 {
      width: 120px;
      height: 100px;
      background: url(${entryLogo3}) no-repeat;
      background-size: 100% 100%;
    }
    .logo4 {
      width: 106px;
      height: 106px;
      background: url(${entryLogo4}) no-repeat;
      background-size: 100% 100%;
    }
`;