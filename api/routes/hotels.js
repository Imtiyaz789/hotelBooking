import express from 'express'
const router = express.Router()
import hotelControllers from '../controller/hotels.js'


//CREATE
router.post('/', hotelControllers.createHotel)
// UPDATE
router.put('/:id', hotelControllers.updateHotel)
// DELETE
router.delete('/:id', hotelControllers.deleteHotel)
// GET
router.get('/:id', hotelControllers.viewHotel)
// GET ALL
router.get('/', hotelControllers.viewAllHotels)

export default router;
