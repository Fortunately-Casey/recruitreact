import styled from 'styled-components';
const fontColor = "#64b3ed";
export const AdminPageWrapper = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div `
  position: relative;
`;

export const Content = styled.div `
  background-color: #edf1f7;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Tabbar = styled.div `
  height: 48px;
  background-color: #fff;
  display: flex;
  position: relative;
  font-weight: bold;
  .chosed {
    color: ${fontColor};
  }
`;

export const TabItem = styled.div `
  cursor: pointer;
  width: 103px;
  height: 48px;
  border: 1px solid #e2e8f0;
  font-size: 14px;
  color: #728096;
  letter-spacing: 1.7px;
  text-align: center;
  margin-left: 40px;
  line-height: 48px;
`;

export const AddButton = styled.div `
  cursor: pointer;
  height: 48px;
  border: 1px solid #e2e8f0;
  font-size: 14px;
  color: #728096;
  letter-spacing: 1.7px;
  text-align: center;
  margin-left: 40px;
  line-height: 48px;
  width: 103px;
  position: absolute;
  right: 100px;
  top: 0;
`;