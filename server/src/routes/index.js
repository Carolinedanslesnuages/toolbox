
import express from 'express'

import downloadRouter from './download-routes.js'

// import pkg from '../../package.json'

const pkg = {
  version: '1.0.0',
}

const router = new express.Router()

router.use('/download', downloadRouter)

router.get('/version', (req, res) => {
  res.status(200).json(pkg.version)
})

export default router
