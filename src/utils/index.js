/**
 * 工具导出
 */

// mongodb 连接生成器
import generateMongoUrl from './generate_mongo_url'
// 判断当前设备是否为移动设备
import isMobile from './is_mobile'
//判断是否为Iphone
import isIPhone from './is_iphone'
// 通过url拼接菜单标识
import getCurrentUrlTag from './get_current_url_tag'

export {
  generateMongoUrl,
  isMobile,
  isIPhone,
  getCurrentUrlTag
}
