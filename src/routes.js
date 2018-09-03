import { Router } from 'express'

const router = Router()

router.get('/aggregator', (req, res) => {
  // connect apollo server...
  res.status(200).json({ apolloServer: true })
})

router.get('/aggregator/health', (_, res) => {
  res.status(200).end('Service available')
})

export default router
