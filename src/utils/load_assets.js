/**
 * 
 * @param {*} image 代表图片路径的字符串
 * @returns 返回拼接出的完整图片url
 */

export const getAssetURL = (image) => {
  //参数一：文件相对路径；
  // 参数二：参考路径;
  // import.meta.url: 当前文件路径
  return new URL(`../assets/img/${image}`, import.meta.url).href
}
