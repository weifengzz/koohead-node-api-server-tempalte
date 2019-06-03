/**
 * 判断当前设备是否为移动设备
 */
const isMobile = (userAgent) => {
  if (/Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(userAgent)) {
      return true
  }
  return false
}

export default isMobile
