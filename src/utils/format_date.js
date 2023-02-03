import dayjs from "dayjs";

/**
 * 
 * @param {Date} date 日期
 * @returns 格式化的日期  xx月xx日
 */

export function formatMonthDay(date) {
  // dayjs()不传参数，默认会将当前日期传入
  return dayjs(date).format('MM月DD日')
}
/**
 * 
 * @param {*} startDate 起始日期
 * @param {*} endDate 终止日期
 * @returns 两日期相差天数
 */
export function getTotalDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, 'days')
}


