import Hotel from '../model/Hotel.js'


// Creating Hotel Here
const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        next(error);
    }
}

// Updating Hotel Here
const updateHotel = async (req, res) => {

    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (error) {
        next(error);
    }
}

// Showing One Hotel Here
const viewHotel = async (req, res) => {

    try {
        const showHotel = await Hotel.findById(req.params.id)
        res.status(200).json(showHotel)
    } catch (error) {
        // res.status(500).json(error)
        next(error);
    }
}

// Showing All Hotels Here
const viewAllHotels = async (req, res, next) => {

    try {
        const showAllHotels = await Hotel.find()
        res.status(200).json(showAllHotels)
    } catch (error) {
        next(error)
    }
}

// Deleting Hotel Here
const deleteHotel = async (req, res) => {

    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been Deleted")
    } catch (error) {
        // res.status(500).json(error)
        next(error);
    }
}

export default {
    deleteHotel,
    viewAllHotels,
    viewHotel,
    updateHotel,
    createHotel
}