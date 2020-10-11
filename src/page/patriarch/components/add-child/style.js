import styled from 'styled-components';
// import loginBG from '../../static/image/login-bg.png';
// import loginLogo from '../../static/image/login-logo.png';
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

export const HouseInfo = styled.div`
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

export const PreschoolInfo = styled.div  `
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