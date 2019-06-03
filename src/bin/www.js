#!/usr/bin/env node

/**
 * Module dependencies.
 */

import { httpApp, httpsApp } from '../app'
import debug from 'debug'
import http from 'http'
import https from 'https'
import { HTTPS_OPTION } from '../config'

const portHttp  = httpApp.get('port') || 80
const portHttps = httpsApp.get('port') || 443

/**
 * 设置http和https服务
 */
const serverHttp  = http.createServer(httpApp)
const serverHttps = https.createServer(HTTPS_OPTION , httpsApp)

/**
 * 监听接口
 */
serverHttp.listen(portHttp , () => {
  console.log('Express HTTP server listening on port ' + httpApp.get('port'))
})
serverHttps.listen(portHttps , () => {
  console.log('Express HTTPS server listening on port ' + httpsApp.get('port'))
})

/**
 * 信息监听回调
 */
serverHttp.on('error', onError)
serverHttp.on('listening', onListening)
serverHttps.on('error', onErrorHttps)
serverHttps.on('listening', onListeningHttps)


/**
 * 监听错误事件
 */
function onError (error) {
  if (error.syscall !== 'listen') {
      throw error
  }

  let bind = typeof serverHttp === 'string'
      ? 'Pipe ' + serverHttp
      : 'Port ' + serverHttp

  // handle specific listen errors with friendly messages
  switch (error.code) {
      case 'EACCES':
          console.error(bind + ' requires elevated privileges')
          process.exit(1)
          break
      case 'EADDRINUSE':
          console.error(bind + ' is already in use')
          process.exit(1)
          break
      default:
          throw error
  }
}

function onErrorHttps (error) {
  if (error.syscall !== 'listen') {
      throw error
  }
  let bind = typeof serverHttps === 'string'
      ? 'Pipe ' + serverHttps
      : 'Port ' + serverHttps

  // handle specific listen errors with friendly messages
  switch (error.code) {
      case 'EACCES':
          console.error(bind + ' requires elevated privileges')
          process.exit(1)
          break
      case 'EADDRINUSE':
          console.error(bind + ' is already in use')
          process.exit(1)
          break
      default:
          throw error
  }
}

/**
* 监听服务事件
*/
function onListening () {
  let addr = serverHttp.address()
  let bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port
  debug('Listening on ' + bind)
}
function onListeningHttps () {
  let addr = serverHttps.address()
  let bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port
  debug('Listening on ' + bind)
}
