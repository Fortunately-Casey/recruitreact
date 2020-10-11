import styled from 'styled-components';
import phonePic from "../../static/image/phone.png";
import parentPc from "../../static/image/parent-pc.png";
import teacherPc from "../../static/image/teacher-pc.png";
// const fontColor = "#64b3ed";

export const UserManualWrapper = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Content = styled.div `
  background-color: #fff;
  flex: 1;
  width: 80%;
  margin: 0 auto;
`

export const TeacherPic = styled.div `
  background: url(${teacherPc}) no-repeat;
  background-size: 100% 100%;
  height: 800px;
  color: #fff;
  line-height: 800px;
  text-align:center;
`

export const Phone = styled.div `
  background: url(${phonePic}) no-repeat;
  background-size: 100% 100%;
  height: 800px;
  color: #fff;
  line-height: 800px;
  text-align:center;
`

export const ParentPC = styled.div `
  background: url(${parentPc}) no-repeat;
  background-size: 100% 100%;
  height: 800px;
  color: #fff;
  font-size:20px;
  color: red;
`