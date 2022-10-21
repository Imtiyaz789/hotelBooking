import User from '../model/User.js'


// Updating User Here
const updateUser = async (req, res, next) => {

    try {
        const userUpdated = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(userUpdated)
    } catch (error) {
        next(error);
    }
}

// Showing One User Here
const viewUser = async (req, res, next) => {

    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        // res.status(500).json(error)
        next(error);
    }
}

// Showing All Users Here
const viewAllUsers = async (req, res, next) => {

    try {
        const allUsers = await User.find()
        res.status(200).json(allUsers)
    } catch (error) {
        next(error)
    }
}

// Deleting User Here
const deleteUser = async (req, res, next) => {

    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been Deleted")
    } catch (error) {
        // res.status(500).json(error)
        next(error);
    }
}

export default {
    deleteUser,
    viewAllUsers,
    updateUser,
    viewUser

}