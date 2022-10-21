import express from 'express'
import userContollers from '../controller/users.js'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.get('/checkauth', verifyToken, (req, res, next) => {
    res.send("User Authorized")
})
router.get('/checkuser/:id', verifyUser, (req, res, next) => {
    res.send("User Logged in")
})
router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
    res.send("Admin Logged in")
})


// UPDATE
router.put('/:id', verifyUser, userContollers.updateUser)
// DELETE
router.delete('/:id', verifyUser, userContollers.deleteUser)
// GET
router.get('/:id', verifyUser, userContollers.viewUser)
// GET ALL
router.get('/', verifyAdmin, userContollers.viewAllUsers)

export default router;
