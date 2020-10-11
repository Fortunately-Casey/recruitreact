import React, { PureComponent, Fragment } from "react";
import { Input, DatePicker, Select, Radio, Modal, message } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as api from "../../../../request/serviceList";
import http from "../../../../request/http";
import { Todate } from "../../../../common/util/util";
import moment from "moment";

import {
  AddChildWrapper,
  AddMain,
  Bottom,
  MainLeft,
  MainRight,
  ForecastCode,
  StudentInfo,
  HouseInfo,
  PreschoolInfo,
  PatriachInfo,
  OtherInfo,
  AuditInfo,
} from "./style";
import { actionCreaters } from "../../store";
class AddChild extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      idCard: "",
      birthday: "",
      provinceID: "",
      provincesName: "",
      cityID: "",
      cityName: "",
      areaID: "",
      areaName: "",
      sex: 1,
      detailAddress: "",
      streetID: "",
      communityId: "",
      smallCommunityID: "",
      smallCommunityName: "",
      schoolName: "",
      schoolLabel: "",
      schoolID: "",
      isDisableHasHouse: false,
      isShowAlternative: false,
      hasHouse: 1,
      alternativeSchoolID: "",
      houseNature: "",
      houseOwner: "",
      permitResidencePeriod: "",
      laborContractPeriod: "",
      buyDate: "",
      houseNumbers: "",
      pensionUnitsAddress: "",
      lastSchoolName: "",
      parents: [
        {
          sort: 1,
          idCard: "",
          linkPhone: "",
          name: "",
          relation: 1,
          workAddress: "",
        },
        {
          sort: 2,
          idCard: "",
          linkPhone: "",
          name: "",
          relation: 2,
          workAddress: "",
        },
      ],
      specialCondition: 7,
      otherRemark: "",
      isChecked: "",
      isShowConfirm: false,
      forecastCode: "",
      isDisabled: true,
      auditRemark: "",
    };
    this.parentNameChange = this.parentNameChange.bind(this);
    this.relationChange = this.relationChange.bind(this);
    this.parentIDCardChange = this.parentIDCardChange.bind(this);
    this.parentLinkPhoneChange = this.parentLinkPhoneChange.bind(this);
    this.workAddressChange = this.workAddressChange.bind(this);
    this.returnLevelList = this.returnLevelList.bind(this);
  }
  componentDidMount() {
    this.props.getProvinceArea(); //获取省
    this.props.getStreetList(); //获取街道
    this.props.getSchoolList(); //获取学校列表
    if (this.props.location.query && this.props.location.query.id) {
      this.getStudentDetail(this.props.location.query.id);
    }
  }
  getStudentDetail(id) {
    http
      .get(api.GETSTUDENTDETAIL, {
        ID: id,
      })
      .then((resp) => {
        let res = resp.data;
        this.props.getLevelList(res.school.schoolID); //获取等级列表
        if (res.auditStatus === 1 || res.auditStatus === 2) {
          this.setState({
            isDisabled: true,
          });
        } else {
          this.setState({
            isDisabled: false,
          });
        }
        this.setState({
          forecastCode: res.forecastCode,
          ID: res.id,
          name: res.name,
          sex: res.sex,
          idCard: res.idCard,
          birthday: res.birthday ? res.birthday : "",
          provinceID: res.provinceID,
          cityID: res.cityID,
          areaID: res.areaID,
          cityName: res.cityName,
          provincesName: res.provincesName,
          areaName: res.areaName,
          detailAddress: res.detailAddress,
          smallCommunityName: res.smallCommunityName,
          smallCommunityID: res.smallCommunityID,
          schoolName: res.schoolName,
          schoolID: res.schoolID,
          lastSchoolName: res.preSchoolInformation
            ? res.preSchoolInformation
            : res.primarySchoolName,
          schoolLabel: res.school ? res.school.label : "",
          parents: res.parents,
          hasHouse: res.property ? 1 : 2,
          houseNature: res.houseNature,
          houseOwner: res.houseOwner,
          buyDate: res.buyDate ? res.buyDate : Todate(new Date()),
          houseNumbers: res.houseNumbers,
          permitResidencePeriod: res.permitResidencePeriod
            ? res.permitResidencePeriod
            : Todate(new Date()),
          laborContractPeriod: res.laborContractPeriod
            ? Todate(new Date(res.laborContractPeriod))
            : Todate(new Date()),
          pensionUnitsAddress: res.pensionUnitsAddress,
          specialCondition: res.specialCondition,
          otherRemark: res.otherRemark,
          alternativeSchoolName: res.alternativeSchoolName,
          alternativeSchoolID: Number(res.alternativeSchoolID),
          streetID: res.smallCommunity ? res.smallCommunity.streetID : "",
          communityId: res.smallCommunity ? res.smallCommunity.communityID : "",
          auditRemark: res.auditRemark,
        });
        let crossIndex = res.auditStatus === 0 ? 0 : res.auditStatus - 1;
        this.props.choseCrossIndex(crossIndex);
        this.props.choseLevel(res.levelID);
        if (res.school.schoolCode === "0401") {
          this.setState({
            isDisableHasHouse: true,
            isShowAlternative: true,
            hasHouse: 1,
          });
        } else if (
          res.school.schoolCode === "01" ||
          res.school.schoolCode === "0402" ||
          res.school.schoolCode === "0403" ||
          res.school.schoolCode === "0404"
        ) {
          this.setState({
            isDisableHasHouse: true,
            isShowAlternative: false,
            hasHouse: 1,
          });
        } else {
          this.setState({
            isShowAlternative: false,
            isDisableHasHouse: false,
          });
        }
        if (this.state.provinceID) {
          this.props.getCityList(this.state.provinceID);
        }
        if (this.state.cityID) {
          this.props.getAreaList(this.state.cityID);
        }
        if (this.state.streetID) {
          this.props.getCommunity(this.state.streetID);
        }
        if (this.state.communityId) {
          this.props.getSmallCommunity(this.state.communityId);
        }
      });
  }
  nameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  idCardChange(e) {
    this.setState({
      idCard: e.target.value,
    });
  }
  birthdayChange(date) {
    this.setState({
      birthday: date,
    });
  }
  addressChange(e) {
    this.setState({
      detailAddress: e.target.value,
    });
  }
  sexChange(e) {
    this.setState({
      sex: e.target.value,
    });
  }
  // 选择省
  provinceChange(value) {
    this.setState({
      provinceID: value.value,
      provincesName: value.label,
    });
    this.props.getCityList(value.value);
  }
  // 选择市
  cityChange(value) {
    this.setState({
      cityID: value.value,
      cityName: value.label,
    });
    this.props.getAreaList(value.value);
  }
  //选择区/县
  areaChange(value) {
    this.setState({
      areaID: value.value,
      areaName: value.label,
    });
  }
  //选择街道
  streetChange(value) {
    this.setState({
      streetID: value,
    });
    this.props.getCommunity(value);
  }
  //选择社区
  communityChange(value) {
    this.setState({
      communityId: value,
    });
    this.props.getSmallCommunity(value);
  }
  //选择小区匹配学校
  smallCommunityChange(value) {
    this.setState(
      {
        smallCommunityID: value.value,
        smallCommunityName: value.label,
      },
      () => {
        http
          .get(api.GETSCHOOLBYSMALLCOMMUNITYID, {
            smallCommunityID: this.state.smallCommunityID,
            birthday: Todate(this.state.birthday),
          })
          .then((resp) => {
            if (resp.data) {
              this.setState({
                schoolName: resp.data.schoolName,
                schoolLabel: resp.data.label,
                schoolID: resp.data.schoolID,
              });
              if (resp.data.schoolCode === "0401") {
                this.setState({
                  isDisableHasHouse: true,
                  isShowAlternative: true,
                  hasHouse: 1,
                });
              } else if (
                resp.data.schoolCode === "01" ||
                resp.data.schoolCode === "0402" ||
                resp.data.schoolCode === "0403" ||
                resp.data.schoolCode === "0404"
              ) {
                this.setState({
                  isDisableHasHouse: true,
                  isShowAlternative: false,
                  hasHouse: 1,
                });
              } else {
                this.setState({
                  isDisableHasHouse: false,
                  isShowAlternative: false,
                });
              }
            } else {
              this.setState({
                schoolName: "",
                isShowAlternative: false,
                alternativeSchoolID: "",
              });
              this.schoolName = "";
              this.isShowAlternative = false;
              this.alternativeSchoolID = "";
            }
          });
      }
    );
  }
  //选择备选学校
  alternativeChange(value) {
    this.setState({
      alternativeSchoolID: value.value,
      alternativeSchoolName: value.label,
    });
  }
  //选择是否有房产
  hasHouseChange(e) {
    this.setState({
      hasHouse: e.target.value,
    });
  }
  //房产性质
  houseNatureChange(value) {
    this.setState({
      houseNature: value,
    });
  }
  //房产所有人
  houseOwnerChange(e) {
    this.setState({
      houseOwner: e.target.value,
    });
  }
  //居住证有效期
  permitResidencePeriodChange(date) {
    this.setState({
      permitResidencePeriod: date,
    });
  }
  //劳动合同期限
  laborContractPeriodChange(date) {
    this.setState({
      laborContractPeriod: date,
    });
  }
  //购买日期
  buyDateChange(date) {
    this.setState({
      buyDate: date,
    });
  }
  //房产登记号/房产发票号
  houseNumbersChange(e) {
    this.setState({
      houseNumbers: e.target.value,
    });
  }
  //养老保险所在地
  pensionUnitsAddressChange(e) {
    this.setState({
      pensionUnitsAddress: e.target.value,
    });
  }
  //学前信息
  lastSchoolNameChange(e) {
    this.setState({
      lastSchoolName: e.target.value,
    });
  }
  //父母姓名
  parentNameChange(e, index) {
    let newParents = JSON.parse(JSON.stringify(this.state.parents));
    newParents[index].name = e.target.value;
    this.setState({
      parents: newParents,
    });
  }
  //关系
  relationChange(value, index) {
    let newParents = JSON.parse(JSON.stringify(this.state.parents));
    newParents[index].relation = value;
    this.setState({
      parents: newParents,
    });
  }
  //父母身份证
  parentIDCardChange(e, index) {
    let newParents = JSON.parse(JSON.stringify(this.state.parents));
    newParents[index].idCard = e.target.value;
    this.setState({
      parents: newParents,
    });
  }
  //父母联系电话
  parentLinkPhoneChange(e, index) {
    let newParents = JSON.parse(JSON.stringify(this.state.parents));
    newParents[index].linkPhone = e.target.value;
    this.setState({
      parents: newParents,
    });
  }
  //父母工作单位
  workAddressChange(e, index) {
    let newParents = JSON.parse(JSON.stringify(this.state.parents));
    newParents[index].workAddress = e.target.value;
    this.setState({
      parents: newParents,
    });
  }
  //特殊情况
  specialConditionChange(e) {
    this.setState({
      specialCondition: e.target.value,
    });
  }
  //其他描述
  otherRemarkChange(e) {
    this.setState({
      otherRemark: e.target.value,
    });
  }
  //承诺书
  isCheckedChange(e) {
    this.setState({
      isChecked: e.target.checked,
    });
  }
  //点击提交
  showConfirm() {
    if (
      !this.state.name ||
      !this.state.idCard ||
      !this.state.birthday ||
      !this.state.provincesName ||
      !this.state.cityName ||
      !this.state.areaName ||
      !this.state.detailAddress ||
      !this.state.schoolName
    ) {
      message.warning("请填写完整的学生信息！");
      return;
    }
    if (this.state.isShowAlternative) {
      if (!this.state.alternativeSchoolName) {
        message.warning("请填写备选学校！");
        return;
      }
    }
    if (this.state.hasHouse === 1) {
      if (!this.state.houseOwner || !this.state.houseNumbers) {
        message.warning("请填写完整的房产居住信息1！");
        return;
      }
    } else {
      if (!this.state.pensionUnitsAddress) {
        message.warning("请填写完整的房产居住信息2！");
        return;
      }
    }
    if (!this.state.lastSchoolName) {
      message.warning("请填写完整的学前信息！");
      return;
    }
    if (
      (!this.state.parents[0].idCard ||
        !this.state.parents[0].linkPhone ||
        !this.state.parents[0].name ||
        !this.state.parents[0].workAddress) &&
      (!this.state.parents[1].idCard ||
        !this.state.parents[1].linkPhone ||
        !this.state.parents[1].name ||
        !this.state.parents[1].workAddress)
    ) {
      message.warning("至少填写一个完整的家长信息！");
      return;
    }
    this.setState({
      isShowConfirm: true,
    });
  }
  //保存Modal
  handleSave() {
    this.commit(false);
  }
  //提交Modal
  handleConfirm() {
    this.commit(true);
  }
  //取消Modal
  handleCancel() {
    this.setState({
      isShowConfirm: false,
    });
  }
  //提交
  commit(commit) {
    let { levelID } = this.props;
    let params = {
      id: this.state.ID,
      name: this.state.name,
      idCard: this.state.idCard,
      sex: this.state.sex,
      birthday: Todate(this.state.birthday),
      provinceID: this.state.provinceID,
      provincesName: this.state.provincesName,
      cityID: this.state.cityID,
      cityName: this.state.cityName,
      areaID: this.state.areaID,
      areaName: this.state.areaName,
      detailAddress: this.state.detailAddress,
      smallCommunityName: this.state.smallCommunityName,
      smallCommunityID: this.state.smallCommunityID,
      schoolID: this.state.schoolID,
      schoolName: this.state.schoolName,
      preSchoolInformation:
        this.state.schoolLabel === 1 ? this.state.lastSchoolName : "",
      primarySchoolName:
        this.state.schoolLabel === 2 ? this.state.lastSchoolName : "",
      parents: this.state.parents,
      property: this.state.hasHouse === 1 ? true : false,
      houseNature: this.state.hasHouse === 1 ? this.state.houseNature : "",
      houseOwner: this.state.hasHouse === 1 ? this.state.houseOwner : "",
      buyDate: this.state.hasHouse === 1 ? Todate(this.state.buyDate) : "",
      houseNumbers: this.state.hasHouse === 1 ? this.state.houseNumbers : "",
      permitResidencePeriod:
        this.state.hasHouse === 2
          ? Todate(this.state.permitResidencePeriod)
          : "",
      laborContractPeriod:
        this.state.hasHouse === 2 ? Todate(this.state.laborContractPeriod) : "",
      pensionUnitsAddress:
        this.state.hasHouse === 2 ? this.state.pensionUnitsAddress : "",
      specialCondition: this.state.specialCondition,
      otherRemark: this.state.otherRemark,
      operateCommit: commit,
      alternativeSchoolName: this.state.alternativeSchoolName,
      alternativeSchoolID: this.state.alternativeSchoolID,
      levelID: levelID,
      auditStatus: this.props.crossIndex + 1,
      auditRemark: this.state.auditRemark,
    };
    this.props.toggleLoading(true);
    http.post(api.SAVEANDCOMMIT, params).then((resp) => {
      this.props.toggleLoading(false);
      if (resp.success) {
        message.success("提交成功");
        this.props.history.push({
          pathname: "/schoolAudit/savedList",
        });
      }
    });
  }
  returnOptions(list) {
    const { Option } = Select;
    let options = [];
    list.map((v) => {
      return options.push(
        <Option value={v.get("id")} key={v}>
          {v.get("name")}
        </Option>
      );
    });
    return options;
  }
  returnStreet(list) {
    const { Option } = Select;
    let options = [];
    list.map((v) => {
      return options.push(
        <Option value={v.get("streetID")} key={v}>
          {v.get("streetName")}
        </Option>
      );
    });
    return options;
  }
  returnCommunity(list) {
    const { Option } = Select;
    let options = [];
    list.map((v) => {
      return options.push(
        <Option value={v.get("id")} key={v}>
          {v.get("name")}
        </Option>
      );
    });
    return options;
  }
  returnSchoolList(list) {
    const { Option } = Select;
    let options = [];
    list.map((v) => {
      return options.push(
        <Option value={v.get("schoolID")} key={v}>
          {v.get("schoolName")}
        </Option>
      );
    });
    return options;
  }
  returnParents() {
    const { Option } = Select;
    const { isDisabled } = this.state;
    let parent = [];
    this.state.parents.map((item, index) => {
      return parent.push(
        <Fragment key={index}>
          <div className="parent">
            <div className="identity">
              <div className="name">
                <div className="label">姓名</div>
                <Input
                  style={{ width: "200px" }}
                  value={this.state.parents[index].name}
                  disabled={isDisabled}
                  onChange={(e) => {
                    this.parentNameChange(e, index);
                  }}
                />
              </div>
              <div className="relation">
                <div className="label">关系</div>
                <Select
                  placeholder="关系"
                  style={{ width: 200 }}
                  value={this.state.parents[index].relation}
                  disabled={isDisabled}
                  onChange={(value) => {
                    this.relationChange(value, index);
                  }}
                >
                  <Option value={1}>父亲</Option>
                  <Option value={2}>母亲</Option>
                  <Option value={3}>爷爷</Option>
                  <Option value={4}>奶奶</Option>
                  <Option value={5}>外公</Option>
                  <Option value={6}>外婆</Option>
                  <Option value={7}>其他监护人</Option>
                </Select>
              </div>
              <div className="idCard">
                <div className="label">身份证号</div>
                <Input
                  style={{ width: "200px" }}
                  value={this.state.parents[index].idCard}
                  disabled={isDisabled}
                  onChange={(e) => {
                    this.parentIDCardChange(e, index);
                  }}
                />
              </div>
            </div>
            <div className="work-info">
              <div className="phone">
                <div className="label">联系电话</div>
                <Input
                  style={{ width: "200px" }}
                  value={this.state.parents[index].linkPhone}
                  disabled={isDisabled}
                  onChange={(e) => {
                    this.parentLinkPhoneChange(e, index);
                  }}
                />
              </div>
              <div className="work-address">
                <div className="label">工作单位</div>
                <Input
                  style={{ width: "200px" }}
                  value={this.state.parents[index].workAddress}
                  disabled={isDisabled}
                  onChange={(e) => {
                    this.workAddressChange(e, index);
                  }}
                />
              </div>
            </div>
          </div>
        </Fragment>
      );
    });
    return parent;
  }
  returnLevelList() {
    const { levelID, levelList } = this.props;
    const { isDisabled } = this.state;
    let levels = [];
    levelList.map((item, index) => {
      return levels.push(
        <div
          className={
            levelID === item.get("id")
              ? "level-item chosed-level"
              : "level-item"
          }
          key={item.get("id")}
          onClick={() => {
            this.props.choseLevel(item.get("id"), isDisabled);
          }}
        >
          {item.get("level")}
        </div>
      );
    });
    return levels;
  }
  auditRemarkChange(e) {
    this.setState({
      auditRemark: e.target.value,
    });
  }
  render() {
    const { Option } = Select;
    const { TextArea } = Input;
    const {
      provinceList,
      cityList,
      areaList,
      streetList,
      communityList,
      smallCommunityList,
      schoolList,
      crossIndex,
      commitLoading,
    } = this.props;
    const { isDisabled } = this.state;
    const dateFormat = "YYYY-MM-DD";
    return (
      <AddChildWrapper>
        <AddMain>
          <MainLeft>
            {isDisabled ? (
              <ForecastCode>
                <div className="header">
                  预报名唯一码：
                  <span style={{ fontSize: "18px", color: "#64B3ED" }}>
                    {this.state.forecastCode}
                  </span>
                </div>
              </ForecastCode>
            ) : null}
            <StudentInfo>
              <div className="header">学生信息</div>
              <div className="personage-info">
                <div className="name">
                  <div className="label">姓名</div>
                  <Input
                    placeholder="请输入姓名"
                    value={this.state.name}
                    style={{ width: "200px" }}
                    disabled={isDisabled}
                    onChange={this.nameChange.bind(this)}
                  />
                </div>
                <div className="idCard">
                  <div className="label">身份证号</div>
                  <Input
                    placeholder="请输入身份证号"
                    style={{ width: "200px" }}
                    value={this.state.idCard}
                    disabled={isDisabled}
                    onChange={this.idCardChange.bind(this)}
                  />
                </div>
                <div className="birthday">
                  <div className="label">出生日期</div>
                  <DatePicker
                    value={
                      this.state.birthday
                        ? moment(this.state.birthday, dateFormat)
                        : null
                    }
                    placeholder="请选择出生日期"
                    disabled={isDisabled}
                    style={{ width: "200px" }}
                    onChange={this.birthdayChange.bind(this)}
                  />
                </div>
              </div>
              <div className="address-info">
                <div className="residence-info">
                  <div className="label">户口所在地</div>
                  <div className="address-select">
                    <Select
                      labelInValue
                      placeholder="选择省"
                      disabled={isDisabled}
                      value={{
                        value: this.state.provinceID,
                        label: this.state.provincesName,
                      }}
                      style={{ width: 150, marginRight: "20px" }}
                      onChange={this.provinceChange.bind(this)}
                    >
                      {this.returnOptions(provinceList)}
                    </Select>
                    <Select
                      labelInValue
                      placeholder="选择市"
                      disabled={isDisabled}
                      value={{
                        value: this.state.cityID,
                        label: this.state.cityName,
                      }}
                      style={{ width: 150, marginRight: "20px" }}
                      onChange={this.cityChange.bind(this)}
                    >
                      {this.returnOptions(cityList)}
                    </Select>
                    <Select
                      labelInValue
                      placeholder="选择区/县"
                      style={{ width: 150 }}
                      disabled={isDisabled}
                      value={{
                        value: this.state.areaID,
                        label: this.state.areaName,
                      }}
                      onChange={this.areaChange.bind(this)}
                    >
                      {this.returnOptions(areaList)}
                    </Select>
                    <Input
                      placeholder="请输入详细地址"
                      value={this.state.detailAddress}
                      disabled={isDisabled}
                      onChange={this.addressChange.bind(this)}
                      style={{ marginTop: "15px", width: "490px" }}
                    />
                  </div>
                </div>
                <div className="sex-info">
                  <div className="label">性别</div>
                  <Radio.Group
                    onChange={this.sexChange.bind(this)}
                    value={this.state.sex}
                  >
                    <Radio value={1} disabled={isDisabled}>
                      男
                    </Radio>
                    <Radio value={2} disabled={isDisabled}>
                      女
                    </Radio>
                  </Radio.Group>
                </div>
              </div>
              <div className="now-address">
                <div className="housing-estate">
                  <div className="label">现居住小区</div>
                  <Select
                    placeholder="选择街道"
                    disabled={isDisabled}
                    value={this.state.streetID}
                    onChange={this.streetChange.bind(this)}
                    style={{ width: 150, marginRight: "20px" }}
                  >
                    {this.returnStreet(streetList)}
                  </Select>
                  <Select
                    disabled={isDisabled}
                    placeholder="选择社区"
                    value={this.state.communityId}
                    onChange={this.communityChange.bind(this)}
                    style={{ width: 150, marginRight: "20px" }}
                  >
                    {this.returnCommunity(communityList)}
                  </Select>
                  <Select
                    labelInValue
                    disabled={isDisabled}
                    placeholder="选择小区"
                    style={{ width: 150 }}
                    value={{
                      value: this.state.smallCommunityID,
                      label: this.state.smallCommunityName,
                    }}
                    onChange={this.smallCommunityChange.bind(this)}
                  >
                    {this.returnCommunity(smallCommunityList)}
                  </Select>
                </div>
                <div className="apply-school">
                  <div className="label">预报名学校（系统自动生成）</div>
                  <Input
                    style={{ width: "200px" }}
                    value={this.state.schoolName}
                    disabled
                  />
                </div>
              </div>
              {this.state.isShowAlternative ? (
                <div className="alternative-school">
                  <div className="label">备选学校</div>
                  <Select
                    labelInValue
                    placeholder="备选学校"
                    disabled={isDisabled}
                    value={this.state.alternativeSchoolID}
                    style={{ width: 150, marginRight: "20px" }}
                    onChange={this.alternativeChange.bind(this)}
                  >
                    {this.returnSchoolList(schoolList)}
                  </Select>
                </div>
              ) : null}
            </StudentInfo>
            <HouseInfo>
              <div className="header">房产/居住信息</div>
              <div className="house-property">
                <div className="has-house">
                  <div className="label">是否有房产</div>
                  <Radio.Group
                    onChange={this.hasHouseChange.bind(this)}
                    value={this.state.hasHouse}
                  >
                    <Radio value={1} disabled={isDisabled}>
                      是
                    </Radio>
                    <Radio value={2} disabled={isDisabled}>
                      否
                    </Radio>
                  </Radio.Group>
                </div>
                {this.state.hasHouse === 1 ? (
                  <Fragment>
                    <div className="house-nature">
                      <div className="label">房产性质</div>
                      <Select
                        placeholder="房产性质"
                        value={this.state.houseNature}
                        style={{ width: 150, marginRight: "20px" }}
                        disabled={isDisabled}
                        onChange={this.houseNatureChange.bind(this)}
                      >
                        <Option value={1}>父母房产</Option>
                        <Option value={2}>祖父母房产</Option>
                        <Option value={3}>期房</Option>
                      </Select>
                    </div>
                    <div className="house-owner">
                      <div className="label">房产所有人</div>
                      <Input
                        style={{ width: "200px" }}
                        value={this.state.houseOwner}
                        disabled={isDisabled}
                        onChange={this.houseOwnerChange.bind(this)}
                      />
                    </div>
                  </Fragment>
                ) : null}
                {this.state.hasHouse === 2 ? (
                  <Fragment>
                    <div className="live-date">
                      <div className="label">居住证有效期</div>
                      <DatePicker
                        placeholder="请选择居住证有效期"
                        style={{ width: "200px" }}
                        value={
                          this.state.permitResidencePeriod
                            ? moment(
                                this.state.permitResidencePeriod,
                                dateFormat
                              )
                            : null
                        }
                        disabled={isDisabled}
                        onChange={this.permitResidencePeriodChange.bind(this)}
                      />
                    </div>
                    <div className="contract-date">
                      <div className="label">劳动合同期限</div>
                      <DatePicker
                        placeholder="请选择劳动合同期限"
                        style={{ width: "200px" }}
                        value={
                          this.state.laborContractPeriod
                            ? moment(this.state.laborContractPeriod, dateFormat)
                            : null
                        }
                        disabled={isDisabled}
                        onChange={this.laborContractPeriodChange.bind(this)}
                      />
                    </div>
                  </Fragment>
                ) : null}
              </div>
              <div className="get-house">
                {this.state.hasHouse === 1 ? (
                  <Fragment>
                    <div className="get-time">
                      <div className="label">取得/购买时间</div>
                      <DatePicker
                        placeholder="请选择取得/购买时间"
                        style={{ width: "200px" }}
                        value={
                          this.state.buyDate
                            ? moment(this.state.buyDate, dateFormat)
                            : null
                        }
                        disabled={isDisabled}
                        onChange={this.buyDateChange.bind(this)}
                      />
                    </div>
                    <div className="house-code">
                      <div className="label">房产登记号/房产发票号</div>
                      <Input
                        style={{ width: "240px" }}
                        value={this.state.houseNumbers}
                        disabled={isDisabled}
                        onChange={this.houseNumbersChange.bind(this)}
                      />
                    </div>
                  </Fragment>
                ) : (
                  <div className="insurance-address">
                    <div className="label">养老保险所在地</div>
                    <Input
                      style={{ width: "240px" }}
                      value={this.state.pensionUnitsAddress}
                      disabled={isDisabled}
                      onChange={this.pensionUnitsAddressChange.bind(this)}
                    />
                  </div>
                )}
              </div>
            </HouseInfo>
            <PreschoolInfo>
              <div className="header">学前信息</div>
              {this.state.schoolLabel ? (
                <div className="school">
                  <div className="school-name">
                    <div className="label">
                      {this.state.schoolLabel === 1 ? "幼儿园名称" : "小学名称"}
                    </div>
                    <Input
                      style={{ width: "200px" }}
                      value={this.state.lastSchoolName}
                      disabled={isDisabled}
                      onChange={this.lastSchoolNameChange.bind(this)}
                    />
                  </div>
                </div>
              ) : null}
            </PreschoolInfo>
          </MainLeft>
          <MainRight>
            <PatriachInfo>
              <div className="header">家长信息</div>
              {this.returnParents()}
            </PatriachInfo>
            <OtherInfo>
              <div className="header">其他</div>
              <div className="other-content">
                <div className="special-circumstances">
                  <div className="label">特殊情况</div>
                  <Radio.Group
                    onChange={this.specialConditionChange.bind(this)}
                    value={this.state.specialCondition}
                  >
                    <Radio
                      disabled={isDisabled}
                      value={1}
                      style={{ width: "100px", height: "30px" }}
                    >
                      单亲家庭
                    </Radio>
                    <Radio
                      disabled={isDisabled}
                      value={2}
                      style={{ width: "100px", height: "30px" }}
                    >
                      孤儿
                    </Radio>
                    <Radio
                      disabled={isDisabled}
                      value={3}
                      style={{ width: "100px", height: "30px" }}
                    >
                      双胞胎
                    </Radio>
                    <Radio
                      disabled={isDisabled}
                      value={4}
                      style={{ width: "100px", height: "30px" }}
                    >
                      残疾
                    </Radio>
                    <Radio
                      disabled={isDisabled}
                      value={5}
                      style={{ width: "100px", height: "30px" }}
                    >
                      留守儿童
                    </Radio>
                    <Radio
                      disabled={isDisabled}
                      value={6}
                      style={{ width: "100px", height: "30px" }}
                    >
                      其他
                    </Radio>
                    <Radio
                      disabled={isDisabled}
                      value={7}
                      style={{ width: "100px", height: "30px" }}
                    >
                      无
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="other-remark">
                  <div className="label">其他描述</div>
                  <TextArea
                    style={{ width: "400px" }}
                    rows={4}
                    value={this.state.otherRemark}
                    disabled={isDisabled}
                    onChange={this.otherRemarkChange.bind(this)}
                  />
                </div>
              </div>
            </OtherInfo>
            <AuditInfo>
              <div className="header">审核意见</div>
              <div className="levels">
                <div className="label">面谈等级：</div>
                <div className="level-list">{this.returnLevelList()}</div>
              </div>
              <div className="audit-result">
                <div className="label">审核结果</div>
                <div className="result-list">
                  <div
                    className={
                      crossIndex === 0 ? "result-item cross" : "result-item"
                    }
                    onClick={() => {
                      this.props.choseCrossIndex(0, isDisabled);
                    }}
                  >
                    <div
                      className={
                        crossIndex === 0
                          ? "cross-icon cross1"
                          : "cross-icon cross2"
                      }
                    ></div>
                    通过
                  </div>
                  <div
                    className={
                      crossIndex === 1 ? "result-item uncross" : "result-item"
                    }
                    onClick={() => {
                      this.props.choseCrossIndex(1, isDisabled);
                    }}
                  >
                    <div
                      className={
                        crossIndex === 1
                          ? "cross-icon uncross1"
                          : "cross-icon uncross2"
                      }
                    ></div>
                    不通过
                  </div>
                  <Input
                    style={{ width: 300 }}
                    value={this.state.auditRemark}
                    onChange={this.auditRemarkChange.bind(this)}
                    placeholder="理由"
                  ></Input>
                </div>
              </div>
            </AuditInfo>
          </MainRight>
        </AddMain>
        <Bottom>
          {this.state.isDisabled ? null : (
            <div
              className="confirm-button"
              onClick={this.showConfirm.bind(this)}
            >
              提交
            </div>
          )}
        </Bottom>
        <Modal
          title="提交"
          confirmLoading={commitLoading}
          visible={this.state.isShowConfirm}
          onOk={this.handleConfirm.bind(this)}
          onCancel={this.handleCancel.bind(this)}
        >
          <p>确认要提交该学生的审核信息吗？</p>
        </Modal>
      </AddChildWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  provinceList: state.getIn(["schoolAudit", "provinceList"]),
  cityList: state.getIn(["schoolAudit", "cityList"]),
  areaList: state.getIn(["schoolAudit", "areaList"]),
  streetList: state.getIn(["schoolAudit", "streetList"]),
  communityList: state.getIn(["schoolAudit", "communityList"]),
  smallCommunityList: state.getIn(["schoolAudit", "smallCommunityList"]),
  schoolList: state.getIn(["schoolAudit", "schoolList"]),
  levelList: state.getIn(["schoolAudit", "levelList"]),
  levelID: state.getIn(["schoolAudit", "levelID"]),
  crossIndex: state.getIn(["schoolAudit", "crossIndex"]),
  commitLoading: state.getIn(["schoolAudit", "commitLoading"]),
});
const mapDispatchToProps = (dispatch) => ({
  getProvinceArea() {
    dispatch(actionCreaters.getProvinceArea());
  },
  getCityList(id) {
    dispatch(actionCreaters.getCityList(id));
  },
  getAreaList(id) {
    dispatch(actionCreaters.getAreaList(id));
  },
  getStreetList() {
    dispatch(actionCreaters.getStreetList());
  },
  getCommunity(id) {
    dispatch(actionCreaters.getCommunity(id));
  },
  getSmallCommunity(id) {
    dispatch(actionCreaters.getSmallCommunity(id));
  },
  getSchoolList() {
    dispatch(actionCreaters.getSchoolList());
  },
  getLevelList(id) {
    dispatch(actionCreaters.getLevelList(id));
  },
  choseLevel(index, isDisabled) {
    if (isDisabled) {
      return;
    }
    dispatch(actionCreaters.choseLevel(index));
  },
  choseCrossIndex(index, isDisabled) {
    if (isDisabled) {
      return;
    }
    dispatch(actionCreaters.choseCrossIndex(index));
  },
  toggleLoading(loading) {
    dispatch(actionCreaters.toggleLoading(loading));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddChild));
