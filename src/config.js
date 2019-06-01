/**
 * Created by koohead on 19/06/01.
 * @description 配置文件
 */
// import path from 'path'
// import { generateMongoUrl } from './utils'

/**
 * mongodb数据库信息配置
 */
let mongodbConfig = {}

if (process.env.VCAP_SERVICES) {
  let env = JSON.parse(process.env.VCAP_SERVICES)
  mongodbConfig = env['mongodb-4.0'][0]['credentials']
} else {
  mongodbConfig = {
    'hostname':'192.168.0.37' ,
    'port'    : 27017 ,
    'username': 'hyt_rmyy' ,//暂时本地测试,
    'password': 'hyt_rmyy_pw' ,
    'name'    : '' ,
    'db'      : 'hyt_rmyy'//数据库名称
  }
}

export {
  mongodbConfig
}
