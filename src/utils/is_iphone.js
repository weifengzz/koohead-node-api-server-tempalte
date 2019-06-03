//判断是否为Iphone
const isIPhone   = (userAgent) => {
  if (/iPhone|iPod|iPad/i.test(userAgent)) {
      return true
  }
  return false
}
export default isIPhone
