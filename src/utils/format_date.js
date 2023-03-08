import dayjs from "dayjs";

/**
 * 
 * @param {} date 日期
 * @param {} format_type 格式化的类型
 * @returns 格式化的日期  xx月xx日
 */

export function formatMonthDay(date, format_type = 'MM月DD日') {
  // dayjs()不传参数，默认会将当前日期传入
  return dayjs(date).format(format_type)
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


