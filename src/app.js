/**
 * Created by koohead on 19/06/01.
 * edit by koohead on 19/06/03.
 * @description App文件
 */
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import bodyParser from 'body-parser'
// import request from 'request'
// eslint-disable-next-line import/no-unresolved
import session from 'express-session'

// import { privateKey, certificate } from './libs/ssl/ssl_cert'
import { SETTINGS } from './config'
import { isMobile, isIPhone, getCurrentUrlTag } from './utils'

// import indexRouter from './routes/index'

const httpApp = express()
const httpsApp = express()

/**
 * https配置
 */
// const HTTPS_OPTION = {
//   key : privateKey ,
//   cert: certificate
// }

/**
 * 设置端口
 */
httpApp.set('port' , SETTINGS.port)
httpsApp.set('port', SETTINGS.port_https)

/**
 * 设置界面地址
 */
httpApp.set('views', path.join(__dirname, 'src/views'))
httpsApp.set('views', path.join(__dirname, 'src/views'))

/**
 * 设置界面模板引擎
 */
httpApp.set('view engine' , 'html')
httpsApp.set('view engine' , 'html')
httpApp.engine('html' , require('ejs').__express)
httpsApp.engine('html' , require('ejs').__express)

/**
 * 日志打印
 */
httpApp.use(logger('dev'))
httpsApp.use(logger('dev'))

/**
 * 设置bodyParser中间件，对post请求的请求体进行解析
 */
httpApp.use(bodyParser.json())
httpsApp.use(bodyParser.json())
httpApp.use(bodyParser.urlencoded({extended: false}))
httpsApp.use(bodyParser.urlencoded({extended: false}))

/**
 * 设置cookieParser中间件，用于cookie管理
 */
httpApp.use(cookieParser())
httpsApp.use(cookieParser())

/**
 * 设置静态文件目录
 */
httpApp.use(express.static(path.join(__dirname , 'public')))
httpsApp.use(express.static(path.join(__dirname , 'public')))

/**
 * session配置
 */
httpApp.use(session({
  secret           : SETTINGS.cookie_encrypt_secret ,
  name             : SETTINGS.cookie_name + '_session' ,
  cookie           : {maxAge: 30 * 60 * 1000} ,
  resave           : false ,
  saveUninitialized: true
}))
httpsApp.use(session({
  secret           : SETTINGS.cookie_encrypt_secret ,
  name             : SETTINGS.cookie_name + '_session' ,
  cookie           : {maxAge: 30 * 60 * 1000} ,
  resave           : false ,
  saveUninitialized: true
}))

/**
 * 判断手机类型,主要用于动态判断网页，完成界面适配
 */
httpApp.use(function (req , res , next) {
  if (req.method === 'POST') {
      res.locals.isPost = true
  } else {
      res.locals.isPost = false
  }
  res.locals.isMobile    = isMobile(req.headers['user-agent'])
  res.locals.isIphone    = isIPhone(req.headers['user-agent'])
  res.locals.current_url = getCurrentUrlTag(req.originalUrl)
  for (let i in req.body) {
      console.log(i + ':' , req.body[i])
  }
  for (let i in req.query) {
      console.log(i + ':' , req.query[i])
  }
  next()
})
httpsApp.use(function (req , res , next) {
  if (req.method === 'POST') {
      res.locals.isPost = true
  } else {
      res.locals.isPost = false
  }
  res.locals.isMobile    = isMobile(req.headers['user-agent'])
  res.locals.isIphone    = isIPhone(req.headers['user-agent'])
  res.locals.current_url = getCurrentUrlTag(req.originalUrl)
  for (let i in req.body) {
      console.log(i + ':' , req.body[i])
  }
  for (let i in req.query) {
      console.log(i + ':' , req.query[i])
  }
  next()
})
