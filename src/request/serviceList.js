export const REGISTERED = "/education/manager/api/registered"; //注册
export const Login = "/education/manager/api/login"; //登录
export const GETSTUDENTBYADMISSIONID =
  "/education/manager/api/getStudentByAdmissionID"; //获取家长填写的学生信息
export const GETPROVINCEAREA = "/education/manager/api/getProvinceArea"; //获取省份
export const GETCITYLIST = "/education/manager/api/getSubArea"; //获取市，区
export const GETSTREETLIST = "/education/manager/api/getStreetList"; //获取街道
export const GETCOMMUNITYLIST = "/education/manager/api/getCommunityList"; //获取街道下的社区
export const GETSMALLCOMMUNITYBYCOMMUNITYID =
  "/education/manager/api/getSmallCommunityByCommunityID"; //获取社区下的小区
export const GETSCHOOLBYSMALLCOMMUNITYID =
  "/education/manager/api/getSchoolBySmallCommunityID"; //根据出生年月日和现居住小区确定预报名学校
export const GETSCHOOLLIST =
  "/education/manager/api/getSchoolList"; //获取备选学校

export const GETSTUDENTLISTPAGE =
  "/education/manager/api/getStudentListPage"; //获取学生列表



/**
 * 学生信息
 */
export const SAVEANDCOMMIT = "/education/manager/api/saveAndCommit"; //保存和提交
export const DELETESTUDENTBYID = "/education/manager/api/deleteStudentByID"; //删除学生
export const GETSTUDENTDETAIL = "/education/manager/api/getStudentDetail"; //获取学生详情

export const GETLISTLEVEL = "/education/manager/api/getListLevel"; //获取学生详情



  
/**
 * 学校配置
 */
export const GETSCHOOLCONFIG = "/education/manager/api/getSchoolConfig" //获取学校配置信息
export const SCHOOLINFORMATIONCONFIG = "/education/manager/api/schoolInformationConfig"; //配置学校报名日期
export const INSERTLEVELCONFIG = "/education/manager/api/insertLevelConfig"; //新增面试等级
export const DELETELEVELCONFIG = "/education/manager/api/deleteLevelConfig"; //删除面试等级
export const GETBOUNDARYLIST = "/education/manager/api/getBoundaryList"; //获取界限信息
export const COMMUNITYCONFIG = "/education/manager/api/communityConfig"; //学校配置小区
export const DELETESMALLCOMMUNITY = "/education/manager/api/deleteSmallCommunity"; //删除小区
export const GETPARENTACCOUNTBYSCHOOLID = "/education/manager/api/getParentAccountBySchoolID"; //获取学校下管理的账号
export const PARENTACCOUNTCONFIG = "/education/manager/api/parentAccountConfig"; //获取学校下管理的账号
export const EXPORTWORDBYSCHOOL = "/education/manager/api/exportWordBySchool"; //导出入学通知书
export const EXPORTSTUDENTBYONEORMORE = "/education/manager/api/exportStudentByOneOrMore"; //导出摸底情况


/**
 * 管理员配置
 */
export const GETNEWSLIST = "/education/manager/api/getNewsList"; //获取新闻列表
export const INSRERTNEWSCONFIG = "/education/manager/api/insertNewsConfig"; //新增新闻
export const DELETENEWSCONFIG = "/education/manager/api/deleteNewsConfig"; //删除新闻
export const UPDATENEWSCONFIG = "/education/manager/api/updateNewsConfig"; //修改新闻
export const SHOWSTATISTICINFO = "/education/manager/api/showStatisticInfo"; //学校统计





