/**
 * Created by koohead on 19/06/01.
 * @description mongodb 数据链接生成器
 */

const generateMongoUrl = (params) => {
  let obj = {}
  obj.hostName = params.hostname || 'localhost'
  obj.port = params.port || 27017
  obj.db = params.db || 'test'
  // 数据库有密码
  if (params.userName && params.password) {
    return 'mongodb://' + obj.username + ':' + obj.password + '@' + obj.hostname + ':' + obj.port + '/' + obj.db
  } else {
    return 'mongodb://' + obj.hostname + ':' + obj.port + '/' + obj.db
  }
}

export default generateMongoUrl
