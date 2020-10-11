import styled from 'styled-components';
import cross1 from "../../../../static/image/cross1.png";
import cross2 from "../../../../static/image/cross2.png";
import uncross1 from "../../../../static/image/uncross1.png";
import uncross2 from "../../../../static/image/uncross2.png";
let fontColor = "#64b3ed";
export const AddChildWrapper = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AddMain = styled.div `
  flex: 1;
  display: flex;
`;

export const MainLeft = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    background: #ffffff;
    border: 1px solid #ccd4df;
    margin: 20px 20px 0 40px;
    .forecast-code,
    .student-info,
    .house-info,
    .preschool-info {

    }
    .header {
      font-size: 16px;
      font-weight: bold;
      height: 24px;
      line-height: 24px;
      border-left: 4px solid ${fontColor};
      padding-left: 15px;
      margin-top: 20px;
    }
`;

export const ForecastCode = styled.div `

`
export const StudentInfo = styled.div `
  flex: 5;
  .personage-info {
    height: 66px;
    display: flex;
    margin-top: 10px;
    .name,
    .idCard,
    .birthday {
      flex: 1;
      padding: 0 20px 0px 25px;
      .label {
        margin-bottom: 10px;
      }
    }
  }
  .address-info {
    display: flex;
    .residence-info {
      flex: 1;
      position: relative;
      padding-left: 25px;
      .label {
        margin: 10px 0;
      }
    }
    .sex-info {
      width: 33.33%;
      padding-left: 25px;
      .label {
        margin: 10px 0;
      }
    }
  }
  .now-address {
    position: relative;
    display: flex;
    .housing-estate {
      flex: 1;
      padding-left: 25px;
      .label {
        margin: 15px 0 10px 0;
      }
    }
    .apply-school {
      width: 33.33%;
      padding-left: 25px;
      .label {
        margin: 15px 0 10px 0;
      }
    }
  }
  .alternative-school {
    padding-left: 25px;
    .label {
      margin: 15px 0 10px 0;
    }
  }
`

export const HouseInfo = styled.div `
  flex: 3;
  .house-property {
    padding-left: 25px;
    display: flex;
    .has-house,
    .house-nature,
    .house-owner,
    .live-date,
    .contract-date {
      flex: 1;
      .label {
        margin: 15px 0 10px 0;
      }
    }
  }
  .get-house {
    padding-left: 25px;
    display: flex;
    .get-time {
      width: 33.33%;
      .label {
        margin: 15px 0 10px 0;
      }
    }
    .house-code,
    .insurance-address {
      flex: 1;
      .label {
        margin: 15px 0 10px 0;
      }
    }
  }
`

export const PreschoolInfo = styled.div `
  flex: 2;
  .school {
    padding-left: 25px;
    .school-name {
      .label {
        margin: 15px 0 10px 0;
      }
    }
  }
`
export const MainRight = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: #ffffff;
  border: 1px solid #ccd4df;
  margin: 20px 40px 0 20px;
  .header {
    font-size: 16px;
    font-weight: bold;
    height: 24px;
    border-left: 4px solid ${fontColor};
    padding-left: 15px;
    margin-top: 20px;
  }
`

export const PatriachInfo = styled.div `
  flex: 1;
  .parent {
    margin-top: 15px;
    .identity {
      display: flex;
      .name,
      .relation,
      .idCard {
        flex: 1;
        padding: 0 20px 0px 25px;
        .label {
          margin-bottom: 10px;
        }
      }
    }
    .work-info {
      display: flex;
      padding-left: 25px;
      .phone {
        width: 33.33%;
        .label {
          margin: 15px 0 10px 0;
        }
      }
      .work-address {
        flex: 1;
        padding-left: 10px;
        .label {
          margin: 15px 0 10px 0;
        }
      }
    }
  }
`
export const OtherInfo = styled.div `
  flex: 1;
  .other-content {
    display: flex;
    padding-left: 25px;
    .special-circumstances {
      width: 33.33%;
      .label {
        margin: 15px 0;
      }
    }
    .other-remark {
      flex: 1;
      .label {
        margin: 15px 0;
      }
    }
  }
`;

export const ReportInfo = styled.div `
  flex: 1;
  .report-text {
    padding-left: 25px;
    padding-top: 5px;
    p {
      width: 500px;
      margin-bottom: 10px;
    }
    span {
      color: #a0aec0;
    }
  }
`;

export const AuditInfo = styled.div `
  margin-top: 15px;
  flex: 1;
  background: #ffffff;
  border: 1px solid #ccd4df;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  .header {
    font-size: 16px;
    font-weight: bold;
    height: 24px;
    border-left: 4px solid ${fontColor};
    padding-left: 15px;
    margin-top: 20px;
  }
  .levels,
  .audit-result {
    display: flex;
    height: 35px;
    margin-top: 10px;
    .label {
      line-height: 35px;
      width: 100px;
      margin-left: 25px;
    }
    .level-list {
      display: flex;
      position: relative;
      .level-item {
        min-width: 60px;
        height: 35px;
        background: #ffffff;
        border: 1px solid #ccd4df;
        border-radius: 4px;
        font-size: 14px;
        color: #a0aec0;
        letter-spacing: 1.7px;
        margin-right: 20px;
        line-height: 35px;
        padding-left: 20px;
        margin-bottom: 10px;
        cursor: pointer;
      }
      .chosed-level {
        border-color: #64b3ed;
        background-color: #64b3ed;
        color: #fff;
      }
    }
    .result-list {
      flex: 1;
      display: flex;
      line-height: 35px;
      .result-item {
        width: 100px;
        height: 35px;
        background: #ffffff;
        border: 1px solid #ccd4df;
        border-radius: 4px;
        font-size: 14px;
        color: #a0aec0;
        letter-spacing: 1.7px;
        margin-right: 20px;
        line-height: 35px;
        padding-left: 40px;
        margin-bottom: 10px;
        cursor: pointer;
        position: relative;
        .cross-icon {
          width: 14px;
          height: 14px;
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
        }
        .cross1 {
          background: url(${cross1}) no-repeat;
          background-size: 100% 100%;
        }
        .cross2 {
          background: url(${cross2}) no-repeat;
          background-size: 100% 100%;
        }
        .uncross1 {
          background: url(${uncross1}) no-repeat;
          background-size: 100% 100%;
        }
        .uncross2 {
          background: url(${uncross2}) no-repeat;
          background-size: 100% 100%;
        }
      }
      .cross {
        color: #fff;
        border-color: #48bb78;
        background-color: #48bb78;
      }
      .uncross {
        color: #fff;
        border-color: #f56565;
        background-color: #f56565;
      }
    }
  }
`


export const Bottom = styled.div `
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  .save-button,
  .confirm-button {
    width: 120px;
    height: 40px;
    border-radius: 20px;
    background-color: ${fontColor};
    line-height: 40px;
    color: #fff;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
  }
  .save-button {
    margin-right: 10px;
  }
  .confirm-button {
    margin-left: 10px;
  }
`;