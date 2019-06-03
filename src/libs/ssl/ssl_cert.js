// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: strong-gateway
// US Government Users Restricted Rights - Use, duplication or disclosure
// restricted by GSA ADP Schedule Contract with IBM Corp.

import crypto from 'crypto'
import tls from 'tls'
import fs from 'fs'
import path from 'path'

const privateKey = fs.readFileSync(path.join(__dirname, '../../../src/libs/ssl/privatekey.pem'))
  .toString()
const certificate = fs.readFileSync(path.join(__dirname, '../../../src/libs/ssl/certificate.pem'))
  .toString()

let credentials = null
if (typeof tls.createSecureContext === 'function') {
  credentials = tls.createSecureContext(
    {key: privateKey, cert: certificate})
} else {
  credentials = crypto.createCredentials(
    {key: privateKey, cert: certificate})
}

export {
  privateKey,
  certificate,
  credentials
}
