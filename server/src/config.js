import dotenv from 'dotenv'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const defaultPublicUrl = 'http://localhost:8080'
const isCI = process.env.CI === 'true'

const publicUrl = isCI
  ? defaultPublicUrl
  : process.env.PUBLIC_URL || defaultPublicUrl

export default {
  tokenExpiration: '3h',
  secret: process.env.TOKEN_SECRET || 'secret',
  publicUrl,
  srcPath: fileURLToPath(dirname(import.meta.url)),
}
