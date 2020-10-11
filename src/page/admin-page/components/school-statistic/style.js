import styled from 'styled-components';
// const fontColor = "#64b3ed";

export const StatisticWrapper = styled.div `
  flex: 1;
  display: flex;
  #chart1,
  #chart2,
  #chart3,
  #chart4 {
    padding-bottom: 10px;
    box-sizing: border-box;
    flex: 1;
  }
`

export const Left = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Right = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
`
export const Top = styled.div `
  flex: 1;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  padding-top: 10px;
  flex-direction: column;
`

export const Bottom = styled.div `
  flex: 1;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  padding-top: 10px;
  flex-direction: column;
`

export const Header = styled.div `
  font-size: 18px;
  font-weight: bold;
  height: 24px;
  border-left: 4px solid #64b3ed;
  padding-left: 15px;
  margin-top: 5px;
`