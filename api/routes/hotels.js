import express from 'express'
const router = express.Router()
import hotelControllers from '../controller/hotels.js'
import { verifyAdmin } from '../utils/verifyToken.js'

//CREATE
router.post('/', verifyAdmin, hotelControllers.createHotel)
// UPDATE
router.put('/:id', verifyAdmin, hotelControllers.updateHotel)
// DELETE
router.delete('/:id', verifyAdmin, hotelControllers.deleteHotel)

// GET
router.get('/:id', hotelControllers.viewHotel)
// GET ALL
router.get('/', hotelControllers.viewAllHotels)

export default router;
