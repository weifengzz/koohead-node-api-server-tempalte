/**
 * Created by koohead on 19/06/01.
 * edit by koohead on 19/06/03.
 * @description 配置文件
 */
import path from 'path'
import { generateMongoUrl } from './utils'

/**
 * mongodb数据库信息配置
 */
let mongodbConfig = {}
if (process.env.VCAP_SERVICES) {
  let env = JSON.parse(process.env.VCAP_SERVICES)
  mongodbConfig = env['mongodb-4.0'][0]['credentials']
} else {
  mongodbConfig = {
    'hostname' : 'localhost' ,
    'port'     :  27017 ,
    'username' :  '' ,//暂时本地测试,
    'password' :  'root' ,
    'name'     :  'qaz123' ,
    'db'       :  'crm'//数据库名称
  }
}

const DB = generateMongoUrl(mongodbConfig)

/**
 * 通用设置
 */
const SETTINGS = {
  debug                  : true ,
    name                 : 'CRM' ,
    version              : '1.0.0' ,
    port                 : 9001 ,
    port_https           : 9002 ,
    cookie_encrypt_secret: 'cookie_encrypt_secret' ,
    cookie_name          : 'bx_crm' ,
    crmServer            : 'http://127.0.0.1:9010/' ,
    // eslint-disable-next-line quotes
    sched                : "every 5 mins" ,
    webPath              : path.join(__dirname , 'public') ,
    crm                  : {
        inner_server: ''
    }
}

/**
 * 导出配置
 */
export {
  DB,
  SETTINGS
}
  