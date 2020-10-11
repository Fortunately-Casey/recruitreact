import React, { PureComponent } from "react";
import * as api from "../../../../request/serviceList";
import http from "../../../../request/http";
import { StatisticWrapper, Left, Right, Top, Bottom, Header } from "./style";
let echarts = require("echarts");
class SchoolStatic extends PureComponent {
  componentDidMount() {
    http.get(api.SHOWSTATISTICINFO).then((resp) => {
      console.log(resp.data);
      if (resp.success) {
        let res = resp.data;
        this.createStreet(res.streetStatistics);
        this.createSchool(res.studentStatisticBySchool);
        this.createHasHouse(res.studentStatisticByProperty);
        this.createProvince(res.studentStatisticsByProvince);
      }
    });
  }
  createStreet(data) {
    var myChart = echarts.init(document.getElementById("chart1"));
    let streetList = [];
    let dataList = [];
    data.forEach((v) => {
      streetList.push(v.streetName);
      dataList.push(v.count);
    });
    let option = {
      color: ["#64B3ED"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      xAxis: {
        type: "category",
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#728096",
        },
        axisLine: {
          lineStyle: {
            color: "#728096",
          },
        },
        data: streetList,
      },
      yAxis: {
        type: "value",
        splitLine: {
          lineStyle: {
            type: "dashed",
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#728096",
        },
      },
      series: [
        {
          data: dataList,
          type: "bar",
          stack: "人数",
          barWidth: 70,
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
  createSchool(data) {
    var myChart = echarts.init(document.getElementById("chart2"));
    let schoolList = [];
    let dataList = [];
    data.forEach((v) => {
      schoolList.push(v.schoolName);
      dataList.push(v.studentSum);
    });
    let option = {
      color: "#667FEA",
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      xAxis: {
        type: "category",
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#728096",
          rotate: 18,
        },
        axisLine: {
          lineStyle: {
            color: "#728096",
          },
        },
        data: schoolList,
      },
      yAxis: {
        type: "value",
        splitLine: {
          lineStyle: {
            type: "dashed",
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#728096",
        },
      },
      series: [
        {
          data: dataList,
          type: "bar",
          stack: "学校",
          barWidth: 40,
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "#4A5569",
                  fontSize: 14,
                },
              },
            },
          },
        },
        // {
        //   name: "收入",
        //   type: "bar",
        //   stack: "人数",
        //   label: {
        //     show: true,
        //     position: "top"
        //   },
        //   data: [621, 720, 341, 433, 666, 591, 372, 986, 611]
        // }
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
  createHasHouse(data) {
    var myChart = echarts.init(document.getElementById("chart3"));
    let schoolList = [];
    let hasHouse = [];
    let noHouse = [];
    let dateHouse = [];
    data.forEach((v) => {
      schoolList.push(v.schoolName);
      hasHouse.push(v.propertyNum);
      if (
        v.schoolCode === "0401" ||
        v.schoolCode === "0402" ||
        v.schoolCode === "0403" ||
        v.schoolCode === "0404" ||
        v.schoolCode === "01"
      ) {
        noHouse.push(0);
        dateHouse.push(v.otherNum);
      } else {
        noHouse.push(v.otherNum);
        dateHouse.push(0);
      }
      // dataList
    });
    let option = {
      color: ["#ED64A6", "#F6AD55", "#64B3ED"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
          if (
            params[0].name === "南通市东方中学" ||
            params[0].name === "实小（新河校区）" ||
            params[0].name === "实小（能达校区）" ||
            params[0].name === "实小（育才校区）" ||
            params[0].name === "实小（星湖校区）"
          ) {
            return (
              params[2].name +
              "<br/>" +
              params[2].marker +
              params[2].seriesName +
              "：" +
              params[2].value +
              "<br/>" +
              params[0].marker +
              params[0].seriesName +
              "：" +
              params[0].value
            );
          } else {
            return (
              params[2].name +
              "<br/>" +
              params[2].marker +
              params[2].seriesName +
              "：" +
              params[2].value +
              "<br/>" +
              params[1].marker +
              params[1].seriesName +
              "：" +
              params[1].value
            );
          }
        },
      },
      legend: {
        data: ["有房", "无房", "期房"],
        top: 30,
        left: 35,
        textStyle: {
          color: "#728096",
        },
      },
      xAxis: {
        type: "category",
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#728096",
          rotate: 18,
        },
        axisLine: {
          lineStyle: {
            color: "#728096",
          },
        },
        data: schoolList,
      },
      yAxis: {
        type: "value",
        splitLine: {
          lineStyle: {
            type: "dashed",
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#728096",
        },
      },
      series: [
        {
          name: "期房",
          data: dateHouse,
          type: "bar",
          stack: "有房",
          barWidth: 20,
        },
        {
          name: "无房",
          data: noHouse,
          type: "bar",
          stack: "有房",
          barWidth: 20,
        },
        {
          name: "有房",
          data: hasHouse,
          type: "bar",
          stack: "有房",
          barWidth: 20,
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
  createProvince(data) {
    var myChart = echarts.init(document.getElementById("chart4"));
    let dataList = [
      {
        value: 0,
        name: "本省",
      },
      {
        value: 0,
        name: "省外",
      },
    ];
    dataList[0].value = data.localNum;
    dataList[1].value = data.otherNum;
    let option = {
      color: ["#667FEA", "skyblue"],
      tooltip: {
        trigger: "item",
        formatter: "人数 <br/>{b} : {c} 人({d}%)",
      },
      series: [
        {
          data: dataList,
          type: "pie",
          stack: "人数",
          barWidth: 70,
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "#4A5569",
                  fontSize: 14,
                },
              },
            },
          },
        },
      ],
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
  render() {
    return (
      <StatisticWrapper>
        <Left>
          <Top style={{ margin: "20px 10px 0 40px" }}>
            <Header>预报名人数统计（街道）</Header>
            <div id="chart1"></div>
          </Top>
          <Bottom style={{ margin: "20px 10px 20px 40px" }}>
            <Header>预报名人数统计（有房、无房）</Header>
            <div id="chart3"></div>
          </Bottom>
        </Left>
        <Right>
          <Top style={{ margin: "20px 20px 0 10px" }}>
            <Header>预报名人数统计（学校）</Header>
            <div id="chart2"></div>
          </Top>
          <Bottom style={{ margin: "20px 20px 20px 10px" }}>
            <Header>预报名人数统计（本省、外省）</Header>
            <div id="chart4"></div>
          </Bottom>
        </Right>
      </StatisticWrapper>
    );
  }
}

export default SchoolStatic;
