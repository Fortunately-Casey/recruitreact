import styled from 'styled-components';
const fontColor = "#64b3ed";
export const ConfigModuleWrapper = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div `
  flex: 1;
  display: flex;
`;

export const Bottom = styled.div `
  flex: 1;
`;

export const Left = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: #ffffff;
  border: 1px solid #ccd4df;
  margin: 20px 20px 0 40px;
  .birthday-config,
  .start-time,
  .level-config {
    .header {
      font-size: 16px;
      font-weight: bold;
      height: 24px;
      border-left: 4px solid #64b3ed;
      padding-left: 15px;
      margin-top: 20px;
    }
    .date,
    .levels {
      padding: 0 20px 0px 25px;
      .label {
        margin: 20px 0 10px 0;
      }
      .add-input {
        display: inline-block;
        margin-left: 10px;
        position: relative;
        width: 150px;
        .add {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          color: ${fontColor};
        }
      }
      .level-list {
        display: flex;
        margin-top: 10px;
        flex-wrap: wrap;
        .level-item {
          min-width: 80px;
          height: 38px;
          background: #ffffff;
          border: 1px solid #ccd4df;
          border-radius: 4px;
          font-size: 14px;
          color: #a0aec0;
          letter-spacing: 1.7px;
          margin-right: 20px;
          line-height: 38px;
          padding-left: 20px;
          margin-bottom: 10px;
          .delete-icon {
            float: right;
            font-size: 16px;
            color: #f56565;
            cursor: pointer;
            margin-top: 10px;
            margin-right: 10px;
          }
        }
      }
    }
  }
  .birthday-config {
    flex: 2;
  }
  .start-time {
    flex: 2;
  }
  .level-config {
    flex: 3;
  }
`;

export const Right = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: #ffffff;
  border: 1px solid #ccd4df;
  margin: 20px 40px 0 20px;
  .relation-config {
    flex: 1;
    .header {
      font-size: 16px;
      font-weight: bold;
      height: 24px;
      border-left: 4px solid #64b3ed;
      padding-left: 15px;
      margin-top: 20px;
    }
    .relation {
      padding: 10px 0 0 25px;
      .add {
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
        padding-bottom: 20px;
      }
      .list {
        padding-right: 20px;
        max-height: 500px;
        overflow-y: auto;
        margin-bottom: 40px;
      }
    }
  }
`;
