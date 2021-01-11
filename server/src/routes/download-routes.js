import express from 'express'
// import { verifyToken } from '../routes/middlewares/verify-token.js'

import { getDownload } from '../controllers/download-controllers.js'

const router = new express.Router()

router.get('/', getDownload)

export default router
