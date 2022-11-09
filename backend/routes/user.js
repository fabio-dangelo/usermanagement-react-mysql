import express from 'express'
import {
  view,
  create,
  edit,
  update,
  viewuser,
  _delete,
} from '../controllers/userController.js'

const router = express.Router()

// Routes
router.get('/', view)
router.post('/adduser', create)
router.get('/edituser/:id', edit)
router.put('/edituser/:id', update)
router.get('/viewuser/:id', viewuser)
router.delete('/:id', _delete)

export default router
