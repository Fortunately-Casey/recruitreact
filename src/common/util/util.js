/**
 * 时间转换
 * @param {*} s
 */
export function Todate(chinadatetime) { //Fri Oct 31 18:00:00 UTC+0800 2008 
  if (chinadatetime) {
    var d = new Date(chinadatetime);
    var month = (d.getMonth() + 1) >= 10 ? (d.getMonth() + 1) : "0" + (d.getMonth() + 1);
    var date = d.getDate() >= 10 ? d.getDate() : "0" + d.getDate();
    var datetime = d.getFullYear() + '-' + month + '-' + date
    return datetime;
  } else {
    return "";
  }
}