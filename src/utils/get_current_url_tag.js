/**
 * 通过url拼接菜单标识
 * @param url
 * @returns {string}
 */
const getCurrentUrlTag = (url) => {
  let base_url = url.split('?')[0]
  if (base_url[0] == '/') {
      base_url = base_url.substr(1 , base_url.length - 1)
  }
  if (base_url[base_url.length - 1] == '/') {
      base_url = base_url.substr(0 , base_url.length - 1)
  }
  let views = base_url.split('/')
  return views.join('_')
}
export default getCurrentUrlTag
